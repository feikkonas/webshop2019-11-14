<template>
    <div>
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
    <v-row class="mt-12" no-gutters>
      <v-col justify="center" align="center" cols="6">
        <router-link to="/whiteshirt">
     <v-img class="a1" contain src="../assets/112.jpg"
      max-width="400"
      max-height="400">
    </v-img></router-link>
      </v-col>
     
      <v-col justify="center" align="center" cols="6">
          <router-link to="/blackshirt">
     <v-img class="a2" contain src="../assets/113.jpg"
      max-width="400"
      max-height="400">
      
    </v-img></router-link>
      </v-col>
    </v-row>
     
    
      

    


    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.a1:hover
{
  opacity: 0.6;
}
.a2:hover
{
  opacity: 0.6;
}
.new1 {
  border: 1 solid black;
  height: 400px;
  width: 1px;
}
</style>