import React, { useState } from 'react';
import { X, Key, ShieldCheck, ExternalLink, Save } from 'lucide-react';
import { ProgressService } from '../services';

interface AiConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaved: () => void;
}

export const AiConfigModal: React.FC<AiConfigModalProps> = ({
  isOpen,
  onClose,
  onSaved,
}) => {
  const [apiKey, setApiKey] = useState<string>(() => ProgressService.getApiKeyGemini());

  if (!isOpen) return null;

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();
    ProgressService.setApiKeyGemini(apiKey);
    onSaved();
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in flex flex-col"
      >
        {/* Header do Modal */}
        <div className="p-4.5 border-b border-gray-200 dark:border-gray-700/80 flex items-center justify-between bg-gray-50 dark:bg-gray-900/50">
          <div className="flex items-center gap-2.5">
            <Key className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-base text-gray-900 dark:text-white">
              Configurar Gemini API Key
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form de Configuração */}
        <form onSubmit={handleSalvar} className="p-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
              Sua Chave de API do Google Gemini:
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm text-gray-900 dark:text-white font-mono"
            />
          </div>

          <div className="p-3.5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40 rounded-2xl text-xs text-gray-700 dark:text-gray-300 flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5 font-bold text-blue-700 dark:text-blue-300">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Privacidade 100% Client-Side</span>
            </div>
            <p className="leading-relaxed">
              Sua chave de API é gravada somente no seu navegador (`LocalStorage`) e utilizada para consultar o modelo Gemini 2.5 Flash sem intermediação de servidores de terceiros.
            </p>
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-1 mt-1"
            >
              <span>Obter chave gratuita no Google AI Studio</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg hover:shadow-amber-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-sm cursor-pointer mt-1"
          >
            <Save className="w-4 h-4" />
            <span>Salvar Chave de API</span>
          </button>
        </form>
      </div>
    </div>
  );
};
