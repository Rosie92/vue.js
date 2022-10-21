<template>
  <div>
    <h1>━ Vue.js ━</h1>
    <p>Study Page (MainView)</p>
    <div class="menu">
      <button @click="serveItem='serveOne'">📕 serveOne</button>
      <button @click="serveItem='serveTwo'">📗 serveTwo</button>
      <button @click="serveItem='serveThree'">📙 serveThree</button>
      <button @click="serveItem='serveFour'">📘 serveFour</button>
      <button @click="serveItem='serveFive'">📒 serveFive</button>
      <button @click="serveItem='serveSix'">📕 serveSix</button>
      <button @click="serveItem='serveSeven'">📗 serveSeven</button>
      <hr class="hr">
    </div>

    <div v-if="serveItem=='serveOne'">
      <serveOne
        msg="- ServeOne의 'msg'"
        v_once="- 갱신되지 않는 데이터 'v-once, Option'"
        rawHtml="<span style='color: red'>This should be red.</span>"/>
    </div>
    <div v-else-if="serveItem=='serveTwo'"><serve-two/></div>
    <div v-else-if="serveItem=='serveThree'"><serve-three/></div>
    <div v-else-if="serveItem=='serveFour'"><serve-four/></div>
    <div v-else-if="serveItem=='serveFive'"><serve-five/></div>
    <div v-else-if="serveItem=='serveSix'"><serve-six/></div>
    <div v-else-if="serveItem=='serveSeven'"><serve-seven/></div>
  </div>
</template>

<script>
import serveOne from "@/views/studyFolder/serve/ServeOne"; // ServeOne.vue를 갖다씀
import serveTwo from "@/views/studyFolder/serve/ServeTwo";
import serveThree from "@/views/studyFolder/serve/ServeThree";
import serveFour from "@/views/studyFolder/serve/ServeFour";
import serveFive from "@/views/studyFolder/serve/ServeFive";
import serveSix from "@/views/studyFolder/serve/ServeSix";
import serveSeven from "@/views/studyFolder/serve/ServeSeven";

export default {
  name: "mainView",

  props: { // 변수 설정
    jkcho: String // 변수 타입 설정
  },

  components: {
    serveOne, // MainServce.vue를 갖다씀
    serveTwo,
    serveThree,
    serveFour,
    serveFive,
    serveSix,
    serveSeven
  },

  data() {
    return {
      serveItem: ""
    }
  },

  methods: {
  }
}
</script>

<style scoped>
  .hr {
    margin: 30px;
  }
  .menu {
    display: inline-grid;
  }
  button {
    cursor: pointer;
    background-color: white;
    border: 0.1px solid black;
    border-radius: 10px;
    margin: 1px;
  }
</style>