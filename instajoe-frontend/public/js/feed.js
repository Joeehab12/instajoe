$(document).ready(function(){
    $('.uploading .mybtn').on('click',function(){
        $('.loading').fadeIn(1000);
        $('.during-loading-text').fadeIn(1000);
        $('.loading').delay(2000).fadeOut(1000);
        $('.during-loading-text').delay(2000).fadeOut(1000);
        $('.after-loading-text').delay(4000).fadeIn(1000);
        $('.after-loading-text').delay(2000).fadeOut(1000);
    });
    $('.browsing .mybtn').on('click',function(){
        $('.file_browse').click();
    });
    $('.file_browse').on('change',function(event){
        $('.uploading-thumbnail').attr('src',URL.createObjectURL(event.target.files[0]));
    });
    $('body').keyup(function(event){
        if (event.which == 27){
            $('.upload-image-popup').fadeOut(500);
        }
    });
    $('.upload-button').on('click',function(){
        $('.upload-image-popup').fadeIn(500);
    });
    $(window).click(function(){
        $('.upload-image-popup').fadeOut(500);
    });
    $('.upload-image-popup').click(function(event){
    event.stopPropagation();
    });
});
