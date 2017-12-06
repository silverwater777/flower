$( document ).ready(function() {
	$('.menu-opener').click(function(){
		$(this).toggleClass('opened');
		$('.header_nav').toggleClass('not-active');
	});
	(function($){
		$(".header_nav").mCustomScrollbar();
	})(jQuery);
	$(".header_nav").mCustomScrollbar({
   		axis:"x" // horizontal scrollbar
	});
	$(".header_nav").mCustomScrollbar({
   		keyboard:{ scrollType: "stepped" }
	});
	
	 $(".slider").each(function () { // обрабатываем каждый слайдер
	  var obj = $(this);
	  $(obj).append("<div class='nav'></div>");
	  $(obj).find("li").each(function () {
	   $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
	   $(this).addClass("slider"+$(this).index());
	  });
	  $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
	 });
	});
	function sliderJS (obj, sl) { // slider function
	 var ul = $(sl).find("ul"); // находим блок
	 var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
	 var step = $(bl).width(); // ширина объекта
	 $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
	}
	$(document).on("click", ".slider .nav span", function() { // slider click navigate
	 var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
	 $(sl).find("span").removeClass("on"); // убираем активный элемент
	 $(this).addClass("on"); // делаем активным текущий
	 var obj = $(this).attr("rel"); // узнаем его номер
	 sliderJS(obj, sl); // слайдим
	 return false; 

});
	$('html').on('click',function() {
		window.scrollTo(0, 'document.documentElement.clientHeight');
		});

	