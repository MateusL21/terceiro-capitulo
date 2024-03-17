
function nome() {
    var nomeUsuario = document.getElementById("nomeusuario").value;
    if (nomeUsuario.trim() !== '') {
        document.getElementById("output").innerHTML = "Caro " + nomeUsuario + " Esse foi o valor Final:";
    } else {
        alert("Por favor, digite seu nome antes de calcular.");
    }

}
