var operando = 0,
	operando2 = 0,
	operacao = "",
	ultimaTecla = "";
const TAM_MAX = 7;

function configurarCalculadora(){
	$(".tecla").click(function(){
		if (ultimaTecla == "operacional") {
			$("#display").text("0")	;
		}
		var valorAnterior = $("#display").text();
		var tecla = $(this).html();
		if (tecla === "," && valorAnterior.indexOf(",") != -1) {
			chamarMensagem("Já possui casa decimal!");
			return 0;
		}

		if(valorAnterior.length == TAM_MAX) {
			chamarMensagem("Tamanho máximo atingido!");
			return 0;
		}

		var novoValor = (valorAnterior != 0 || tecla == ",") ? (valorAnterior + tecla) : tecla;

		if (operacao.length != 0) {
			operando2 = parseFloat(novoValor.replace(",", "."));
		} else {
			operando = parseFloat(novoValor.replace(",", "."));
		}

		$("#display").text( novoValor );
		ultimaTecla = tecla;
	});

	$(".teclaOperacao").click(function(){
		var tecla = $(this).html();
		mostrarResultado();
		switch(tecla){
			case "+": operacao = "soma";
					  break;
			case "-": operacao = "subtracao";
					  break;
			case "/": operacao = "divisao";
					  break;
			case "*": operacao = "multiplicacao";
					  break;
		}
		ultimaTecla = "operacional";
	});

	$("#teclaIgual").click(function() {
		mostrarResultado();
	});
	
	$("#teclaLimpar").click(function(){
		limparDisplay();
	});
}

function apagaMensagem(objHtml) {
	$(objHtml).parent().remove();
	$(".btn").removeAttr("disabled");
}

function chamarMensagem(txt) {
	$("#erro")
		.append($("<div />")
			.addClass("alert alert-danger")
			.attr({ "id":"boxMsg"}) 
			.text(txt)
			.prepend($("<button />")
				.attr({"type": "button", "id":"xis", "onClick": "apagaMensagem(this)"}) 
				.addClass("close")
				.append($("<span />")
					.html("&nbsp;&times;"))
				)
		);
	$(".btn").attr("disabled", "disabled");
}			

function mostrarResultado() {
	if(ultimaTecla != "operacional" && operacao.length > 0){
		var resultado = 0;

		if (operacao != "divisao") {
			switch(operacao){
				case "soma": resultado = operando + operando2;
					break;
				case "subtracao": resultado = operando - operando2;
					break;
				case "multiplicacao": resultado = operando * operando2;
					break;
			}
		} else {
			if (operando2 === 0) {
				operacao = "";
				chamarMensagem("Divisao por zero!");
			}
			else {
				resultado = operando / operando2;
			}
		}

		try{
			var resultadoTratado = tratarResultado(resultado);
			operando = resultadoTratado;
			operando2 = 0;
			$("#display").text(String(resultadoTratado).replace(".", ","));
		} 
		catch(err){
			chamarMensagem(err);
			limparDisplay();
		}
	}
}

function tratarResultado(resultado) {

	if (String(resultado).indexOf("E") === -1) {
		if (String(resultado).length > TAM_MAX) {
			resultado = resultado.toExponential(2);
		} 
	}

	if (String(resultado).length > TAM_MAX) {
		throw "Não será possível representar este número.";
	}

	return resultado;
}

function limparDisplay() {
	operando = 0;
	operando2 = 0;
	operacao = "";
	$("#display").text("0")	;
}