$(function() {
    var $nav = $('#navArea');
    var $btn = $('.toggleBtn');
    var $mask = $('#mask');
    var open = 'open'; //class

    //menu
    $btn.on( 'click', function() {
        if (! $nav.hasClass( open ) ) {
            $nav.addClass( open );
        } else {
            $nav.removeClass( open );
        }
    });

    //mask
    $mask.on('click', function() {
        $nav.removeClass( open );
    });

    $('.slickArea').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerPadding: '10px',
              slidesToShow: 1
            }
          }
        ]
      });

      // スクロール時　フェードイン
      $(window).scroll(function(){
        $('.fadeIn').each(function(){
            let scroll = $(window).scrollTop();
            let target = $(this).offset().top;
            let windowHeight = $(window).height();
            if(scroll > target - windowHeight + 200) {
                $(this).css('opacity' , '1');
                $(this).css('transform' , 'translateY(0)');
            }
        });
      });
} );
