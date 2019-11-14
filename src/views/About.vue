<template>
<v-container grid-list-xs>
    <navigation />
<v-layout align-center class="info_box">
    <v-flex sm4 xs12 offset-sm1>
        <h1>
            Laba Diena
        </h1>
       
    </v-flex>
</v-layout>
<v-layout align-center class="info_box" row wrap>
    <v-flex>
        <h3>
            Once a man met the Sun, the Wind and the Cold. He said labàdienà to them. The Sun, the Wind and the Cold argued which of them was addressed. They caught him and asked. The man told he greeted the Wind. Then the Sun began to heat, the Cold began to freeze, but the Wind saved the man.

labàdienà is an archaic Lithuanian word, which means “good day” and is used to greet people in a polite manner. This notion inspires the brand to join pagan mythology with urban aesthetics by promoting a nature-friendly environment as well as encouraging communication.
        </h3>
    </v-flex>
    
</v-layout>
</v-container>
</template>
<script>
import Navigation from '../components/Navigation';
    export default {
        components:{
      Navigation
    },
    }
</script>
<style lang="scss" scoped>
.info_box:first-child .flex h1
{
  font-size: 150%;
  padding: 50px;
}
</style> 