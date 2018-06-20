import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)  // pass all the context in the App templte and render
                       // in app selector.
})
