<template>
  <div class="home">
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="../assets/img/2.svg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="../assets/img/2.svg">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="../assets/img/2.svg"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="../assets/img/2.svg"
          alt="image slot"
        >
      </b-carousel-slide>
  
    </b-carousel>

    <div class="container-fluid slide">
      <div class="container">
        <br>
        <h1 style="color:white">ค้นหาติวเตอร์</h1>
        <br>
        <div class="row">

          <select class="form-control col-4 dropdownleft">
            <option selected >--เลือกจังหวัดของคุณ--</option>
            <option v-for="province in provinces" :key="province.id">{{province.name}}</option>
          </select>
          <select class="form-control col-4">
            <option selected >--เลือกวิชา--</option>
            <option  v-for="province in provinces" :key="province.id">{{province.id}}</option>
            
          </select>
          

          <button class="btn btn-primary col " type="submit">ค้นหาติวเตอร์</button>

        </div>

        <br>
          

        <div class="row">
            <select class="form-control col-4 dropdownleft">
              <option selected >--ระดับชั้น--</option>
              <option  v-for="educationlevel in educationlevels" :key="educationlevel.id" >{{educationlevel.name}}</option>
            
          </select>
          <select class="form-control col-4"  >
            <option selected >--เลือกประสบการณ์ผู้สอน--</option>
            <option v-for="province in provinces" :key="province.id">{{province.id}}</option>
            
          </select>

        </div>
        <br>
        

        
      </div>

    </div>
    <div class="container-fluid body">
      <br>
      <div class="row">
        <div class="col"></div>
        <div class="col-9">
          <h4 style="color:gray">รายวิชา</h4>
          <div class="row">
            <ul class="card-columns list-unstyled list-inline d-flex flex-wrap">
              <li v-for="restaurant in filteredList" :key="restaurant.id" class="card  list-inline-item" style="width: 14rem;">
                <img  class="card-img-top img-fluid" :src="restaurant.image.url" style="height: 8rem;" alt="Card image cap" >
                <div class="card-body">
                  <h5 class="card-title">{{ restaurant.name }}  </h5>
                  <p class="card-text">{{ restaurant.description || 'No description provided' }}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </li>
            </ul>
            
            
            
          </div>
    
        </div>
        
        <div class="col"></div>
      </div>


    </div>

    <div class="container-fluid body">
      <br>
  
      <div class="row">
        <div class="col"></div>
        <div class="col-9">
      
          <h4 style="color:gray">ติวเตอร์แนะนำ</h4>
          <div class="row">
            <ul class="card-columns list-unstyled list-inline d-flex flex-wrap">
              <li v-for="restaurant in filteredList" :key="restaurant.id" class="card  list-inline-item" style="width: 14rem;">
                <img  class="card-img-top img-fluid" :src="restaurant.image.url" style="height: 8rem;" alt="Card image cap" >
                <div class="card-body">
                  <h5 class="card-title">{{ restaurant.name }}  </h5>
                  <p class="card-text">{{ restaurant.description || 'No description provided' }}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </li>
            </ul>
            
            
            
          </div>
          

        </div>
        
        <div class="col"></div>
      </div>


    </div>

  </div>
</template>
<script>
import Strapi from 'strapi-sdk-javascript/build/main'

const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

export default {
  data() {
    return {
      query: ''
    }
  },
  computed: {
    filteredList() {
      return this.restaurants.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(this.query.toLowerCase())
      })
    },
    restaurants() {
      return this.$store.getters['restaurants/list']
    },
    provinces(){
      return this.$store.getters['provinces/list']
    },
    educationlevels(){
      return this.$store.getters['educationlevels/list']
    }
  },
  async fetch({ store }) {
    store.commit('restaurants/emptyList')
    const response = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
            restaurants {
              id
              name
              description
              image {
                url
              }
            }
          }
          `
      }
    })
    response.data.restaurants.forEach(restaurant => {
      restaurant.image.url = `${apiUrl}${restaurant.image.url}`
      store.commit('restaurants/add', {
        id: restaurant.id || restaurant._id,
        ...restaurant
      })
    }),
    store.commit('provinces/emptyList')
    const res = await strapi.request('post', '/graphql', {
    data: {
      query: `query {
                provinces{
                  id
                  name
                }
              }`
      }
    })
    res.data.provinces.forEach(province => {
      store.commit('provinces/add',{
        id : province.id || province._id,
        ...province
      })
    }),
    store.commit('educationlevels/emptyList')
    const res2= await strapi.request('post', '/graphql', {
      data: {
        query: `query {
            educationlevels {
              id
              name
            }
          }
          `
      }
    })
    res2.data.educationlevels.forEach(educationlevel => {
      store.commit('educationlevels/add', {
        id: educationlevel.id || educationlevel._id,
        ...educationlevel
      })
    })



  }

}
</script>

<style scoped>
.card{
  margin: 10px;
}
.slide{
  background-color: #2C3E50;
}
.form-control {
  margin-right: 30px;
}
.dropdownleft{
  margin-left: 15px;
  /* แท็บดรอปดาวไปขวามานิดนึง */
}
.btn {
  margin-left: 8px;
  margin-right: 15px;

}

.body{
  background-color:  white  ;
}
.footer{
  background-color: white;
}

</style>

