'use strict';

Vue.component('footer-elem', {
  template: '\n    <footer>\n      <p>&copy; Noelle Reid</p>\n      <p>All Rights Reserved</p>\n    </footer>\n  '
});
"use strict";

Vue.component("Lightbox", VueLightbox.VueLightbox);

Vue.component('gallery', {
  template: "\n    <section id=\"gallery\">\n      <h2>Gallery</h2>\n      <div class=\"lightboxes\">\n        <lightbox src=\"../assets/bandj2.jpg\" caption=\"Photo by Jennsine Erickson\" album=\"bandj\">\n          <img src=\"../assets/bandj2.jpg\">\n        </lightbox>\n        <lightbox src=\"../assets/bandj1.jpg\" caption=\"Photo by Jennsine Erickson\" album=\"bandj\">\n          <img src=\"../assets/bandj1.jpg\">\n        </lightbox>\n        <lightbox src=\"../assets/bandj3.jpg\" caption=\"Photo by Jennsine Erickson\" album=\"bandj\">\n          <img src=\"../assets/bandj3.jpg\">\n        </lightbox>\n        <lightbox src=\"../assets/bandj4.jpg\" caption=\"Photo by Jennsine Erickson\" album=\"bandj\">\n          <img src=\"../assets/bandj4.jpg\">\n        </lightbox>\n        <lightbox src=\"../assets/bandj5.jpg\" caption=\"Photo by Jennsine Erickson\" album=\"bandj\">\n          <img src=\"../assets/bandj5.jpg\">\n        </lightbox>\n        <lightbox src=\"../assets/bandj6.jpg\" caption=\"Photo by Jennsine Erickson\" album=\"bandj\">\n          <img src=\"../assets/bandj6.jpg\">\n        </lightbox>\n        <lightbox src=\"../assets/bandj7.jpg\" caption=\"Photo by Jennsine Erickson\" album=\"bandj\">\n          <img src=\"../assets/bandj7.jpg\">\n        </lightbox>\n        <lightbox src=\"../assets/bandj8.jpg\" caption=\"Photo by Jennsine Erickson\" album=\"bandj\">\n          <img src=\"../assets/bandj8.jpg\">\n        </lightbox>\n      </div>\n      <h3>Photos by <em><a href=\" https://www.facebook.com/jennsinesphotos/\" target=\"_blank\">Jennsine Erickson</a></em></h3>\n    </section>\n  "
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
  template: '\n    <section id="registry">\n      <h2>The couple is registered at:</h2>\n      <div>\n        <a href=\'http://www.target.com/gift-registry/giftgiver?registryId=b991c274e19e4dda823e17df1e2bc760\' target="_blank">\n          <img src="http://static.wixstatic.com/media/4a07ef_dd6b5375b3ab4811865ac03536efd67a~mv2.png">\n        </a>\n        <a href="https://www.honeyfund.com/wedding/bonnieandjamesforever" target="_blank">\n        <img src="https://www.capolyeverafter.com/wp-content/uploads/2016/10/logo-honeyfund.png">\n        The couple are in need of a washer and dryer - you can contribute here!\n      </a>\n        <a href=\'https://www.amazon.com/wedding/james-scott-bonnie-reid-provo-june-2017/registry/251XPRVK8MRVF\' target="_blank">\n        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/2000px-Amazon.com-Logo.svg.png">\n        </a>\n      </div>\n    </section>\n  '
});
'use strict';

Vue.component('top', {
  template: '\n    <div id="top" class="jumbotron">\n      <h1>BONNIE and JAMES</h1>\n    </div>\n  '
});
'use strict';

Vue.component('wedding', {
  template: '\n    <section id="wedding" class="clearfix">\n        <div class="image"></div>\n        <div class="left">\n          <h2>The Wedding</h2>\n          <h4>The marriage will take place <em>30 June 2017</em>.</h4>\n          <h4>A reception will be held in their honor that night:</h4>\n          <h3>The Manderley Reception Center</h3>\n          <h3>1675 North Freedom Boulevard #10G</h3>\n          <h3><em>6-8pm</em></h3>\n          <h5> In consideration of family allergies, please do not wear scented products, such as lotions, cologne, perfume, or essential oils. Thank you!</h5>\n          <aside>\n            <h3><em>6-7pm</em> the couple will greet their guests.</h3>\n            <h3><em>7pm</em> the dancing will begin.</h3>\n            <h3><em>8pm</em> the couple will make their exit!</h3>\n          </aside>\n      </div>\n    </section>\n  '
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
            menu = target,
            $target = $(document).find(target).first();

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
        } else {
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
'use strict';

var app = new Vue({
  el: '#main',
  data: function data() {
    return {
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
        ref: 'https://docs.google.com/forms/d/e/1FAIpQLSdLouG4QnhmTchRfqF7xWUO6uvVPrBqCOdCkKd3JDrI_In9hQ/viewform?usp=sf_link'
      }]
    };
  }
});