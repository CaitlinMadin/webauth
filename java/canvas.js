// JavaScript Document
window.onload = init;
var canvas;
var ctx;
var screenWidth;
var screenHeight;
var mousePressed = false;


function init() {
	console.log("Working");

	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d"); //draw

	screenWidth = window.innerWidth;
	screenHeight = window.innerHeight;
	canvas.width = screenWidth;
	canvas.height = screenHeight;
	canvas.addEventListener("mousedown", (function (e) {
		mousePressed = true;

	}));

	canvas.addEventListener("mouseup", (function (e) {
		mousePressed = false;
	}));

}