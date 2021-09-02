<template>
  <div class="navbar">
    <nav >
      <img src="@/assets/blog.png"/>
      <h1><router-link :to="{ name: 'Home' }">Blog - Site</router-link></h1>
      <div class="links">
        <div v-if="user">
               <router-link :to="{ name: 'Home' }">Home</router-link>
          <router-link :to="{ name: 'CreateBlog'}">Create Blog</router-link>
           <button @click="handleLogout">LogOut</button>
        </div>
        <div v-else>
         
          <router-link class="btn" :to="{ name: 'Signup' }">Signup</router-link>
        <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
      
</template>

<script>
import {ref} from 'vue'
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
export default {
  setup(){
    const { user } = getUser()
    const { logout } = useLogout()

const handleLogout = async() => {
  await logout()
  console.log('logged out')
}
    return{ user, handleLogout }
  }
}
</script>

<style scoped>
  .navbar {
    padding: 16px 10px;
    margin-bottom: 40px;
    background: white;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  nav img {
    max-height: 60px;
  }
  nav h1 {
    margin-left: 20px;
    
  }
  nav h1 a{
      color: rgb(104, 100, 100);
      text-decoration: none;
      font-size: 25px;
      text-transform: uppercase;
  }
  nav .links {
    margin-left: auto;
  }
  .links a{
      color: black;
      text-decoration: none;
      padding: 10px;
      font-size: 22px;
      text-transform: uppercase;
  }
 a.router-link-active {
    border-bottom: 2px solid #F4D03F;
    padding-bottom: 4px;
  }
  button{
      display: inline-block;
      margin-left: 30px;
      background: #839192;
      color: white;
      border-radius: 8px;
    letter-spacing: 1px;
  }
  .display {
  max-width: 300px;
  margin: 5px auto;
  }
.display h5{
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}

</style>