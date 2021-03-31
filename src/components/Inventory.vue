<template>
             
            <div class="row">
                <div v-for="(item, index) in items" :key="index" class="card">
                    <img :src="item.image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"> {{item.title}}</h5>
                        <p class="card-text">{{item.price}}</p>
                        <a href="#" class="btn btn-primary"> Add to cart</a>
                    </div>
                </div>
          </div>
</template>
<script>
export default {
 props: ['items']
}

</script>
<style>

</style>
