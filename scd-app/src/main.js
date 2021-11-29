import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDvadey0Jjdtq37xLPZmfhQORNiOX08ez8",
  authDomain: "scd-app-f740a.firebaseapp.com",
  databaseURL: "https://scd-app-f740a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "scd-app-f740a",
  storageBucket: "scd-app-f740a.appspot.com",
  messagingSenderId: "690496865488",
  appId: "1:690496865488:web:10c3ee37260840392d8ad5"
};

firebase.initializeApp(firebaseConfig);

Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});




new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
