<template>
  <div class="margin">
    <h1>10. store 활용</h1>

    <div class="margin">
      <h2>⚾ 데이터 가져오기 (state)</h2>
      <p>🏀 import { store } from "@/store/store";<br/>
        store.modules에 등록한 Practice의 state.info 값 가져오기</p>
      <p class="stateStyle">🎈 state.info<br/><br/>{{ infoData }}</p>
    </div>

    <div class="margin">
      <h2>⚾ state 값 바꾸기 (mutations, actions)</h2>
      <div class="margin">
        <h4>⚾ actions</h4>
        <p>🏀 dispatch로 경로/함수명+전달인자를 넘겨  actions를 실행하고,<br>
          actions에서 다시 commit으로 mutations의 메소드를 호출하여 state의 값을 변경</p>

        <div class="stateStyle">
          <input class="nameInput" v-model="newInfo.name" placeholder="이름을 입력하세요"/>
          <select v-model="newInfo.age">
            <option v-for="option in ageOptions" :value="option.value">
              {{ option.text }}
            </option>
          </select>
          <p><button class="check" @click="runActions">actions run</button></p>
          🎈 state.info<br/><br/>{{ infoData }}
        </div>
      </div>

      <div class="margin">
        <h4>⚾ mutations</h4>
        <p>commit만으로 actions을 거치지 않고 바로 mutations로 붙는 것도 가능</p>
      </div>
   </div>

    <div class="margin">
      <h2>⚾ state 데이터 가져오기 (getters)</h2>
      <p>🏀 사용자가 어떤 목적으로 getters를 활용하냐에 따라 역할이 정해짐. 자유도가 높다고 하면 될 것 같은데, 예를들면<br/><br/>
        1️⃣ 여러 컴포넌트에서 반복되는 메소드를 정의하여 공통으로 사용<br/>
        2️⃣ 항상 state의 초기 값을 반환하도록 설정<br/>
      </p>
      <div class="stateStyle">
        🎈 getters로 가져온 state.info
        <p><button class="check" @click="getStateInfo">getters run</button></p>
        {{ getterInfoData }}
        <hr/>
        <p>🎈 state.info 초기화</p>
        <p><button class="check" @click="getDefaultStateInfo">getters run</button></p>
        {{ getterInfoData2 }}
      </div>
    </div>


  </div>
  <a @click="scrollToTop()" class="top">🔝</a>
</template>

<script>
//import { actions, mutations, state } from "@/store/modules/Practice";
import { store } from "@/store/store";

export default {
  name: "ComTen",

  data() {
    return {
      // state
      infoData: store.state.Practice.info, // this.$store.state.Practice.info

      // mutations, actions
      newInfo: {
        name: "",
        age: 31
      },
      ageOptions: [
        { text: '31', value: 31 },
        { text: '30', value: 30 },
        { text: '29', value: 29 },
        { text: '28', value: 28 }
      ],

      // getters
      getterInfoData: {},
      getterInfoData2: {}
    }
  },

  methods: {
    // actions
    runActions() {
      if(this.newInfo.name.length < 2) {
        alert("이름을 두 글자 이상 입력해주세요")
      } else {
        this.$store.dispatch('Practice/settingInfo', this.newInfo)
        this.infoData = store.state.Practice.info;
      }
    },

    // getters
    getStateInfo() {
      this.getterInfoData = this.$store.getters['Practice/getStateInfo'];
    },
    getDefaultStateInfo() {
      this.getterInfoData2 = this.$store.getters['Practice/getDefaultStateInfo'];
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
  .nameInput {
    margin-right: 10px;
  }
</style>