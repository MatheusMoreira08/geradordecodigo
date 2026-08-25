import React, { useState } from 'react';
import { Star, Copy, Check, Tag, BookOpen } from 'lucide-react';
import { Exercicio } from '../types';
import { ClipboardService } from '../services';

interface ExerciseCardProps {
  exercicio: Exercicio | null;
  ehFavorito: boolean;
  onToggleFavorito: () => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercicio,
  ehFavorito,
  onToggleFavorito,
}) => {
  const [copiado, setCopiado] = useState(false);

  const handleCopiar = async () => {
    if (!exercicio) return;
    const texto = `${exercicio.titulo || ''}\n\n${exercicio.enunciado}`;
    const ok = await ClipboardService.copiar(texto);
    if (ok) {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    }
  };

  if (!exercicio) {
    return (
      <div className="h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 flex flex-col justify-center items-center text-center gap-3 shadow-xl shadow-indigo-500/5 min-h-[350px]">
        <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
          <BookOpen className="w-6 h-6 text-blue-500" />
        </div>
        <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
          Nenhum exercício selecionado
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium max-w-xs">
          Escolha a linguagem e a dificuldade nos filtros acima e clique em <strong>"Gerar Exercício"</strong> para começar!
        </p>
      </div>
    );
  }

  const tags = [exercicio.nivel, exercicio.categoria].filter(Boolean) as string[];

  return (
    <div className="h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-200/80 dark:border-slate-800 p-5 flex flex-col gap-4 shadow-xl shadow-indigo-500/5">
      {/* Cabeçalho do Card: Ícone + Ações */}
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <BookOpen className="w-4 h-4 text-blue-500" />
          </div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Enunciado do Desafio
          </span>
        </div>

        {/* Botões de Ação */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onToggleFavorito}
            className={`px-3 py-1.5 text-xs rounded-xl transition flex items-center gap-1 font-bold cursor-pointer shadow-2xs active:scale-95 ${
              ehFavorito
                ? 'bg-amber-500 text-white shadow-amber-500/20'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
            title={ehFavorito ? 'Remover dos Favoritos' : 'Salvar nos Favoritos'}
          >
            <Star
              className={`w-3.5 h-3.5 ${
                ehFavorito ? 'fill-white text-white' : 'fill-amber-500 text-amber-500'
              }`}
            />
            <span>{ehFavorito ? 'Favoritado' : 'Favoritar'}</span>
          </button>

          <button
            onClick={handleCopiar}
            className="px-3 py-1.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition flex items-center gap-1 font-bold text-slate-700 dark:text-slate-300 cursor-pointer active:scale-95 shadow-2xs"
            title="Copiar Enunciado"
          >
            {copiado ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-500 font-bold">Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Título do Exercício */}
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight leading-snug">
          {exercicio.titulo || 'Desafio de Programação'}
        </h2>

        <div className="flex items-center gap-1.5 flex-wrap">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase font-black tracking-wider px-2.5 py-0.5 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/60 flex items-center gap-1 shadow-2xs"
            >
              <Tag className="w-2.5 h-2.5 text-blue-500" />
              <span>{t}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Texto do Enunciado em caixa de código elegante */}
      <div className="relative flex-1 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner p-4 min-h-[180px] max-h-[360px] overflow-y-auto">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600"></div>
        <pre className="pl-2.5 text-xs font-mono text-emerald-400 whitespace-pre-wrap break-words w-full leading-relaxed">
          {exercicio.enunciado}
        </pre>
      </div>
    </div>
  );
};
