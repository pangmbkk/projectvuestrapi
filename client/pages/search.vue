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
                            <option>สงขลา</option>
                            <option>กรุงเทพฯ</option>
                            <option>เชียงใหม่</option>
                        </select>

                    </div>
                    <div class="col-4">
                        <select class="form-control form-control-sm">
                            <option selected >--เลือกวิชา--</option>
                            <option>ภาษาอังกฤษ</option>
                            <option>ฟิสิกส์</option>
                            <option>math</option>
                        </select>
                    </div>
                    <button class="btn btn-primary btn-sm col" type="submit">ค้นหา</button>
                    <div class="col-1"></div>
                           
                </div><!-- จบform -->
                <div class="form-group row">
                    <div class="col-1"></div>

                    <div class="col-4">
                        <select class="form-control form-control-sm">
                            <option selected >--ระดับชั้น--</option>
                            <option>ประถมปีที่ 1</option>
                            <option>มัธยมปีที่ 1</option>
                            <option>มหาวิทยาลัยปีที่ 1 </option>
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
                            <div     >   
                                <hr>
                                <router-link to="/" tag="a" class="router" >  
                                <div class="row pointer"  >
                                    
                                                  
                                    <div class="col-3 "  >
                                            <img class="card-img-left img-fluid" src="../assets/img/2.svg"  alt="">
                                                                             
                                        
                                    </div>

                                    <div class="col">
                                        <h4 class="title"> 555   </h4>
                                        <br>
                                        <p>
                                            66666
                                        </p>
                                    </div>

                                    <div class="col-2">
                                        <h4>ประกาศของ</h4>
                                        <p class="card-text"   >
                                             'No description provided' }}
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
        info:[]
       
    }
  },

    methods:{
    
      async getData(){
          axios
                .get('http://localhost:1337/provinces')
                .then(response => (this.info = response.data))
      }
    }
    

}
</script>
