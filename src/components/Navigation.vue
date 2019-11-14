<template>
    <div>
    <v-navigation-drawer
    color="white"
      v-model="drawer"
      app>
      <div v-if="currentUser">

<div  class="mt-10 ml-12 mr-0 mb-0">
       <v-avatar  class="ml-12 mb-4">
      <img
     
        src="../assets/112.jpg"
        
      >
    </v-avatar>

    <h4 class="mb-4 ml-4 darkpurple--text font-weight-regular">{{currentUser.email}}</h4>
    </div>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="title">{{ currentUser.email}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>


</div>
    <ul>
        <router-link tag="li" to="/menu"><v-icon color="grey">restaurant_menu</v-icon> Menu </router-link>
        <router-link tag="li" to="/about"><v-icon color="grey">info</v-icon> Story </router-link>
        <router-link tag="li" to="/login"><v-icon color="grey">lock</v-icon> Login </router-link>
        <router-link tag="li" v-if="currentUser" to="/orders" class="black--text"><v-icon color="grey">clear_all
</v-icon> Orders </router-link>
<router-link tag="li" to="/"><v-icon color="red">chevron_left</v-icon> Back to shop </router-link>
        <router-link tag="li" to="/admin"><v-icon color="red">lock</v-icon> Admin </router-link>
        
 
    </ul>
    
    </v-navigation-drawer>

    <v-app-bar
      app
      color="black"
      dark
    >
      
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="headline">
          <span>Labadiena shop</span>
          <span class="font-weight-light" >By NEDAS RATKEVICIUS</span>
          </v-toolbar-title>
    </v-app-bar>
    </div>
</template>

<script>
import { db } from '@/firebase';

import firebase from 'firebase'
import 'firebase/firestore'
import store from '../store.js'

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch('setUser',user)
  } else {
    store.dispatch('setUser',null)
  }
});

    export default {
            data: () => ({
      drawer: null,
    }),
    computed: {
        currentUser() {
            return this.$store.getters.currentUser
        }
    }
    }
</script>

<style lang="scss" scoped>
li:hover
{
  opacity: 0.2;
}
nav ul{
    padding: 0;
    margin-top: 20px;
    text-decoration: none;
}
nav li{
   color:black;
   margin-left:15%;
   padding: 5px 20px;
   list-style-type: none;
   cursor: pointer;
}
nav li i
{
    margin-right: 10px;
}
nav li:last-child
{
    position: absolute;
    bottom: 40px;
    color: black;
}
</style>