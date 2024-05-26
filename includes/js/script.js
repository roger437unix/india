$(document).ready(function() {
    
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
	autoplay:true,
	autoplayTimeout:2500,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false,
            loop:true
        },
        992:{
            items:4,
            nav:false,
            loop:true
        }
    }
	
});
    
    // script for offer banner slider
    /*$('#owl-demo-sop').slick({
        autoplay: true,
        arrows: false,
        fade: true,
        autoplaySpeed: 3000,
        dots: false,
		pauseOnHover: false,
        pauseOnFocus: false,
        adaptiveHeight: true
    });*/
    
    document.getElementById("copyrgtyear").innerHTML = "2023";

	/* script tour packages get quote button for form footer */
	$('.form-btn').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		$('#txtName').focus();
		return false;
	});
	$('.scroll-link').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		return false;
	});
    
    
	// $(".close-offer-btn").on("click",function(event){
	// 	event.preventDefault();
	// 	$(".offer-banner").remove();
	// });

	// var ob_hid = $("#ob_hid").attr("value");

	 //if(ob_hid!=1){

	 /*if(localStorage.getItem('popState') != 'shown'){
        $("#offer-banner").delay(2000).fadeIn();
        localStorage.setItem('popState','shown')
    }*/
    //}
   // alert(ob_hid);
    /*$('.close-offer-btn').click(function(e)
    {	
    	e.preventDefault();
    	$('#offer-banner').fadeOut();
    });
    $('#offer-banner').click(function(e) 
    {
    	$('#offer-banner').fadeOut(); 
    });*/
    
    
    
    
    
	
	//tab
$('.tab-menu').click(function(event){
			event.preventDefault();
		var tab_id = $(this).attr('data-tab');

		$('.tab-menu').removeClass('current');
		$('.tab-container').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})	
	
});

// Script for Navbar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Cookie script
function getCookie(cookie_Name)
{
	if (document.cookie.length>0)
	{
		cookie_Start=document.cookie.indexOf(cookie_Name + "=");
		if (cookie_Start!=-1)
		{ 
			cookie_Start=cookie_Start + cookie_Name.length+1; 
			cookie_End=document.cookie.indexOf(";",cookie_Start);
			if (cookie_End==-1) cookie_End=document.cookie.length;
			return unescape(document.cookie.substring(cookie_Start,cookie_End));
		} 
	}
	return "";
}

function setCookie(cookie_Name,value,expireDays)
{
	var exDate=new Date();
	exDate.setDate(exDate.getDate()+expireDays);
	document.cookie=cookie_Name+ "=" +escape(value)+((expireDays==null) ? "" : ";expires="+exDate.toGMTString())+";path=/";
}

function eraseCookie(cookie_Name) {
	setCookie(cookie_Name,"",-1);
}

function checkCookie()
{
	strReferrer=getCookie("strReferrer");
	if ((strReferrer==null || strReferrer=="") && document.referrer.indexOf(document.domain) == -1)
	{
		strReferrer = document.referrer;
		setCookie("strReferrer",strReferrer,1);
	}
	else if (strReferrer != document.referrer && document.referrer.indexOf(document.domain) == -1)
	{
		strReferrer = document.referrer;
		setCookie("strReferrer",strReferrer,1);
	}
}

function addLoadEvent(func) 
{
	var oldOnLoadFunc = window.onload;
	if (typeof window.onload != 'function')
	{
		window.onload = func;
	}
	else
	{
		window.onload = function()
		{
			if (oldOnLoadFunc)
			{
				oldOnLoadFunc();
			}
			func();
		}
	}
}
addLoadEvent(checkCookie);

// Cookie script ends here