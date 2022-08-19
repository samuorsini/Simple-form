const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  //preventDefault serve para ele não recarregar a página qunado clicarmos no botão 'Enviar'.
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  //Verificações dos inputs

  if (usernameValue == "") {
    setErrorFor(username, "O nome do usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue == "") {
    setErrorFor(email, "O emial é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue == "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.lenght < 7) {
    setErrorFor(password, "A senha precisar ter no minímo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue == "") {
    setErrorFor(passwordConfirmation, "A confirmação da senha é obrigatória.");
  } else if (passwordConfirmationValue != passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".formControl");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    alert("Formulário está 100% válido!");
  }
}

//Funções de validações

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //Adicionar a mensagem de erro
  small.innerText = message;

  //Adicionar a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  //Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
