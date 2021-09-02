<template>
<div  class="error"  v-if="error" >{{error}}</div>

<div v-if="post" class="details">
   <h2>{{post.title}}</h2>
   <h4>About: {{post.about}}</h4>
   <p class="content">{{post.content}}</p>
   <h4>Author: {{post.author}}</h4>
   <button v-if="ownership" @click="handleDelete" class="btn-1">Delete Blog</button>
   <router-link :to="{name: 'Edit', params:{ id:post.id}}">
       <button v-if="ownership" class="btn-1">Edit Blog</button>
   </router-link>
</div>

</template>

<script>
import {computed, ref} from 'vue'
import singleCollection  from '../composables/singleCollection'
import deleteCollection from '../composables/deleteCollections'
import addCollecion from '../composables/addCollections'
import getUser from '../composables/getUser'
export default {
props:['id'],
setup(props){
    const { error, post} = singleCollection('posts', props.id)
    const {  deleteDoc } = deleteCollection('posts', props.id)
    const { user } = getUser()

    //ref
    const comment = ref('')
    let allComment= ref([])

    //checking ownership
    const ownership = computed(() => {
        return post.value && user.value && user.value.uid == post.value.userId
    })

//delete function
const handleDelete = async () => {
    await deleteDoc()
}
    return { error ,post, user,ownership, handleDelete }
}
}
</script>

<style scoped >
.details{
    max-width: 1100px;
    margin: 50px auto;
    background: #fdfdfd;
    border-radius: 10px;
    box-shadow: 5px 5px 2px 2px rgb(184, 182, 182);
}
.details h2{
    font-size: 30px;
    color: gray;
  padding: 20px;
  margin-bottom: 10px;
}
.details h4 {
    padding: 15px;
    margin-bottom: 10px;
    font-size: 16px;
    text-transform: uppercase;
}
.content{
    text-align: justify;
    padding: 18px;
    font-size: 25px;
}

.btn-1 {
      background-color: #2c2c2c; 
    border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 10px;
}
.comment{
    margin-bottom: 20px;
    width:100%;
    padding:10px;
    border:none;
    border-bottom: 1px solid #ddd;
    outline: none;
}
</style>