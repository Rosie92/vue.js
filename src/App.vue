<!-- App.vue 파일이 vue의 최상단 파일, header라는 뜻이 아닌 메인으로써 뿌려주는 역할 -->
<template>
  <nav>
    <router-link to="/">Home</router-link>&nbsp <!-- onclick과 똑같음 -->
    <router-link to="/about">About</router-link>&nbsp
    <router-link to="/main">Main</router-link> <!-- router의 path값인 /main로 연결 -->
  </nav>
  <router-view/> <!-- router에 설정한 링크들을 화면에 표시하는 역할 -->
</template>

<script>
export default {
  created() {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
