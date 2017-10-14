var banco;

$(document).ready(function() {
    $.getJSON( "bd/bd.json", function( json ) {
        banco = json;
    });
});

function verificaLogin() {

    var usuario = document.getElementById('inputUsuario').value;
    var senha = document.getElementById('inputSenha').value;

    console.log(banco);
    for (var user of banco) {
        if (user.usuario == usuario && user.senha == senha){
            return true;
        }
    }
    
    return false;
   
}

function logar() {
    if (this.verificaLogin()) {
        window.location.replace("encriptar.html");
    } else
        alert("Login incorreto");
}