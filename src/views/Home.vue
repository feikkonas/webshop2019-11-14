<template >
  <v-app class="white">
    
    <v-app-bar class="white" height="60px" flat app>

  <v-container>
    <v-row no-gutters>
      <v-col class="ma-3" order="1">
  
           <div class="text">CLOTHES|ACCESSORIES</div>
      </v-col>
      <v-col order="2" align="center" justify="center">
          <v-img class="image" justify-center contain src="../assets/bbb.png"
            aspect-ratio="1"
              max-width="50"
              max-height="50"></v-img>

      </v-col>
      <v-col order="3">
    
          <router-link to="/menu"><div class="text1 ma-3"><v-icon color="black">add_shopping_cart</v-icon>YOUR CART</div></router-link>

      </v-col>
    </v-row>
  </v-container>

    </v-app-bar>
      <v-row align="center" justify="center">
    <v-img class="a1" justify-center contain src="../assets/aaa.jpg"
      max-width="1100"
      max-height="1100">
      
    </v-img>
  </v-row>
        <v-row align="center" justify="center">
<router-link to="/ndpage"><v-btn class="wow" tile color="white" >ORDER NOW</v-btn></router-link>
      </v-row>
          <router-view></router-view>
  </v-app>
</template>

<script>

export default {

}
</script>
<style>
.image {
  justify: center;
  align: center;
}
.text1 {
  float: right;
  text-decoration: none;
  color: black;
}
.text1:hover
{
  opacity: 0.2;
}
a {  text-decoration: none;}
::-webkit-scrollbar {
    display: none;
}
.a1
{
  position: relative;
  top: 13%;
}
.wow
{
        position: absolute;
      top: 75%;
  left: -5%;
}
</style>