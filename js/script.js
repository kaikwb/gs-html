const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function validateCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');
    if(cpf == '') return false;
    // Elimina CPFs invalidos conhecidos
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    // Valida 1o digito
    add = 0;
    for (i=0; i < 9; i ++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    // Valida 2o digito
    add = 0;
    for (i = 0; i < 10; i ++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}

function isNumeric(num){
    return !isNaN(num)
}

function validateSignup() {
    let signup_name = document.forms["signup"]["singup-uname"].value;

    if (signup_name === "") {
        alert("Nome inválido");
        return false;
    }

    let signup_mail = document.forms["signup"]["singup-mail"].value;

    if (!validateEmail(signup_mail)) {
        alert("Email inválido");
        return false;
    }

    let signup_cpf = document.forms["signup"]["singup-cpf"].value;

    if (!validateCPF(signup_cpf)) {
        alert("CPF inválido");
        return false;
    }

    let signup_tel = document.forms["signup"]["signup-telephone"].value;

    if (!isNumeric(signup_tel) || signup_tel === "") {
        alert("Telefone inválido, digite apenas números");
        return false;
    }

    let signup_pass = document.forms["signup"]["signup-pass"].value;

    if (signup_pass === "") {
        alert("Digite uma senha");
        return false;
    }

    let signup_cpass = document.forms["signup"]["signup-cpass"].value;

    if (signup_cpass === "") {
        alert("Digite a confirmação da senha");
        return false;
    }

    if (signup_pass !== signup_cpass) {
        alert("A confirmação da senha não confere");
        return false;
    }

    return true;
}
