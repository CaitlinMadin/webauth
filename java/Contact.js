// JavaScript Document
window.onload = contactInit;

function contactInit() {
    var submitButton = document.getElementById("contact-submit");
    submitButton.onclick = submit;
    retrievedata();
}

function submit() {
    // Get the value of the name field.
    var Storname = document.getElementById('name').value;
    var Stormail = document.getElementById('mail').value;
    var Stormsg = document.getElementById('msg').value;
    var Storfav = document.getElementById('Favourite').selectedIndex;
    // Save the name in localStorage.
    localStorage.setItem('name', Storname);
    localStorage.setItem('mail', Stormail);
    localStorage.setItem('msg', Stormsg);
    localStorage.setItem('fav', Storfav);
    //$("#name,#mail,#msg").on('change keypress paste focus textInput input', localStorage);
}
function retrievedata() {
    console.log("moo!");
    var storName = localStorage.getItem("name");
    var storEmail = localStorage.getItem("mail");
    var storMessage = localStorage.getItem("msg");
    var storFav = localStorage.getItem('fav');
    $("#name").val(storName);
    $("#mail").val(storEmail);
    $("#msg").val(storMessage);
    document.getElementById('Favourite').selectedIndex = storFav;
}

/************* input feild style***************/
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
