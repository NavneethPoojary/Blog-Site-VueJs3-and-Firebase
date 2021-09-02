<template>
  <AllBlogs/>
</template>

<script>
import { watch } from '@vue/runtime-core'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
import AllBlogs from '../components/AllBlogs.vue'
export default {
  name: 'Home',
  components: { AllBlogs },
  setup(){
    const { user } =getUser()
    const router = useRouter()
  watch(user, () => {
    if(!user.value){
      router.push({ name: 'Login'})
    }
  })

  }
}
</script>
