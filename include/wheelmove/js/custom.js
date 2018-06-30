$(document).ready(function() {
// window's resize
	var ht = $(window).height();

	$("section").height(ht);

	$(window).on("resize", function() {

		var ht = $(window).height();
		$("section").height(ht);

	});
// when mouse moves, the object's movement
	$("section").on("mousemove", function(e){
		var posX=e.pageX;
		var posY=e.pageY;

		$(".p11").css({"right":20-(posX/30), "bottom":30-(posY/30)});
		$(".p12").css({"right":130+(posX/20), "bottom":-40+(posY/20)});
		$(".p13").css({"right":60+(posX/20), "top":180+(posY/20)});

		$(".p21").css({"right":-180-(posX/30), "bottom":-480-(posY/30)});
		$(".p22").css({"right":130+(posX/50), "bottom":-40+(posY/50)});

		$(".p31").css({"right":280-(posX/30), "bottom":30-(posY/30)});
		$(".p32").css({"right":110+(posX/20), "bottom":-270+(posY/20)});
		$(".p33").css({"right":-70+(posX/20), "bottom":-130+(posY/20)});

		$(".p41").css({"right":20-(posX/30), "bottom":-120-(posY/30)});
		$(".p42").css({"right":30+(posX/20), "bottom":-200+(posY/20)});
		$(".p43").css({"left":80+(posX/20), "top":-180+(posY/20)});
	});

// click menu and animate of scroll
	$("#menu li").on("click", function(e){
		e.preventDefault();

		var ht = $(window).height();

		var i = $(this).index();

		var nowTop = i*ht;

		$("html, body").stop().animate({"scrollTop":nowTop}, 1400);
	});

// scroll and menu activate
	$(window).on("scroll",function(){

		var ht = $(window).height();

		var scroll = $(window).scrollTop();

		for (var i=0; i<5; i++) {
			if(scroll >= ht*i && scroll < ht*(i+1)) {
				$("#menu li").removeClass();
				$("#menu li").eq(i).addClass("on");
			};
		}

		// if(scroll >= ht * 0 && scroll < ht * 1) {
		// 	$("#menu li").removeClass();
		// 	$("#menu li").eq(0).addClass("on");
		// }
		// if(scroll >= ht*1 && scroll < ht*2) {
		// 	$("#menu li").removeClass();
		// 	$("#menu li").eq(1).addClass("on");
		// }
		// if(scroll >= ht*2 && scroll < ht*3) {
		// 	$("#menu li").removeClass();
		// 	$("#menu li").eq(2).addClass("on");
		// }
		// if(scroll >= ht*3 && scroll < ht*4) {
		// 	$("#menu li").removeClass();
		// 	$("#menu li").eq(3).addClass("on");
		// }
	});

// scroll of screen as move a mousewheel
	$("section").on("mousewheel", function(event, delta) {

		if (delta > 0) { // when up a mousewheel
			var prev = $(this).prev().offset().top;

			$("html, body").stop().animate({"scrollTop":prev}, 1400, "easeOutBounce");

		} else if (delta < 0) { // when down a mousewheel

			var next = $(this).next().offset().top;

			$("html, body").stop().animate({"scrollTop":next}, 1400, "easeOutBounce")
		}
	});
});













