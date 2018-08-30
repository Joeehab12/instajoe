$(document).ready(function(){
    $('.photos-row img').on('click', function () {
        // $('.dim, .image-popup').fadeIn(500);
        $('.dim,.image-popup').fadeIn(500);
    });
    $('body').keyup(function(event){
        if (event.which == 27){
            $('.dim,.image-popup').fadeOut(500);
        }
    });
});
