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
    $("#fr_less_id").submit(function() {
        $.ajax({
            type: "POST",
            url: "../php/callback_index_1.php",
            data: $(this).serialize()

        }).done(function(){
            $(this).find("input").val("");
            setTimeout(thanks, 800);

			$("#fr_less_id").trigger("reset");
        });
        return false;
});
    $("#fr_less_id_2").submit(function() {
    $.ajax({
        type: "POST",
        url: "../php/callback_index_2.php",
        data: $(this).serialize()

    }).done(function(){
        $(this).find("input").val("");
        setTimeout(thanks, 5800);

        $("#fr_less_id_2").trigger("reset");
    });
    return false;
});
$("#fr_less_id_3").submit(function() {
    $.ajax({
        type: "POST",
        url: "../php/callback_index_3.php",
        data: $(this).serialize()

    }).done(function(){
        $(this).find("input").val("");
        setTimeout(thanks, 5800);

        $("#fr_less_id_3").trigger("reset");
    });
    return false;
});



// Открытие модального окна
$('#sing_up_button').click(function(){
    function step1(){
    $('.modal_window').toggleClass('modal_window_active');
    }
    function step2(){
    $('.free_lesson_window').toggleClass('free_lesson_active');
    }
    
        
    setTimeout(step1,0);
    setTimeout(step2,100);
     
})

//закрытие модального окна
$(document).mouseup(function (e)
{
    var call_back = $("#fr_less_id");

    if (!call_back.is(e.target) && call_back.has(e.target).length === 0) {
        $('.modal_window').removeClass('modal_window_active')
        $('.free_lesson').removeClass('free_lesson_active')
    }
});


// Запись на пробное занятие 
$('#sing_up_mainpage').click(function(){
    function step1(){
    $('.sing_up').css('transform','translateY(-30px)');
    $('.sing_up').css('opacity','0');
    }
    function step2(){
    $('.mainpage_free_lesson').css('display','');
    }
    function step3(){
    $('.sing_up').remove();
    $('.mainpage_free_lesson').toggleClass('mainpage_free_lesson_vision');    
    }
        
    setTimeout(step1,0);
    setTimeout(step2,410);
    setTimeout(step3,420);    
})


//Блоки преймуществ робототехники в SmartLab
$('.detailed_info_AS').css('background-image','url(/img/smartlab_detail.jpg)')
    $(".card_info_AS_1").hover(function(){
        function card_active(){   
        $('.card_info_AS_2').toggleClass('card_info_AS_down'); 
        $('.card_info_AS_3').toggleClass('card_info_AS_down');
        $('.card_info_AS_4').toggleClass('card_info_AS_down');
        $('.card_info_AS_5').toggleClass('card_info_AS_down');
        }
        function info_block_fade(){
        $('.detailed_info_AS').toggleClass('detailed_info_AS_up');
        }
        function add_text_IAS(){
        $('.detailed_info_AS').css('background-image','url(/img/smartlab_detail1.jpg)')
        $('.detailed_info_AS').css('background-position','50% 80%')

        $('#id_p_IAS').html('С анатомической точки зрения, около трети всей площади двигательной проекции коры головного мозга занимает проекция кисти руки, расположенная очень близко от речевой зоны.<br><br>Мелкая моторика рук взаимодействует с такими высшими свойствами сознания, как внимание, мышление, оптико-пространственное восприятие (координация), воображение, наблюдательность, зрительная и двигательная память, речь. <br>В. Сухомлинский писал: «Ум ребенка находится на кончике его пальцев».');
        }
        function info_block_show(){
        $('.detailed_info_AS').removeClass('detailed_info_AS_up');
        }
        
        
        setTimeout(card_active, 0);
        setTimeout(info_block_fade, 0);
        setTimeout(add_text_IAS, 410);
        setTimeout(info_block_show, 410);
        
        
        
    },function(){
        function card_none_active(){           
        $('.card_info_AS_2').removeClass('card_info_AS_down');
        $('.card_info_AS_3').removeClass('card_info_AS_down');
        $('.card_info_AS_4').removeClass('card_info_AS_down');
        $('.card_info_AS_5').removeClass('card_info_AS_down');
        }
        function info_card_show(){
        $('.detailed_info_AS').removeClass('detailed_info_AS_up');
        }
        function info_block_fade(){
        $('.detailed_info_AS').toggleClass('detailed_info_AS_up');
        }
        function add_text_IAS(){
        $('.detailed_info_AS').css('background-image','url(/img/smartlab_detail.jpg)')
        $('#id_p_IAS').html('Даже если будущая профессия не будет относиться к робототехнике так или иначе ребятам придется взаимодействовать с электронными устройствами.<br><br> Курс робототехники дает практические и теоретические знания для общего понимания этих процессов, а ребята с удовольствием изучают окружающий мир через возможности робототехники!');
        }
        function info_block_show(){
        $('.detailed_info_AS').removeClass('detailed_info_AS_up');
        }
        
        
        setTimeout(card_none_active, 20);
        setTimeout(info_card_show, 20);
        setTimeout(info_block_fade, 20);
        setTimeout(add_text_IAS, 410)
        setTimeout(info_block_show, 410);
        
        
                
    });




    $(".card_info_AS_2").hover(function(){
        function card_active(){   
        $('.card_info_AS_1').toggleClass('card_info_AS_down'); 
        $('.card_info_AS_3').toggleClass('card_info_AS_down');
        $('.card_info_AS_4').toggleClass('card_info_AS_down');
        $('.card_info_AS_5').toggleClass('card_info_AS_down');
        }
        function info_block_fade(){
        $('.detailed_info_AS').toggleClass('detailed_info_AS_up');
        }
        function add_text_IAS(){
        $('.detailed_info_AS').css('background-image','url(/img/smartlab_detail2.jpg)')
        $('.detailed_info_AS').css('background-position','50% 80%')
        $('#id_p_IAS').html('Как известно, один в поле не воин. Во многих сферах деятельности достичь успеха можно только благодаря слаженной работе всего коллектива.<br><br>Занимаясь робототехникой, ребенок примеряет на себя разные роли, которые являются серьёзными взрослыми профессиями: на одном этапе он – инженер-конструктор, на другом – программист, на третьем – проектировщик. Поэтому так важно уметь работать в коллективе и сообща находить решения сложных задач.');
        }
        function info_block_show(){
        $('.detailed_info_AS').removeClass('detailed_info_AS_up');
        }
        function card_background(){
        $('.detailed_info_AS').css('background-color','#FFAC1B');
        }
       
        
        setTimeout(card_active, 0);
        setTimeout(info_block_fade, 0);
        setTimeout(card_background, 410);
        setTimeout(add_text_IAS, 410);
        setTimeout(info_block_show, 410);
        
        
    },function(){
        function card_none_active(){           
        $('.card_info_AS_1').removeClass('card_info_AS_down');
        $('.card_info_AS_3').removeClass('card_info_AS_down');
        $('.card_info_AS_4').removeClass('card_info_AS_down');
        $('.card_info_AS_5').removeClass('card_info_AS_down');
        }
        function info_card_show(){
        $('.detailed_info_AS').removeClass('detailed_info_AS_up');
        }
        function info_block_fade(){
        $('.detailed_info_AS').toggleClass('detailed_info_AS_up');
        }
        function add_text_IAS(){
        $('.detailed_info_AS').css('background-image','url(/img/smartlab_detail.jpg)')
        $('#id_p_IAS').html('Даже если будущая профессия не будет относиться к робототехнике так или иначе ребятам придется взаимодействовать с электронными устройствами.<br><br> Курс робототехники дает практические и теоретические знания для общего понимания этих процессов, а ребята с удовольствием изучают окружающий мир через возможности робототехники!');
        }
        function info_block_show(){
        $('.detailed_info_AS').removeClass('detailed_info_AS_up');
        }
        function card_background(){
        $('.detailed_info_AS').css('background-color','#ff771b');
        }
        
        setTimeout(card_none_active, 20);
        setTimeout(info_card_show, 20);
        setTimeout(info_block_fade, 20);
        setTimeout(card_background, 410);
        setTimeout(add_text_IAS, 410)
        setTimeout(info_block_show, 410);
        
          
    });


    $(".card_info_AS_3").hover(function(){
        function card_active(){   
        $('.card_info_AS_1').toggleClass('card_info_AS_down'); 
        $('.card_info_AS_2').toggleClass('card_info_AS_down');
        $('.card_info_AS_4').toggleClass('card_info_AS_down');
        $('.card_info_AS_5').toggleClass('card_info_AS_down');
        }
        function info_block_fade(){
        $('.detailed_info_AS').toggleClass('detailed_info_AS_up')
        }
        function add_text_IAS(){
        $('.detailed_info_AS').css('background-image','url(/img/smartlab_detail3.jpg)')
        $('.detailed_info_AS').css('background-position','50% 80%')
        $('#id_p_IAS').html('Занятия по робототехнике помогают детям развивать навыки критического мышления и решения проблем, которые важны не только в информатике, но и в жизни. Это учит их разбивать большие задачи на более мелкие и более решаемые.<br><br> Ребёнок не просто полагается на восприятия, они могут создавать логические связи, которые помогут понять, как правильно анализировать различные ситуации. Этот навык будет полезен каждому, не только тем, кто захочет в будущем стать инженером или программистом.');
        }
        function info_block_show(){
        $('.detailed_info_AS').removeClass('detailed_info_AS_up')
        }
        setTimeout(card_active, 0);
        setTimeout(info_block_fade, 0);
        setTimeout(add_text_IAS, 410);
        setTimeout(info_block_show, 410);
        
    },function(){
        function card_none_active(){           
        $('.card_info_AS_1').removeClass('card_info_AS_down');
        $('.card_info_AS_2').removeClass('card_info_AS_down');
        $('.card_info_AS_4').removeClass('card_info_AS_down');
        $('.card_info_AS_5').removeClass('card_info_AS_down');
        }
        function info_card_show(){
        $('.detailed_info_AS').removeClass('detailed_info_AS_up')
        }
        function info_block_fade(){
        $('.detailed_info_AS').toggleClass('detailed_info_AS_up')
        }
        function add_text_IAS(){
        $('.detailed_info_AS').css('background-image','url(/img/smartlab_detail.jpg)')
        $('#id_p_IAS').html('Даже если будущая профессия не будет относиться к робототехнике так или иначе ребятам придется взаимодействовать с электронными устройствами.<br><br> Курс робототехники дает практические и теоретические знания для общего понимания этих процессов, а ребята с удовольствием изучают окружающий мир через возможности робототехники!');
        }
        function info_block_show(){
        $('.detailed_info_AS').removeClass('detailed_info_AS_up')
        }
        
        setTimeout(card_none_active, 20);
        setTimeout(info_card_show, 20);
        setTimeout(info_block_fade, 20);
        setTimeout(add_text_IAS, 410)
        setTimeout(info_block_show, 410);
                
    });
    

    $(".card_info_AS_4").hover(function(){
        function card_active(){   
        $('.card_info_AS_1').toggleClass('card_info_AS_down'); 
        $('.card_info_AS_2').toggleClass('card_info_AS_down');
        $('.card_info_AS_3').toggleClass('card_info_AS_down');
        $('.card_info_AS_5').toggleClass('card_info_AS_down');
        }
        function info_block_fade(){
        $('.detailed_info_AS').toggleClass('detailed_info_AS_up')
        }
        function add_text_IAS(){
        $('.detailed_info_AS').css('background-image','url(/img/smartlab_detail4.jpg)')
        $('.detailed_info_AS').css('background-position','50% 50%')
        $('#id_p_IAS').html('Занятия робототехники связаны не только с конструированием различных роботов. Один из важнейших аспектов робототехники является программирование, с помощью которого “оживляются” роботы.<br><br> Преимущество обучения детей программированию в том, что оно развивает их творческий потенциал и предоставляет инструменты для создания мира безграничных возможностей, где они могут создавать свои собственные пути и решения по-своему.');
        }
        function info_block_show(){
        $('.detailed_info_AS').removeClass('detailed_info_AS_up')
        }
        function card_background(){
        $('.detailed_info_AS').css('background-color','#FFAC1B');
        }
        setTimeout(card_active, 0);
        setTimeout(info_block_fade, 0);
        setTimeout(card_background, 410);
        setTimeout(add_text_IAS, 410);
        setTimeout(info_block_show, 410);
        
    },function(){
        function card_none_active(){           
        $('.card_info_AS_1').removeClass('card_info_AS_down');
        $('.card_info_AS_2').removeClass('card_info_AS_down');
        $('.card_info_AS_3').removeClass('card_info_AS_down');
        $('.card_info_AS_5').removeClass('card_info_AS_down');
        }
        function info_card_show(){
        $('.detailed_info_AS').removeClass('detailed_info_AS_up')
        }
        function info_block_fade(){
        $('.detailed_info_AS').toggleClass('detailed_info_AS_up')
        }
        function add_text_IAS(){
        $('.detailed_info_AS').css('background-image','url(/img/smartlab_detail.jpg)')
        $('#id_p_IAS').html('Даже если будущая профессия не будет относиться к робототехнике так или иначе ребятам придется взаимодействовать с электронными устройствами.<br><br> Курс робототехники дает практические и теоретические знания для общего понимания этих процессов, а ребята с удовольствием изучают окружающий мир через возможности робототехники!');
        }
        function info_block_show(){
        $('.detailed_info_AS').removeClass('detailed_info_AS_up')
        }
        function card_background(){
        $('.detailed_info_AS').css('background-color','#ff771b');
        }
        
        setTimeout(card_none_active, 20);
        setTimeout(info_card_show, 20);
        setTimeout(info_block_fade, 20);
        setTimeout(card_background, 410);
        setTimeout(add_text_IAS, 410)
        setTimeout(info_block_show, 410);
                
    });


    $(".card_info_AS_5").hover(function(){
        function card_active(){   
        $('.card_info_AS_1').toggleClass('card_info_AS_down'); 
        $('.card_info_AS_2').toggleClass('card_info_AS_down');
        $('.card_info_AS_3').toggleClass('card_info_AS_down');
        $('.card_info_AS_4').toggleClass('card_info_AS_down');
        }
        function info_block_fade(){
        $('.detailed_info_AS').toggleClass('detailed_info_AS_up')
        }
        function add_text_IAS(){
        $('.detailed_info_AS').css('background-image','url(/img/smartlab_detail5.jpg)')
        $('.detailed_info_AS').css('background-position','50% 50%')    
        $('#id_p_IAS').html('В пространственном мышлении происходит постоянное перекодирование образов, т.е. переход от пространственных образов реальных объектов к их условно-графическим изображениям, от трехмерных изображений к двухмерным и обратно.<br><br> Объем работы, выполняемой мозгом при таком типе мышления, колоссальный! Шестеренки головного мозга крутятся не переставая, формируя всё новые и новые нейронные связи.');
        }
        function info_block_show(){
        $('.detailed_info_AS').removeClass('detailed_info_AS_up')
        }
        setTimeout(card_active, 0);
        setTimeout(info_block_fade, 0);
        setTimeout(add_text_IAS, 410);
        setTimeout(info_block_show, 410);
        
    },function(){
        function card_none_active(){           
        $('.card_info_AS_1').removeClass('card_info_AS_down');
        $('.card_info_AS_2').removeClass('card_info_AS_down');
        $('.card_info_AS_3').removeClass('card_info_AS_down');
        $('.card_info_AS_4').removeClass('card_info_AS_down');
        }
        function info_card_show(){
        $('.detailed_info_AS').removeClass('detailed_info_AS_up')
        }
        function info_block_fade(){
        $('.detailed_info_AS').toggleClass('detailed_info_AS_up')
        }
        function add_text_IAS(){
        $('.detailed_info_AS').css('background-image','url(/img/smartlab_detail.jpg)')
        $('#id_p_IAS').html('Даже если будущая профессия не будет относиться к робототехнике так или иначе ребятам придется взаимодействовать с электронными устройствами.<br><br> Курс робототехники дает практические и теоретические знания для общего понимания этих процессов, а ребята с удовольствием изучают окружающий мир через возможности робототехники!');
        }
        function info_block_show(){
        $('.detailed_info_AS').removeClass('detailed_info_AS_up')
        }
        
        setTimeout(card_none_active, 20);
        setTimeout(info_card_show, 20);
        setTimeout(info_block_fade, 20);
        setTimeout(add_text_IAS, 410)
        setTimeout(info_block_show, 410);
                
    });

// Табличка с заголовком, всплывающая при наведении на блок

    $(".detailed_info_AS").hover(function(){
        function card_shadow(){   
        $('.card_info_AS_1').css('box-shadow','0px 10px 6px -6px rgba(255,119,27,0.5)');
        $('.card_info_AS_1').css('transform','translateY(-5px)');
        $('.card_info_AS_2').css('box-shadow','0px 10px 6px -6px rgba(255,119,27,0.5)');
        $('.card_info_AS_2').css('transform','translateY(-5px)'); 
        $('.card_info_AS_3').css('box-shadow','0px 10px 6px -6px rgba(255,119,27,0.5)');
        $('.card_info_AS_3').css('transform','translateY(-5px)'); 
        $('.card_info_AS_4').css('box-shadow','0px 10px 6px -6px rgba(255,119,27,0.5)');
        $('.card_info_AS_4').css('transform','translateY(-5px)');
        $('.card_info_AS_5').css('box-shadow','0px 10px 6px -6px rgba(255,119,27,0.5)');
        $('.card_info_AS_5').css('transform','translateY(-5px)');  
        }
        
        setTimeout(card_shadow, 0);
        
        
    },function(){
        function card_no_shadow(){   
        $('.card_info_AS_1').css('box-shadow','');
        $('.card_info_AS_1').css('transform','');
        $('.card_info_AS_2').css('box-shadow','');
        $('.card_info_AS_2').css('transform','');
        $('.card_info_AS_3').css('box-shadow','');
        $('.card_info_AS_3').css('transform','');
        $('.card_info_AS_4').css('box-shadow','');
        $('.card_info_AS_4').css('transform','');
        $('.card_info_AS_5').css('box-shadow',''); 
        $('.card_info_AS_5').css('transform','');
        }
            
        setTimeout(card_no_shadow, 0);        
        
                
    });





//Интерактивные кнопки для направлений робототехники
//Подготовительная группа 
$('#direction_button_1').addClass('button_active_white');
$('.our_direction_info h2').html('Подготовительная группа (4-5 лет)');
$('.our_direction_info ul').html('<li>Занимаемся на наборах Lego classic/wedo</li><li>Развиваем мелкую моторику и умение собирать по схеме или образцу</li><li>Составляем простейшие алгоритмы</li><li>В каждом проекте есть поле для творчества</li><li>Сравниваем детали по длине, ширине, высоте, вместимости (на глаз и с помощью измерительных приборов)</li><li>Изучаем окружающий мир через проекты</li><li>Развитие усидчивости</li><li>Делаем задания на развитие логики</li>');

    $('#direction_button_1').click(function(){
    function step1(){
    $('.our_direction_info').css('transform','translateX(-150px)');
    $('.our_direction_info').css('opacity','0');
    $('.our_directions_block img').css('transform','translateX(150px)');
    $('.our_directions_block img').css('opacity','0');
    $('.our_directions_nav button').removeClass('button_active_white');
    $('#direction_button_1').addClass('button_active_white');
    }
    function step2(){
    $('.our_direction_info h2').html('Подготовительная группа (4-5 лет)');
    $('.our_direction_info ul').html('<li>Занимаемся на наборах Lego classic/wedo</li><li>Развиваем мелкую моторику и умение собирать по схеме или образцу</li><li>Составляем простейшие алгоритмы</li><li>В каждом проекте есть поле для творчества</li><li>Сравниваем детали по длине, ширине, высоте, вместимости (на глаз и с помощью измерительных приборов)</li><li>Изучаем окружающий мир через проекты</li><li>Развиваем усидчивости</li><li>Делаем задания на развитие логики</li>');
    
    $('#directuin_img').attr('src','/img/direction1.jpg');
    }
    function step3(){
    $('.our_direction_info').css('transform','');
    $('.our_direction_info').css('opacity','');
    $('.our_directions_block img').css('transform','');
    $('.our_directions_block img').css('opacity','');
    }
    
    setTimeout(step1,0);
    setTimeout(step2,400);
    setTimeout(step3,400);

})

//Младшая группа 
$('#direction_button_2').click(function(){
    function step1(){
    $('.our_direction_info').css('transform','translateX(-150px)');
    $('.our_direction_info').css('opacity','0');
    $('.our_directions_block img').css('transform','translateX(150px)');
    $('.our_directions_block img').css('opacity','0');
    $('.our_directions_nav button').removeClass('button_active_white');
    $('#direction_button_2').addClass('button_active_white');
    }
    function step2(){
    $('.our_direction_info h2').html('Младшая группа (5-7 лет)');
    $('.our_direction_info ul').html('<li>Занимаемся на наборах Lego WeDo/Arduino</li><li>Учимся самостоятельно находить и исправлять ошибки в проекте</li><li>Устанавливаем соотношение между целым и каждой его частью</li><li>Находим сходства и разлличия, опираясь на существующие признаки</li><li>Учимся считать в пределах 10</li><li>Учимся планировать свою деятельность</li><li>Объединяем предметы в группы по разным признакам (форма детали, цвет, размер и тд.)</li><li>Программируем робота в визуальной среде Lego</li>');
    
    $('#directuin_img').attr('src','/img/direction2.jpg');
    }
    function step3(){
    $('.our_direction_info').css('transform','');
    $('.our_direction_info').css('opacity','');
    $('.our_directions_block img').css('transform','');
    $('.our_directions_block img').css('opacity','');
    }
    
    setTimeout(step1,0);
    setTimeout(step2,400);
    setTimeout(step3,400);

})



//Средняя группа
$('#direction_button_3').click(function(){
    function step1(){
    $('.our_direction_info').css('transform','translateX(-150px)');
    $('.our_direction_info').css('opacity','0');
    $('.our_directions_block img').css('transform','translateX(150px)');
    $('.our_directions_block img').css('opacity','0');
    $('.our_directions_nav button').removeClass('button_active_white');
    $('#direction_button_3').addClass('button_active_white');
    }
    function step2(){
    $('.our_direction_info h2').html('Средняя группа (7-9 лет)');
    $('.our_direction_info ul').html('<li>Занимаемся на наборах Lego WeDo/EV3 и Arduino</li><li>Изучаем механизмы для разных конструкций робота</li><li>Конструируем роботов под разные задачи</li><li>Изучаем программирование блоками с параметрами</li><li>Изучаем различные датчики Ev3 и решаем с их помощью простые практические задачи (езда по линии с использованием инфракрасного датчика, запуск механизма по датчику касания и тд.)</li><li>Изучаем основные элементы электроники и учимся собирать схемы</li><li>Получаем соревновательный опыт</li>');
    
    $('#directuin_img').attr('src','/img/direction3.jpg');
    }
    function step3(){
    $('.our_direction_info').css('transform','');
    $('.our_direction_info').css('opacity','');
    $('.our_directions_block img').css('transform','');
    $('.our_directions_block img').css('opacity','');
    }
    
    setTimeout(step1,0);
    setTimeout(step2,400);
    setTimeout(step3,400);

})


//Старшая группа
$('#direction_button_4').click(function(){
    function step1(){
    $('.our_direction_info').css('transform','translateX(-150px)');
    $('.our_direction_info').css('opacity','0');
    $('.our_directions_block img').css('transform','translateX(150px)');
    $('.our_directions_block img').css('opacity','0');
    $('.our_directions_nav button').removeClass('button_active_white');
    $('#direction_button_4').addClass('button_active_white');
    }
    function step2(){
    $('.our_direction_info h2').html('Старшая группа (10-17 лет)');
    $('.our_direction_info ul').html('<li>Занимаемся на наборах Lego EV3 и Arduino</li><li>Создаем и программируем роботов, решая при этом практико-ориентированные задачи</li><li>Изучаем сложные механизмы и конструкции</li><li>Переходит с визуального программирования к текстовому</li><li>Изучаем принципы процедурного и объектно-ориентированного программирования</li><li>Изучаем физические явления и работу с формулами</li><li>Решаем олимпиадные задачи и получаем соревновательный опыт</li>');
    
    $('#directuin_img').attr('src','/img/direction4.jpg');
    }
    function step3(){
    $('.our_direction_info').css('transform','');
    $('.our_direction_info').css('opacity','');
    $('.our_directions_block img').css('transform','');
    $('.our_directions_block img').css('opacity','');
    }
    
    setTimeout(step1,0);
    setTimeout(step2,400);
    setTimeout(step3,400);

})
});