$(document).ready(function() {

  // Ao enviar o formulário
$('#form-tarefa').submit(function(event) {
    event.preventDefault(); // impede o recarregamento da página

    // Pega o valor digitado
    const tarefa = $('#nova-tarefa').val();

    // Adiciona o item à lista
    $('#lista-tarefas').append(`<li>${tarefa}</li>`);

    // Limpa o campo de texto
    $('#nova-tarefa').val('');
});

  // Ao clicar em um item da lista, adiciona ou remove o risco no texto
$('#lista-tarefas').on('click', 'li', function() {
    $(this).toggleClass('completa');
});

});
