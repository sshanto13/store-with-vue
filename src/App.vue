<template>
  <div id="app">
<!-- <router-link :to="{'path': '/'}"> Home </router-link>
<router-link :to="{'path': '/suman/1'}"> Suman 1 </router-link>
<router-link :to="{'path': '/suman/2'}"> Suman 2</router-link>
<router-link :to="{'path': '/suman/3'}"> Suman 3</router-link>
<router-link :to="{'path': '/suman/4'}"> Suman 4</router-link>
<router-view></router-view> -->
   <Navbar @search="search"> </Navbar>
   <div class="container">
     <div class="row">
       <div class="col-md-9">
            <h2>Store</h2>  
            <router-view></router-view>         
            <!-- <Inventory @newItemAdded="addCartItem" :items="items"></Inventory> -->
       </div>
        <div class="col-md-3">
           <h2>Cart</h2>
           <Cart @itemRemoved="removeCartItem" :items="cart"></Cart>

       </div>
     </div>
   </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Cart from './components/Cart'
// import Inventory from './components/views/Inventory' 
import data from './data.js' 
export default {
   components:{
     Navbar,
     Cart
    //  Inventory
   },
   data(){
     return{
        items: [],
        cart: []
     }
   },
   mounted(){
     this.items = data
     //console.log(data)
   }, 
   methods:{
     search(keyword){
        this.items = data.filter(item=>{
          return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !==-1
        })
     },
     addCartItem(item){
        this.cart.push(item);
     },
     removeCartItem(index){
        this.cart.splice(index,1);
     }
   }
}
</script>

<style>

</style>
