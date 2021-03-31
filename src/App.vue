<template>
  <div id="app">
   <Navbar> </Navbar>


   <div class="container">
     <div class="row">
       <div class="col-md-9">
            <h2>Store</h2>
            
            <Inventory :items="items"></Inventory>

       </div>
        <div class="col-md-3">
           <h2>Cart</h2>
                          <ul class="list-group">
                               <Cart :items="items"></Cart>
            
            </ul>
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
        cart: [{
          id:1,
          image: 'http://dummyimage.com/250x250.png/dddddd/000000' ,
          title: abcde,
          price: 10
        }]
     }
   },
   mounted(){
     this.items = data
     //console.log(data)
   }
}
</script>

<style>

</style>
