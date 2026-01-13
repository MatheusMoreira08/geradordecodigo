import exercicios from './dados.js'; // Adicionado o .js aqui

// Seleção de Elementos
const btnGerar = document.querySelector('button');
const areaResultado = document.getElementById('resultado');
const btnSolucao = document.getElementById('btn-solucao');
const solucaoContainer = document.getElementById('solucao-container');
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

let exercicioAtual = null;

// --- LÓGICA DE TEMA ---
themeBtn.addEventListener('click', () => {
	document.documentElement.classList.toggle('dark');
	const isDark = document.documentElement.classList.contains('dark');
	themeIcon.innerText = isDark ? '☀️' : '🌙';
	localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Aplicar tema salvo ou padrão dark
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
	const nivelBusca = document.querySelector('input[name="nivel"]:checked')?.value;

	if (!linguagemBusca || !nivelBusca) {
		alert("Por favor, selecione uma linguagem e um nível!");
		return;
	}

	// Filtra a lista para sortear um entre os 5 de cada nível
	const listaFiltrada = exercicios.filter(ex =>
		ex.linguagem === linguagemBusca && ex.nivel === nivelBusca
	);

	if (listaFiltrada.length > 0) {
		const randomIdx = Math.floor(Math.random() * listaFiltrada.length);
		exercicioAtual = listaFiltrada[randomIdx];

		// Exibe o enunciado (o exercício)
		areaResultado.innerText = exercicioAtual.enunciado;

		// Reseta o botão de solução
		btnSolucao.classList.remove('hidden');
		solucaoContainer.classList.add('hidden');
	} else {
		areaResultado.innerText = `Desculpe, exercícios não encontrados para esta seleção.`;
		btnSolucao.classList.add('hidden');
	}
});

btnSolucao.addEventListener('click', () => {
	if (exercicioAtual) {
		solucaoContainer.innerText = exercicioAtual.solucao;
		solucaoContainer.classList.toggle('hidden');
	}
});