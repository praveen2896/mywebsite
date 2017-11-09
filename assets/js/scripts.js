$(document).ready(function(){
      //$(".button-collapse").show();
      //$('.materialboxed').materialbox();
     $('#button2').hide();
      $('.parallax').parallax();
        $('.scrollspy').scrollSpy();
       $('#button1').addClass('animated rubberBand');
       $('#button2').addClass('animated rubberBand');
       $('.carousel').carousel();
        $('.modal').modal();
       $("#button1").on('click',function(){
         $('#button1').addClass('animated wobble');
       });
       $("#r").on('click',function(){
         $('#button1').show();
       })
       $("#button3").on('click',function(){
         $('#button2').hide();
       })
      $(".button-collapse").on('click',function(){
        $(".button-collapse").sideNav();
      });

    });
