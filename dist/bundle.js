'use strict';

Vue.component('gallery', {
  template: '\n    <section id="gallery">\n      <slider>\n        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/rock.jpg">\n        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/grooves.jpg">\n        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/arch.jpg">\n        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/sunset.jpg">\n      </slider>\n      \n    <p>\n    Vue.js implements WebComponent-compliant &lt;content&gt; insertion point mechanism.\n    </p>\n    <p>\n    Markup and CSS borrowed from <a href="http://css-tricks.com/modular-future-web-components/" target="_blank">CSS Tricks</a>, which is in turn adapted from <a href="http://csscience.com/responsiveslidercss3/" target="_blank">CSScience</a>. Images courtesy of <a href="http://www.flickr.com/photos/eliya" target="_blank">Eliya Selhub</a>\n    </p>\n  </section>\n  '
});
'use strict';

Vue.component('slider', {
  template: '#img-slider-template',
  replace: true
});
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

Vue.component('registry', {
  template: '\n    <section id="registry">\n      <h2>The couple is registered at:</h2>\n      <div>\n        <a href=\'https://www.amazon.com/wedding/james-scott-bonnie-reid-provo-june-2017/registry/251XPRVK8MRVF\' target="_blank">\n          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/2000px-Amazon.com-Logo.svg.png">\n        </a>\n        <a href="https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?pwsToken=&eventType=Wedding&inventoryCallEnabled=true&registryId=544605754&pwsurl=">\n          <img src="https://d3ei0t9fwgqcl.cloudfront.net/2016/05/27/02/21/17/97e5b886-a115-4f59-8fdd-d61fec749a1f/4214388.png">\n        </a>\n      </div>\n    </section>\n  '
});
'use strict';

Vue.component('top', {
  template: '\n    <div id="top" class="jumbotron">\n      <h1>BONNIE and JAMES</h1>\n    </div>\n  '
});
'use strict';

Vue.component('wedding', {
  template: '\n    <section id="wedding" class="clearfix">\n        <div class="image"></div>\n        <div class="left">\n          <h2>The Wedding</h2>\n          <h4>The marriage will take place <em>30 June 2017</em>.</h4>\n          <h4>A reception will be held in their honor that night:</h4>\n          <h3>The Manderley Reception Center</h3>\n          <h3>1675 North Freedom Boulevard #10G</h3>\n          <h3><em>6-8pm</em></h3>\n          <h5> In consideration of family allergies, please do not wear scented products, such as lotions, cologne, perfume, or essential oils. Thank you!</h5>\n          <aside>\n            <h3><em>6-7pm</em> the couple will greet their guests.</h3>\n            <h3><em>7pm</em> the dancing will begin.</h3>\n            <h3><em>8pm</em> the couple will make their exit!</h3>\n          </aside>\n      </div>\n    </section>\n  '
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