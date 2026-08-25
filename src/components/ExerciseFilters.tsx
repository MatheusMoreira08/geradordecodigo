import React from 'react';
import { Sparkles, Star, History, BarChart2, Code, FolderGit2, Gauge } from 'lucide-react';
import { LINGUAGENS, NIVEIS, CATEGORIAS } from '../constants';
import { CustomSelect } from './CustomSelect';

interface ExerciseFiltersProps {
  linguagem: string;
  setLinguagem: (val: string) => void;
  categoria: string;
  setCategoria: (val: string) => void;
  nivel: string;
  setNivel: (val: string) => void;
  apenasFavoritos: boolean;
  setApenasFavoritos: (val: boolean) => void;
  onGerar: () => void;
  onOpenHistorico: () => void;
  onOpenEstatisticas: () => void;
}

export const ExerciseFilters: React.FC<ExerciseFiltersProps> = ({
  linguagem,
  setLinguagem,
  categoria,
  setCategoria,
  nivel,
  setNivel,
  apenasFavoritos,
  setApenasFavoritos,
  onGerar,
  onOpenHistorico,
  onOpenEstatisticas,
}) => {
  return (
    <div className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-200/80 dark:border-slate-800 p-4 md:p-5 flex flex-col gap-4 shadow-xl shadow-indigo-500/5">
      {/* Linha Principal de Controles em Grid Horizontal */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
        {/* Linguagem (3 cols) */}
        <div className="md:col-span-3">
          <CustomSelect
            label="Linguagem"
            icon={<Code className="w-3.5 h-3.5 text-blue-500" />}
            value={linguagem}
            options={LINGUAGENS}
            placeholder="Selecione..."
            onChange={setLinguagem}
          />
        </div>

        {/* Categoria (3 cols) */}
        <div className="md:col-span-3">
          <CustomSelect
            label="Categoria"
            icon={<FolderGit2 className="w-3.5 h-3.5 text-indigo-500" />}
            value={categoria}
            options={CATEGORIAS}
            placeholder="Todas"
            onChange={setCategoria}
          />
        </div>

        {/* Dificuldade (3 cols) */}
        <div className="md:col-span-3 flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 uppercase tracking-wider">
            <Gauge className="w-3.5 h-3.5 text-emerald-500" />
            <span>Dificuldade</span>
          </label>
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 h-[46px]">
            {NIVEIS.map(({ valor, label }) => {
              const isSelected = nivel === valor;
              return (
                <button
                  key={valor}
                  type="button"
                  onClick={() => setNivel(valor)}
                  className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer text-center ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Botão Gerar Novo Exercício (3 cols) */}
        <div className="md:col-span-3">
          <button
            onClick={onGerar}
            className="w-full h-[46px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-black px-4 rounded-2xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer tracking-wide"
          >
            <Sparkles className="w-4 h-4 animate-pulse text-amber-300" />
            <span>Gerar Exercício</span>
          </button>
        </div>
      </div>

      {/* Linha Secundária: Checkbox e Links de Atalho */}
      <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100 dark:border-slate-800/80 flex-wrap gap-2">
        <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300 hover:text-amber-500 font-bold select-none transition">
          <input
            type="checkbox"
            checked={apenasFavoritos}
            onChange={(e) => setApenasFavoritos(e.target.checked)}
            className="rounded-md text-amber-500 focus:ring-amber-400 w-3.5 h-3.5 cursor-pointer border-slate-300 dark:border-slate-700"
          />
          <span className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Gerar apenas exercícios Favoritos</span>
          </span>
        </label>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenHistorico}
            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-bold flex items-center gap-1.5 transition cursor-pointer"
          >
            <History className="w-3.5 h-3.5 text-blue-500" />
            <span>Histórico</span>
          </button>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <button
            onClick={onOpenEstatisticas}
            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-bold flex items-center gap-1.5 transition cursor-pointer"
          >
            <BarChart2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Estatísticas</span>
          </button>
        </div>
      </div>
    </div>
  );
};
