$(document).ready(function() {
/**responsive nav menu**/
$('.open-navigation a i').click(function(e) {
		e.preventDefault();
		$("ul.hs_nav").slideToggle('slow');
	  }); 
/**responsive nav menu end**/
/***paternchane Script***/
$('.paternchange').click(function(){
var name=$(this).attr('id');
var new_style='css/'+name+'.css';
$('#theme-change').attr('href',new_style);

});

$('.paternchange').click(function(){
var name=$(this).attr('id');
var new_style='css/'+name+'.css';
$('#stheme-change').attr('href',new_style);

});
$("#style-switcher .bottom a.settings").click(function(e){
			e.preventDefault();
			var div = $("#style-switcher");
			if (div.css("left") === "-180px") {
				$("#style-switcher").animate({
					left: "0px"
				}); 
			} else {
				$("#style-switcher").animate({
					left: "-180px"
				});
			}
		});
// setting gear
		$('.settings').hover(
		  function () {
			$(this).children('i').removeClass("fa-spin");
		  },
		  function () {
			$(this).children('i').addClass("fa-spin");
		  }
		);

 /***paternchane Script end***/   
 $.smoothScroll();

 $(function() {
    $( "#datepicker" ).datepicker();
  });
$('.category-menu li a').on('click',function(e){
		e.preventDefault();
		$(".category-menu li").removeClass('active');
		$(this).parent('li').addClass('active');
		var loc=$(this).attr('href');
		$("#tab-container>div").css({'display':'none'});
		$(loc).fadeIn(100);
	});
	$('.event-menu li a').on('click',function(e){
		e.preventDefault();
		$(".event-menu li").removeClass('hs_active');
		$(this).parent('li').addClass('hs_active');
		var loc=$(this).attr('href');
		$("#event-container>div").css({'display':'none'});
		$(loc).fadeIn(100);
	});
$(".fancybox").fancybox();
		


	$('.fancybox-media')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',

					arrows : false,
					helpers : {
						media : {},
						buttons : {}
					}
				});








if ($.fn.mixitup) {
	      $('#grid').mixitup( {
	        filterSelector: '.filter-item'
	      } );
	      $(".filter-item").click(function(e) {
	      	e.preventDefault();
	      })
	  }
//$('#more_gallery').hide();
$('#view_more_gallery').click(function(e){
e.preventDefault();
$('#more_gallery').show();

});
function DropDown(el) {
				this.dd = el;
				this.initEvents();
			}
			DropDown.prototype = {
				initEvents : function() {
					var obj = this;

					obj.dd.on('click', function(event){
						$(this).toggleClass('active');
						event.stopPropagation();
					});	
				}
			}

			$(function() {

				var dd = new DropDown( $('.wrapper-dropdown-5') );

				$(document).click(function() {
					// all dropdowns
					$('.wrapper-dropdown-5').removeClass('active');
				});

			});

//chart
$('.chart').waypoint(function(event, direction) {
		$('.chart').easyPieChart({
			easing: 'easeOutBounce',
			barColor:'#e20000',
			trackColor:'#f6f6f6',
            scaleColor:false,
            lineWidth:10,
			size:191,
			lineCap:'circle',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	},{
	  triggerOnce: true,
	  offset: 'bottom-in-view'
	});
//rounded slider

 var carousel = $("#carousel").waterwheelCarousel({
          flankingItems: 3,
          movingToCenter: function ($item) {
            $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
          },
          movedToCenter: function ($item) {
            $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
          },
          movingFromCenter: function ($item) {
            $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
          },
          movedFromCenter: function ($item) {
            $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
          },
          clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
          }
        });

        $('#prev').bind('click', function () {
          carousel.prev();
          return false
        });

        $('#next').bind('click', function () {
          carousel.next();
          return false;
        });

        $('#reload').bind('click', function () {
          newOptions = eval("(" + $('#newoptions').val() + ")");
          carousel.reload(newOptions);
          return false;
        });


	});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 150) {
        //clearHeader, not clearheader - caps H
        $('.main-menu').addClass('fixed');
    }
else{
$('.main-menu').removeClass('fixed');
}
});
$(window).load(function () {
    "use strict";
   	$("#status").fadeOut();
	$("#preloader").delay(350).fadeOut("slow");
});
$('#colorSelector').ColorPicker({
	color: '#0000ff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		$('#colorSelector div').css('backgroundColor', '#' + hex);
$('body').css('backgroundColor', '#' + hex);
$('.new-price').css('backgroundColor', '#' + hex);
$('.bottom_heading_div').css('backgroundColor', '#' + hex);
$('.bottom_img').css('backgroundColor', '#' + hex);
$('.container').append('<style>ul.category-menu li.active a:after{background-color:#'+hex+' }</style>');
}
});