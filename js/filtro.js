var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var filtro = campoFiltro.value;
    var pacientes = document.querySelectorAll(".paciente");

    if (filtro.length > 0) {

        pacientes.forEach(function(paciente){
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(filtro,"i");
    
            if(!expressao.test(nome)) {
                paciente.classList.add("some");
            } else {
                paciente.classList.remove("some");
            };
        });
    } else {
        pacientes.forEach(function(paciente){
            paciente.classList.remove("some");
        });
    };
});
