$(document).ready(function(){
	var ht = $(window).height();
	$('section').height(ht);
	
	$(window).on('resize', function(){
		var ht = $(window).height();
		$('section').height(ht);
	});
	
	$('section').on('mousemove', function(e){
		var posX = e.pageX;
		var posY = e.pageY;
		$('.p11').css({'right': 0-(posX/30),'bottom': 0-(posY/30)});
		$('.p12').css({'right': 130+(posX/20),'bottom': -40+(posY/30)});
	});
	
	$('#menu li').on('click', function(e){
		e.preventDefault();
		var ht = $(window).height();
		var i = $(this).index();
		var nowTop = i*ht;
		$('html, body').stop().animate({'scrollTop': nowTop},2000);
	});
	
	$(window).on('scroll', function(){
		var ht = $(window).height();
		var scroll = $(window).scrollTop();
		if(scroll>ht*0 && scroll<ht*1){
			$('#menu li').removeClass('on');
			$('#menu li').eq(0).addClass('on');
		}
		if(scroll>ht*1 && scroll<ht*2){
			$('#menu li').removeClass('on');
			$('#menu li').eq(1).addClass('on');
		}
		if(scroll>ht*2 && scroll<ht*3){
			$('#menu li').removeClass('on');
			$('#menu li').eq(2).addClass('on');
		}
		if(scroll>ht*3 && scroll<ht*4){
			$('#menu li').removeClass('on');
			$('#menu li').eq(3).addClass('on');
		}
		for(var i=0; i<5; i++){
			if(scroll>=ht*i && scroll<ht*(i+1)){
				$('#menu li').removeClass('on');
				$('#menu li').eq(i).addClass('on');
			}
		}
		
		var size = $('section').size();
		$('section').on('mousewheel', function(event, delta){
			if(delta>0 && $(this).index()>=1){
				var prev = $(this).prev().offset().top;
				$('html, body').stop().animate({'scrollTop': prev},2000,'easeOutExpo');
			}
			else if(delta<0 && $(this).index()<=(size-2)){
				var next = $(this).next().offset().top;
				$('html, body').stop().animate({'scrollTop': next},2000,'easeOutExpo');
			}
		})
	});
});













