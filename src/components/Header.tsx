import React from 'react';
import { Flame, Trophy, Moon, Sun, Bot, Wand2, Sparkles } from 'lucide-react';
import { ProgressoUsuario } from '../types';

interface HeaderProps {
  progresso: ProgressoUsuario;
  tema: 'light' | 'dark';
  onToggleTema: () => void;
  onOpenHistorico: () => void;
  onOpenEstatisticas: () => void;
  onOpenAiTutor: () => void;
  onOpenAiGenerator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  progresso,
  tema,
  onToggleTema,
  onOpenHistorico,
  onOpenEstatisticas,
  onOpenAiTutor,
  onOpenAiGenerator,
}) => {
  return (
    <header className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 rounded-3xl p-4 md:px-6 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl shadow-indigo-500/5">
      {/* Logo & Branding */}
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-md shadow-indigo-500/20">
          <Sparkles className="w-5 h-5 text-white animate-pulse" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 dark:from-white dark:via-blue-100 dark:to-indigo-200 text-transparent bg-clip-text tracking-tight">
              Gerador de Códigos
            </h1>
            <span className="text-[10px] font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-2.5 py-0.5 rounded-full shadow-xs">
              v4.0 IA
            </span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            Plataforma de Estudos & Resolução de Algoritmos
          </p>
        </div>
      </div>

      {/* Action Toolbar */}
      <div className="flex items-center gap-2 flex-wrap justify-center md:justify-end">
        {/* Tutor IA Button */}
        <button
          onClick={onOpenAiTutor}
          title="Abrir Tutor Inteligente IA"
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-extrabold shadow-sm shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition cursor-pointer"
        >
          <Bot className="w-4 h-4 text-blue-200" />
          <span>Tutor IA</span>
        </button>

        {/* Gerar IA Button */}
        <button
          onClick={onOpenAiGenerator}
          title="Gerar Exercício Inédito com IA"
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-extrabold shadow-sm shadow-purple-500/20 hover:scale-[1.02] active:scale-95 transition cursor-pointer"
        >
          <Wand2 className="w-4 h-4 text-purple-200" />
          <span>Gerar IA</span>
        </button>

        {/* Streak Button */}
        <button
          onClick={onOpenEstatisticas}
          title="Ver Estatísticas Detalhadas"
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-700/50 hover:bg-amber-100 dark:hover:bg-amber-900/60 transition active:scale-95 text-xs font-bold cursor-pointer"
        >
          <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span>{progresso.estatisticas.diasSeguidosStreak} Dias</span>
        </button>

        {/* Resolvidos Button */}
        <button
          onClick={onOpenHistorico}
          title="Ver Histórico de Submissões"
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-700/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition active:scale-95 text-xs font-bold cursor-pointer"
        >
          <Trophy className="w-4 h-4 text-emerald-500 fill-emerald-500" />
          <span>{progresso.estatisticas.totalResolvidos} Resolvidos</span>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={onToggleTema}
          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition active:scale-95 cursor-pointer text-slate-700 dark:text-amber-400"
          title="Alternar Tema Claro/Escuro"
        >
          {tema === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
