<template>
  <v-app id="inspire">
    

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Home from './views/Home';
  export default {
    components:{
      Home
    },
    name: 'app',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>

<style lang="scss">
main{
  background-image: url('./assets/labadiena.png');
  background-size:cover;
}
.col h1
{
    font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
    text-align: right;
    color: blue;
}
.col:last-child h1
{
    text-align: left;
}
#info
{
    background-color: blue;

}
</style>
