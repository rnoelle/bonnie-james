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
          ref: ''
        }
      ]
    }
  }
})
