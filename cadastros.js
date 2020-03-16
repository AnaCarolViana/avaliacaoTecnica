$(".cadastros").ready(pegarTodos)

var nome = $("#nomeCompleto")
var data = $("#dataNascimento")
var idade = $("#idade")
var email = $("#email")
var telefone = $("#telefone")
var celular = $("#celular")
var form = $(".form")
var logradouro = $("#logradouro")
var numero = $("#numero")
var bairro = $("#bairro")
var cidade = $("#cidade")
var uf = $("#uf")

function pegarTodos() {
    var endereco = {
        "url": "http://entrevista.starcorp.com.br/api/Pessoas/GetAll",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Chave": "F4BA6C0A-4E6A-4AD4-A9E0-918A0EF9E55F"
        }
    }
    $.ajax(endereco).done(function(response) {
        tratarGetAll(response.data)
    })
}

function tratarGetAll(data) {
    for (var i = 0; i < data.length; i++) {
        var html = "<tr class=\"pessoaId\" id=" + data[i].pessoaId + ">";
        html += "<td>" + data[i].pessoaId + "</td>";
        html += "<td>" + data[i].nome + "</td>";
        html += "<td>" + formatarData(data[i].dataNascimento) + "</td>";
        html += "<td>" + data[i].email + "</td>";
        html += "<td><a class=\"create\"><i class=\"small material-icons\" onclick=\"get(" + data[i].pessoaId + ")\">edit</i></td>"
        html += "<td><a class=\"delete\"><i class=\"small material-icons\" onclick=\"deletar(" + data[i].pessoaId + ")\">delete</i></td>"
        html += "</tr>";

        $('table tbody').append(html);
    }
};

function formatarData(dataNascimento) {
    var data = new Date(dataNascimento),
        dia = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(),
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}

function get(pessoaId) {
    var endereco = {
        "url": "http://entrevista.starcorp.com.br/api/Pessoas/" + pessoaId,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Chave": "F4BA6C0A-4E6A-4AD4-A9E0-918A0EF9E55F"
        }
    }
    $.ajax(endereco).done(function(response) {
        tratarGet(response.data)
    })

}