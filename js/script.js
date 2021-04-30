var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots: true
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 45) {
        $('.main-header').addClass('fixed');
        $('.body').css('margin-top', '45px');

    }
    else {
        $('.main-header').removeClass('fixed');
        $('.body').css('margin-top', '0px');
    }
});

$('.parent').click(function(){
    let current = $(this).parent().find('.childrens');
    $('.childrens').not(current).slideUp()
    $(current).slideToggle();
});

$("#same-as-shipping-address").click(function() {
    if(this.checked) {
        $('.billing-adress').slideUp();
    }else{
        $('.billing-adress').slideDown();
    }
});

/* Checkbox

$("input[type='checkbox']").change(function() {
    if(this.checked) {
        console.log('this is checked');
    }else{
        console.log('This is unchecked');
    }
});

*/

