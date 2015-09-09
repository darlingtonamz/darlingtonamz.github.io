$(window).scroll(function() {
	    /*console.log("Scrolling @: " + $(this).scrollTop());*/
	    var info = $("#nametext").html();
	    console.log(info);
	    if ($(this).scrollTop() > 100){  
	    	if ($("#navcont").html().length < 1){
		        //$('#nametext').addClass("sticky");

		        //$('#nametext img').addClass("smallimg");
		        $("#navcont").append("<img class='shad' src='img/1.jpg'> Amanze Ogbonna");
		        $('#navcont').addClass("greenback");

		        $("#nametext").animate({
				    opacity: 0
				  }, 100, function() {});

		        //toggleSize("#nametext");
		        //$("#nametext").empty();
		    }
	    }
	    else{
	        //$('#nametext').removeClass("sticky");

		        //toggleSize("#nametext");
		       $("#nametext").animate({
				    opacity: 1
				  }, 100, function() {});
	        //$('#navcont').removeClass("greenback");
	        //$('#nametext img').removeClass("smallimg");

	        //$("#nametext").append($("#nametext").html());
	        $("#navcont").empty();
	    }
	});

	/*$( "#card1" ).click(function() {
		  $( "#card1 .rblockbody" ).animate({
		    height: "toggle"
		  }, 1000, function() {});
		});*/
	$( "#card2" ).click(function() {
		swap("#card2");		
		$('div.mainhead').animate({opacity: 0}, 'slow', function() {
	        $(this)
	            .css({'background-image': 'url(img/about.jpg)'})
	            .animate({opacity: 1});
	    });
	});

	$( "#card3" ).click(function() {
		swap("#card3");
		bgchange();
	});
	$( "#card4" ).click(function() {
		swap("#card4");
		bgchange();
	});

	function bgchange(){
		switch(getRandomInt(0,3)) {
		    case 0:
		        $('div.mainhead')
			    .animate({opacity: 0}, 'slow', function() {
			        $(this)
			            .css({'background-image': 'url(img/cheetah.jpg)'})
			            .animate({opacity: 1});
			    });
		        break;
		    case 1:
		    	$('div.mainhead')
			    .animate({opacity: 0}, 'slow', function() {
			        $(this)
			            .css({'background-image': 'url(img/water.jpg)'})
			            .animate({opacity: 1});
			    });
		        break;
	        case 2:
		    	$('div.mainhead')
			    .animate({opacity: 0}, 'slow', function() {
			        $(this)
			            .css({'background-image': 'url(img/fabric.jpg)'})
			            .animate({opacity: 1});
			    });
		        break;
		    default:
		        $('div.mainhead')
			    .animate({opacity: 0}, 'slow', function() {
			        $(this)
			            .css({'background-image': 'url(img/city.jpg)'})
			            .animate({opacity: 1});
			    });
		}
	}
	function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function swap (id) {

		toggleSize("#card1 .rblockbody");			
		//toggleSize(id);

		var head = ($("#card1 .rblockhead").html());
		var body = ($("#card1 .rblockbody").html());
		$("#card1 .rblockhead").empty();
		$("#card1 .rblockhead").append($(id+" .rblockhead").html());
		$("#card1 .rblockbody").empty();
		$("#card1 .rblockbody").append($(id+" .rblockbody").html());

		toggleSize("#card1 .rblockbody");
		//toggleSize(id);

		$(id+" .rblockhead").empty();
		$(id+" .rblockhead").append(head);
		$(id+" .rblockbody").empty();
		$(id+" .rblockbody").append(body);
	}

	function toggleSize (id) {
		$( id ).animate({
		    height: "toggle"
		  }, 200, function() {});
	}

	// resume
	$(document).ready(function() {
  $('.adobe').css('width', '100%');
  $('.html').css('width', '100%');
  $('.css').css('width', '100%');
  $('.lesssass').css('width', '50%');
  $('.jquery').css('width', '70%');
  $('.javascript').css('width', '55%');
  $('.bootstrap').css('width', '90%');
  $('.wordpress').css('width', '85%');
  $('.ui').css('width', '100%');
  $('.ux').css('width', '90%');
  $('.rwd').css('width', '85%');
  $('.mobile').css('width', '85%');
  $('.rapidproto').css('width', '95%');
});

	function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}