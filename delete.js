function deletar(pessoaId) {
    var excluir = {
        "url": "http://entrevista.starcorp.com.br/api/Pessoas/" + pessoaId,
        "method": "DELETE",
        "timeout": 0,
        "headers": {
            "Chave": "F4BA6C0A-4E6A-4AD4-A9E0-918A0EF9E55F"
        }
    }
    $.ajax(excluir).done(function(response) {
        location.reload()
    })
}