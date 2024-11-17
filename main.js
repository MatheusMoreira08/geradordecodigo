function mostrarAlerta() {
	const inputTexto = document.getElementById('inputTexto').value;
	
	if (inputTexto.trim() !== "") {
			alert("Sucesso! Você digitou: " + inputTexto);
	} else {
			alert("Por favor, digite algo antes de enviar.");
	}
}
