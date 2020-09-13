unction formulario() {

    email = document.getElementById('inputEmail4')
    senha = document.getElementById('inputPassword4')
    endereco = document.getElementById('inputAddress')
    endereco2 = document.getElementById('inputAddress2')
    cidade = document.getElementById('inputCity')
    estado = document.getElementById('inputEstado')
    cep = document.getElementById('inputCEP')

    cadastro = 0;

    if (email.value == '' 
    || senha.value == '' 
    || endereco.value == '' 
    || endereco2.value == '' 
    || cidade.value == ''
    || estado.value == '' 
    || cep.value == '') {
        cadastro += 1;
    }

    if (cadastro == 0) {
        alert('Cadastrado')
    } else {
        alert('Preencha os campos')
    }

}
