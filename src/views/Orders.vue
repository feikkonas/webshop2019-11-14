<template>
    <div>
<v-container fluid>
   <navigation />
    <v-row>


        <v-col offset-md="1" md="6">
            <h1 class="aaa">Orders</h1>
             <div class="pa-2" id="info_box">
                 <v-row class="ma-0">
                     <v-col cols="12" md="1" class="pa-2 pl-5">

                     </v-col>
                      <v-col cols="12" md="5" class="pa-2">
                        <v-row align="center">
                            <div id="status_box" class="green"> Completed </div>
                            <span class="font-weight-light caption pl-1"> Done </span>
                        </v-row>

                         <v-row align="center">
                            <div id="status_box" class="orange"> In-progress </div>
                            <span class="font-weight-light caption pl-1"> Somebody is working on it </span>
                        </v-row>

                         <v-row align="center">
                            <div id="status_box" class="red"> Not started </div>
                            <span class="font-weight-light caption pl-1"> Not started yet </span>
                        </v-row>
                     </v-col>
                      <v-col cols="12" md="6" class="pa-2">
                        <v-row>
                            <div id="status_box" class="green"> Completed </div>
                            
                            <div id="status_box" class="orange"> In-progress </div>
   
                            <div id="status_box" class="red"> Not started </div>
                        </v-row>
                          <v-row>
                                <p class="font-weight-light caption pl-1">
                                  <b>Single-click</b> asdasdasdasdasddaasdasdas
                                  <b>Double-click</b> asdasdasdasdasddaasdasdas
                                </p>
                                <span class="font-weight-light caption pl-1">

                                    <v-icon color="grey">archive</v-icon>
                                    Archive is "hide" it from order list
                                </span>
                          </v-row>
                     </v-col>                   
                 </v-row>
                 </div> 

                 <!--aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->

            <div class="pa-2 mt-1" id="info_box">
            <p class="font-weight-bold body-1 pa-3 yellow--text">
                             ORDERS:
                         </p>
             </div> 
         <v-simple-table id="menu-table">
    <template v-slot:default>
      <thead>
        <tr>
        <th class="text-left" style="width:10%">Order nr.</th>
        <th class="text-left" style="width:10%">QTY</th>
        <th class="text-left" style="width:40%">Item</th>
          <th class="text-left" style="width:10%">Price</th>
          <th class="text-left" style="width:10%">Status</th>
          <th class="text-left" style="width:10%">Archive item</th>
          <th class="text-left" style="width:10%">Remove</th>
        </tr>
      </thead>
      <tbody class="font-weight-light">
        <tr v-for="item in orderItems" :key="item.name">
          <td>
            {{ item.orderNumber }}
          </td>
          <td class="py-3">
              <p v-for="subitem in item.orderLines" :key="subitem.id" style="margin:0;">{{ subitem.quantity }}</p>
        
          </td>
          <td 
          ><p v-for="subitem in item.orderLines" :key="subitem.id" style="margin:0;">{{ subitem.name }}</p></td>
          <td >
             <p v-for="subitem in item.orderLines" :key="subitem.id" style="margin:0;">{{ subitem.price }}</p>
          </td>
          <td>
             <div id="status_box" class="orange"> {{item.status}} </div>
          </td>
          <td>
            <v-btn small text @click="addToBasket(item)">
                  <v-icon class="grey">archive
                  </v-icon>
              </v-btn>
          </td>
          <td>
             <v-btn small text @click="deleteOrderItem(item.id)">
                  <v-icon class="red">delete
                  </v-icon>
              </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-col>



        <v-col offset-md="0" md="4">
            <h1 class="aaa">Revenue</h1>
            <div class="pa-2" id="info">
                Revenue
    </div>
                <div class="pa-2 mt-1" id="info">
                    Completed orders
    </div>
</v-col>
</v-row>
</v-container>
</div>
</template>

<script>
import Navigation from '../components/Navigation';
import { dbOrders } from '@/firebase';
   export default {
      components:{
      Navigation
    },
    data () {
      return {
       
      basketDump: [],
        
      }
    },
       beforeCreate(){
      this.$store.dispatch('setOrderItems')
    },
    methods: {
        deleteOrderItem(id){
            dbOrders.doc(id).delete().then(() => {
                console.log("Stuff is deleted");
            }).catch((error) => {

            })
        },
          addToBasket(item){

             this.basketDump.push({
             name: item.name,
             price: item.price,
             quantity: 1,
              }),
              this.$store.commit("addBasketItems", this.basketDump);
              this.basketDump = []; 
             },
      increaseQtn(item)
      {
        item.quantity++
      },
            decreaseQtn(item)
      {
        item.quantity--;

        if (item.quantity === 0) {
          this.basket.splice(this.basket.indexOf(item), 1)
        }
      }
    },
    computed: {
      basket()
      {
       // return this.$store.state.basketItems
       return this.$store.getters.getBasketItems
      },
            orderItems()
      {
       // return this.$store.state.basketItems
       return this.$store.getters.getOrderItems
      },
      subTotal() {
        var subCost = 0;
        for( var items in this.basket)
        {
          var individualItem = this.basket[items];
          subCost += individualItem.quantity * individualItem.price;
        }
        return subCost
      },
      total () {
var deliveryPrice = 10;
var totalCost = this.subTotal
return totalCost + deliveryPrice
      }
    }
  }
</script>

<style lang="scss" scoped>
    #status_box
    {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35px;
        width: 90px;
        font-size: 12px;
        border-radius: 2px;
        margin: 5px 0;
        color: black;
    }
    .aaa
    {
      color: black;
    }
    #info
    {
      background-color: #2a2a2b5d;
    }
</style>