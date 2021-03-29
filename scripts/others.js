var myothers = '<h2>In press</h2> \
<ul> \
  <li> \
  <a href="http://www.ufal.edu.br/noticias/2014/09/trabalho-cientifico-sobre-modelagem-geometrica-e-premiado-em-conferencia-de-computacao"> \
  1st Prize in Workshop of Undergraduate Work of SIBGRAPI 2014 (full story in portuguese) </a> \
  </li> \
  <li> \
  <a href="https://ufal.br/ufal/noticias/2012/12/trabalhos-de-alunos-receberao-excelencia-academica"> \
  PIBIC 2011-2012 Academic Excelence award (full story in portuguese)</a> \
  </li> \
</ul> \
<br>'

$(document).ready(function(){
  $("#others").click(function(){
    $(".content").empty();
    $(".content").append(myothers);
  });
});
