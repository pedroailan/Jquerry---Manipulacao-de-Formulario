$(document).ready(function() {

  $('#checkbox-segundo-painel').click(function() {
      $('#div-caixa-texto').toggle(this.checked);
    }); //ocultar a exibição segundo painel


  $('#btn-apresentar').click(function() {
      $('#exibir-texto').toggle(this.checked);
    }); //exibir o texto digitado no painel de resultados

  var form = document.getElementById('formulario');
  form.addEventListener('submit', function(e) {
      e.preventDefault();
    }); //impedir o envio do formulário ao clicar no botão apresentar

});

/*
Função contar palavras:
\s = qualquer espaço em branco.
{2,} = em quantidade de dois ou mais.
g = apanhar todas as ocorrências não só a primeira.
Por fim, o metodo replace faz substituições caso haja esse 
espaços dispersos pelo parâmetro = , ' '.

Em seguida a metodo trim() retorna o texto sem os espaços 
em branco do inicio e do fim da string.

Logo depois o metodo split retorna a ocorrências dividas em 
espaços (' ') e a função retorna um contador (cont) com o 
números de palavras.

*/
function contarPalavras(texto) {
  texto = texto.replace(/\s{2,}/g, ' ');
  texto = texto.trim();
  texto = texto.split(' ');
  for (cont = 0; cont < texto.length; cont++) {}

  return cont;
}

/*

Função dedica a pegar o seleção de gênero 
utilizado o (checked) para verificar o status
e retornar o valor. Retorna null caso nenhuma 
das opções seja selecionada. 

*/

function getRadioValor(rads) {
  for (var i = 0; i < rads.length; i++) {
    if (rads[i].checked) {
      return rads[i].value;
    }
  }
  return null;
}

function exibir() {
  var nome = document.getElementById("name").value;
  var idade = document.getElementById("idade").value;
  var data = document.getElementById("data").value;
  var escolha = document.getElementsByName("sexo");
  var texto = document.getElementById("caixa-texto").value;
  contarPalavras(texto);

  var div = document.getElementById("exibir-texto");

  div.innerHTML = "<p>" + nome + "</p>" + "\n" +
    "<p>" + idade + "</p>" + "\n" +
    "<p> Gênero: " + getRadioValor(escolha) +
    "<p>" + data + "</p>" + "\n" +
    "<p> Palavras: " + cont + "</p>" + "\n";



}