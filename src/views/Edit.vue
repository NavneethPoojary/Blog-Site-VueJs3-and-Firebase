<template>
<div v-if="error">{{error}}</div>
<div class="form-background">
  <form @submit.prevent = "handleSubmit">
      <h1>Edit Your Blog</h1>
      <label>Tittle:</label>
      <input type="text" required v-model="title">
      <label>About (topic):</label>
          <input type="text" required v-model="about">
      <label>Content:</label>
      <textarea required v-model="content"></textarea>
      <label>Author:</label>
      <input type="text" required v-model="author">
      <button>Edit Blog</button>
  </form>
</div>

</template>

<script>
import deleteCollections from '../composables/deleteCollections'
import getUser from '../composables/getUser'
import getCollections from '../composables/getCollection'
import {computed, onUpdated} from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {timestamp} from '../firebase/config'
export default{
props:['id'],
    setup(props){
        const { error, updateDoc } = deleteCollections('posts', props.id)
        const {  posts } =  getCollections('posts')
      
        const { user } = getUser()

        //initalizing router
        const router =  useRouter()

    const title = ref('')
    const about = ref('')
    const content = ref('')
    const author = ref('')
  
    const handleSubmit = async() => {
        console.log(posts)
         await updateDoc({
             title: title.value,
            about:about.value,
            content: content.value,
            author: author.value,
            createdAt: timestamp()
        })
       
        if(!error.value){
            router.push({ name: 'Details'})
        }
      
    }
        return { title, about, content, author, error,  deleteCollections, handleSubmit}
    }
}

</script>



<style scoped>
.form-background{
    max-width: 500px;
    margin: 45px auto;
}
form{
    padding: 20px;
}
h1{
    text-transform: uppercase;
    margin-bottom: 30px;
    border-bottom: 1px dashed #eee;
    color: #839192;
    padding-bottom: 15px;
}
 label{
    display: block;
    text-align: left;
    margin-left: 40px;
    font-size: 20px;
    text-transform: uppercase;
    position:relative ;
    padding: 10px 0;
    font-weight: bold;
}
input[type="text"],
textarea{
     display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid rgb(196, 193, 193);
}
textarea{
   height: 180px;
   outline: none;
}


</style>