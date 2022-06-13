function verificarValores(valor1, valor2) {
    let valoresIguais = 'não são iguais';
    let valorDaSoma = valor1 + valor2;
    let somaMaiorQue10 = 'menor que 10';
    let somaMenorQue20 = 'menor que 20';
    if (valor1 == valor2) {
        valoresIguais = 'são iguais';
    }

    if (valorDaSoma > 10) {
        somaMaiorQue10 = 'maior que 10';
    } else if (valorDaSoma == 10) {
        somaMaiorQue10 = 'igual a 10';
    }

    if (valorDaSoma > 20) {
        somaMenorQue20 = 'maior que 20';
    } else if (valorDaSoma == 20) {
        somaMenorQue20 = 'igual a 20';
    }

    return `Os números ${valor1} e ${valor2} ${valoresIguais}. Sua soma é ${valorDaSoma}, que é ${somaMaiorQue10} e ${somaMenorQue20}. `
}

let valor1 = Number(prompt('Insira o valor 1: '));
let valor2 = Number(prompt('Insira o valor 2: '));
let resposta = verificarValores(valor1, valor2);
alert(resposta);