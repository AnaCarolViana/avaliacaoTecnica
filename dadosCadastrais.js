$(".cadastrar").click(cadastrar);
$("#cadastroSalvo").click(novoCadastro)

var nome = $("#nomeCompleto")
var dataNascimento = $("#dataNascimento")
var idade = $("#idade")
var email = $("#email")
var telefone = $("#telefone")
var celular = $("#celular")
var form = $("#form")
var logradouro = $("#logradouro")
var numero = $("#numero")
var bairro = $("#bairro")
var cidade = $("#cidade")
var uf = $("#uf")

function cadastrar(event) {
    var dadosPessoais = {
        "url": "http://entrevista.starcorp.com.br/api/Pessoas",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Chave": "F4BA6C0A-4E6A-4AD4-A9E0-918A0EF9E55F",
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "nome": nome.val(),
            "dataNascimento": dataNascimento.val(),
            "idade": Number(idade.val()),
            "email": email.val(),
            "telefone": telefone.val(),
            "celular": celular.val()
        })
    };

    $.ajax(dadosPessoais).done(function(response) {
        console.log(response)
        cadastrarEndereco(response.data)
        if (response.data == ""){
          alert("Preencha todos os campos corretamente")
        }
    })
}


