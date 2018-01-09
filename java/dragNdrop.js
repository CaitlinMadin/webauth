// JavaScript Document

//////////////////////DONT NEED THIS DELTE WHEN SORTED /////////////////////////////////////////////
/*window.onload = init;
function init(){
	console.log("moo!");
var canvas = document.getElementById("canvas"), //refenrece my canvas
	ctx = canvas.getContext("2d");
	var img = document.createElement("img"); 
	var mouseDown= false;
	var brushColor="rgb(0,0,0)"; //brush color
	var hasText = true;
	var clearCanvas = function(){
		if (hasText){
			ctx.clearRect(0,0, canvas.width, canvas.height);
			hasText=false;
		}
	};
		ctx.fillText("drop an image on to the canvas", 600,600); //instruction
		ctx.fillText("click a spot to set as brush colour", 240,220);
		
		img.addEventListener("load", function(){
		 clearCanvas();
		ctx.drawImage(img, 0,0);	
	}, false);//loading event for the image to be loaded onto then drawn on
	
		//detect mousedown
		canvas.addEventListener("mousedown", function (){
			clearCanvas();
			mouseDown =true;
			ctx.beginPath();
		}, false);
		//detect mouseup
		canvas.addEventListener("mouseup", function (evt){
			mouseDown =false;
			var colors = ctx.getImageData(evt.layerX, evt.layerY, 1,1).data;
			//brushColor = "rgb(" + colors[0] + colors[1]+","+colors[2]+")";
		//},false);
		 //method on the canvas context to detect the color of the canvas coordinates where the mouse button was released. Here we just read out the RGB color and then set that as the new brush color for our drawing.
	
	
		//Draw if mosue button is pressed
		canvas.addEventListener("mousemove", function (evt){
			if (mouseDown){
				ctx.strokeStyle= document.getElementById("selColour").value;
				ctx.lineWidth = 20; //draw a 20 px wide rounded line
				ctx.lineJoin="round";
				ctx.lineTo(evt.layerX+1, evt.layerY+1);
				ctx.stroke();
			}
		}, false);
	
	canvas.addEventListener("dragover", function(evt){
		evt.preventDefault();
	}, false); //drag and drop
	
		canvas.addEventListener("drop", function (evt){ //dragover event to the canvas and cancel its default behavior
			var files = evt.dataTransfer.files;
			if(files.length > 0) {
				var file = files[0];
				if(typeof FileReader !=="undefined" && file.type.indexOf ("image") !== -1)// it gets a reference to the dropped file, and then utilizes the FileReader object to directly read out the dropped image as code (i.e. as a data URL, a base64-encoded representation of the image).
				{
					var reader = new FileReader();
					reader.onload=function (evt){
						img.src = evt.target.result;
					};
					reader.readAsDataURL(file);//FileReader it loads that image as a src for the image container we created before.
				}
			}
			evt.preventDefault();
		}, false);
	
	
	/*//save image
	var saveImage = document.createElement("button");
	saveImage.innerHTML= "Save Canvas";
	saveImage.addEventListener("click", function (evt){
		window.open(canvas.ToDataURL("image.png"));
		evt.preventDefault();
	}. false);
	document.getElementById("main content").appendChild(saveImage);*/
}
	
		
		
		
	*/
	