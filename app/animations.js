$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target,
            $target = $(document).find(target).first();

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navbar-list a').each(function () {
        var currLink = $(this);
        if ($(currLink).attr("href")[0] == '#') {
          var refElement = $(currLink.attr("href"));
        } else {
          return;
        }

        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbar-list ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
    if (scrollPos > 25) {
      $('nav').addClass('opaque');
      console.log('here!');
    } else {
      $('nav').removeClass('opaque');
    }
}
