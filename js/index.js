//导航条li的动画
function f1() {
	var $lis = $(".navbar-nav li>a")
	var $iss = $(".navbar-nav li>a>i")
	var $sps = $(".navbar-nav li>a>span")
	$iss.mouseenter(function() {
		$(this).css({
			"top": "-16px",

		})
		$(this).next().css({
			"top": 0
		})
	})
	$lis.mouseleave(function() {
		$iss.css({
			"top": "0"
		})
		$sps.css({
			"top": "16px"
		})

	})
}
f1()
//新闻页轮播
function f2() {
	var $prev = $(".carouselmain .prevbtn")
	var $next = $(".carouselmain .nextbtn")
	var $wrapper = $(".carousel-wrapper")
	var isClick = true
	$next.click(() => {
		if(isClick) {
			var $lf = parseInt($wrapper.css("left"))
			if($lf == -1520) {
				$wrapper.stop().animate({
					"left": 0 + "px"
				}, 100)
			} else {
				$wrapper.stop().animate({
					"left": $lf - 380 + "px"
				}, 100)
			}
			isClick = false;
			setTimeout(function() {
				isClick = true;
			}, 500); //一秒内不能重复点击
		}
	})
	$prev.click(() => {
		if(isClick) {
			var $lf = parseInt($wrapper.css("left"))
			if($lf == 0) {
				$wrapper.stop().animate({
					"left": -1520 + "px"
				}, 100)
			} else {
				$wrapper.stop().animate({
					"left": $lf + 380 + "px"
				}, 100)
			}
			isClick = false;
			setTimeout(function() {
				isClick = true;
			}, 500); //一秒内不能重复点击
		}
	})
	//定时器
	setInterval(() => {
		$next.click()
	}, 3000)

}
f2()
//团队模块模态框
var $lis = $(".allgallery>ul>li")

//点击li让模态框弹出
$lis.click(function() {
	var $listup = $(".list-img")
	var $divimg = $(".list-tupian>div")
	var $conleft = $(".modal-control>a:eq(0)")
	var $conright = $(".modal-control>a:eq(2)")
	var $conlist = $(".modal-control>a:eq(1)")
	var $close = $(".modal-close")
	var $cap = $(".modal-capation")
	var $modalimg = $(".modal-img")
	var $imgs = $(".modal-img>img")
	var $modalgallery = $(".modal-lastestgallery")
	var $sclose = $(".list-word-close")
	index = $(this).attr("xb")
	//开启模态框
	$modalgallery.css({
		"display":"block",
		"opacity":1
	})
	$("body").css({
		"overflow":"hidden"
	})
	$imgs.css({
		"opacity":1
	})
	$modalimg.stop().animate({
		"width":"100%",
		"height":"100%"
	},500)

	//点击关闭按钮，关闭模态框	
	$close.click(function(){
		$listup.css({
				"bottom": "-500px"
		})
		$("body").css({
			"overflow":"visible"
		})
		$modalimg.stop().animate({
			"width":"1%",
			"height":"1%"
		},500,()=>{
			$modalgallery.css({
				"display":"none"
			})
			$imgs.css({
				"opacity":0
			})
			
		})
	})
	//点击li的时候让对应的模态框里的图片显示
	$modalimg.css({
		"opacity": 0
	})
	$($modalimg[index]).css({
		"opacity": 1
	})
	//点击左边控制按钮
	$conleft.click(function() {
		index--
		if(index == -1) {
			index = 8
		}
		$modalimg.css({
			"opacity": 0
		})
		$($modalimg[index]).css({
			"opacity": 1
		})
	})
	//点击右边控制按钮
	$conright.click(function() {
		index++
		if(index == 9) {
			index = 0
		}
		$modalimg.css({
			"opacity": 0
		})
		$($modalimg[index]).css({
			"opacity": 1
		})
	})
	//点击中间图片列表按钮
	$conlist.click(function() {
		$listup.css({
			"bottom": 0
		})
		$divimg.css({
			"border": "none"
		})
		console.log(index)
		$($divimg[index]).css({
			"border": "3px solid transparent",
			"opacity": 1
		})
	})
	//点击列图片更换
	$divimg.click(function() {
		$divimg.css({
			"border": "none"
		})
		$(this).css({
			"border": "3px solid transparent",
			"opacity": 1
		})
		$modalimg.css({
			"opacity": 0
		})
		var i = $(this).attr("i")
		console.log($modalimg[i])
		$($modalimg[i]).css({
			"opacity": 1
		})
	})
	//点击列表图片的关闭按钮
	$sclose.click(function() {
		$listup.css({
			"bottom": "-500px"
		})
	})
})

//锚点跳转
$('#a1').click(function() {
	$('html,body').animate({
		scrollTop: $('.about').offset().top
	}, 800);
});
$('#a2').click(function() {
	$('html,body').animate({
		scrollTop: $('.servicesfuwu').offset().top
	}, 800);
});
$('#a3').click(function() {
	$('html,body').animate({
		scrollTop: $('.lastestgallery').offset().top
	}, 800);
});
$('#a4').click(function() {
	$('html,body').animate({
		scrollTop: $('.lastestnews').offset().top
	}, 800);
});
$('#a5').click(function() {
	$('html,body').animate({
		scrollTop: $('.mail').offset().top
	}, 800);
});

$(window).scroll(function(){
	var $goback=$(".goback")
if($(window).scrollTop()==0){
		$goback.css({
			"opacity":0
		})
}else{
	$goback.css({
			"opacity":1
		})
}
})

$('.goback').click(function() {
		$('html,body').animate({
			scrollTop: '0px'
		}, 800);
});
