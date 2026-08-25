import React from 'react';
import { X, ScrollText, Code, Clock, CheckCircle2, XCircle } from 'lucide-react';
import { SubmissaoHistorico } from '../types';

interface SubmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  submissoes: SubmissaoHistorico[];
}

export const SubmissionsModal: React.FC<SubmissionsModalProps> = ({
  isOpen,
  onClose,
  submissoes,
}) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-fade-in"
      >
        {/* Header do Modal com Alto Contraste */}
        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-blue-500/20 border border-blue-500/30">
              <ScrollText className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="font-black text-lg text-white tracking-tight">
                Histórico de Submissões
              </h3>
              <p className="text-xs text-slate-400">Todas as suas tentativas de código registradas</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl bg-slate-800 hover:bg-slate-700 transition cursor-pointer text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lista de Submissões */}
        <div className="p-6 overflow-y-auto flex flex-col gap-3.5 max-h-[65vh]">
          {submissoes.length === 0 ? (
            <div className="text-center py-12 text-slate-500 dark:text-slate-400 flex flex-col items-center gap-2">
              <ScrollText className="w-12 h-12 stroke-1 text-slate-400" />
              <span className="font-bold text-base text-slate-800 dark:text-slate-200">
                Nenhuma submissão registrada ainda.
              </span>
              <span className="text-xs">
                Execute o seu código em um exercício para gerar histórico!
              </span>
            </div>
          ) : (
            submissoes.map((sub) => {
              const dataFormatted = new Date(sub.timestamp).toLocaleString('pt-BR');
              return (
                <div
                  key={sub.id}
                  className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 flex flex-col gap-2.5 transition hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
                    <div className="flex items-center gap-2.5 font-bold">
                      <span
                        className={`px-2.5 py-1 rounded-xl border flex items-center gap-1.5 text-[11px] font-black tracking-wider ${
                          sub.sucesso
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700/50'
                            : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-300 dark:border-rose-700/50'
                        }`}
                      >
                        {sub.sucesso ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <XCircle className="w-3.5 h-3.5 text-rose-500" />
                        )}
                        <span>{sub.sucesso ? 'PASSED' : 'FAILED'}</span>
                      </span>
                      <span className="text-slate-900 dark:text-white font-extrabold text-sm">
                        {sub.tituloExercicio || sub.exercicioId}
                      </span>
                    </div>
                    <span className="text-slate-400 font-mono text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{dataFormatted}</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <span>
                      Linguagem: <strong className="text-blue-500">{sub.linguagem}</strong> |
                      Nível: <strong>{sub.nivel}</strong>
                    </span>
                    <span>
                      ⏱️ {sub.tempoExecucaoMs}ms ({sub.testesPassados}/{sub.totalTestes} testes)
                    </span>
                  </div>

                  <details className="text-xs group">
                    <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline pt-1 font-bold flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5" />
                      <span>Ver código submetido</span>
                    </summary>
                    <pre className="mt-2.5 p-4 bg-slate-950 text-blue-300 rounded-2xl overflow-x-auto whitespace-pre-wrap font-mono border border-slate-800 text-xs shadow-inner">
                      {sub.codigo}
                    </pre>
                  </details>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
