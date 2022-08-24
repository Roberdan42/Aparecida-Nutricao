//codigo IMC

/* 
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutrição";

var paciente = document.querySelector("#paciente-1");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso/(altura*altura);
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;
*/

//verificação

/*
var tdnome = paciente.querySelector(".info-nome")
var nome = tdnome.textContent

if (peso < 0 || peso > 1000) {
    alert("O peso de " + nome  + " esta correto?")
    tdImc.textContent = "peso invalido"
} else if (altura < 0 || altura > 3) {
    alert("A altura de " + nome + " esta correta?")
    tdImc.textContent = "altura invalida"
}
*/

//loop do IMC

var pacientes = document.querySelectorAll(".paciente")

for (let i = 0; i < pacientes.length; i++) {

    var tdPeso = pacientes[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = pacientes[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var imc = peso/(altura*altura);
    var tdImc = pacientes[i].querySelector(".info-imc");
    tdImc.textContent = (Math.floor(imc));

    var tdnome = pacientes[i].querySelector(".info-nome");
    var nome = tdnome.textContent;

    if (peso < 0 || peso > 1000) {
        alert("O peso de " + nome  + " esta correto?");
        tdImc.textContent = "peso invalido";
        pacientes[i].classList.add("erro-peso");
    } else if (altura < 0 || altura > 3) {
        alert("A altura de " + nome + " esta correta?");
        tdImc.textContent = "altura invalida";
        pacientes[i].classList.add("erro-altura");
    }
}
