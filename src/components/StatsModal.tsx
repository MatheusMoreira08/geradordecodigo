import React from 'react';
import { X, BarChart3, Flame, Trophy, Star, Zap } from 'lucide-react';
import { ProgressoUsuario } from '../types';
import { ExercicioService } from '../services';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  progresso: ProgressoUsuario;
}

export const StatsModal: React.FC<StatsModalProps> = ({
  isOpen,
  onClose,
  progresso,
}) => {
  if (!isOpen) return null;

  const statsGerais = ExercicioService.getEstatisticas();
  let totalExExistentes = 0;
  Object.values(statsGerais).forEach((niveis) => {
    Object.values(niveis).forEach((qtd) => (totalExExistentes += qtd));
  });

  const totalResolvidos = progresso.exerciciosResolvidos.length;
  const taxaConclusao =
    totalExExistentes > 0 ? Math.round((totalResolvidos / totalExExistentes) * 100) : 0;
  const totalSubmissoes = progresso.submissoes.length;
  const submissoesComSucesso = progresso.submissoes.filter((s) => s.sucesso).length;

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
            <div className="p-2 rounded-2xl bg-amber-500/20 border border-amber-500/30">
              <BarChart3 className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="font-black text-lg text-white tracking-tight">
                Painel de Estatísticas & Progresso
              </h3>
              <p className="text-xs text-slate-400">Visão geral do seu desempenho nos estudos</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl bg-slate-800 hover:bg-slate-700 transition cursor-pointer text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo das Estatísticas */}
        <div className="p-6 overflow-y-auto flex flex-col gap-6 max-h-[65vh]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Streak */}
            <div className="p-4 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent dark:from-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-3xl text-center flex flex-col items-center justify-center gap-1.5 shadow-sm">
              <div className="p-2.5 rounded-2xl bg-amber-500/20">
                <Flame className="w-6 h-6 text-amber-500 fill-amber-500" />
              </div>
              <div className="text-2xl font-black text-amber-600 dark:text-amber-300">
                {progresso.estatisticas.diasSeguidosStreak} Dias
              </div>
              <div className="text-xs text-amber-700 dark:text-amber-400 font-bold">
                Streak de Estudos
              </div>
            </div>

            {/* Resolvidos */}
            <div className="p-4 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent dark:from-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-3xl text-center flex flex-col items-center justify-center gap-1.5 shadow-sm">
              <div className="p-2.5 rounded-2xl bg-emerald-500/20">
                <Trophy className="w-6 h-6 text-emerald-500 fill-emerald-500" />
              </div>
              <div className="text-2xl font-black text-emerald-600 dark:text-emerald-300">
                {totalResolvidos}
              </div>
              <div className="text-xs text-emerald-700 dark:text-emerald-400 font-bold">
                Resolvidos ({taxaConclusao}%)
              </div>
            </div>

            {/* Favoritos */}
            <div className="p-4 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent dark:from-blue-950/40 border border-blue-200 dark:border-blue-800/60 rounded-3xl text-center flex flex-col items-center justify-center gap-1.5 shadow-sm">
              <div className="p-2.5 rounded-2xl bg-blue-500/20">
                <Star className="w-6 h-6 text-blue-500 fill-blue-500" />
              </div>
              <div className="text-2xl font-black text-blue-600 dark:text-blue-300">
                {progresso.favoritos.length}
              </div>
              <div className="text-xs text-blue-700 dark:text-blue-400 font-bold">Favoritos</div>
            </div>

            {/* Submissões */}
            <div className="p-4 bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent dark:from-purple-950/40 border border-purple-200 dark:border-purple-800/60 rounded-3xl text-center flex flex-col items-center justify-center gap-1.5 shadow-sm">
              <div className="p-2.5 rounded-2xl bg-purple-500/20">
                <Zap className="w-6 h-6 text-purple-500 fill-purple-500" />
              </div>
              <div className="text-2xl font-black text-purple-600 dark:text-purple-300">
                {totalSubmissoes}
              </div>
              <div className="text-xs text-purple-700 dark:text-purple-400 font-bold">
                Submissões ({submissoesComSucesso} acertos)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
