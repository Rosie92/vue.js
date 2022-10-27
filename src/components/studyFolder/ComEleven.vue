<template>
  <div class="margin">
    <h1>11. axios 활용</h1>

    <div class="margin">
      <h2>⚾ backend 통신을 위한 설정</h2>
      <div class="margin">
        <p>🏀 간단한 백엔드 생성 (8090)</p>
        <img src="../../assets/img/backend.png"  alt="backend"/>
        <p>🏀 통신을 위한 [ vue.config.js ] 설정</p>
        <img src="../../assets/img/setting.png"  alt="setting"/>
        <p>🏀 Vue에서 axios로 통신 시도 (8080)</p>
        <img src="../../assets/img/axios.png"  alt="axios"/>
      </div>

      <div class="margin">
        <h2>⚾ 테스트</h2>
        <p>🏀 yoasobi 버튼 클릭 시 getYoasobi 메소드 실행,<br/>
          backEnd와 axios 통신하여 데이터를 리턴
        </p>
        <div class="stateStyle">
          <div class="check">
            <input type="checkbox" id="fanCheck" v-model="fanCheck" />
            <label for="fanCheck">a u yoasobi fan?</label>
          </div>
          <button class="check" @click="getYoasobi">yoasobi</button>
          <p>yoasobi : {{ yoasobi }}</p>
        </div>
      </div>
    </div>
  </div>

  <a @click="scrollToTop()" class="top">🔝</a>
</template>

<script>
import axios from "axios";

export default {
  name: "ComEleven",

  data() {
    return {
      yoasobi: "none",
      fanCheck: false
    }
  },

  methods: {
    getYoasobi() {
      axios
          .post('yoasobi/'+this.fanCheck)
          .then((response) => {
            this.yoasobi = response.data;
          })
          .catch()
    },

    // etc
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style> @import "../../views/studyFolder/css/css.css"; </style>
<style scoped>
  .stateStyle {
    border: 8px dotted orange;
    padding: 20px;
  }
</style>