window.onload = function(){
	var banner_box = document.querySelector(".banner");
	var banner = document.querySelector(".banner .slide_box");
	var slide_nav = document.querySelectorAll(".banner .slide_nav li");
	var img = document.querySelectorAll(".banner .slide_box img");
	var banner_box_width = banner_box.clientWidth;
	var n=1;
	var timer;
	function move(e){
		var Left = parseInt(banner.style.left)+e;
		banner.style.left = Left+"px";
		if(Left < -2880){
			banner.style.left = "0px";
		}
	}
	function right(){
		move(-1362);
		n++;
		if(n>3){
			n=1;
		}
		btn();
	}
	for(var i=0;i<slide_nav.length;i++){
		slide_nav[i].onclick = function(){
			var nav_index = parseInt(this.getAttribute("index"));
			var nav_on = -1362*(nav_index-n);
			move(nav_on);
			n = nav_index;
			btn();
		}
	}
	function btn(){
		for(var i=0;i<slide_nav.length;i++){
			slide_nav[i].className = "";
		}
		slide_nav[n-1].className = "active";
	}
	function play(){
		timer = setInterval(function(){
			right();
		},1000)
	}
	play();
	banner_box.onmouseover = function(){
		clearInterval(timer);
	}
	banner_box.onmouseout = function(){
		play();
	}

	// function width(){
	// 	var banner_box = document.querySelector(".banner");
	// 	var box_width = banner_box.clientWidth;
	// 	banner_box_width = box_width;
	// 	for(var i=0;i<img.length;i++){
	// 		img[i].style.width = banner_box_width+"px";
	// 	}
	// }
	// var time = setInterval(width,1000);

	var business = document.querySelector(".business");
	var bus_left = document.querySelector(".business .left");
	var bus_right = document.querySelector(".business .right");
	var business_banner = document.querySelector(".business .business_banner");
	var business_ul = document.querySelector(".business .business_banner .business_ul");
	var m = 1;
	var bus_timer;
	function bus_move(e){
		var bus_Left = parseInt(business_ul.style.left)+e;
		business_ul.style.left = bus_Left+"px";
		if(bus_Left < -780){
			business_ul.style.left = 0;
		}
		if(bus_Left > 0){
			business_ul.style.left = "-780px";
		}
	}
	bus_left.onclick = function(){
		bus_move(260);
		m--;
		if(m<1){
			m = 3;
		}
	}
	bus_right.onclick = function(){
		bus_move(-260);
		m++;
		if(m>3){
			m = 1;
		}
	}
}