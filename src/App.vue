<template>
  <div id="app">
   <Navbar> </Navbar>
   <div class="container">
     <div class="row">
       <div class="col-md-9">
            <h2>Store</h2>           
            <Inventory @newItemAdded="addCartItem" :items="items"></Inventory>
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
import Inventory from './components/Inventory' 
import data from './data.js' 
export default {
   components:{
     Navbar,
     Cart,
     Inventory
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
