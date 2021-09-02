<template>
<div class="form-background">
  <form @submit.prevent = "handleSubmit">
      <h1>Create Your Blog</h1>
      <label>Tittle:</label>
      <input type="text" required v-model="title">
      <label>About (topic):</label>
          <input type="text" required v-model="about">
      <label>Content:</label>
      <textarea required v-model="content"></textarea>
      <label>Author:</label>
      <input type="text" required v-model="author">
      <button>Add Blog</button>
  </form>
</div>


</template>

<script>
import {ref} from 'vue'
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config'
import addCollections from '../composables/addCollections'
import {useRouter} from 'vue-router'
export default {
    setup(){
        const { user } = getUser()
        const { error, addDoc } = addCollections('posts')

        //init router
        const router = useRouter()

        const title = ref('')
        const about = ref('')
        const content = ref('')
        const author = ref('')

    const handleSubmit = async() => {
        const blog = {
            // name:user.value.displayName,
            title:title.value,
            about:about.value,
            content: content.value,
            author: author.value,
            userId:user.value.uid,
            userName: user.value.displayName,
            createdAt: timestamp()
        }
        const res = await addDoc(blog)
        if(!error.value){
            router.push({ name: 'Details', params:{id : res.id}})
        }
    }

    return{ title, about, content, author, handleSubmit,error }
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