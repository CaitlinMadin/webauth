// JavaScript Document
window.onload = init;
var canvas;
var ctx;
var screenWidth;
var screenHeight;
var mousePressed= false;
//var Kiss = document.getElementById("Kiss");
//var Sign = document.getElementById("Sign");
//var Number1 = document.getElementById("Number1");
//var KissImage = new Image();
//KissImage.src =""
//var x;
//var y;
//var lastX;
//var lastY;
//var selWidth;

function init(){
	console.log("moo!");
	
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");//draw

	screenWidth= window.innerWidth;
	screenHeight= window.innerHeight;
	canvas.width=screenWidth;
	canvas.height=screenHeight;
	canvas.addEventListener("mousedown",(function(e){
		mousePressed= true;
		//x=e.pageX- this.offsetLeft;
		//y=e.pageY - this.offsetTop;
		
	}));

canvas.addEventListener("mouseup",(function(e){
		mousePressed= false;
		//x=e.pageX- this.offsetLeft;
		//y=e.pageY - this.offsetTop;
		
	}));
	//Kiss.addEventListener("change",(function (e){
	//	if (Kiss.checked == false){
	//		console.log('checked is false');
	////	}else{
		//	console.log ('checked is true');
		//}
	//}));
	
		
	//	mousePressed = true;
		
	//})

		
	

}