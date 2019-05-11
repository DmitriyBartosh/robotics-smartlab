function thanks(){
    alert('Спасибо за заявку! Скоро мы с Вами свяжемся.')
}
$(document).ready(function () {

    $("#fr_less_id").submit(function() {
        $.ajax({
            type: "POST",
            url: "../php/callback_index.php",
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
        url: "../php/callback_index.php",
        data: $(this).serialize()

    }).done(function(){
        $(this).find("input").val("");
        setTimeout(thanks, 800);

        $("#fr_less_id_2").trigger("reset");
    });
    return false;
    });

    $("#fr_lessd_id").submit(function() {
        $.ajax({
            type: "POST",
            url: "../php/callback_OD.php",
            data: $(this).serialize()
    
        }).done(function(){
            $(this).find("input").val("");
            setTimeout(thanks, 800);
    
            $("#fr_lessd_id").trigger("reset");
        });
        return false;
        });
});