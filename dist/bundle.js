'use strict';

Vue.component('navbar', {
  props: ['item'],
  template: '<li><a :href="anchor">{{item.label}}</a></li>',
  data: function data() {
    return {
      anchor: this.item.ref
    };
  }
});
'use strict';

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}
'use strict';

var app = new Vue({
  el: '#main',
  data: {
    navList: [{
      label: 'B&J',
      ref: '#bandj'
    }, {
      label: 'Wedding',
      ref: '#wedding'
    }, {
      label: 'Registry',
      ref: '#registry'
    }, {
      label: 'RSVP',
      ref: ''
    }]
  }
});