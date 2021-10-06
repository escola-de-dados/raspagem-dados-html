$("#contraste").click(function(e){
  e.preventDefault();
  $(".menu, body, .footer").stop().toggleClass("bgContrast");
});

$(function($){
  if (typeof($.datepicker) != "undefined"){
    $.datepicker.setDefaults(
      jQuery.extend($.datepicker.regional['pt-BR'],
      {dateFormat: 'dd/mm/yy'}));
  }
});

function fonte(e){
  var elemento = $(".acessibilidadeFonte");
  var fonte = elemento.css('font-size');
  if (e == 'a') {
    elemento.css("fontSize", parseInt(fonte) + 1);
  }else if('d'){
    elemento.css("fontSize", parseInt(fonte) - 1);
  }
}