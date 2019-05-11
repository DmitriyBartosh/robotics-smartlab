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
// Отправка формы 
$("#fr_lessd_id").submit(function() {
    $.ajax({
        type: "POST",
        url: "../php/callback_OD_CB.php",
        data: $(this).serialize()

    }).done(function(){
        $(this).find("input").val("");
        setTimeout(thanks, 800);

        $("#fr_lessd_id").trigger("reset");
    });
    return false;
});

$("#fr_lessq_id").submit(function() {
    $.ajax({
        type: "POST",
        url: "../php/callback_OD_Q.php",
        data: $(this).serialize()

    }).done(function(){
        $(this).find("input").val("");
        setTimeout(thanks, 800);

        $("#fr_lessq_id").trigger("reset");
    });
    return false;
});
// Запись на курс (5 категорий)
// Первый курс
$('#sing_up_OD_1').click(function(){
    function step1(){
    $('.modal_window_OD').toggleClass('modal_window_active');
    $('#fr_less_heading').html('Запись на курс<br> "Калькулятор"')
    }
    function step2(){
    $('.free_lesson_OD').toggleClass('free_lesson_active');

    }
    
        
    setTimeout(step1,0);
    setTimeout(step2,100);
     
})
// Второй курс
$('#sing_up_OD_2').click(function(){
    function step1(){
    $('.modal_window_OD').toggleClass('modal_window_active');
    $('#fr_less_heading').html('Запись на курс<br> "HTML 8+"')
    }
    function step2(){
    $('.free_lesson_OD').toggleClass('free_lesson_active');

    }
    
        
    setTimeout(step1,0);
    setTimeout(step2,100);
     
})
// Третий курс
$('#sing_up_OD_3').click(function(){
    function step1(){
    $('.modal_window_OD').toggleClass('modal_window_active');
    $('#fr_less_heading').html('Запись на курс<br> "Scratch 5+"')
    }
    function step2(){
    $('.free_lesson_OD').toggleClass('free_lesson_active');

    }
    
        
    setTimeout(step1,0);
    setTimeout(step2,100);
     
})
// Четвертый курс
$('#sing_up_OD_4').click(function(){
    function step1(){
    $('.modal_window_OD').toggleClass('modal_window_active');
    $('#fr_less_heading').html('Запись на курс<br> "Математика 11+"')
    }
    function step2(){
    $('.free_lesson_OD').toggleClass('free_lesson_active');

    }
    
        
    setTimeout(step1,0);
    setTimeout(step2,100);
     
})
// Пятый курс
$('#sing_up_OD_5').click(function(){
    function step1(){
    $('.modal_window_OD').toggleClass('modal_window_active');
    $('#fr_less_heading').html('Запись на летний<br> информационный курс')
    }
    function step2(){
    $('.free_lesson_OD').toggleClass('free_lesson_active');

    }
    
        
    setTimeout(step1,0);
    setTimeout(step2,100);
     
})

$(document).mouseup(function (e)
{
    var call_back = $("#fr_lessd_id");

    if (!call_back.is(e.target) && call_back.has(e.target).length === 0) {
        $('.modal_window_OD').removeClass('modal_window_active')
        $('.free_lesson_OD').removeClass('free_lesson_active')
    }
});
//Задать вопрос по курсу
$('.question_OD').click(function(){
    function step1(){
    $('.modal_window_question').toggleClass('modal_window_active');
    $('.gate').css('width','700px')
    $('.free_lesson_question').css('max-width','900px')
    
    }
    function step2(){
    $('.free_lesson_question').toggleClass('free_lesson_active');
    
    }
    
        
    setTimeout(step1,0);
    setTimeout(step2,100);
     
})
$(document).mouseup(function (e)
{
    var call_back = $("#fr_lessq_id");

    if (!call_back.is(e.target) && call_back.has(e.target).length === 0) {
        $('.modal_window_question').removeClass('modal_window_active')
        $('.free_lesson_question').removeClass('free_lesson_active')
        $('.gate').css('width','')
        $('.free_lesson_question').css('max-width','')
    }
});
});