import exercicios from './dados.js';

// Elementos
const btnGerar = document.getElementById('btn-gerar');
const areaResultado = document.getElementById('resultado');
const btnSolucao = document.getElementById('btn-solucao');
const solucaoContainer = document.getElementById('solucao-container');
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const copyBtn = document.getElementById('copy-btn');
const copyMsg = document.getElementById('copy-msg');

let exercicioAtual = null;

function atualizarIconeTema() {

	if (document.documentElement.classList.contains('dark')) {
		themeIcon.innerText = '☀️';
	} else {
		themeIcon.innerText = '🌙';
	}
}

// --- TEMA (Lógica) ---
themeBtn.addEventListener('click', () => {
	document.documentElement.classList.toggle('dark');
	const isDark = document.documentElement.classList.contains('dark');
	localStorage.setItem('theme', isDark ? 'dark' : 'light');
	atualizarIconeTema();
});

if (localStorage.theme === 'light') {
	document.documentElement.classList.remove('dark');
} else {
	document.documentElement.classList.add('dark');
}
atualizarIconeTema();

btnGerar.addEventListener('click', () => {
	const linguagemBusca = document.getElementById('linguagem').value;
	const nivelChecked = document.querySelector('input[name="nivel"]:checked');

	if (!linguagemBusca || !nivelChecked) {
		alert("Selecione linguagem e nível!");
		return;
	}

	const lista = exercicios.filter(ex =>
		ex.linguagem === linguagemBusca && ex.nivel === nivelChecked.value
	);

	if (lista.length > 0) {
		const randomIdx = Math.floor(Math.random() * lista.length);
		exercicioAtual = lista[randomIdx];
		areaResultado.innerText = exercicioAtual.enunciado;

		btnSolucao.classList.remove('hidden');
		solucaoContainer.classList.add('hidden');
		solucaoContainer.innerText = "";
	} else {
		areaResultado.innerText = "Nenhum exercício encontrado.";
	}
});

btnSolucao.addEventListener('click', () => {
	if (exercicioAtual) {
		solucaoContainer.innerText = exercicioAtual.solucao;
		solucaoContainer.classList.remove('hidden');
	}
});

copyBtn.addEventListener('click', async () => {
	const texto = areaResultado.innerText;
	console.log("Tentando copiar:", texto);

	if (!texto) return;

	try {
		await navigator.clipboard.writeText(texto);
		copyMsg.classList.remove('hidden');
		setTimeout(() => copyMsg.classList.add('hidden'), 2000);
	} catch (err) {
		console.error('Erro ao copiar:', err);
		alert("Erro ao copiar! Verifique as permissões do navegador.");
	}
});