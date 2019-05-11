var animated = false;
var hamburger = false;
var triger = false;
function thanks(){
  alert('Спасибо за заявку!')
}
$(document).ready(function() {
// Гамбургер

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});


$("#parents_cancel").submit(function() {
  $.ajax({
      type: "POST",
      url: "../php/callback_PC.php",
      data: $(this).serialize()

  }).done(function(){
      $(this).find("input").val("");
      setTimeout(thanks, 800);

      $("#parents_cancel").trigger("reset");
  });
  return false;
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

});