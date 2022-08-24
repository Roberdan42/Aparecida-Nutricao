//novos pacientes

var adicionar = document.querySelector("#adicionar-paciente");

adicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    //pegando informaçoes do form
    var nomeNovo = form.nome.value;
    var pesoNovo = form.peso.value;
    var alturaNova = form.altura.value;
    var gorduraNova = form.gordura.value;

    //validando dados do novo paciente
    if(nomeNovo == "") {
        alert("Nome invalido");
        var erro = document.querySelector(".mensagem-erro");
        erro.classList.add("aparece");
        erro.textContent = "nome invalido";
        return;
    } else if(pesoNovo <= 0 || pesoNovo >= 1000) {
        alert("O peso de " + nomeNovo + " esta correto?");
        var erro = document.querySelector(".mensagem-erro");
        erro.classList.add("aparece");
        erro.textContent = "Peso invalido";
        return;
    } else if (alturaNova <= 0 || alturaNova >= 3) {
        alert("A altura de " + nomeNovo + " esta correta?");
        var erro = document.querySelector(".mensagem-erro");
        erro.classList.add("aparece");
        erro.textContent = "Altura invalida";
        return;
    } else if(gorduraNova <= 0  || gorduraNova >= 100) {
        alert("O porcentual de gordura de " + nomeNovo + " esta correto?");
        var erro = document.querySelector(".mensagem-erro");
        erro.classList.add("aparece");
        erro.textContent = "gordura invalida";
        return;
    } else {
        var erro = document.querySelector(".mensagem-erro");
        erro.classList.remove("aparece");
    }

    //criando celulas
    var pacienteTR = document.createElement("tr");
    var nomeTD = document.createElement("td");
    var pesoTD = document.createElement("td");
    var alturaTD = document.createElement("td");
    var gorduraTD = document.createElement("td");
    var imcTD = document.createElement("td");

    //associando informaçoes do form as celulas
    nomeTD.textContent = nomeNovo;
    pesoTD.textContent = pesoNovo;
    alturaTD.textContent = alturaNova;
    gorduraTD.textContent = gorduraNova;
    imcTD.textContent = '';

    //organizando celulas
    pacienteTR.appendChild(nomeTD);
    pacienteTR.appendChild(pesoTD);
    pacienteTR.appendChild(alturaTD);
    pacienteTR.appendChild(gorduraTD);
    pacienteTR.appendChild(imcTD);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTR);

    //adicionando classes ao novo paciente
    pacienteTR.classList.add("paciente");
    nomeTD.classList.add("info-nome");
    pesoTD.classList.add("info-peso");
    alturaTD.classList.add("info-altura");
    gorduraTD.classList.add("info-gordura");
    imcTD.classList.add("info-imc");

    //calculando o IMC do novo paciente -- funçoes.js - linha 3
    calculaIMC();

    //apagando form
    form.reset();
});
