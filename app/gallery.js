new Vue({
  el: '#gallery',
  data () {
    return {
      images: [
        {
          imageUrl: '../assets/bandj1.jpg',
          caption: '<a href="#">Photo by 1</a>'
        },
        {
          imageUrl: '../assets/bandj2.jpg',
          caption: 'Photo by 2'
        },
        {
          imageUrl: '../assets/bandj3.jpg',
          caption: 'Photo by 3'
        },
        {
          imageUrl: '../assets/bandj4.jpg',
          caption: 'Photo by 4'
        }
      ],
      modalclose: true,
      keyinput: true,
      mousescroll: true,
      showclosebutton: true,
      showcaption: true,
      imagecountseparator: 'of',
      showimagecount: true,
      showthumbnails: true
    }
  },
  components: {
    vueImages: vueImages.default
  }
})
