const calculate = () => {
    const rg = document.getElementById("rg").value;
    const digito = document.getElementById("digito");
    digito.innerHTML = "O dígito é: ";

    let soma = 0;
    let resultado = 0;

    for (var i = 2; i < 10; i++) {
        valor = Number(rg[i - 2]);
        soma += i * valor;
    }

    resultado = 11 - (soma % 11);
    if (resultado == 10)
        resultado = "X";
    else if (resultado == 11)
        resultado = "0";
    
    digito.innerHTML += `${resultado}`;
  }

