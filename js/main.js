import exercicios from './dados.js';

const btnGerar = document.querySelector('button');
const inputLinguagem = document.getElementById('linguagem');
const areaResultado = document.getElementById('resultado');

btnGerar.addEventListener('click', () => {
	const linguagemBusca = document.getElementById('linguagem').value;
	const nivelBusca = document.querySelector('input[name="nivel"]:checked')?.value;

	if (!linguagemBusca) {
		alert("Por favor, selecione uma linguagem!");
		return;
	}

	const encontrado = exercicios.find(ex =>
		ex.linguagem === linguagemBusca && ex.nivel === nivelBusca
	);

	if (encontrado) {
		areaResultado.innerText = encontrado.codigo;
	} else {
		areaResultado.innerText = `Desculpe, ainda não tenho exercícios de ${linguagemBusca} para o nível ${nivelBusca}.`;
	}
});