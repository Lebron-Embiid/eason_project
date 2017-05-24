window.onload = function(){
	var slide = document.querySelector(".slide");
	var banner = document.querySelector(".banner");
	var prev = document.querySelector(".prev");
	var next = document.querySelector(".next");
	var nav = document.querySelector(".slide .nav");
	var li = document.querySelectorAll(".slide .nav li");
	var x = 1;
	function move(e){
		var Left = parseInt(banner.style.left)+e;
		banner.style.left = Left+"px";
		if(Left < -1143){
			banner.style.left = 0;
		}
		if(Left > 0){
			banner.style.left = "-1143px";
		}
	}
	prev.onclick = function(){
		move(1143);
		x--;
		if(x<1){
			x=2;
		}
		btn();
	}
	next.onclick = function(){
		move(-1143);
		x++;
		if(x>2){
			x=1;
		}
		btn();
	}
	function btn(){
		for(var i=0;i<li.length;i++){
			li[i].className = "";
		}
		li[x-1].className = "active";
	}
	for(var i=0;i<li.length;i++){
		li[i].onclick = function(){
			var li_index = parseInt(this.getAttribute("index"));
			var li_on = -1143*(li_index-x);
			move(li_on);
			x = li_index;
			btn();
		}
	}
}