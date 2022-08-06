$(document).ready(function(){

    /*메뉴(햄버거클릭)*/
    $("#head button").click(function(){
        
        $("#menu").stop().animate({right: 0}, 1200,function(){
            if($("#menu").css("right")== "0"){
                $("#menu button span").html("menu");
            }else{
                $("#menu button span").html("close");
            }
					});
					
					
          
						$("#menu button").click(function(){
						$("#menu").stop().animate({right:-400},1200,function(){
            if($("#menu").css("right")== "-200"){
                $("#menu button span").html("close");
            }else{
                $("#menu button span").html("menu");
						}
					});  
       
			});
	});
	
			/*메뉴안의 목록클릭*/
			$("#navTop li a").click(function(){
				$("#insideNav").stop().slideToggle();
			});
	
		/*EXHIBITION NOW*/
		const e1 = $("#exhibition img").eq(0).outerWidth();
		const e2 = e1 * (-1);
		const autoSlide = setInterval(slideRight, 4000);
		
		
		
		
		function slideRight(){
			$("#exhibition a").removeClass("big");
			$("#exhibition").stop().animate({left:"-80px"},"slow",function(){
				$("#exhibition").prepend($("#exhibition a").last());
				$("#exhibition").css("left","-275px");
				$("#exhibition a").eq(2).addClass("big");
			});
		}
		//specialBox
			const  fade   =   setInterval(  sliding    ,  3000 );			
			
			function sliding() {		
					$("#specialBox").stop().animate({  top : "-500px" }, 800, function(){
							$("#specialBox").append($(".special:first-child"));
							$("#specialBox").css("top", 0);
					});
			}//자동슬라이드. 끝
			
	
		
});//끝


