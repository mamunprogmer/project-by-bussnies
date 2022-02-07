$(function(){

      //slick 
      $('.slick_js').slick({
       
        infinite: true,
        slidesToShow: 1,
        slidesToscroll: 1,
        nextArrow:".next",
        prevArrow:".prev",
        dots:true,
       
       
       
        
      });
     
      $('.test_main').slick({
       
        infinite: true,
        slidesToShow: 2,
        slidesToscroll: 1,
        arrows:false,
        dots:true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
            }
          },
          
        ]
       
       
        
      });
     
      // lightbox

      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      });

      // mixtup
      var mixer = mixitup('.work_main');


  // pre loader

      
    $(window).on("load", function(){
      $(".preloder").delay(4000).fadeOut(1500)
         })

      // backto top

      $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 50){
          $('.backto_top i').fadeIn(500)
        }
        else{
          $('.backto_top i').fadeOut(500)
        }
        if(scrolling > 100){
          $('.manu').addClass("nav")
        }else{
          $('.manu').removeClass("nav")
        }
      })


      $(".backto_top i").click(function(){
        $('html, body').animate({
          scrollTop:0
        }, 1000)
      })

      // $(window).scroll(function(){
      //   var scrolling = $(this).scrollTop();

      //   if(scrolling > 50){
      //     $(".back_to_top i").fadeIn(500)
      //   }else{
      //     $(".back_to_top i").fadeOut(500)
      //   }
      //   if(scrolling > 100){
      //     $('.head').addClass("nav_bg")
      //   }else{
      //     $('.head').removeClass("nav_bg")
      //   }

           
      



      // })
      // $('.back_to_top i').click(function(){
      //   $('html, body').animate({
      //     scrollTop:0
      //   }, 2000)
      // })
});