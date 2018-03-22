var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

// $("masthead").attr("height", h);

// $(window).resize(function(){
//     $("masthead").attr("height", h);
// })

$(document).ready(function(){
	console.log('aaa')
    $("header.masthead").css({"height": h});
});