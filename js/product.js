window.onload = function(){
	var product_img = document.getElementById("product_img");
	product_img.onmouseover = function(){
		this.src = "img/product_bottom_bg2.jpg";
	}
	product_img.onmouseout = function(){
		this.src = "img/product_bottom_bg.jpg";
	}
	
	// 文字显示/隐藏
	var font_get = document.getElementById("font_get");
	var font_none = document.getElementById("font_none");
	var font_close = document.getElementById("font_close");
	font_get.onclick = function(){
		font_none.style.display = "block";
		font_get.style.display = "none";
		font_close.style.display = "block";
	}
	font_close.onclick = function(){
		font_none.style.display = "none";
		font_get.style.display = "block";
		font_close.style.display = "none";
	}
}