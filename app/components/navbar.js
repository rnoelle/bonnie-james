Vue.component('navbar', {
  props: ['item'],
  template: '<li><a :href="anchor">{{item.label}}</a></li>',
  data: function() {
    return {
      anchor: this.item.ref
    }
  }
})
