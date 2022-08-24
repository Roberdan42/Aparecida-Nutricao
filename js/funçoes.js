//calcula o imc do novo paciente

function calculaIMC() {

    var pacientes = document.querySelectorAll(".paciente")

    for (let i = pacientes.length-1; i < pacientes.length; i++) {
    
        var tdPeso = pacientes[i].querySelector(".info-peso");
        var peso = tdPeso.textContent;
    
        var tdAltura = pacientes[i].querySelector(".info-altura");
        var altura = tdAltura.textContent;
    
        var imc = peso/(altura*altura);
        var tdImc = pacientes[i].querySelector(".info-imc");
        tdImc.textContent = (Math.floor(imc));
    
        var tdnome = pacientes[i].querySelector(".info-nome");
        var nome = tdnome.textContent;
    }
}
