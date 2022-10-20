<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- components로 등록된 HelloWorld의 msg 변수에 String 값을 입력 -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue' // HelloWorld.vue를 갖다씀

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
