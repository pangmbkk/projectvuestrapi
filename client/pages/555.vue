<template>
    <div id="555"> 
        <button class="btn btn-primary" >click</button>
        <div class="container" v-for="info in infos" :key="info.id">
            {{info.id}} )  {{info.name}}
        </div>
        
    </div>
</template>

<script>
const axios = require('axios');
export default {
    data(){
        return{
            infos:[],
            info:{
                id:'0',
                name:''
            }
            
        }
    },
    
    methods:{
        async getData(){
            axios
                .get('http://localhost:1337/provinces?id_gte=2')
                .then(response => (this.infos = response.data))
       }
       
    },
    mounted () {
        this.getData()
  }

}
</script>

<style>

</style>
