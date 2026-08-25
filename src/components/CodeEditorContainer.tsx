import React, { useMemo } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { vscodeDark, vscodeLight } from '@uiw/codemirror-theme-vscode';
import { Play, Eye, Code2, Save } from 'lucide-react';

interface CodeEditorContainerProps {
  codigo: string;
  onChangeCodigo: (val: string) => void;
  linguagem: string;
  tema: 'light' | 'dark';
  isRascunhoSalvo: boolean;
  isExecutando: boolean;
  onExecutar: () => void;
  onVerSolucao: () => void;
}

export const CodeEditorContainer: React.FC<CodeEditorContainerProps> = ({
  codigo,
  onChangeCodigo,
  linguagem,
  tema,
  isRascunhoSalvo,
  isExecutando,
  onExecutar,
  onVerSolucao,
}) => {
  const extensions = useMemo(() => {
    if (linguagem === 'python') {
      return [python()];
    }
    return [javascript({ jsx: true, typescript: true })];
  }, [linguagem]);

  const editorTheme = tema === 'dark' ? vscodeDark : vscodeLight;

  const getExtensao = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'python': return 'py';
      case 'typescript': return 'ts';
      case 'java': return 'java';
      case 'go': case 'golang': return 'go';
      case 'csharp': return 'cs';
      case 'cpp': return 'cpp';
      case 'php': return 'php';
      case 'rust': return 'rs';
      case 'sql': return 'sql';
      default: return 'js';
    }
  };

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-200/80 dark:border-slate-800 p-5 flex flex-col gap-4 shadow-xl shadow-indigo-500/5">
      {/* Moldura de Janela de Código estilo macOS */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl bg-slate-900">
        {/* Barra de Janela Superior */}
        <div className="px-4 py-3 bg-slate-950 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="text-xs font-bold text-slate-400 font-mono ml-2 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span>main.{getExtensao(linguagem)}</span>
            </span>
          </div>

          {isRascunhoSalvo && (
            <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5 animate-fade-in">
              <Save className="w-3.5 h-3.5" />
              <span>Rascunho salvo</span>
            </span>
          )}
        </div>

        {/* Instância do CodeMirror */}
        <div className="font-mono text-xs md:text-sm">
          <CodeMirror
            value={codigo}
            height="260px"
            extensions={extensions}
            theme={editorTheme}
            onChange={(value) => onChangeCodigo(value)}
            basicSetup={{
              lineNumbers: true,
              highlightActiveLineGutter: true,
              highlightSpecialChars: true,
              history: true,
              foldGutter: true,
              drawSelection: true,
              dropCursor: true,
              allowMultipleSelections: true,
              indentOnInput: true,
              bracketMatching: true,
              closeBrackets: true,
              autocompletion: true,
              rectangularSelection: true,
              crosshairCursor: true,
              highlightActiveLine: true,
              highlightSelectionMatches: true,
              closeBracketsKeymap: true,
              defaultKeymap: true,
              searchKeymap: true,
              historyKeymap: true,
              foldKeymap: true,
              completionKeymap: true,
              lintKeymap: true,
            }}
          />
        </div>
      </div>

      {/* Controles de Ação */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onExecutar}
          disabled={isExecutando}
          className="flex-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white font-black py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2.5 text-sm cursor-pointer"
        >
          {isExecutando ? (
            <>
              <span className="animate-spin text-base">⏳</span>
              <span>Executando Testes...</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-white" />
              <span>Executar Código</span>
            </>
          )}
        </button>

        <button
          onClick={onVerSolucao}
          className="py-3.5 px-5 border-2 border-blue-500/80 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white font-extrabold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 text-xs cursor-pointer shadow-sm active:scale-95"
        >
          <Eye className="w-4 h-4" />
          <span>Ver Solução Exemplo</span>
        </button>
      </div>
    </div>
  );
};
