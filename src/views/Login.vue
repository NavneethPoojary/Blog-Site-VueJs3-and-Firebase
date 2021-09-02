<template>
<form @submit.prevent="handleSubmit">
    <h1>LogIn</h1>
    <input type="email" placeholder="email" required v-model="email">
    <input type="password" placeholder="pasword" required v-model="password">
    <div class="error">{{error}}</div>
    <button>Log In</button>
</form>
</template>

<script>
import {ref} from 'vue'
import useLogin from '../composables/useLogin'
import { useRouter } from 'vue-router'
export default {
    setup(){
        const email = ref('')
        const password = ref('')
        const { error,login} = useLogin()

        //router init
        const router = useRouter()


    const handleSubmit = async() => {
        await login(email.value, password.value)
        if(!error.value){
            router.push({ name: 'Home'})
        }
    }
    return { email,password,handleSubmit, error}
    }
}
</script>

<style scoped>
h1{
    padding: 12px;
    margin-bottom: 20px;
     text-transform: uppercase;
}

</style>