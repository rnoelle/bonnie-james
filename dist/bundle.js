'use strict';

Vue.component('navbar', {
  props: ['item'],
  template: '<a :href="anchor"><li>{{item.label}}</li></a>',
  data: function data() {
    return {
      anchor: this.item.ref
    };
  }
});
'use strict';

Vue.component('top', {
  template: '\n    <div id="top" class="jumbotron">\n      <h1>BONNIE and JAMES</h1>\n    </div>\n  '
});
'use strict';

Vue.component('wedding', {
  template: '\n    <section id="wedding">\n        <div class="image"></div>\n        <div class="left">\n          <h2>The Wedding</h2>\n          <h4>The marriage will take place <em>30 June 2017</em>.</h4>\n          <h4>A reception will be held in their honor that night:</h4>\n          <h3>The Manderley Reception Center</h3>\n          <h3>1675 North Freedom Boulevard #10G</h3>\n          <h3><em>6-8pm</em></h3>\n          <h5> In consideration of family allergies, please do not wear scented products, such as lotions, cologne, perfume, or essential oils. Thank you!</h5>\n          <aside>\n            <h3><em>6-7pm</em> the couple will greet their guests.</h3>\n            <h3><em>7pm</em> the dancing will begin.</h3>\n            <h3><em>8pm</em> the couple will make their exit!</h3>\n          </aside>\n      </div>\n    </section>\n  '
});
// $(document).ready(function () {
//     $(document).on("scroll", onScroll);
//
//     //smoothscroll
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");
//
//         $('a').each(function () {
//             $(this).removeClass('active');
//         })
//         $(this).addClass('active');
//
//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top+2
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });
//
// function onScroll(event){
//     var scrollPos = $(document).scrollTop();
//     $('#menu-center a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('#menu-center ul li a').removeClass("active");
//             currLink.addClass("active");
//         }
//         else{
//             currLink.removeClass("active");
//         }
//     });
// }
"use strict";
'use strict';

var app = new Vue({
  el: '#main',
  data: {
    navList: [{
      label: 'Wedding',
      ref: '#wedding'
    }, {
      label: 'Registry',
      ref: '#registry'
    }, {
      label: 'Gallery',
      ref: '#gallery'
    }, {
      label: 'RSVP',
      ref: ''
    }]
  }
});