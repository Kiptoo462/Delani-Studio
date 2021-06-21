$(document).ready(function(){

  $("#design").click(function(){
    $(".jQ1").show();
    $("#design").hide();
  });

  $("#development").click(function(){
    $(".jQ2").show();
  $("#development").hide();
   });

  $("#product-management").click(function(){
    $(".jQ3").show();
  $("#product-management").hide();
});

$(".jQ1").click(function(){
  $(".jQ1").hide();
  $("#design").show();
});
$(".jQ2").click(function(){
  $(".jQ2").hide();
  $("#development").show();
});
$(".jQ3").click(function(){
  $(".jQ3").hide();
  $("#product-management").show();
});


$(".portfolio img.img-work-1").hover(function (){
  $(".portfolio td .work-1").show();
}, function (){
  $(".portfolio td .work-1").hide();
});

$(".portfolio img.img-work-2").hover(function (){
  $(".portfolio td .work-2").show();
}, function (){
  $(".portfolio td .work-2").hide();
});

$(".portfolio img.img-work-3").hover(function (){
  $(".portfolio td .work-3").show();
}, function (){
  $(".portfolio td .work-3").hide();
});

$(".portfolio img.img-work-4").hover(function (){
  $(".portfolio td .work-4").show();
}, function (){
  $(".portfolio td .work-4").hide();
});

$(".portfolio img.img-work-5").hover(function (){
  $(".portfolio td .work-5").show();
}, function (){
  $(".portfolio td .work-5").hide();
});

$(".portfolio img.img-work-6").hover(function (){
  $(".portfolio td .work-6").show();
}, function (){
  $(".portfolio td .work-6").hide();
});

$(".portfolio img.img-work-7").hover(function (){
  $(".portfolio td .work-7").show();
}, function (){
  $(".portfolio td .work-7").hide();
});

$(".portfolio img.img-work-8").hover(function (){
  $(".portfolio td .work-8").show();
}, function (){
  $(".portfolio td .work-8").hide();
});




});



function contact(){
  var username = document.getElementById("name").value;
  alert(username + " we have received your message. Thank you for reaching out to us.")
}