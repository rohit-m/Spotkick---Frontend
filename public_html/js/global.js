$(function () {
    $('#datetimepicker1').datetimepicker({
        format:"DD/MM/YYYY",
        inline: true,
        sideBySide: true
    });

    $('#datetimepicker2').datetimepicker({
        format:"DD/MM/YYYY",
        inline: true,
        sideBySide: true
    });

    $('select').selectric();
    
    $('.-continue').click(function(){
        var current_index = $('body').data('index');
        $('div[data-index="'+current_index+'"]').removeClass('active').addClass('inactive');
        current_index++;
        $('div[data-index="'+current_index+'"]').removeClass('inactive').toggleClass('active');
        $('body').data('index',current_index);
    });
});