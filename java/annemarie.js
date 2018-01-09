// JavaScript Document
//var canvas;
var ctx;
window.onload = 
 openModal();
closeModal();
plusSlides();
currentSlide();
showSlides();
typeWriter();
allowDrop();
	drop();
	drag();




////slider //////////////
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
var i = 0;
var txt = 'Are You Ready For The Truth!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

/// are you ready for the truth ///////////
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

////////////////////////////////////drop function ////////////////////////////////
function allowDrop(ev) {
    ev.preventDefault(); //preventDefault() to prevent the browser default handling of the data (default is open as link on drop)
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text"); //return any data that was set to the same type in the setData() method
	console.log(document.getElementById(data).src);
	var img=(document.getElementById(data));
   ctx.drawImage(img,0,0,1600,800); // MAKES IMAGE size of canvas
	// ev.target.appendChild(document.getElementById(data)); //The dragged data is the id of the dragged element
}

$('#SaveButton').click( function() {
   var Album = $('#canvas').val();
  if($("#canvas").val() === '') {
    $('#alert').html("<strong>Warning!</strong> You have not created your personalised album yet!!");
    $('#alert').fadeIn().delay(1000).fadeOut();
    return false;
   }
 
});

if(localStorage && localStorage.getItem('canvas')) {
$('#canvas').html(localStorage.getItem('canvas'));
}

$('#DeleteButton').click( function() {
window.localStorage.clear();
location.reload();
return false;
});

$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "#ef8de9");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#91628e");
	});
		$("textarea").focus(function(){
        $(this).css("background-color", "#ef8de9");
    });
    $("textarea").blur(function(){
        $(this).css("background-color", "#91628e");
    });
		$("select").focus(function(){
        $(this).css("background-color", "#ef8de9");
    });
    $("select").blur(function(){
        $(this).css("background-color", "#91628e");
    });
		$("button").focus(function(){
        $(this).css("background-color", "#ef8de9");
    });
  
});
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


