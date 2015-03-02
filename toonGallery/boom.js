$(document).ready(function(){
	 $(".text").css("visibility","hidden");
})


$("#content").mouseenter(function(){
    $(".shadow").css("visibility","hidden")
	$(".shadow").css("-webkit-animation-play-state","paused")
	$("#content").css("-webkit-animation-play-state","paused")
});
$("#content").mouseleave(function(){
    $(".shadow").css("visibility","visible")
	$(".shadow").css("-webkit-animation-play-state","running")

	$("#content").css("-webkit-animation-play-state","running")
});


var count = 0;

$("#content").click(function(){
	count+=1;
	switch(count){
		case 1:
		  
		   $("#content").animate({height:"500px",width:"500px"});
		   $(".shadow").animate({width:"400px"});		   
		   $("#partOne").animate({height:"50%"});
		   $("#partTwo").animate({height:"50%"});
		   $("#partTwo").css("opacity","1");
		   $("#content").css("border","10px solid red");
		   $(".text").css("visibility","visible");	
		   break;
		case 2:		   
		  
		   $("#content").animate({height:"400px",width:"400px"});
		   $(".shadow").animate({width:"300px"});
		   $("#partOne").animate({height:"75%"});
		   $("#partTwo").animate({height:"25%"});		   
		   $("#content").css("border","10px solid black");	
		   $(".text").css("visibility","hidden");
		    $("#partTwo").css("opacity","0.8");
		   count=0;
		   break;
	}
	
	
})
$("#content-prev").click(function(){
	count+=1;
	switch(count){
		case 1:
		  
		   $("#content-prev").animate({height:"500px",width:"500px"});
		   	 $("#partTwo2").css("opacity","1");   
		   $("#partOne2").animate({height:"50%"});
		   $("#partTwo2").animate({height:"50%"});
		   $("#content-prev").css("border","10px solid red");
		   $(".text").css("visibility","visible");	
		   break;
		case 2:		   
		  
		   $("#content-prev").animate({height:"400px",width:"400px"});
		  $("#partTwo2").css("opacity","0.8");
		   $("#partOne2").animate({height:"75%"});
		   $("#partTwo2").animate({height:"25%"});		   
		   $("#content-prev").css("border","10px solid black");	
		   $(".text").css("visibility","hidden");
		   count=0;
		   break;
	}
	
	
})