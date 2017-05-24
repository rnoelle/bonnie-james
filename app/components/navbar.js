Vue.component('navbar', {
  props: ['item'],
  template: '<a :href="anchor"><li>{{item.label}}</li></a>',
  data: function() {
    return {
      anchor: this.item.ref
    }
  }
})
