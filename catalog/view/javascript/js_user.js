function roman_catalog_list(){
	localStorage.setItem('cms_blog_style', 'list');
	let catalog_grid = document.querySelector('.record_columns.colums_cms_blog_grid');
	if(typeof catalog_grid != 'undefined' && catalog_grid != null){
		catalog_grid.classList.remove('colums_cms_blog_grid');
		catalog_grid.classList.add('colums_cms_blog_list');
	}
}
function roman_catalog_grid(){
	localStorage.setItem('cms_blog_style', 'grid');
	let catalog_list = document.querySelector('.record_columns.colums_cms_blog_list');
	if(typeof catalog_list != 'undefined' && catalog_list != null){
		catalog_list.classList.remove('colums_cms_blog_list');
		catalog_list.classList.add('colums_cms_blog_grid');
	}
}

function init_roman_catalog_list(){
	let catalog_style = localStorage.getItem('cms_blog_style');
	if(catalog_style == null){
		catalog_style = 'grid';
	}

	let catalog_grid = document.querySelector('.record_columns.colums_cms_blog_grid');
	if(typeof catalog_grid != 'undefined' && catalog_grid != null){
		catalog_grid.classList.remove('colums_cms_blog_grid');
		catalog_grid.classList.add('colums_cms_blog_'+catalog_style);
	}
}
		
jQuery(document).ready(function ($) {
    
    
	init_roman_catalog_list();
    
    
    // /production/cardboard-boxes/
    // Производство упаковки > Производство картонных коробок
    if ($('.egor-2023-content-utu .swiper-example')) {
      const swiper = new Swiper('.egor-2023-content-utu .swiper-example', {
        // Optional parameters
        loop: true,
        spaceBetween: 10,
    
        breakpoints: {
          320: {
            slidesPerView: 2,
          },
          450: {
            slidesPerView: 3,
          },
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.egor-2023-content-utu .swiper-button-next',
          prevEl: '.egor-2023-content-utu .swiper-button-prev',
        },
      });
    
      let swiper2 = new Swiper(".egor-2023-content-utu .sliderImg", {
        loop: true,
        spaceBetween: 15,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "vertical",
        slidesPerView: 3,
    
      });
      let swiper3 = new Swiper(".egor-2023-content-utu .sliderImg2", {
        loop: true,
        spaceBetween: 10,
        effect: 'fade',
        navigation: {
          nextEl: ".egor-2023-content-utu .swiper-button-next2",
          prevEl: ".egor-2023-content-utu .swiper-button-prev2",
        },
        thumbs: {
          swiper: swiper2,
        },
      });
    }


	
	/*****************************/
	/* маска для номера телефона */
	/*****************************/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
	



	$("#phone_big_blog_baner").mask("+7(999) 999-99-99");
	$("#phone_form_baner_article").mask("+7(999) 999-99-99");
	$("#phone_form_modal").mask("+7(999) 999-99-99");
	$("#quickorderphone").mask("+7(999) 999-99-99");

    /**
     * Переключаем стиль листинга товаров из списка в сетку при определеннойширине экрана
     */ 
    layoutGridProducts();
    
    $(window).resize(function(){
        let windowWidth = $('body').innerWidth();
        layoutGridProducts(windowWidth);
    });
    
    function layoutGridProducts(windowWidthChange = 0){
        let list_wrapper = $(".products .product-layout.product-list");

        let windowWidth = $('body').innerWidth();
        if(windowWidthChange > 0){
            windowWidth = windowWidthChange;
        }

        if(windowWidth < 768){
            if( list_wrapper.length > 0){
                list_wrapper.removeClass('product-list').addClass('product-grid');
                $('#list-view').addClass('hidden');
                $('#grid-view').addClass('hidden');
            }
        }else{
            $('#list-view').removeClass('hidden');
            $('#grid-view').removeClass('hidden');
            
            if($('#list-view').hasClass("active")){
                $(".products .product-layout.product-grid").removeClass('product-grid').addClass('product-list');
            }
        }
    }
    /**
     * \\END Переключаем стиль листинга товаров из списка в сетку при определеннойширине экрана
     */ 


	/*******************************/
	/* Р¤РёРєСЃРёСЂРѕРІР°РЅРЅС‹Р№ РјРѕРґСѓР»СЊ СЃСЃС‹Р»РѕРє */
	/*******************************/
	$(function(){
		//var r=0, dir=true;
		
		if($('div').is('#modul_fix_links')){
			//alert('Р‘Р»РѕРє С„РёРєСЃРёСЂРѕРІР°РЅРЅС‹С… СЃСЃС‹Р»РѕРє РѕС‚РєСЂС‹С‚СЊ');
			$('div#modul_fix_links').show(500);
		}
		
		/* РїСЂРё РЅР°Р¶Р°С‚РёРё */
		$('#toogle_modul_fix_links').bind('click', function() {
			
			$('div#modul_fix_links').addClass('right_170m');
			$('div#modul_fix_links').addClass('obyaz');

			$.cookie("position_links", 'off', { 
				expires: 7, 
				path: "/" 
			});
			
			/*r = 220;
			$('div#modul_fix_links').stop().animate({right: '-'+r+'px'}, 500);
			$('div#modul_fix_links_off').show(500);
			*/
			/*$.ajax({
				type: "POST",
				url: "/cookie_ajax_fix_links.php",
				data: 'position_links=off',
				success: function(html){

				},
				error: function(){
					alert('РћС€РёР±РєР°');
				}
			});*/
			
			
		});
		
		/* Р•СЃР»Рё Р±Р»РѕРє Р·Р°РєСЂС‹С‚ */
		$('div#modul_fix_links_off').bind('click', function() {
			//alert('Р‘Р»РѕРє Р·Р°РєСЂС‹С‚');
			$('div#modul_fix_links').stop().animate({right: '0px'}, 500);
			$('div#modul_fix_links_off').hide(500);
			

			$.cookie("position_links", 'on', { 
				expires: 7, 
				path: "/" 
			});

			/*$.ajax({
				type: "POST",
				url: "/cookie_ajax_fix_links.php",
				data: 'position_links=on',
				success: function(html){

				},
				error: function(){
					alert('РћС€РёР±РєР°');
				}
			});*/
		});
		
		
	});


	/************************/
	/* Читаем GET параметры */
	/************************/
	let my_uri = document.location;
	let utm_medium = '';
	let utm_source = '';
	let utm_campaign = '';
	let utm_content = '';
	let utm_term = '';
	let position_links = '';
	function getParam(e){
		utm_medium = getURLParam(e.search, 'utm_medium');
		utm_source = getURLParam(e.search, 'utm_source');
		utm_campaign = getURLParam(e.search, 'utm_campaign');
		utm_content = getURLParam(e.search, 'utm_content');
		utm_term = getURLParam(e.search, 'utm_term');
	  
		
		
		if(utm_medium != ''){
			//$.cookie('utmmedium', utm_medium);
			$.cookie("utmmedium", utm_medium, { 
				expires: 7, 
				path: "/" 
			});
			//console.log('юзаем get параметр: '+utm_medium);
		}else{
			if(typeof $.cookie('utmmedium') == "undefined"){
				utm_medium = '';
				//console.log('опусташаем utm_medium');
			}else{
				utm_medium = $.cookie('utmmedium');
				//console.log('юзаем куки: '+utm_medium);
			}
		}
		
		if(utm_source != ''){
			$.cookie("utmsource", utm_source, { 
				expires: 7, 
				path: "/" 
			});
		}else{
			if(typeof $.cookie('utmsource') == "undefined"){
				utm_source = '';
			}else{
				utm_source = $.cookie('utmsource');
			}
		}
		
		if(utm_campaign != ''){
			$.cookie("utmcampaign", utm_campaign, { 
				expires: 7, 
				path: "/" 
			});
		}else{
			if(typeof $.cookie('utmcampaign') == "undefined"){
				utm_campaign = '';
			}else{
				utm_campaign = $.cookie('utmcampaign');
			}
		}
		
		if(utm_content != ''){
			$.cookie("utmcontent", utm_content, { 
				expires: 7, 
				path: "/" 
			});
		}else{
			if(typeof $.cookie('utmcontent') == "undefined"){
				utm_content = '';
			}else{
				utm_content = $.cookie('utmcontent');
			}
		}
		
		if(utm_term != ''){
			$.cookie("utmterm", utm_term, { 
				expires: 7, 
				path: "/" 
			});
		}else{
			if(typeof $.cookie('utmterm') == "undefined"){
				utm_term = '';
			}else{
				utm_term = $.cookie('utmterm');
			}
		}
		
		
		
		
		
		
		
	}
	function getURLParam(target, name) {
	  return decodeURI(target.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(name).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
	}
	
	
	
	getParam(my_uri);


/*
	console.log(utm_medium);
	console.log(utm_source);
	console.log(utm_campaign);
	console.log(utm_content);
	console.log(utm_term);
*/
	
	
	/* Анимация цифр */
	/*$(".countup").spincrement({
		from: 0,                // Стартовое число
		to: false,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
		decimalPlaces: 0,       // Сколько знаков оставлять после запятой
		decimalPoint: ".",      // Разделитель десятичной части числа
		thousandSeparator: " ", // Разделитель тыcячных
		duration: 2000          // Продолжительность анимации в миллисекундах
	});*/
	
	var show = true;
    var countbox = ".utupack_v_cifrah";
	if($("div").is(countbox)){
		$(window).on("scroll load resize", function(){
			var w_width = $(window).width();        // Ширина окна браузера
			
			if(w_width >= '992'){
				if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
		 
				var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
				var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
		 
				var w_height = $(window).height();        // Высота окна браузера
				var d_height = $(document).height();      // Высота всего документа
		 
				var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
		 
				if(w_top >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
					$(".countup").spincrement({
						from: 0,                // Стартовое число
						to: false,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
						decimalPlaces: 0,       // Сколько знаков оставлять после запятой
						decimalPoint: ".",      // Разделитель десятичной части числа
						thousandSeparator: " ", // Разделитель тыcячных
						duration: 7000          // Продолжительность анимации в миллисекундах
					});
		 
					show = false;
				}
			}
		});
	}
	
	
	
	
	
	
	var h_hght = 96; // высота шапки
	var h_mrg = 0;    // отступ когда шапка уже не видна
                 
	$(function(){
	 
		var elem = $('#top');
		var top = $(this).scrollTop();
		
		if(top > h_hght){
			elem.addClass('top_mini');
			//console.log('за пределами');
		}else{
			if(elem.hasClass('top_mini')){
				elem.removeClass('top_mini');
			}
			//console.log('Вверху');
		}
		
		
		 /*
		if(top >= h_hght){
			elem.addClass('top_mini');
		}else{
			if(elem).hasClass('top_mini'){
				elem.removeClass('top_mini');
			}
		}
		 */
		$(window).scroll(function(){
			top = $(this).scrollTop();
			//console.log(top);
			//console.log(top);
			 
		/*	if (top+h_mrg < h_hght) {
				elem.css('top2', (h_hght-top));
			} else {
				elem.css('top2', h_mrg);
			}*/
			//console.log(top);
			if(top > h_hght){
				elem.addClass('top_mini');
				//console.log('за пределами');
			}else{
				if(elem.hasClass('top_mini')){
					elem.removeClass('top_mini');
				}
				//console.log('Вверху');
			}
		});
	 
	});
	
	
	
	
	/**********************************************/
	/* Функция анимации скидочных цен в категории */
	/* Смотреть файл filterpro.min.js на строке №137 по 172 */
	/**********************************************/
	$(function(){
		
		//if($('#products_container').find("product-grid")){ alert(".product-grid"); };
		$('.product-grid .discounts_price_wrapper').hover(function() {
			//alert('TEST');
			$(this).children('button').children("span.discounts_price_title").fadeIn(400);
			$(this).children('button').children("span.discounts_price_title").css({"bo-shedow":"1px px 5px #000"});
			$(this).children(".discounts_price").fadeIn(400);
		}, function() {
			$(this).children('button').children("span.discounts_price_title").fadeOut(400);
			$(this).children(".discounts_price").fadeOut(400);
		});
		
		$('.button_price_wrapper').hover(function() {
			$(this).children('button').children("span.discounts_price_title").fadeIn(400);
		}, function() {
			$(this).children('button').children("span.discounts_price_title").fadeOut(400);
		});
		

	});

	
	/*****************************************************/
	/* Функция кратности кол-ва товара в карточке товара */
	/*****************************************************/

	$(function() {
		//var multiplicity = 100;
		/*var multiplicity = $('input[name="kratnost"]').val();
		multiplicity = Number(multiplicity);
		//alert(multiplicity);
		var inputCount = $('input[name="quantity"]');
		var inputOperations = $('input[name^="op"]');
		
		var mathItUp = {
			'+': function (x, y) { return x + y },
			'-': function (x, y) { if(x <= multiplicity){return multiplicity;}else{return x - y} }
			//'-': function (x, y) { return x - y }
		};*/

		$('input[name^="op"]').on('click', function() {

			var multiplicity = $(this).parent().find('input[name="kratnost"]').val();
			multiplicity = Number(multiplicity);
			//alert(multiplicity);
			var inputCount = $(this).parent().find('input[name="quantity"]');
			var inputOperations = $(this).parent().find('input[name^="op"]');

			var mathItUp = {
				'+': function (x, y) { return x + y },
				'-': function (x, y) { if(x <= multiplicity){return multiplicity;}else{return x - y} }
				//'-': function (x, y) { return x - y }
			};

			var countCurrent = inputCount.val();
			var countUpdated = mathItUp[$(this).val()](parseInt(countCurrent), multiplicity);
			inputCount.val(countUpdated);
		});

		$('input[name="quantity"]').on('mouseout', function() {

			var multiplicity = $(this).parent().find('input[name="kratnost"]').val();
			multiplicity = Number(multiplicity);
			//alert(multiplicity);
			var inputCount = $(this).parent().find('input[name="quantity"]');
			var inputOperations = $(this).parent().find('input[name^="op"]');

			var mathItUp = {
				'+': function (x, y) { return x + y },
				'-': function (x, y) { if(x <= multiplicity){return multiplicity;}else{return x - y} }
				//'-': function (x, y) { return x - y }
			};

			var countCurrent = inputCount.val();
			var countUpdated = Math.ceil(countCurrent / multiplicity) * multiplicity;
			inputCount.val(countUpdated);
		});
	});
	
	
	/**************************************************/
	/* Функция подсветки скидочной цены по количеству */
	/**************************************************/
	$(function(){
		var input_quantity = $("#input-quantity").val(); // Узнаем кол-во товаров при загрузки страницы
		var count_disconts = $(".skidki_product").length; // Узнаем кол-во скидочных цен

		vals_discounts=[]
		$(".skidki_product").each(function() {
			vals_discounts.push($(this).data("count-discount")); // Создаем массив скидочных цен со значением их количества
		})
		
		// сортируем массив чисел по возрастанию
		vals_discounts.sort(function (a, b) {
			return a - b;
		});
		//console.log(vals_discounts);
			
			/* функция срабатывает 1 раз при загрузки страницы */
			$(function(){
				input_quantity = $("#input-quantity").val(); // Узнаем кол-во товаров при загрузки страницы
				//alert(input_quantity);
				var closestLeft,
					closestRight,
					closestCurrent,
					current;

				for (i = 0; i < count_disconts; i++) {
					current = vals_discounts[i];
					if (current == input_quantity && (typeof closestLeft === 'undefined' || closestLeft < current)) {
						closestCurrent = current;
					}else if (current < input_quantity && (typeof closestLeft === 'undefined' || closestLeft < current)) {
						closestLeft = current;
					} else if (current > input_quantity && (typeof closestRight === 'undefined' || closestRight > current)) {
						closestRight = current;
					}
				}
				
				//console.log('closestLeft: ' + closestLeft + '; closestRight: ' + closestRight+'; closestCurrent: '+closestCurrent);

				if(typeof closestCurrent !== 'undefined'){
					$('.skidki_product').removeClass('active_diskount_block');
					$('[data-count-discount="'+closestCurrent+'"]').addClass('active_diskount_block');
				}else if(typeof closestCurrent === 'undefined' && typeof closestLeft !== 'undefined'){
					$('.skidki_product').removeClass('active_diskount_block');
					$('[data-count-discount="'+closestLeft+'"]').addClass('active_diskount_block');
				}else if(typeof closestCurrent === 'undefined' && typeof closestLeft === 'undefined' && typeof closestRight !== 'undefined'){
					$('.skidki_product').removeClass('active_diskount_block');
					//$('[data-count-discount="'+closestRight+'"]').addClass('active_diskount_block');
				}
			});
		
		/* После изменения кол-ва товара просчитываем какой блок скидок подсветить */
		//$("input#input-quantity").change(function(){
		$("#product input#input-quantity").keyup(function(){
			input_quantity = $("#input-quantity").val(); // Узнаем кол-во товаров при загрузки страницы
			//alert(input_quantity);
			var closestLeft,
				closestRight,
				closestCurrent,
				current;
			for (i = 0; i < count_disconts; i++) {
				current = vals_discounts[i];
				
				if (current == input_quantity && (typeof closestLeft === 'undefined' || closestLeft < current)) {
					closestCurrent = current;
				}else if (current < input_quantity && (typeof closestLeft === 'undefined' || closestLeft < current)) {
					closestLeft = current;
				} else if (current > input_quantity && (typeof closestRight === 'undefined' || closestRight > current)) {
					closestRight = current;
				}
			}
			
			//console.log('closestLeft: ' + closestLeft + '; closestRight: ' + closestRight+'; closestCurrent: '+closestCurrent);
			
			if(typeof closestCurrent !== 'undefined'){
				$('.skidki_product').removeClass('active_diskount_block');
				$('[data-count-discount="'+closestCurrent+'"]').addClass('active_diskount_block');
			}else if(typeof closestCurrent === 'undefined' && typeof closestLeft !== 'undefined'){
				$('.skidki_product').removeClass('active_diskount_block');
				$('[data-count-discount="'+closestLeft+'"]').addClass('active_diskount_block');
			}else if(typeof closestCurrent === 'undefined' && typeof closestLeft === 'undefined' && typeof closestRight !== 'undefined'){
				$('.skidki_product').removeClass('active_diskount_block');
				//$('[data-count-discount="'+closestRight+'"]').addClass('active_diskount_block');
			}
			
		});
		$(".product-layout .product-thumb .input-quantity-list").keyup(function(){
			input_quantity = $(this).parent().find('.input-quantity-list').val(); // Узнаем кол-во товаров при загрузки страницы
			//alert(input_quantity);
			let closestLeft,
				closestRight,
				closestCurrent,
				current;

			let disconts = $(this).parents('.bottom_button_list_products').find('.discounts_price_wrapper .discounts_price ul li');
			let disconts_before = $(this).parents('.bottom_button_list_products').find('.discounts_price_wrapper .discounts_price ul');
			let count_disconts = disconts.length;

			let vals_discounts = [];
			disconts.each(function() {
				vals_discounts.push($(this).data("count-discount")); // Создаем массив скидочных цен со значением их количества
			});

			for (i = 0; i < count_disconts; i++) {
				current = vals_discounts[i];

				if (current == input_quantity && (typeof closestLeft === 'undefined' || closestLeft < current)) {
					closestCurrent = current;
				}else if (current < input_quantity && (typeof closestLeft === 'undefined' || closestLeft < current)) {
					closestLeft = current;
				} else if (current > input_quantity && (typeof closestRight === 'undefined' || closestRight > current)) {
					closestRight = current;
				}
			}

			if(typeof closestCurrent !== 'undefined'){
				disconts.removeClass('active_diskount_block');
				disconts_before.find('[data-count-discount="'+closestCurrent+'"]').addClass('active_diskount_block');
			}else if(typeof closestCurrent === 'undefined' && typeof closestLeft !== 'undefined'){
				disconts.removeClass('active_diskount_block');
				disconts_before.find('[data-count-discount="'+closestLeft+'"]').addClass('active_diskount_block');
			}else if(typeof closestCurrent === 'undefined' && typeof closestLeft === 'undefined' && typeof closestRight !== 'undefined'){
				disconts.removeClass('active_diskount_block');
				disconts_before.find('[data-count-discount="'+closestRight+'"]').addClass('active_diskount_block');
			}
		});

		$("#product input[name='op-plus']").click(function(){
			input_quantity = $("#input-quantity").val(); // Узнаем кол-во товаров при загрузки страницы
			//alert(input_quantity);
			var closestLeft,
				closestRight,
				closestCurrent,
				current;
			for (i = 0; i < count_disconts; i++) {
				current = vals_discounts[i];

				if (current == input_quantity && (typeof closestLeft === 'undefined' || closestLeft < current)) {
					closestCurrent = current;
				}else if (current < input_quantity && (typeof closestLeft === 'undefined' || closestLeft < current)) {
					closestLeft = current;
				} else if (current > input_quantity && (typeof closestRight === 'undefined' || closestRight > current)) {
					closestRight = current;
				}
			}

			//console.log('closestLeft: ' + closestLeft + '; closestRight: ' + closestRight+'; closestCurrent: '+closestCurrent);

			if(typeof closestCurrent !== 'undefined'){
				$('.skidki_product').removeClass('active_diskount_block');
				$('[data-count-discount="'+closestCurrent+'"]').addClass('active_diskount_block');
			}else if(typeof closestCurrent === 'undefined' && typeof closestLeft !== 'undefined'){
				$('.skidki_product').removeClass('active_diskount_block');
				$('[data-count-discount="'+closestLeft+'"]').addClass('active_diskount_block');
			}else if(typeof closestCurrent === 'undefined' && typeof closestLeft === 'undefined' && typeof closestRight !== 'undefined'){
				$('.skidki_product').removeClass('active_diskount_block');
				//$('[data-count-discount="'+closestRight+'"]').addClass('active_diskount_block');
			}
		});
		$(".product-layout .product-thumb input[name='op-plus']").click(function(){
			input_quantity = $(this).parent().find('.input-quantity-list').val(); // Узнаем кол-во товаров при загрузки страницы
			//alert(input_quantity);
			let closestLeft,
				closestRight,
				closestCurrent,
				current;

			let disconts = $(this).parents('.bottom_button_list_products').find('.discounts_price_wrapper .discounts_price ul li');
			let disconts_before = $(this).parents('.bottom_button_list_products').find('.discounts_price_wrapper .discounts_price ul');
			let count_disconts = disconts.length;

			let vals_discounts = [];
			disconts.each(function() {
				vals_discounts.push($(this).data("count-discount")); // Создаем массив скидочных цен со значением их количества
			});

			for (i = 0; i < count_disconts; i++) {
				current = vals_discounts[i];

				if (current == input_quantity && (typeof closestLeft === 'undefined' || closestLeft < current)) {
					closestCurrent = current;
				}else if (current < input_quantity && (typeof closestLeft === 'undefined' || closestLeft < current)) {
					closestLeft = current;
				} else if (current > input_quantity && (typeof closestRight === 'undefined' || closestRight > current)) {
					closestRight = current;
				}
			}

			if(typeof closestCurrent !== 'undefined'){
				disconts.removeClass('active_diskount_block');
				disconts_before.find('[data-count-discount="'+closestCurrent+'"]').addClass('active_diskount_block');
			}else if(typeof closestCurrent === 'undefined' && typeof closestLeft !== 'undefined'){
				disconts.removeClass('active_diskount_block');
				disconts_before.find('[data-count-discount="'+closestLeft+'"]').addClass('active_diskount_block');
			}else if(typeof closestCurrent === 'undefined' && typeof closestLeft === 'undefined' && typeof closestRight !== 'undefined'){
				disconts.removeClass('active_diskount_block');
				disconts_before.find('[data-count-discount="'+closestRight+'"]').addClass('active_diskount_block');
			}
		});

		$(".opt_price_modal_mini").click(function(){
			console.log('click');
			$(this).parents('.product-thumb').toggleClass("active");
		});

		$("#product input[name='op-minus']").click(function(){
			input_quantity = $("#input-quantity").val(); // Узнаем кол-во товаров при загрузки страницы
			//alert(input_quantity);
			var closestLeft,
				closestRight,
				closestCurrent,
				current;
			for (i = 0; i < count_disconts; i++) {
				current = vals_discounts[i];

				if (current == input_quantity && (typeof closestLeft === 'undefined' || closestLeft < current)) {
					closestCurrent = current;
				}else if (current < input_quantity && (typeof closestLeft === 'undefined' || closestLeft < current)) {
					closestLeft = current;
				} else if (current > input_quantity && (typeof closestRight === 'undefined' || closestRight > current)) {
					closestRight = current;
				}
			}

			//console.log('closestLeft: ' + closestLeft + '; closestRight: ' + closestRight+'; closestCurrent: '+closestCurrent);

			if(typeof closestCurrent !== 'undefined'){
				$('.skidki_product').removeClass('active_diskount_block');
				$('[data-count-discount="'+closestCurrent+'"]').addClass('active_diskount_block');
			}else if(typeof closestCurrent === 'undefined' && typeof closestLeft !== 'undefined'){
				$('.skidki_product').removeClass('active_diskount_block');
				$('[data-count-discount="'+closestLeft+'"]').addClass('active_diskount_block');
			}else if(typeof closestCurrent === 'undefined' && typeof closestLeft === 'undefined' && typeof closestRight !== 'undefined'){
				$('.skidki_product').removeClass('active_diskount_block');
				//$('[data-count-discount="'+closestRight+'"]').addClass('active_diskount_block');
			}

		});
		$(".product-layout .product-thumb input[name='op-minus']").click(function(){
			input_quantity = $(this).parent().find('.input-quantity-list').val(); // Узнаем кол-во товаров при загрузки страницы
			//alert(input_quantity);
			let closestLeft,
				closestRight,
				closestCurrent,
				current;

			let disconts = $(this).parents('.bottom_button_list_products').find('.discounts_price_wrapper .discounts_price ul li');
			let disconts_before = $(this).parents('.bottom_button_list_products').find('.discounts_price_wrapper .discounts_price ul');
			let count_disconts = disconts.length;

			let vals_discounts = [];
			disconts.each(function() {
				vals_discounts.push($(this).data("count-discount")); // Создаем массив скидочных цен со значением их количества
			});

			for (i = 0; i < count_disconts; i++) {
				current = vals_discounts[i];

				if (current == input_quantity && (typeof closestLeft === 'undefined' || closestLeft < current)) {
					closestCurrent = current;
				}else if (current < input_quantity && (typeof closestLeft === 'undefined' || closestLeft < current)) {
					closestLeft = current;
				} else if (current > input_quantity && (typeof closestRight === 'undefined' || closestRight > current)) {
					closestRight = current;
				}
			}

			if(typeof closestCurrent !== 'undefined'){
				disconts.removeClass('active_diskount_block');
				disconts_before.find('[data-count-discount="'+closestCurrent+'"]').addClass('active_diskount_block');
			}else if(typeof closestCurrent === 'undefined' && typeof closestLeft !== 'undefined'){
				disconts.removeClass('active_diskount_block');
				disconts_before.find('[data-count-discount="'+closestLeft+'"]').addClass('active_diskount_block');
			}else if(typeof closestCurrent === 'undefined' && typeof closestLeft === 'undefined' && typeof closestRight !== 'undefined'){
				disconts.removeClass('active_diskount_block');
				disconts_before.find('[data-count-discount="'+closestRight+'"]').addClass('active_diskount_block');
			}
		});


	});
	
	
	
	/********************************/
	/* Слайдер фон шапки по таймеру */
	/********************************/
	(function(D){var A="Lite-1.0";D.fn.cycle=function(E){return this.each(function(){E=E||{};if(this.cycleTimeout){clearTimeout(this.cycleTimeout)}this.cycleTimeout=0;this.cyclePause=0;var I=D(this);var J=E.slideExpr?D(E.slideExpr,this):I.children();var G=J.get();if(G.length<2){if(window.console&&window.console.log){window.console.log("terminating; too few slides: "+G.length)}return }var H=D.extend({},D.fn.cycle.defaults,E||{},D.metadata?I.metadata():D.meta?I.data():{});H.before=H.before?[H.before]:[];H.after=H.after?[H.after]:[];H.after.unshift(function(){H.busy=0});var F=this.className;H.width=parseInt((F.match(/w:(\d+)/)||[])[1])||H.width;H.height=parseInt((F.match(/h:(\d+)/)||[])[1])||H.height;H.timeout=parseInt((F.match(/t:(\d+)/)||[])[1])||H.timeout;if(I.css("position")=="static"){I.css("position","relative")}if(H.width){I.width(H.width)}if(H.height&&H.height!="auto"){I.height(H.height)}var K=0;J.css({position:"absolute",top:0,left:0}).hide().each(function(M){D(this).css("z-index",G.length-M)});D(G[K]).css("opacity",1).show();if(D.browser.msie){G[K].style.removeAttribute("filter")}if(H.fit&&H.width){J.width(H.width)}if(H.fit&&H.height&&H.height!="auto"){J.height(H.height)}if(H.pause){I.hover(function(){this.cyclePause=1},function(){this.cyclePause=0})}D.fn.cycle.transitions.fade(I,J,H);J.each(function(){var M=D(this);this.cycleH=(H.fit&&H.height)?H.height:M.height();this.cycleW=(H.fit&&H.width)?H.width:M.width()});J.not(":eq("+K+")").css({opacity:0});if(H.cssFirst){D(J[K]).css(H.cssFirst)}if(H.timeout){if(H.speed.constructor==String){H.speed={slow:600,fast:200}[H.speed]||400}if(!H.sync){H.speed=H.speed/2}while((H.timeout-H.speed)<250){H.timeout+=H.speed}}H.speedIn=H.speed;H.speedOut=H.speed;H.slideCount=G.length;H.currSlide=K;H.nextSlide=1;var L=J[K];if(H.before.length){H.before[0].apply(L,[L,L,H,true])}if(H.after.length>1){H.after[1].apply(L,[L,L,H,true])}if(H.click&&!H.next){H.next=H.click}if(H.next){D(H.next).bind("click",function(){return C(G,H,H.rev?-1:1)})}if(H.prev){D(H.prev).bind("click",function(){return C(G,H,H.rev?1:-1)})}if(H.timeout){this.cycleTimeout=setTimeout(function(){B(G,H,0,!H.rev)},H.timeout+(H.delay||0))}})};function B(J,E,I,K){if(E.busy){return }var H=J[0].parentNode,M=J[E.currSlide],L=J[E.nextSlide];if(H.cycleTimeout===0&&!I){return }if(I||!H.cyclePause){if(E.before.length){D.each(E.before,function(N,O){O.apply(L,[M,L,E,K])})}var F=function(){if(D.browser.msie){this.style.removeAttribute("filter")}D.each(E.after,function(N,O){O.apply(L,[M,L,E,K])})};if(E.nextSlide!=E.currSlide){E.busy=1;D.fn.cycle.custom(M,L,E,F)}var G=(E.nextSlide+1)==J.length;E.nextSlide=G?0:E.nextSlide+1;E.currSlide=G?J.length-1:E.nextSlide-1}if(E.timeout){H.cycleTimeout=setTimeout(function(){B(J,E,0,!E.rev)},E.timeout)}}function C(E,F,I){var H=E[0].parentNode,G=H.cycleTimeout;if(G){clearTimeout(G);H.cycleTimeout=0}F.nextSlide=F.currSlide+I;if(F.nextSlide<0){F.nextSlide=E.length-1}else{if(F.nextSlide>=E.length){F.nextSlide=0}}B(E,F,1,I>=0);return false}D.fn.cycle.custom=function(K,H,I,E){var J=D(K),G=D(H);G.css({opacity:0});var F=function(){G.animate({opacity:1},I.speedIn,I.easeIn,E)};J.animate({opacity:0},I.speedOut,I.easeOut,function(){J.css({display:"none"});if(!I.sync){F()}});if(I.sync){F()}};D.fn.cycle.transitions={fade:function(F,G,E){G.not(":eq(0)").css("opacity",0);E.before.push(function(){D(this).show()})}};D.fn.cycle.ver=function(){return A};D.fn.cycle.defaults={timeout:4000,speed:1000,next:null,prev:null,before:null,after:null,height:"auto",sync:1,fit:0,pause:0,delay:0,slideExpr:null}})(jQuery)
/*	var imgs = ["/images/slider-header/exterior.jpg","/images/slider-header/visualization.jpg","/images/slider-header/3d-visualization.jpg","/images/slider-header/interior.jpg","/images/slider-header/3d-design.jpg"];
	var text = ['Картинка 1','<a href="index.php">Картинка 2</a>',
				'<font color="red">Картинка 3</font>','Картинка 4', 'Картинка 5'];
	var n=0;
	time=800;
	play=setInterval("chgImg(0)", 3000);

	function chgImg(number) {
		if (number!=0) n=number-2;
		 $('#slide_show').fadeOut(time, function() {    //для картинок
		  $(this).attr('src', imgs[n]).fadeIn(time);
		 });

		 $('#slide_text').fadeOut(time, function() {    //для текста
		  $(this).html(text[n]).fadeIn(time);
		 });

		n++;
		if (n>=imgs.length) n=0;
	}
*/	
	/*$('#slider').cycle({
		timeout: 6500,
	});*/
	
	/* Подключаем адаптивный слайдер */
/*	$("#slider").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout:1500,
		animateOut: 'fadeOut',
		autoplayHoverPause:true,
		onChange:callback2
	});*/
	
	$("#slider").owlCarousel({
		items: 1,
		loop: true,
		autoplay: false,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		nav:true,
		navText: ["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
		onChange:callback2
	});
	
	
	/* функция срабатывает после перелистывания слайда */
	
	//$('#slider .owl-item .slide .container').css({'display':'none'});
	$('#slider .owl-item.active .slide .container').slideDown('slow');

	
	
	function callback2(event) {
		//alert('test');
		$('#slider .owl-item .slide .container').css({'display':'none'});
		
		function show_content_slider(){
		  $('#slider .owl-item.active .slide .container').slideDown('slow');
		  //$('#slider .owl-item.active .slide .container').show('slow');
		}
		setTimeout(show_content_slider, 500);
	};
	
	/* Слайдер - фиксированная высота картинки */
	/*$('#slider img').liCover({
		parent: $("#slider"),
		position:'absolute',
		veticalAlign:'middle',
		align:'center'
	});
*/
	
	
	
	/* Функция чтения get параметров */
	function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
			vars[key] = value;
		});
		return vars;
	}
	
	
	
	var get_form = getUrlVars()["form"];
	if(get_form == 'blog_baner'){
		//alert('Заявка УСПЕШНО отправлена');
		$('.form_big_blog_baner').html("<h4>Благодарим за заказ!</h4><p style='font-size:20px;'>Мы свяжемся в течение часа и обсудим детали.</p>"); // вставляем в блок div новую информацию
	}

	/********************************************************************************************/
	/* Форма отправки сообщения с сайта (SEOCMS категория - button#button_phone_big_blog_baner) */
	/********************************************************************************************/
	$('.form_big_blog_baner button#button_phone_big_blog_baner').on("click", function(event){
		//alert('Нажали на кнопку отправки');
		event.preventDefault(); // выключаем стандартную роль элемента
		phone = $('.form_big_blog_baner input[name="phone_big_blog_baner"]').val();
		/*name = $('#forma_full input[name="name"]').val();*/
		uri = document.location.href;
		zag_val = $('.form_big_blog_baner h4').html();
		//alert('forma_full - '+phone+' - '+name+' - '+uri+' - '+zag_val);
		

		
		var phoneLen = phone.length;
		
		if(phoneLen < 4){
			$('.form_big_blog_baner input[name="phone_big_blog_baner"]').addClass("error");
		}else if(phoneLen >= 4){
			$('.form_big_blog_baner input[name="phone_big_blog_baner"]').removeClass("error");
		}
		
		if(phoneLen >= 4) {
			$('.form_big_blog_baner button#button_phone_big_blog_baner').after("&nbsp;&nbsp;<img src='/image/catalog/loading.gif'>");
			//alert('Отправляем');
			
			$.ajax({ 
				type: "POST",
				url: "/send_message.php",
				data: 'phone='+phone+'&zag_val='+zag_val+'&url='+uri+'&utm_medium='+utm_medium+'&utm_source='+utm_source+'&utm_campaign='+utm_campaign+'&utm_content='+utm_content+'&utm_term='+utm_term,
				success: function(html){
					//alert('получили хороший ответ от файла отправки письма');
					if(html === 'true'){
						//$("#forma_full").empty(); 		// очищаем блок
						//alert('успешно отправили');
						$(location).attr('href',uri+'?form=blog_baner');	// Перенаправляем пользователя на страницу "Спасибо за обращение"
						//$("#forma_full").html("<h4 style='color:green'>Отправили!</h4>");
						//close();
					}else if(html === 'false'){
						$(".form_big_blog_baner").empty(); // очищаем блок
						$(".form_big_blog_baner").html("<h4 style='color:red'>Ошибка отправки письма администратору сайта!</h4>");
					}else{
						$(".form_big_blog_baner").empty(); // очищаем блок
						$(".form_big_blog_baner").html(html);
						//close();
					}
					
				},/* Ошибка при получении данных */
				error: function(){
					alert("Ошибка ajax");
					$('.form_big_blog_baner').empty(); // очищаем блок div
					$('.form_big_blog_baner').html("<h4 style='color:red;'>Ошибочка!</h4>"); // вставляем в блок div новую информацию
				}
			});
		}else{
			alert('Введите номер телефона!');
			event.preventDefault();
		}
	});
	
	
	
	var get_form = getUrlVars()["form"];
	if(get_form == 'blog_article_baner'){
		//alert('Заявка УСПЕШНО отправлена');
		$('.form_baner_article').html("<h4>Благодарим за заказ!</h4><p style='font-size:20px;'>Мы свяжемся в течение часа и обсудим детали.</p>"); // вставляем в блок div новую информацию
	}

	/********************************************************************************************/
	/* Форма отправки сообщения с сайта (SEOCMS статья блога - button#zakaz_button_baner_article) */
	/********************************************************************************************/
	$('.form_baner_article button#zakaz_button_baner_article').on("click", function(event){
		//alert('Нажали на кнопку отправки');
		event.preventDefault(); // выключаем стандартную роль элемента
		phone = $('.form_baner_article input[name="phone_form_baner_article"]').val();
		/*name = $('#forma_full input[name="name"]').val();*/
		let uri = document.location.href;
		zag_val = 'Закажите бесплатный расчет';
		/*lenght = $('.form_baner_article input#length_form_modal').val();
		width = $('.form_baner_article input#width_form_modal').val();
		height = $('.form_baner_article input#height_form_modal').val();
		tirazh = $('.form_baner_article input#tirazh_form_modal').val();*/
		//alert('phone='+phone+'&zag_val='+zag_val+'&url='+uri+'&lenght='+lenght+'&width='+width+'&width='+width+'&height='+height+'&tirazh='+tirazh);
		
		
		
		// создадим пустой объект
		var $data = {};
		// переберём все элементы input, textarea и select формы с id="myForm "
		$('.form_baner_article ul').find ('input, textearea, select').each(function() {
		  // добавим новое свойство к объекту $data
		  // имя свойства – значение атрибута name элемента
		  // значение свойства – значение свойство value элемента
		  //$data[this.name] = $(this).val();

		  var x = 0;
		  // Если есть радио кнопки
		  if(this.getAttribute('type') == 'radio'){
			  //console.log('наткнулись на radio');
			  $('.form_baner_article ul li').find ('input[type="radio"]:checked').each(function() {
				  console.log('проходим массив radio');
				  $data[this.getAttribute('info')] = $(this).val();
			  });

		  }else if(this.getAttribute('type') == 'checkbox'){
			  //console.log('наткнулись на checkbox');
			  $('.form_baner_article ul li').find ('input[type="checkbox"]:checked').each(function() {
				  console.log('проходим массив checkbox');
				  x = x+1;
				  $data[this.getAttribute('info')+x] = $(this).val();
			  });

		  }else{
			  // Если нет ни радио кнопок ни чекбоксов
			  $data[this.getAttribute('info')] = $(this).val();
		  }
		  
		});
		
		//console.log($data);
		var result = JSON.stringify($data); // Преобразуем наш объект в строку json
		//console.log(result);
		
		
		
		
		var phoneLen = phone.length;
		
		if(phoneLen < 4){
			$('.form_baner_article input[name="phone_form_baner_article"]').addClass("error");
		}else if(phoneLen >= 4){
			$('.form_baner_article input[name="phone_form_baner_article"]').removeClass("error");
		}
		
		if(phoneLen >= 4) {
			$('.form_baner_article button#zakaz_button_baner_article').after("&nbsp;&nbsp;<img src='/image/catalog/loading.gif'>");
			//alert('Отправляем');
			
			$.ajax({ 
				type: "POST",
				url: "/send_message.php",
				data: 'phone='+phone+'&zag_val='+zag_val+'&url='+uri+'&result='+result+'&utm_medium='+utm_medium+'&utm_source='+utm_source+'&utm_campaign='+utm_campaign+'&utm_content='+utm_content+'&utm_term='+utm_term,
				success: function(html){
					//alert('получили хороший ответ от файла отправки письма');
					if(html === 'true'){
						//$("#forma_full").empty(); 		// очищаем блок
						//alert('успешно отправили');
						$(location).attr('href',uri+'?form=blog_article_baner');	// Перенаправляем пользователя на страницу "Спасибо за обращение"
						//$("#forma_full").html("<h4 style='color:green'>Отправили!</h4>");
						//close();
					}else if(html === 'false'){
						$(".form_baner_article").empty(); // очищаем блок
						$(".form_baner_article").html("<h4 style='color:red'>Ошибка отправки письма администратору сайта!</h4>");
					}else{
						$(".form_baner_article").empty(); // очищаем блок
						$(".form_baner_article").html(html);
						//close();
					}
					
				},/* Ошибка при получении данных */
				error: function(){
					alert("Ошибка ajax");
					$('.form_baner_article').empty(); // очищаем блок div
					$('.form_baner_article').html("<h4 style='color:red;'>Ошибочка!</h4>"); // вставляем в блок div новую информацию
				}
			});
		}else{
			alert('Введите номер телефона!');
			event.preventDefault();
		}
	});
	
	
	
	
	var get_form = getUrlVars()["form"];
	if(get_form == 'modal_list_products'){
		
		/**************************************/
		/*    ВАША ЗАЯКА УСПЕШНО ОТПРАВЛЕНА   */
		/**************************************/
			
			$('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
				function(){ // после выполнения предыдущей анимации
					/*$("#call-back-info").empty(); // очищаем блок
					$(zag).appendTo("#call-back-info-maxi");
					$(p).appendTo("#call-back-info-maxi");
					$(img).appendTo("#wrapper_info_img");
					*/
					//call-back-info

					$('#call_back_modal_form_maxi') 
						.css('display', 'block') // убираем у модального окна display: none;
						.animate({opacity: 1, top: '45%'}, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
			});
		
		/* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
		$('#modal_close_maxi, #overlay').click( function(){ // ловим клик по крестику или подложке
			
			$("#call-back-info-maxi").empty(); // очищаем блок
			
			$('#call_back_modal_form_maxi')
				.animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
					function(){ // после анимации
						$(this).css('display', 'none'); // делаем ему display: none;
						$('#overlay').fadeOut(400); // скрываем подложку
					}
				);
			$("#call-back-info-maxi").empty(); // очищаем блок модального окна
			$("#wrapper_info_img").empty(); // очищаем блок модального окна
		});
		
		
		
		
		
		//alert('Заявка УСПЕШНО отправлена');
		//$('.form_baner_article').html("<h4 style='font-size: 30px; text-align: center; font-family: \"GothaProBol\";'>Благодарим за заказ!</h4><p style='font-size:20px;'>Мы свяжемся в течение часа и обсудим детали.</p>"); // вставляем в блок div новую информацию
	}

	/*
	$('body').on("click", 'button.btn.btn-sm.btn-primary.col-md-6', function(event){
		$(".modal-body .form_modal_roman input#phone_form_modal").mask("+7(999) 999-99-99");
	});
	*/
	
	/*************************************************************************************************************/
	/* Форма отправки сообщения с сайта (Модальное окно из списка товаров в категории - button#zakaz_form_modal) */
	/*************************************************************************************************************/
	$('.modal-body').on("click", 'button#zakaz_form_modal', function(event){
		
		event.preventDefault(); // выключаем стандартную роль элемента
		phone = $('.modal-body .form_modal_roman input[name="phone_form_modal"]').val();
		/*name = $('#forma_full input[name="name"]').val();*/
		uri = document.location.href;
		zag_val = 'Закажите бесплатный расчет - модальное окно';
		/*lenght = $('.modal-body .form_modal_roman input#length_form_modal').val();
		width = $('.modal-body .form_modal_roman input#width_form_modal').val();
		height = $('.modal-body .form_modal_roman input#height_form_modal').val();
		tirazh = $('.modal-body .form_modal_roman input#tirazh_form_modal').val();*/
		//alert('phone='+phone+'&zag_val='+zag_val+'&url='+uri+'&lenght='+lenght+'&width='+width+'&width='+width+'&height='+height+'&tirazh='+tirazh);
		
		
		// создадим пустой объект
		var $data = {};
		// переберём все элементы input, textarea и select формы с id="myForm "
		$('.form_modal_roman ul').find ('input, textearea, select').each(function() {
		  // добавим новое свойство к объекту $data
		  // имя свойства – значение атрибута name элемента
		  // значение свойства – значение свойство value элемента
		  //$data[this.name] = $(this).val();

		  var x = 0;
		  // Если есть радио кнопки
		  if(this.getAttribute('type') == 'radio'){
			  //console.log('наткнулись на radio');
			  $('.form_modal_roman ul li').find ('input[type="radio"]:checked').each(function() {
				  console.log('проходим массив radio');
				  $data[this.getAttribute('info')] = $(this).val();
			  });

		  }else if(this.getAttribute('type') == 'checkbox'){
			  //console.log('наткнулись на checkbox');
			  $('.form_modal_roman ul li').find ('input[type="checkbox"]:checked').each(function() {
				  console.log('проходим массив checkbox');
				  x = x+1;
				  $data[this.getAttribute('info')+x] = $(this).val();
			  });

		  }else{
			  // Если нет ни радио кнопок ни чекбоксов
			  $data[this.getAttribute('info')] = $(this).val();
		  }
		  
		});
		
		//console.log($data);
		var result = JSON.stringify($data); // Преобразуем наш объект в строку json
		//console.log(result);
		
		
		
		
		var phoneLen = phone.length;
		
		if(phoneLen < 4){
			$('.form_baner_article input[name="phone_form_baner_article"]').addClass("error");
		}else if(phoneLen >= 4){
			$('.form_baner_article input[name="phone_form_baner_article"]').removeClass("error");
		}
		
		if(phoneLen >= 4) {
			$('.modal-body .form_modal_roman button#zakaz_form_modal').after("&nbsp;&nbsp;<img src='/image/catalog/loading.gif'>");
			//alert('Отправляем');
			
			$.ajax({ 
				type: "POST",
				url: "/send_message.php",
				data: 'phone='+phone+'&zag_val='+zag_val+'&url='+uri+'&result='+result+'&utm_medium='+utm_medium+'&utm_source='+utm_source+'&utm_campaign='+utm_campaign+'&utm_content='+utm_content+'&utm_term='+utm_term,
				//data: 'result='+result,
				success: function(html){
					//alert('получили хороший ответ от файла отправки письма');
					if(html === 'true'){
						//$("#forma_full").empty(); 		// очищаем блок
						//alert('успешно отправили');
						$(location).attr('href',uri+'?form=modal_list_products');	// Перенаправляем пользователя на страницу "Спасибо за обращение"
						//$("#forma_full").html("<h4 style='color:green'>Отправили!</h4>");
						//close();
					}else if(html === 'false'){
						$(".modal-body .form_modal_roman").empty(); // очищаем блок
						$(".modal-body .form_modal_roman").html("<h4 style='color:red'>Ошибка отправки письма администратору сайта!</h4>");
					}else{
						$(".modal-body .form_modal_roman").empty(); // очищаем блок
						$(".modal-body .form_modal_roman").html(html);
						//close();
					}
					
				},/* Ошибка при получении данных */
				error: function(){
					alert("Ошибка ajax");
					$('.modal-body .form_modal_roman').empty(); // очищаем блок div
					$('.modal-body .form_modal_roman').html("<h4 style='color:red;'>Ошибочка!</h4>"); // вставляем в блок div новую информацию
				}
			});
		}else{
			alert('Введите номер телефона!');
			event.preventDefault();
		}
	});
	
});