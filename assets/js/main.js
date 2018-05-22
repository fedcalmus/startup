$(function() {

    var AppPlugins = {

        map: function () {
            var newyork = {lat: 40.71427, lng: -74.00597};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                disableDefaultUI: true,
                center: newyork,
                styles: [
                    {
                        "featureType": "all",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "weight": "2.00"
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#9c9c9c"
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.man_made",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#685838"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#7b7b7b"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": 'road.highway',
                        "elementType": 'geometry',
                        "stylers": [{"color": '#909090'}]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#a6a6a0"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#a6a6a0"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#646464"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    }
                ]

            });

            var marker = new google.maps.Marker({
                position: newyork,
                map: map,
                icon: 'assets/images/marker.png'
            });

        },

        owlCarousel: function () {
            $('#owl-testimonials').owlCarousel({
                nav: true,
                navText: ["<i class='fas fa-caret-left'></i>", "<i class='fas fa-caret-right'></i>"],
                items: 1,
                loop: true,
                center: true,
                margin: 0,
                lazyLoad: true,
                dots: false,
                autoplay:true,
                autoplayTimeout:4000,
                autoplayHoverPause:true,
            });
        },

        owlCarouselTestimonials: function () {
            $('#owl-companies').owlCarousel({
                nav: true,
                navText: ["<i class='fas fa-caret-left'></i>", "<i class='fas fa-caret-right'></i>"],
                items: 4,
                loop: true,
                center: true,
                margin: 0,
                lazyLoad: true,
                dots: false,
            });
        },

        smoothscroll: function () {
            $(".smooth-scroll").click(function () {
                var href = $(this).attr('href');
                $('html, body').animate({
                    scrollTop: $(href).offset().top
                }, 800);
            });
        }
    };

    /* ------ Plugins Init ------ */
    AppPlugins.map();
    AppPlugins.owlCarouselTestimonials();
    AppPlugins.owlCarousel();
    AppPlugins.smoothscroll();
});
