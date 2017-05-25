var app = new Vue({
  el: '#main',
  components: {
    vueImages: vueImages.default
  },
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
      ],
      images: [
        {
          imageUrl: '../assets/bandj1'
        }, {
          imageUrl: '../assets/bandj2'
        }, {
          imageUrl: '../assets/bandj3'
        }, {
          imageUrl: '../assets/bandj4'
        }
      ]
    }
  }
})
