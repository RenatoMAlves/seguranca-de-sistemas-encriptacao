function verificaLogin() {
    
    var usuario = document.getElementById('inputUsuario').value;
    var senha = document.getElementById('inputSenha').value;

    var bd = [
        {
            "usuario": "renato",
            "senha": "123123"
        },
        {
            "usuario": "rentato",
            "senha": "asdasd"
        }
    ];

    var status = false;

    for (var i of bd) {
        if(i.usuario == usuario && i.senha == senha)
            return true;
    }
    return status;
}

function logar(){
    if(this.verificaLogin()){
        window.location.replace("./index.html");
    }
    else
        alert("Login incorreto");
}

function lerArquivo(e){
    var arquivo = e.target.files[0];
    if (!arquivo) {
      return;
    }
    
}

function encriptar(e){
    var key = '123asd1';
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        var encriptado = CryptoJS.AES.encrypt(e.target.result, key);

        var a = document.getElementById('download-cript');
        var button = document.getElementById('encriptado-button');
        a.href = 'data:application/octet-stream,' + encriptado;
        a.download = file.name + '.enc';
        a.classList.remove("disabled");
        button.classList.remove("disabled");
    };
    reader.readAsText(file);
    alert("O arquivo foi encriptografado");
    
}

function decriptar(e){
    var key = '123asd1';
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        var decriptado = CryptoJS.AES.decrypt(e.target.result, key).toString(CryptoJS.enc.Latin1);
        var a = document.getElementById('download-decript');
        var button = document.getElementById('decriptado-button');
        a.href = 'data:application/octet-stream,' + decriptado;
        a.download = file.name + '.txt';
        a.classList.remove("disabled");
        button.classList.remove("disabled");
    };
    reader.readAsText(file);
    alert("O arquivo foi decriptado");
}

document.getElementById('cript-input')
.addEventListener('change', encriptar, false);

document.getElementById('decript-input')
.addEventListener('change', decriptar, false);

jQuery(function($){
    $.getJSON("myjasonfile.json", function(json) {
        console.log(json); // access the response object
        console.log(json.data); // access the array
        console.log(json.data[0]); // access the first object of the array
        console.log(json.data[0].number); // access the first object proprty of the array
    });
 });