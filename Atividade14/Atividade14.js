function validarForm() {
  nome = document.getElementById("name").value;
  email = document.getElementById("email").value;
  comment = document.getElementById("comment").value;
  sim = document.getElementById("sim");

  if (nome.length < 10) {
    alert("O nome deve ter pelo menos 10 caracteres");
  } else if (email.indexOf("@") == "-1" || email.indexOf(".") == "-1") {
    alert("Insira um email válido");
  } else if (comment.length < 20) {
    alert("O comentário deve ter pelo menos 20 caracteres");
  } else if (sim.checked == true) {
    alert("Volte sempre a essa página!");
  } else {
    alert("Que bom que você voltou a visitar essa página!");
  }
}

function limparForm() {
  elementos = document.forms.elements;

  for (i = 0; i < 3; i++) {
    elementos[i].value = "";
  }
}
