import React, { useState } from 'react';
import { X, Sparkles, Wand2 } from 'lucide-react';
import { Exercicio } from '../types';
import { AiAssistantService } from '../services';

interface AiGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  linguagemAtual: string;
  nivelAtual: string;
  onExercícioGerado: (ex: Exercicio) => void;
}

export const AiGeneratorModal: React.FC<AiGeneratorModalProps> = ({
  isOpen,
  onClose,
  linguagemAtual,
  nivelAtual,
  onExercícioGerado,
}) => {
  const [promptTema, setPromptTema] = useState<string>('');
  const [isGerando, setIsGerando] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleGerarCustomizado = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptTema.trim()) return;

    setIsGerando(true);
    const novoExercicio = await AiAssistantService.gerarExercicioCustomizado(
      promptTema,
      linguagemAtual || 'javascript',
      nivelAtual || 'basico'
    );
    setIsGerando(false);

    onExercícioGerado(novoExercicio);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in flex flex-col"
      >
        {/* Header do Modal */}
        <div className="p-4.5 border-b border-gray-200 dark:border-gray-700/80 flex items-center justify-between bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="flex items-center gap-2.5">
            <Wand2 className="w-5 h-5" />
            <h3 className="font-extrabold text-base">Gerador Dinâmico de Exercícios IA</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 transition text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Formulário */}
        <form onSubmit={handleGerarCustomizado} className="p-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
              Qual tema ou conceito você gostaria de praticar?
            </label>
            <input
              type="text"
              value={promptTema}
              onChange={(e) => setPromptTema(e.target.value)}
              placeholder="Ex: Ordenação de arrays de objetos, validação de CPF, Recursão..."
              className="px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none text-sm text-gray-900 dark:text-white"
              autoFocus
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 bg-purple-50 dark:bg-purple-950/30 p-3 rounded-xl border border-purple-200 dark:border-purple-800/40">
            <Sparkles className="w-4 h-4 text-purple-500 flex-shrink-0" />
            <span>
              O desafio será gerado na linguagem <strong>{linguagemAtual}</strong> (nível{' '}
              <strong>{nivelAtual}</strong>) com casos de teste automatizados.
            </span>
          </div>

          <button
            type="submit"
            disabled={isGerando || !promptTema.trim()}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg hover:shadow-purple-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-sm cursor-pointer mt-2"
          >
            {isGerando ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Gerando Desafio Inédito...</span>
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4" />
                <span>Gerar Desafio com IA</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
