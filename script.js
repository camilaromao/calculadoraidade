let botaoEnviar = document.getElementById("enviar");
let campoAno = document.getElementById("ano");

botaoEnviar.addEventListener("click", function(event) {
  event.preventDefault();
  
    let anoNascimento = Number(campoAno.value);
    let anoAtual = new Date().getFullYear();
    let resultado = anoAtual - anoNascimento;

    if(campoAno.value === "") {
        document.getElementById("resultado").textContent = `Por favor, informe seu ano de nascimento.`;
    } else if (anoNascimento <= 0 || anoNascimento > anoAtual) {
         document.getElementById("resultado").textContent = `Informe um ano de nascimento válido`;
    } else {
          document.getElementById("resultado").textContent = `Sua idade é ${resultado} anos.`;

    }
  
});









