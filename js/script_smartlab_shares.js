var animated = false;
var hamburger = false;
var triger = false;
function thanks(){
  alert('Спасибо за заявку! Скоро мы с Вами свяжемся.')
}
$(document).ready(function() {
// Гамбургер

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});


$('#nav_icon_hamburger').click(function(){
    function open(){
    $('.logo_contact nav').css('transform','translateX(0px)');
    }
    function close(){
    $('.logo_contact nav').css('transform','translateX(210px)');
    }
    if(hamburger == false && triger == false){
    setTimeout(open,0);
    hamburger = true;
    triger = true;
    }
    if(hamburger == true && triger == false){
    setTimeout(close,0);
    hamburger = false;
    triger = true;
    }
    triger = false;
})
// Форма
$("#fr_less_id").submit(function() {
  $.ajax({
      type: "POST",
      url: "../php/callback_index_5.php",
      data: $(this).serialize()

  }).done(function(){
      $(this).find("input").val("");
      setTimeout(thanks, 800);

$("#fr_less_id").trigger("reset");
  });
  return false;
});
$('#sing_up_button_shares').click(function(){
    function step1(){
    $('.modal_window').toggleClass('modal_window_active');
    }
    function step2(){
    $('.free_lesson').toggleClass('free_lesson_active');
    }
    
        
    setTimeout(step1,0);
    setTimeout(step2,100);
     
})

$(document).mouseup(function (e)
{
    var call_back = $("#fr_less_id");

    if (!call_back.is(e.target) && call_back.has(e.target).length === 0) {
        $('.modal_window').removeClass('modal_window_active')
        $('.free_lesson').removeClass('free_lesson_active')
    }
});
});