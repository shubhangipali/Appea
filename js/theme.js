;(function($){
    "use strict"
	
	
	var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
	
	
	/*----------------------------------------------------*/

	
	/*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function testimonials_slider(){
        if ( $('.testi_slider').length ){
            $('.testi_slider').owlCarousel({
                loop: true,
                margin: 30,
                items: 2,
                // nav: true,
                autoplay: true,
                smartSpeed: 1500,
                dots:true, 
                // responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768:{
                        items: 3,
                    },
                }
            })
        }
    }
    testimonials_slider();
	
	
	/*----------------------------------------------------*/


    function app_screenshot_slider(){
        if ( $('.app_screenshot').length ){
            $('.app_screenshot').owlCarousel({
                loop: true,
                margin: 30,
                items: 2,
                 //nav: true,
                autoplay: true,
                smartSpeed: 1500,
                dots:true, 
                // responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 4,
                    },
                }
            })
        }
    }
    app_screenshot_slider();

	
	
	/*=================== Partners slider ===================*/
	function particles(){
		if($('#particles').length > 0){
			particlesJS("particles", {
			  "particles": {
			    "number": {
			      "value": 100,
			      "density": {
			        "enable": true,
			        "value_area": 1443.0708547789707
			      }
			    },
			    "color": {
			      "value": "#ffffff"
			    },
			    "shape": {
			      "type": "circle",
			      "stroke": {
			        "width": 0,
			        "color": "#000000"
			      },
			      "polygon": {
			        "nb_sides": 5
			      },
			      "image": {
			        "src": "img/github.svg",
			        "width": 100,
			        "height": 100
			      }
			    },
			    "opacity": {
			      "value": 0,
			      "random": true,
			      "anim": {
			        "enable": false,
			        "speed": 1,
			        "opacity_min": 0.1,
			        "sync": false
			      }
			    },
			    "size": {
			      "value": 3,
			      "random": true,
			      "anim": {
			        "enable": false,
			        "speed": 40,
			        "size_min": 0.1,
			        "sync": false
			      }
			    },
			    "line_linked": {
			      "enable": true,
			      "distance": 212,
			      "color": "#ffffff",
			      "opacity": 0.30464829156444934,
			      "width": 2
			    },
			    "move": {
			      "enable": true,
			      "speed": 8.017060304327615,
			      "direction": "none",
			      "random": false,
			      "straight": false,
			      "out_mode": "out",
			      "bounce": false,
			      "attract": {
			        "enable": false,
			        "rotateX": 641.3648243462092,
			        "rotateY": 1200
			      }
			    }
			  },
			  "interactivity": {
			    "detect_on": "canvas",
			    "events": {
			      "onhover": {
			        "enable": true,
			        "mode": "grab"
			      },
			      "onclick": {
			        "enable": true,
			        "mode": "repulse"
			      },
			      "resize": true
			    },
			    "modes": {
			      "grab": {
			        "distance": 400,
			        "line_linked": {
			          "opacity": 1
			        }
			      },
			      "bubble": {
			        "distance": 400,
			        "size": 40,
			        "duration": 2,
			        "opacity": 8,
			        "speed": 3
			      },
			      "repulse": {
			        "distance": 200,
			        "duration": 0.4
			      },
			      "push": {
			        "particles_nb": 4
			      },
			      "remove": {
			        "particles_nb": 2
			      }
			    }
			  },
			  "retina_detect": true
			});
		}
	}
	particles();

})(jQuery)