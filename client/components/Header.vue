<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link tag="a" class="navbar-brand" to="/" exact>FIND TUTOR</router-link>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

        <li class="nav-item active">
          <a class="nav-link textcolor" href="http://localhost:3000/">หน้าหลัก <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="http://localhost:3000/search">ค้นหาติวเตอร์</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">วิชาเรียน</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="http://localhost:3000/about">เกี่ยวกับ</a>
        </li>

      </ul>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav">
          <li v-if="username">
            <a href="#" class="nav-link">
              Hello {{ username }}
            </a>
          </li>
          <li v-if="username">
            <a href="#" class="nav-link" @click="logout">
              Logout
            </a>
          </li>
          <li v-if="!username">
            <router-link v-if="!username" tag="a" class="nav-link" to="/signin" exact>
              <b-button variant="outline-primary">  
                Signin
              </b-button>
              
            </router-link>
          </li>
          
          <li v-if="!username">
            <router-link v-if="!username" tag="a" class="nav-link" to="/signup" exact>
            <b-button  variant="primary">
              Signup
            </b-button>
              
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    username() {
      return this.$store.getters['auth/username']
    }
  },
  methods: {
    ...mapMutations({
      logout: 'auth/logout'
    })
  }
}
</script>

<style scoped>
.navbar{
  background-color: white !important ;
  border-bottom: solid blue 0.2px;
}

</style>
