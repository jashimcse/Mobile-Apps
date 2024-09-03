(function($, window, document, undefined) {

    //slick  start

    $(document).on('ready', function() {


        $(".center").slick({
            autoplay: true,
            dots: true,
            infinite: true,
            arrows: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 400,
            centerPadding: '1',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 1
                    }
                }
            ]
        });

    });

})(jQuery, window, document);
