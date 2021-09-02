<template>
        <div v-if="posts">
            <div class="post"
            v-for="post in formattedPosts" :key="post.id">
            <router-link :to="{name:'Details', params:{ id: post.id}}">
                <h2>{{post.title}}</h2>
                </router-link>
                <p>{{post.content}}</p>
                <div class="time">
                    <p> {{post.createdAt}} ago</p>
                </div>
                <div v-if="error"> {{error}} </div>
            </div>
        </div>
</template>

<script>
import getCollections from '../composables/getCollection'
import { formatDistanceToNow} from 'date-fns'
import { computed } from '@vue/reactivity'
export default {
    setup(){
        const { error, posts } = getCollections('posts')
        //computed properties
        const formattedPosts = computed(() => {
            if(posts.value ){
                return posts.value.map(post => {
                    let time = formatDistanceToNow(post.createdAt.toDate()) 
                    return { ...post, createdAt:time } 
                })
            }
        })

        return { error,posts,formattedPosts }
    }
}
</script>

<style scoped>


.post{
max-width: 1300px;
    width: 100%;
    margin: 40px auto;
    padding: 20px 25px;
  background: rgb(252, 252, 252);
  border-radius: 10px;
  margin-bottom: 30px;
}
.post:hover{
    box-shadow: 6px 6px 6px rgb(182, 243, 243)
}
.post h2{
    text-transform: uppercase;
    font-size: 28px;
    padding: 15px 0;
    font-weight: bold;
    cursor: pointer;
    color: rgb(250, 87, 27);
    text-shadow: 3px 3px 3px #ccc;
    margin-bottom: 7px;
}
a{
    text-decoration: none;
}
.post p {
     text-align: justify;
     padding: 5px;
    font-size: 20px;
    color: black; 
}
.time p{
    margin: 20px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
}


</style>