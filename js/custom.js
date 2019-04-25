$( document ).ready(function() {
	
var h = window.innerHeight;	
	
	$('.product_btn').click(function(){
		$('.submenu').css("margin-right","0px");
		
		});
		
		
	$('.product_menu').click(function(){
		$('.submenu').css("margin-right","-301px");
		});	
		
	 $('.slider').css("height", h+"px");
	 $('.overlay_color').css("height", h+"px");	
	 
	 
	 $('.menu_responsive').click(function(){
		
		$('header nav').css("top","0px");
		$(this).css("display","none");
		});
		
	 $('.resp_close').click(function(){
		
		$('header nav').css("top","-151px");
		$('.menu_responsive').css("display","block");
		});	
	 
});
