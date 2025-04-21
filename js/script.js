$(document).ready(function(){
    var swiper = new Swiper(".m_con6_pb", {
        slidesPerView : 5,
        spaceBetween : 30,
        autoplay:{
            delay: 2500,
            disableOnInteraction: false,
            loop: true,
          },
        navigation: {
            nextEl: ".swiper-button-next, .next",
            prevEl: ".swiper-button-prev, .prev",
        },
    });
    let m_con1 = $(".m_con1").offset().top - 130;
    $(window).scroll(function(){
        let wt = $(window).scrollTop();

        if (wt > m_con1){
            $(".menu_box").addClass("menu_s");
        }
        else{
            $(".menu_box").removeClass("menu_s");
        }

    });
});
