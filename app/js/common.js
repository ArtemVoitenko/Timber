$(function() {

$('.topSlider').slick({
	dots: true,
	arrows: false,
	autoplay: true,
  autoplaySpeed: 2000,
	draggable: false,
	lazyLoad: 'progressive'
	});
    var show = true;
    var countbox = ".achievments";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
 
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
        if(w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: " ",
                duration: 3000
            });
 
            show = false;
        }
    });
    if($(window).width()>=768){
		$(window).scroll(function(){ 
                           
   if  ($(window).scrollTop() > 200) {                   
      $('.topLine').css(
      {
      		position: "fixed",
					top: 0,
					background: "#000"
      });
       
   }
   else{
   	$('.topLine').css(
      {
      		position: "relative",
					top: "inherit",
					background: "transparent"
      });
   }
});
}
var showNav = $('.showNav');
var mainNav = $('.mainNav');
showNav.click(function(e) {
  e.preventDefault();
  mainNav.slideToggle();
});



      var show2 = true;
    var countbox2 = ".progressCircle";
    $(window).on("scroll load resize", function(){
 
        if(!show2) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
        var w_top2 = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top2 = $(countbox2).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
        var w_height2 = $(window).height();        // Высота окна браузера
        var d_height2 = $(document).height();      // Высота всего документа
 
        var e_height2 = $(countbox2).outerHeight(); // Полная высота блока со счетчиками
 
        if(w_top2 + 200 >= e_top2 || w_height2 + w_top2 == d_height2 || e_height2 + e_top2 < w_height2){
      $('#circle1').circleProgress({
    value: 0.64,
    size: 80,
    thickness: 2,
    animation: {
      duration: 4000
    },
    fill: {
      color: "black"
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('span').html(Math.round(64 * progress) + '<i>%</i>');
  });
   $('#circle2').circleProgress({
    value: 0.22,
    size: 80,
    thickness: 2,
    animation: {
      duration: 4000
    },
    fill: {
      color: "black"
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('span').html(Math.round(22 * progress) + '<i>%</i>');
  });
   $('#circle3').circleProgress({
    value: 0.84,
    size: 80,
    thickness: 2,
    animation: {
      duration: 4000
    },
    fill: {
      color: "black"
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('span').html(Math.round(84 * progress) + '<i>%</i>');
  });
   $('#circle4').circleProgress({
    value: 0.45,
    size: 80,
    thickness: 2,
    animation: {
      duration: 4000
    },
    fill: {
      color: "black"
    }
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('span').html(Math.round(45 * progress) + '<i>%</i>');
  });
 
            show2 = false;
        }
    });
$(".customer").animated("zoomInUp");
$(".workOwerlay").animated("rollIn");
$(".advant").animated("bounceInRight");
$(".tMember").animated("zoomInDown");
$(".progress").animated("rotateIn");
$(".new").animated("flipInY");
});
