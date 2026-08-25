import React, { useState, useEffect } from 'react';
import { Bot, Lightbulb, AlertTriangle, Key, Sparkles, X } from 'lucide-react';
import { Exercicio, ResultadoExecucao, DicaIa, ExplicacaoErroIa } from '../types';
import { AiAssistantService } from '../services';

interface AiTutorPanelProps {
  isOpen: boolean;
  onClose: () => void;
  exercicio: Exercicio | null;
  codigoUsuario: string;
  resultado: ResultadoExecucao | null;
  onOpenConfigIa: () => void;
}

export const AiTutorPanel: React.FC<AiTutorPanelProps> = ({
  isOpen,
  onClose,
  exercicio,
  codigoUsuario,
  resultado,
  onOpenConfigIa,
}) => {
  const [activeTab, setActiveTab] = useState<'dicas' | 'erro'>('dicas');
  const [nivelDica, setNivelDica] = useState<number>(1);
  const [dicaAtual, setDicaAtual] = useState<DicaIa | null>(null);
  const [isCarregandoDica, setIsCarregandoDica] = useState<boolean>(false);

  const [explicacaoErro, setExplicacaoErro] = useState<ExplicacaoErroIa | null>(null);
  const [isCarregandoErro, setIsCarregandoErro] = useState<boolean>(false);

  // Resetar estados quando o modal for aberto ou o exercício mudar
  useEffect(() => {
    if (isOpen) {
      setNivelDica(1);
      setDicaAtual(null);
      setExplicacaoErro(null);
    }
  }, [isOpen, exercicio?.id]);

  if (!isOpen) return null;

  const handleSolicitarDica = async (nivel: number) => {
    if (!exercicio) return;
    setNivelDica(nivel);
    setIsCarregandoDica(true);
    const dica = await AiAssistantService.obterDica(exercicio, codigoUsuario, nivel);
    setDicaAtual(dica);
    setIsCarregandoDica(false);
  };

  const handleAnalisarErro = async () => {
    if (!exercicio || !resultado) return;
    setIsCarregandoErro(true);
    const exp = await AiAssistantService.explicarErro(exercicio, codigoUsuario, resultado);
    setExplicacaoErro(exp);
    setIsCarregandoErro(false);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-end p-4 md:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 rounded-3xl shadow-2xl w-full max-w-md h-[90vh] flex flex-col overflow-hidden animate-fade-in"
      >
        {/* Top Header */}
        <div className="p-4.5 border-b border-gray-200 dark:border-gray-700/80 flex items-center justify-between bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/20 rounded-2xl backdrop-blur-md">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-extrabold text-base leading-tight">Tutor de IA Pedagógico</h3>
              <p className="text-[11px] text-blue-100 font-medium">Assistente de Código em Tempo Real</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={onOpenConfigIa}
              title="Configurar Gemini API Key"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition text-white cursor-pointer"
            >
              <Key className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Abas */}
        <div className="flex border-b border-gray-200 dark:border-gray-700/80 bg-gray-50 dark:bg-gray-900/50 p-1.5 gap-1.5">
          <button
            onClick={() => setActiveTab('dicas')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'dicas'
                ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm border border-gray-200 dark:border-gray-700'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Dicas Progressivas</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('erro');
              if (!explicacaoErro && resultado && !resultado.sucesso) {
                handleAnalisarErro();
              }
            }}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'erro'
                ? 'bg-white dark:bg-gray-800 text-rose-600 dark:text-rose-400 shadow-sm border border-gray-200 dark:border-gray-700'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Explicar Erro</span>
          </button>
        </div>

        {/* Conteúdo Principal */}
        <div className="p-4 overflow-y-auto flex-1 flex flex-col gap-4">
          {activeTab === 'dicas' ? (
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                Escolha o nível de dica que deseja receber:
              </span>

              {/* Botões de Nível de Dica */}
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleSolicitarDica(num)}
                    disabled={!exercicio || isCarregandoDica}
                    className={`py-2.5 px-3 rounded-2xl border text-xs font-bold transition flex flex-col items-center gap-1 cursor-pointer ${
                      nivelDica === num && dicaAtual
                        ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                        : 'bg-gray-50 dark:bg-gray-900/80 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-500/50'
                    }`}
                  >
                    <span>Nível {num}</span>
                    <span className="text-[10px] opacity-80 font-normal">
                      {num === 1 ? 'Conceito' : num === 2 ? 'Estrutura' : 'Direta'}
                    </span>
                  </button>
                ))}
              </div>

              {/* Exibição da Dica */}
              {isCarregandoDica ? (
                <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40 rounded-2xl text-center text-xs text-blue-600 dark:text-blue-400 flex flex-col items-center gap-2 font-semibold">
                  <Sparkles className="w-6 h-6 animate-spin text-blue-500" />
                  <span>Consultando Tutor de IA...</span>
                </div>
              ) : dicaAtual ? (
                <div className="p-4 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 rounded-2xl flex flex-col gap-2 animate-fade-in">
                  <div className="flex items-center gap-2 text-sm font-bold text-blue-700 dark:text-blue-300">
                    <Lightbulb className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span>{dicaAtual.titulo}</span>
                  </div>
                  <div className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed font-sans">
                    {dicaAtual.conteudo}
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700/60 rounded-2xl text-center text-xs text-gray-500 dark:text-gray-400 flex flex-col items-center gap-2">
                  <Lightbulb className="w-8 h-8 stroke-1 text-gray-400" />
                  <span>Clique em um dos botões acima para solicitar uma dica pedagógica.</span>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {resultado && !resultado.sucesso ? (
                <>
                  <button
                    onClick={handleAnalisarErro}
                    disabled={isCarregandoErro}
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition shadow-md"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isCarregandoErro ? 'Analisando...' : 'Re-analisar Erro com IA'}</span>
                  </button>

                  {isCarregandoErro ? (
                    <div className="p-6 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/40 rounded-2xl text-center text-xs text-rose-600 dark:text-rose-400 flex flex-col items-center gap-2 font-semibold">
                      <Sparkles className="w-6 h-6 animate-spin text-rose-500" />
                      <span>Analisando falha nos testes...</span>
                    </div>
                  ) : explicacaoErro ? (
                    <div className="flex flex-col gap-3 animate-fade-in">
                      <div className="p-3.5 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 rounded-2xl text-xs text-rose-700 dark:text-rose-300 font-bold flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-rose-500" />
                        <span>{explicacaoErro.resumo}</span>
                      </div>

                      <div className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl text-xs text-gray-700 dark:text-gray-300 flex flex-col gap-2">
                        <span className="font-bold text-gray-900 dark:text-white">🔍 Análise:</span>
                        <p className="whitespace-pre-wrap leading-relaxed">{explicacaoErro.analise}</p>
                      </div>

                      <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 rounded-2xl text-xs text-emerald-800 dark:text-emerald-300 flex flex-col gap-2">
                        <span className="font-bold text-emerald-900 dark:text-emerald-200">🛠️ Como Corrigir:</span>
                        <p className="whitespace-pre-wrap leading-relaxed">{explicacaoErro.sugestao}</p>
                      </div>
                    </div>
                  ) : null}
                </>
              ) : (
                <div className="p-8 bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700/60 rounded-2xl text-center text-xs text-gray-500 dark:text-gray-400 flex flex-col items-center gap-2">
                  <Bot className="w-8 h-8 stroke-1 text-gray-400" />
                  <span>Execute o seu código e sofra uma falha para visualizar a análise detalhada do erro.</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
