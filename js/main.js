import exercicios from './dados.js';

// Seleção de Elementos
const btnGerar = document.getElementById('btn-gerar'); // Corrigido para pegar pelo ID
const areaResultado = document.getElementById('resultado');
const btnSolucao = document.getElementById('btn-solucao');
const solucaoContainer = document.getElementById('solucao-container');
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const copyBtn = document.getElementById('copy-btn');
const copyMsg = document.getElementById('copy-msg');

let exercicioAtual = null;

// --- LÓGICA DE TEMA ---
themeBtn.addEventListener('click', () => {
	document.documentElement.classList.toggle('dark');
	const isDark = document.documentElement.classList.contains('dark');
	themeIcon.innerText = isDark ? '☀️' : '🌙';
	localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Aplicar tema salvo
if (localStorage.theme === 'light') {
	document.documentElement.classList.remove('dark');
	themeIcon.innerText = '🌙';
} else {
	document.documentElement.classList.add('dark');
	themeIcon.innerText = '☀️';
}

// --- LÓGICA DE GERAR CÓDIGO ---
btnGerar.addEventListener('click', () => {
	const linguagemBusca = document.getElementById('linguagem').value;
	const nivelChecked = document.querySelector('input[name="nivel"]:checked');

	if (!linguagemBusca || !nivelChecked) {
		alert("Por favor, selecione uma linguagem e um nível!");
		return;
	}

	const nivelBusca = nivelChecked.value;

	// Filtra a lista
	const listaFiltrada = exercicios.filter(ex =>
		ex.linguagem === linguagemBusca && ex.nivel === nivelBusca
	);

	if (listaFiltrada.length > 0) {
		const randomIdx = Math.floor(Math.random() * listaFiltrada.length);
		exercicioAtual = listaFiltrada[randomIdx];

		// Exibe o enunciado
		areaResultado.innerText = exercicioAtual.enunciado;

		// Reseta o botão de solução
		btnSolucao.classList.remove('hidden');
		solucaoContainer.classList.add('hidden');
		solucaoContainer.innerText = ""; // Limpa solução anterior
	} else {
		areaResultado.innerText = `Desculpe, exercícios não encontrados para esta seleção.`;
		btnSolucao.classList.add('hidden');
		solucaoContainer.classList.add('hidden');
	}
});

// --- LÓGICA DE VER SOLUÇÃO ---
btnSolucao.addEventListener('click', () => {
	if (exercicioAtual) {
		solucaoContainer.innerText = exercicioAtual.solucao;
		solucaoContainer.classList.remove('hidden');
	}
});

// --- LÓGICA DE COPIAR (CORRIGIDA) ---
copyBtn.addEventListener('click', async () => {
	const textoParaCopiar = areaResultado.innerText;

	if (!textoParaCopiar) return;

	try {
		await navigator.clipboard.writeText(textoParaCopiar);

		// Mostrar mensagem de sucesso
		copyMsg.classList.remove('hidden');
		setTimeout(() => {
			copyMsg.classList.add('hidden');
		}, 2000);

	} catch (err) {
		console.error('Falha ao copiar: ', err);
		alert("Erro ao copiar o texto. Permissão negada pelo navegador?");
	}
});