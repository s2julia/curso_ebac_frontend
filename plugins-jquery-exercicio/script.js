$(document).ready(function() {
  // --- Carrossel Slick ---
$('.carousel').slick({
    autoplay: true,
    dots: true,
    arrows: true,
    autoplaySpeed: 2000,
});

  // --- Máscara de telefone ---
$('#telefone').mask('(00) 00000-0000');

  // --- Validação do formulário ---
$('#meuFormulario').validate({
    rules: {
    nome: {
        required: true,
        minlength: 3
    },
    email: {
        required: true,
        email: true
    },
    telefone: {
        required: true
    }
    },
    messages: {
    nome: {
        required: "Por favor, insira seu nome",
        minlength: "O nome deve ter pelo menos 3 letras"
    },
    email: {
        required: "Informe seu e-mail",
        email: "Digite um e-mail válido"
    },
    telefone: {
        required: "Informe seu telefone"
    }
    },
    submitHandler: function(form) {
    alert("Formulário enviado com sucesso!");
    form.reset();
    }
});
});
