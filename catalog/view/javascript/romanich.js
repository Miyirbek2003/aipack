jQuery(document).ready(function ($) {
	
	$('.w-back').on("click", function(event){
		event.preventDefault(); // выключаем стандартную роль элемента
		var src_img = $(this).data('img');	// Название картинки
		var target_img = $(this).data('target');	// class блока с большой картинкой
		
		$('.w-back[data-target="'+target_img+'"]').removeClass('active');
		$(this).addClass('active');
		
		$('.'+target_img+' img').attr('src', '/image/catalog/production/kartonnie-korobki/logo/'+src_img);
		
		console.log(src_img);
		console.log(target_img);
	});
	
	
});