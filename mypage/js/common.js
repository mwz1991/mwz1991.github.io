
	$(function () {	
		/*导航条搜索框动画*/
		$("#search").hover(function() {
			$("#searchText").css({visibility:'visible','width': '180px',padding:'6px 12px'});
		}, function() {
			$("#searchText").css({visibility:'hidden','width': '0',padding:'6px 0'});
		});

		/*导航条、手机app~~ hover下拉动画*/
		$(".navbar-nav").bootstrapDropdownOnHover({

			// Number of milliseconds to wait before closing the menu on mouseleave
			mouseOutDelay: 100,

			// Pixel width where the menus should no-longer be activated by hover
			responsiveThreshold: 300,

			// Whether to remove the menu backdrop upon hover
			hideBackdrop: true

		});

		/*滚动后导航条背景设置*/
		$(window).scroll(

			function () {

				var st = $(window).scrollTop();

				if (st>=125){
						// $(".navbar-bg").css("background-color","rgba(255,255,255,.4)");
						// $(".navbar-bgdown").addClass("blur");
						$(".navbar-bgdown").css({"background-image":"url(../images/nav-img.jpg)","background-position":"center bottom"});
				}else {
					// $(".navbar-bg").css("background-color","rgba(255,255,255,.4)");
					// $(".navbar-bgdown").removeClass("blur");
					$(".navbar-bgdown").css({"background-image":"url()","background-position":"center bottom"});

				}
			}
		);


		/*div跟随鼠标移动而移动*/
			$("#point,#tooltip-navbarimg").mousemove(function (e) {/*加入#tooltip-navbarimg是防止鼠标左移动时移到#tooltip-navbarimg上而导致卡顿的现象*/
				var xx= e.pageX+10;
				var yy= e.pageY-10;

				$('#tooltip-navbarimg').css({top: yy, left: xx}).show();
			});
			$("#point").mouseout(function () {
				$('#tooltip-navbarimg').hide();
			});

		/*鼠标hover经过导航条的动画*/
		$(".navbar-nav>li").hover(function () {
			$(this).children("a").addClass("animated swing");
		}, function () {
			/*延时1s，使鼠标离开后动画依然进行*/
			var $this = $(this);
			timer = window.setTimeout(function () {
				$this.children("a").removeClass("animated swing");
			}, 1000);
		});

		/*鼠标hover显示/隐藏轮播图控制按钮*/
			$("#carousel-left,#carousel-right").hover(function () {
				// console.log(this.className);
				$(this).children(".carousel-controlnew").css("display","block");
			},function () {
				// console.log(this.className);
				$(this).children(".carousel-controlnew").css("display","none");
			});


		/*用ajax替换图片*/
/*
		$("#mybtn").bind("click",function () {
		 $.ajax({
		 url:"tsconfig.json",
		 dataType:"json",
		 success: function (data) {
		 var jsontext= data;

		 $.each(jsontext,function (index,obj) {
		 var idx=index+1;

		 /!****************方法1 注意选择器加变量的写法*****************!/
		 //                            $("#img"+idx).attr("src",obj.url);

		 /!***************方法2 注意eq（）用变量时的写法,不能用双引号，要用单引号*******************!/
		 $('.jsonimg:eq('+index+')').attr("src",obj.url);
		 /!****************************************!/

		 })


		 }
		 });

		 })
*/

		/*随机切换图片显示*/
		$("#mybtn").bind("click",function () {

			$(".jsonimg").each(function (index,element) {
				var random_50=parseInt(49*Math.random())+1;
				$('.jsonimg:eq('+index+')').attr("src","../images/b/"+random_50+".jpg");

			})

		});

		/*切换图片按钮动画效果添加*/

		$(".update-div").hover(function () {
			$(".update").addClass("update_hover");
		},function () {
			$(".update").removeClass("update_hover");

				$(".update").addClass("update_hover_reverse");
				setTimeout(function () {
					$(".update").removeClass("update_hover_reverse");
				},600);
		});


		/*排行弹出框*/
		$(".b-r-body-item").hover(function () {
			var $this = $(this);
			var zuobiao = $this.offset();
			var _top = zuobiao.top - 182;
			$("body").append("<div class='ov-box' style='position:absolute;left:" + zuobiao.left + "px;top: " + _top + "px;'><div class='ov'><div class='title'>" + $this.find(".r-title").find("a").html() + "</div><div class='v-info'><span class='v-info-author'>【此生丶】</span><span class='s-line'></span><span class='v-info-date'>2016-07-01 08:48</span></div><div class='v-preview'>" + $this.find(".preview").find("a").html() + "<p class='txt'>" + $this.find(".r-title").find("a").html() + "</p></div><div class='v-data'><span class='gk'><i class='b-icon b-icon-v-play'></i>71.2万</span><span class='dm'><i class='b-icon b-icon-v-dm'></i>11.3万</span><span class='sc'><i class='b-icon b-icon-v-fav'></i>1438</span><span class='coin'><i class='b-icon b-icon-v-coin'></i>7924</span></div></div></div>");
			setTimeout(function () {
				
				$(".ov-box").fadeIn("fast");
			}, 600);
		}, function () {
			$(".ov-box").remove();
		});


		/*jQuery动画例子*/
/*		(function(){
			function someAnimation(args){
				document.getElementById("animation").style.opacity=args;

				 // $(".ov-box")[0].style.opacity=args;
			}
			setInterval(function(){
				for(var i=0;i<10;i++){
					setTimeout((function(pos){
						return function(){
							someAnimation(pos);
						}
					})(i/10),i*100)
				}
			},2000);

		})();*/



		/*火箭返回顶部*/
		var roket_flag=0;//火箭动画标志位，1为火箭动画进行中，0位动画结束
		$(window).scroll(function () {
			var browserHeight=$(window).height();//获取浏览器显示区域的高度 ：
			var scrollY=$(document).scrollTop();//获取滚动条到顶部的垂直高度
			// console.log(roket_flag);
			if(scrollY<=300 && roket_flag!=1){//判断滚动条滚动到哪里,并且不在动画运行中时隐藏
					$(".rocket-to-top").fadeOut();
			}else{
					$(".rocket-to-top").fadeIn();
			}
		});


		$(".rocket-to-top").hover(function () {
			$(this).find(".level-2").css({"opacity":"1"});
		},function () {
			$(this).find(".level-2").css({"opacity":"0"});
		});

		$(".rocket-to-top .level-2").click(function () {
	
			roket_flag=1;//点击后开始动画，标志位置1；
			$("html,body").animate({scrollTop: 0},"slow");//控制滚动条回到顶部
			var $lev3=$(".rocket-to-top .level-3");
			$lev3.css({"display":"block"});
			var fireloop=setInterval(function () {//喷火动画
				setTimeout(function () {
					$lev3.css("background-position-x","-488px");
					setTimeout(function () {
						$lev3.css("background-position-x","-637px");
						setTimeout(function () {
							$lev3.css("background-position-x","-339px");
						},50);
					},50);
				},50);
			},150);
			setTimeout(function () {
				clearInterval(fireloop);
				// $(".rocket-to-top").addClass("rocketup");//用css3写的火箭上升动画
				$(".rocket-to-top").animate({"bottom":"100%"},300,function () {//用jQuery写的火箭上升动画
					roket_flag=0;//动画结束,标志位置0
					$(this).css({"display":"none","bottom":"10%"});
					$lev3.css({"display":"none"});
				});
			},750);
			// $(".rocket-to-top").removeClass("rocketup");
		});
		

		var Media=$("#media")[0];
		Media.volume =.5;




		// alert(typeof null);
/*
		var fucArr=[];
		for (var i=0;i<3;i++)
		{
			fucArr.push(function () {
				alert(i);
			});
		}
		fucArr[1]();
		fucArr[2]();
		fucArr[0]();
*/

	});
