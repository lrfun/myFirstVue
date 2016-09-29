import Vue from "vue";  
import VueRouter from "vue-router";  
import login from './components/login.vue';
import register from './components/register.vue';

Vue.use(VueRouter);
  
var App = Vue.extend({})  
var router = new VueRouter({hashbang: false, history: true})  
router.map({  
    '/login': {  
        component:login
    },  
    '/register': {  
        component:register
    }  
      
})  
  
router.start(App, '#app')
