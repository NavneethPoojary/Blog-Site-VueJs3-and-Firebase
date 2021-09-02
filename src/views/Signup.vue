<template>
  <form @submit.prevent="handleSubmit">
    <h1>SignUp</h1>
    <input
      type="text"
      placeholder="display name"
      required
      v-model="displayName"
    />
    <input type="email" placeholder="email" required v-model="email" />
    <input type="password" placeholder="pasword" required v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "../composables/useSignup";
import { useRouter } from 'vue-router'
export default {
  setup() {
    const { error, signup } = useSignup();
    //refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    
    const router =  useRouter()

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value  );
          if(!error.value){
         router.push({ name: 'Home'})
       }
    };
  
       

    return { email, password, displayName, handleSubmit, error };
  },
};
</script>

<style scoped>
h1 {
  padding: 12px;
  margin-bottom: 20px;
  text-transform: uppercase;
}
</style>
