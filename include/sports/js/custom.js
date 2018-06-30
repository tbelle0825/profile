$(document).ready(function(){
	$("body, html").stop().animate({"scrollTop":0},1500,"swing");

	$(window).on("scroll", function() {

		var scroll = $(this).scrollTop();

		// $("h1").text("distance :" + scroll);

		/* section - z value setting */
		for(var i=0; i<5; i++) {
			
			$("section > article").eq(i).css({"transform":"translateZ(" + (-5000*i+scroll) +"px)"});
			
			//connect menu and article
			if(scroll>=i*5000-2500 && scroll<(i+1)*5000-2500){
				
				$(".scrollNavi li").removeClass();
				$(".scrollNavi li").eq(i).addClass("on");
				$("article").removeClass();
				$("article").eq(i).addClass("on");	
				$("#bg").css({"background":"url(img/bg"+i+".png)","background-size":"cover"}); // background img change
				//$(".player"+i).animate({"opacity":"0.5"},4000, "easeOutBounce");
			};
			/*
			if(scroll>=0 && scroll<5000){
				$(".scrollNavi li").removeClass();
				$(".scrollNavi li").eq(0).addClass("on");
				$("article").removeClass();
				$("ariticle").eq(0).addClass("on");
			}
			if(scroll>=5000 && scroll<10000){
				$(".scrollNavi li").removeClass();
				$(".scrollNavi li").eq(1).addClass("on");
				$("article").removeClass();
				$("ariticle").eq(1).addClass("on");
			}
			if(scroll>=10000 && scroll<15000){
				$(".scrollNavi li").removeClass();
				$(".scrollNavi li").eq(2).addClass("on");
				$("article").removeClass();
				$("ariticle").eq(2).addClass("on");
			}
			if(scroll>=15000 && scroll<20000){
				$(".scrollNavi li").removeClass();
				$(".scrollNavi li").eq(3).addClass("on");
				$("article").removeClass();
				$("ariticle").eq(3).addClass("on");
			}
			if(scroll>=20000 && scroll<25000){
				$(".scrollNavi li").removeClass();
				$(".scrollNavi li").eq(4).addClass("on");
				$("article").removeClass();
				$("ariticle").eq(4).addClass("on");
			} */
		};
		// $("section>article").eq(0).css({"transform":"translateZ(" + (0+scroll) + "px)"});
		// $("section>article").eq(1).css({"transform":"translateZ(" + (-5000+scroll) + "px)"});
		// $("section>article").eq(2).css({"transform":"translateZ(" + (-10000+scroll) + "px)"});
		// $("section>article").eq(3).css({"transform":"translateZ(" + (-15000+scroll) + "px)"});
		// $("section>article").eq(4).css({"transform":"translateZ(" + (-20000+scroll) + "px)"});		
	});

	/* when click navigation and move scroll */
	$(".scrollNavi li").on("click", function(){
		var a = $(this).index();
		$("body, html").stop().animate({"scrollTop":5000*a}, 1500, "swing");
	});
	/*
	$(".scrollNavi li").eq(0).on("click", function(){
		$("body,html").stop().animate({"scrollTop":0});
	});
	$(".scrollNavi li").eq(1).on("click", function(){
		$("body,html").stop().animate({"scrollTop":5000});
	});
	$(".scrollNavi li").eq(2).on("click", function(){
		$("body,html").stop().animate({"scrollTop":10000});
	});
	$(".scrollNavi li").eq(3).on("click", function(){
		$("body,html").stop().animate({"scrollTop":15000});
	});
	$(".scrollNavi li").eq(4).on("click", function(){
		$("body,html").stop().animate({"scrollTop":20000});
	});*/

	/* when move mouse contents to move in box */
	$("body").on("mousemove", function(e){
		var posX = e.pageX/200; 
		var posY = e.pageY/300;

		$(".obj11").css({"right":0-posX, "bottom":-200-posY});
		$(".obj12").css({"right":-650-posX, "bottom":-570+posY});
		$(".obj13").css({"right":90+posX, "bottom":0+posY});
		
		$(".obj21").css({"left":10-posX, "top":-290-posY});
		$(".obj22").css({"right":150+posX, "top":0+posY});

		$(".obj31").css({"left":120-posX, "bottom":-50-posY});
		$(".obj32").css({"left":-50+posX, "bottom":-10-posY});

		$(".obj41").css({"right":-220+posX, "bottom":-260-posY});
		$(".obj42").css({"left":0+posX, "top":20-posY});
		// $(".obj43").css({"left":-270-posX, "bottom":-100-posY});

		$(".obj51").css({"left":300-posX, "bottom":-60-posY});
		$(".obj52").css({"left":530+posX, "bottom":100-posY});
		$(".obj53").css({"left":530+posX, "bottom":30+posY});
	});
});















