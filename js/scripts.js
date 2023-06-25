const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verificar se o nome estar vazio
    if (nameInput.value === "") {
        alert("Por favor, preencha seu nome!");
        return;
    }

    // Verificar se o email preenchido é válido
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha seu e-mail!");
        return;
    }

// Verifica se a Senha foi preenchida
if (!validatePassword(passwordInput.value, 8)) {
    alert("A senha precisa ter no mínimo 8 dígitos");
    return;
}

// Verificar se a situação foi selecionada
if (jobSelect.value === "") {
    alert("Por favor, selecione a sua situação!")
    return
}

// Verifica se a mensagem foi preenchida
if (messageTextarea.value === "") {
    alert("Por favor, escreva uma mensagem!")
    return
}

    // Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
});

// Função de validação de email
function isEmailValid(email) {
    // cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}

// função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        // Senha válida
        return true
    }

    // Senha inválida
    return false
}