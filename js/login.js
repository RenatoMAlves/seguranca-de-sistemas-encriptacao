var status = false;

function verificaLogin() {

    var usuario = document.getElementById('inputUsuario').value;
    var senha = document.getElementById('inputSenha').value;
    var bd;

    $.getJSON( "bd/bd.json", function( json ) {
        for (var i of json) {
            if (i.usuario == usuario && i.senha == senha){
                status = true;
                return status;
            }
                
        }
    });
    return status;
   
}

function logar() {
    if (this.verificaLogin() == true) {
        window.location.replace("encriptar.html");
    } else
        alert("Login incorreto");
}