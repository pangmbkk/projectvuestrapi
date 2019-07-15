<template>
    <div> 
     
        <div class="container-fluid row bodynon">
          
            <div class="container">
                <br>
                <div class="form-group  row"> <!-- ฟอรม เลือก จังหวัด-->
                    <div class="col-1"></div>

                    <div class="col-4">
                        <select class="form-control form-control-sm">
                            <option selected >--เลือกจังหวัดของคุณ--</option>
                            <option v-for="province in provinces" :key="province.id">{{province.name}}</option>
                           
                        </select>

                    </div>
                    <div class="col-4">
                        <select class="form-control form-control-sm">
                            <option selected >--เลือกวิชา--</option>
                            <option v-for="subjectname in subjectnames" :key="subjectname.id">{{subjectname.name}}</option>
                        </select>
                    </div>
                    <button class="btn btn-primary btn-sm col" type="submit">ค้นหา</button>
                    <div class="col-1"></div>
                           
                </div><!-- จบform -->
                <div class="form-group row">
                    <div class="col-1"></div>

                    <div class="col-4 ">
                        <select class="form-control form-control-sm">
                            <option selected >--ระดับชั้น--</option>
                            <option v-for="educationlevel in educationlevels " :key="educationlevel.id">{{educationlevel.name}}</option>
                        </select>

                    </div>
                    <div class="col-4">
                        <select class="form-control form-control-sm">
                            <option selected >--เลือกประสบการณ์ผู้สอน--</option>
                            <option>ยังไม่มี</option>
                            <option>2 เดือน</option>
                            <option>5 เดือน</option>
                        </select>
                    </div>
                   
                    <div class="col"></div>

                </div>
            </div><!--จบcontainer -->

        </div><!--จบcontainer-fluid -->

        <div class="container-fluid body">
         

            <div class="container">

                <br>
                <div class="row">
                    <div class="col-9">
                        <div >
                            <div v-for="info in infos" :key="info.id"    >   
                                <hr>
                                <router-link to="/" tag="a" class="router" >  
                                <div class="row pointer"  >
                                    
                                                  
                                    <div class="col-3 "  >
                                            <img class="card-img-left img-fluid" :src="'http://localhost:1337' + info.image.url"  alt="">
                                                                             
                                        
                                    </div>

                                    <div class="col">
                                        <h4 class="title"> {{info.name}}   </h4>
                                        <br>
                                        <p>
                                            {{info.description}}
                                        </p>
                                    </div>

                                    <div class="col-2">
                                        <h4>ประกาศของ</h4>
                                        <p class="card-text"   >
                                           {{ info.user.username ||'No description provided' }}
                                        </p>
                                    </div>
                                     
                                </div> 
                                </router-link> 
                            </div>
                        </div>
    

                    </div>

                    <div class="col-3">
                        
                        <hr>
                        <ul class="list-group ">
                            <li class="list-group-item texbox ">
                                <h5>วิธีการใช้งานเว็บไซต์</h5>
                                <p>-------------------------------------------</p>
                                
                            </li>
                            
                        </ul>
                        <br>
                        <ul class="list-group ">
                            <li class="list-group-item texbox ">
                                <h5>วิธีการใช้งานเว็บไซต์</h5>
                                <p>-------------------------------------------</p>
                                
                            </li>
                            
                        </ul>
                            


                    </div>

                </div>
                
            </div>
                
                
        </div>
       
       

    </div>

       

   
</template>
<style scoped>
.router{
    text-decoration:none;
    color: black;
}

.bodynon{
    background-color:  #2C3E50 !important; 
}
.texbox {
  background-color: none;
}
.body {
  background-color: white;
}
img{
   margin-bottom: 5px;
   margin-top: 5px;
   border: 0;
   width: 50;
   max-width: 100%;
   height: auto;
}
.pointer{
    cursor: pointer;
}

</style>

<script>
// @ is an alias to /src
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)
const axios = require('axios');

export default {
    data() {
    return {
        infos:[],
        info:{
                id:'0',
                name:'',
                description:''
            
            },
       provinces:[],
       subjectnames:[],
       educationlevels:[]
    }
  },

    methods:{
    
        async getData(){
            axios
                .get('http://localhost:1337/announcementposts')
                .then(response => {
                    this.infos = response.data ;
                    console.log('get Announcementposts success')
                });
            axios.get('http://localhost:1337/provinces').then(res=>{
                this.provinces = res.data
                console.log('get provinces success')
            })
            axios.get('http://localhost:1337/subjectnames').then(res=>{
                this.subjectnames = res.data
                console.log('get subjectnames success')
            })
            axios.get('http://localhost:1337/educationlevels ').then(res=>{
                this.educationlevels = res.data
                console.log('get educationlevels success')
            })
            
      },
    },
    mounted(){
        this.getData();
        
        

    }
    

}
</script>
