import React from 'react';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';
import { ResultadoExecucao } from '../types';

interface TestResultsProps {
  resultado: ResultadoExecucao | null;
}

export const TestResults: React.FC<TestResultsProps> = ({ resultado }) => {
  if (!resultado) return null;

  return (
    <div
      className={`p-4.5 rounded-2xl border transition-all animate-fade-in ${
        resultado.sucesso
          ? 'bg-emerald-950/60 border-emerald-700/60 text-emerald-200'
          : 'bg-rose-950/60 border-rose-700/60 text-rose-200'
      }`}
    >
      <div className="flex items-center justify-between pb-3 border-b border-gray-700/40">
        <div className="flex items-center gap-2.5 font-bold text-sm">
          {resultado.sucesso ? (
            <>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>
                Todos os testes passaram! ({resultado.testesPassados}/{resultado.totalTestes})
              </span>
            </>
          ) : (
            <>
              <XCircle className="w-5 h-5 text-rose-400" />
              <span>
                Falha nos testes ({resultado.testesPassados}/{resultado.totalTestes} passaram)
              </span>
            </>
          )}
        </div>
        <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          <span>{resultado.tempoExecucaoMs}ms</span>
        </span>
      </div>

      <div className="mt-3.5 flex flex-col gap-2.5 text-xs font-mono">
        {resultado.detalhes.map((det, idx) => (
          <div
            key={det.testCaseId || idx}
            className={`p-3 rounded-xl border flex flex-col gap-1.5 ${
              det.passou
                ? 'bg-emerald-900/40 border-emerald-800/40'
                : 'bg-rose-900/40 border-rose-800/40'
            }`}
          >
            <div className="flex items-center justify-between font-bold">
              <span>
                Teste #{idx + 1} ({det.testCaseId})
              </span>
              <span
                className={`px-2 py-0.5 rounded text-[10px] tracking-wider ${
                  det.passou ? 'bg-emerald-900 text-emerald-300' : 'bg-rose-900 text-rose-300'
                }`}
              >
                {det.passou ? 'APROVADO' : 'REPROVADO'}
              </span>
            </div>
            {det.erro && (
              <div className="text-rose-300 font-sans bg-rose-950/80 p-2 rounded-lg border border-rose-900/60">
                Erro: {det.erro}
              </div>
            )}
            {det.obteve !== undefined && (
              <div className="text-gray-300">
                Retorno: <span className="text-amber-300">{JSON.stringify(det.obteve)}</span> |
                Esperado: <span className="text-blue-300">{JSON.stringify(det.esperava)}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
