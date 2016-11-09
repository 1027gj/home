$(function(){
		$(".val").mouseover(function(){
		$(this).children(".val_down").css("display","block");	//获取.val它的子元素有.val_down的，就把它显示
		$(this).css({"border-left":"1px solid #ccc","border-right":"1px solid #ccc","background":"#fff"})
	})

	$(".val").mouseout(function(){
		$(this).children(".val_down").css("display","none");
		$(this).css({"border-left":"1px solid #f1f1f1","border-right":"1px solid #f1f1f1","background":"#f1f1f1"})
	})
	
	

	// $(".B-left .jydq").mouseover(function(){
	// 	$(this).children(".items").css("display","block");
	// 	$(this).css("background","#fff")
	// })
	
	// $(".B-left .jydq").mouseout(function(){
	// 	$(this).children(".items").css("display","none");
	// 	$(this).css({"background":"rgba(51,51,51,0.8)"})
	// })
	
	$(".B-left .jydq").mouseover(function(){
		var index=$(this).index();
		$(".items").eq(index).css("display","block");
		$(this).css("background","#fff")
	})
	
	$(".B-left .jydq").mouseout(function(){
		var index=$(this).index();
		$(".items").eq(index).css("display","none");
		$(this).css({"background":"rgba(51,51,51,0.8)"})
	})


		$(document).ready(function(){
			var flag=true;
			var n=0;
			var width=$('.two-tp').width();
			function tu(){
				if(!flag){
					return false;
				}
				flag=false;
				n++;
				if(n>=$('.two-tp .tp').length){
					n=0;
				};
				$('.two-tp .uls .lis').removeClass("lis-first").eq(n).addClass("lis-first");
				$('.two-tp .tp').eq(n).animate({opacity:1},800,function(){
					flag=true;
				});
				$('.two-tp .tp').eq(n).siblings(".tp").animate({opacity:0});
			}
			var t=setInterval(tu,2000);
			$('.two-tp').mouseover(function(){
				clearInterval(t);
			}).mouseout(function(){
				t=setInterval(tu,2000);
			});
		    $('.two-tp .bannerLeft').click(function(){
		    	n-=1;
		    	if(!flag){
					return false;
				}
				flag=false;
				if(n<0){
					n=$('.two-tp .tp').length-1;
				};
		    	$('.two-tp .uls .lis').removeClass("lis-first").eq(n).addClass("lis-first")
				$('.two-tp .tp').eq(n).animate({opacity:1},800,function(){
					flag=true;
				});
				$('.two-tp .tp').eq(n).siblings(".tp").animate({opacity:0});
		    })
		    $('.two-tp .bannerRight').click(function(){
		    	tu();
		    })



			$(".two-tp .uls .lis").hover(function(){
				var index=$(this).index();
				$(".two-tp .uls .lis").removeClass("lis-first").eq(index).addClass("lis-first");
				$('.two-tp .tp').eq(index).animate({opacity:1}).siblings(".tp").animate({opacity:0});
			},function(){
				var index=$(this).index();
				$(".two-tp .uls .lis").removeClass("lis-first").eq(index).addClass("lis-first");
				$('.two-tp .tp').eq(index).animate({opacity:0}).next().animate({opacity:1});
			})


	})
	
})




// 盒子里面的两个小轮播

$.extend({
		lunbo:function(obj,img){
			obj.hover(function(){
				var index=$(this).index();
				obj.removeClass("index").eq(index).addClass("index");
				img.css("display","none").eq(index).css("display","block");
			},function(){
				var index=$(this).index();
				obj.removeClass("index").eq(index).addClass("index");
				img.css("display","none").eq(index).css("display","block");
			})
		}
})
$(document).ready(function(){
	$.lunbo($(".lis:nth-child(1) .nth div"),$(".two-tp .tp:nth-child(1) img"))
	$.lunbo($(".lis:nth-child(2) .nth div"),$(".two-tp .tp:nth-child(2) img"))
	$.lunbo($(".lis:nth-child(3) .nth div"),$(".two-tp .tp:nth-child(3) img"))
	$.lunbo($(".lis:nth-child(4) .nth div"),$(".two-tp .tp:nth-child(4) img"))
	$.lunbo($(".lis:nth-child(5) .nth div"),$(".two-tp .tp:nth-child(5) img"))
	$.lunbo($(".lis:nth-child(6) .nth div"),$(".two-tp .tp:nth-child(6) img"))
	$.lunbo($(".lis:nth-child(7) .nth div"),$(".two-tp .tp:nth-child(7) img"))
	$.lunbo($(".lis:nth-child(8) .nth div"),$(".two-tp .tp:nth-child(8) img"))
	$.lunbo($(".lis:nth-child(9) .nth div"),$(".two-tp .tp:nth-child(9) img"))
	$.lunbo($(".lis:nth-child(10) .nth div"),$(".two-tp .tp:nth-child(10) img"))
})




// floor轮播
// box：大盒子；
// tp：轮播图；
// lis：轮播图下方选项；
// left：向左按钮；
// right：向右按钮；

$.extend({
	banner:function(box,tp,lis,left,right){
		$(document).ready(function(){
			var flag=true;
			var n=0;
			var next=0;
			var width=box.width();
			function tu(){
				if(!flag){
					return false;
				}
				flag=false;
				next=n+1;
				if(next>=tp.length){
					next=0;
				};
				lis.removeClass("lis1-first").eq(next).addClass("lis1-first")
				tp.eq(next).css("left",width).end().eq(n).animate({left:-width},1000).end().eq(next).animate({left:0},1000,function(){
					flag=true;
				});
				n=next;
			}
			var t=setInterval(tu,2500);
			box.mouseover(function(){
				clearInterval(t);
				right.animate({width:30},0)
				left.animate({width:30},0)
			}).mouseout(function(){
				t=setInterval(tu,2500);
				right.animate({width:0},0)
				left.animate({width:0},0)
			});
		    right.click(function(){
		    	next=n-1;
		    	if(!flag){
					return false;
				}
				flag=false;
				if(next>=tp.length){
					next=0;
				};
		    	lis.removeClass("lis1-first").eq(next).addClass("lis1-first")
				tp.eq(next).css("left",-width).end().eq(n).animate({left:width},1000).end().eq(next).animate({left:0},1000,function(){
					flag=true;
				});
				n=next;
		    })
		    left.click(function(){
		    	tu();
		    })
		     var index=lis.index();
		     lis.click(function(){
		     	 var index=$(this).index();
		     	 if(index>n){
	             	if(!flag){
				    return;
				 }
				 flag=false;
				 tp.eq(index).css("left",width)
				 tp.eq(n).animate({left:-width},1000);
				 tp.eq(index).animate({left:0},1000,function(){
				 	flag=true;
				 })
	          	 }else if(index<n){
	             	if(!flag){
				    return;
				 };
				 flag=false;
	         		tp.eq(index).css("left",-width)
				 tp.eq(n).animate({left:width},1000);
				 tp.eq(index).animate({left:0},1000,function(){
				 	flag=true;
				 })
	         	 };
	         	lis.removeClass("lis1-first").eq(index).addClass("lis1-first")
	         n=index;
	         next=index;
		     })
		})
	}
})

$(document).ready(function(){
	$.banner($(".five:eq(0) .lunbo"),$(".five:eq(0) .lunbo .lunbotu"),$(".five:eq(0) .lunbo .uls1 .lis1"),$(".five:eq(0) .lunbo .lunbo-left"),$(".five:eq(0) .lunbo .lunbo-right"))
	$.banner($(".five:eq(1) .lunbo"),$(".five:eq(1) .lunbo .lunbotu"),$(".five:eq(1) .lunbo .uls1 .lis1"),$(".five:eq(1) .lunbo .lunbo-left"),$(".five:eq(1) .lunbo .lunbo-right"))
	$.banner($(".five:eq(2) .lunbo"),$(".five:eq(2) .lunbo .lunbotu"),$(".five:eq(2) .lunbo .uls1 .lis1"),$(".five:eq(2) .lunbo .lunbo-left"),$(".five:eq(2) .lunbo .lunbo-right"))
	$.banner($(".five:eq(3) .lunbo"),$(".five:eq(3) .lunbo .lunbotu"),$(".five:eq(3) .lunbo .uls1 .lis1"),$(".five:eq(3) .lunbo .lunbo-left"),$(".five:eq(3) .lunbo .lunbo-right"))
	$.banner($(".five:eq(4) .lunbo"),$(".five:eq(4) .lunbo .lunbotu"),$(".five:eq(4) .lunbo .uls1 .lis1"),$(".five:eq(4) .lunbo .lunbo-left"),$(".five:eq(4) .lunbo .lunbo-right"))
})



// 选项卡
// obj：选项；
// tp：选项下方内容；

$.extend({
		xxk:function(obj,tp,left){
			obj.hover(function(){
				var index=$(this).index();
				tp.removeClass("first").eq(index).addClass("first");
				obj.removeClass("first").eq(index).addClass("first");
				console.log(index)
			},function(){
				var index=$(this).index();
				tp.removeClass("first").eq(index).addClass("first");
				obj.removeClass("first").eq(index).addClass("first");
			})
			var n=0;
			var next=0;
			left.click(function(){
				next=n+1;    	
				if(next>=obj.length){
					next=0;
				};
		    	obj.removeClass("first").eq(next).addClass("first")
				tp.removeClass("first").eq(next).addClass("first");
				n=next;
			})
		}
})
$(document).ready(function(){
	$.xxk($(".five:eq(0) .five-two .ft-right .bt"),$(".five:eq(0) .five-three .fthree-right"),$(".five:eq(0) .five-three .five-threeRight"));
	$.xxk($(".five:eq(1) .five-two .ft-right .bt"),$(".five:eq(1) .five-three .fthree-right"),$(".five:eq(1) .five-three .five-threeRight"));
	$.xxk($(".five:eq(2) .five-two .ft-right .bt"),$(".five:eq(2) .five-three .fthree-right"),$(".five:eq(2) .five-three .five-threeRight"));
	$.xxk($(".five:eq(3) .five-two .ft-right .bt"),$(".five:eq(3) .five-three .fthree-right"),$(".five:eq(3) .five-three .five-threeRight"));
	$.xxk($(".five:eq(4) .five-two .ft-right .bt"),$(".five:eq(4) .five-three .fthree-right"),$(".five:eq(4) .five-three .five-threeRight"));
})

