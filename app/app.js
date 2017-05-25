var app = new Vue({
  el: '#main',
  data: function() {
    return {
      navList: [
        {
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
        }
      ]
    }
  }
})
