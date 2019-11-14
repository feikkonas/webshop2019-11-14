<template>
    <div>
       <v-app-bar flat app>
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
      <div class="new1"></div>
    <v-img class="a1" justify-center contain src="../assets/113.jpg"
      max-width="400"
      max-height="400">
      
    </v-img>
    <p>Black Symbol t-shirt <br>
400 DKK<br>
Longline kimono cut, relaxed fit, round neckline,<br> silkscreen print, woven tag, 100% cotton.<br>
<br>
Size guide</p>
<h2> S │ M │ L │ XL </h2>
 <v-btn flat class="wowa" tile color="white" to="/menu">>ORDER NOW</v-btn>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.a1
{
    position: absolute;
  top: 18%;
  left: 11%;
}
p
{
        position: absolute;
  top: 35%;
  left: 65%;
   text-align: center;
}
h2
{
    position: absolute;
      top: 65%;
  left: 72%;
}
.wowa
{
        position: absolute;
      top: 75%;
  left: 73.5%;
}
</style>