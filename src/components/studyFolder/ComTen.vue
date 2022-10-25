<template>
  <div class="margin">
    <h1>10. store 활용</h1>

    <div class="margin">
      <h2>⚾ 데이터 가져오기 (state)</h2>
      <p>🏀 /store/modules/Practice.js를 import 해준 뒤,<br>
        store.modules에 등록한 Practice의 state.info 값 가져오기</p>
      <p class="stateStyle">🎈 state.info<br/><br/>{{ infoData }}</p>
    </div>

    <div class="margin">
      <h2>⚾ state 값 바꾸기 (mutations, actions)</h2>
      <p>🏀 위와 마찬가지로 import 후 메소드에 필요 값을 파라미터로 넘겨주며 실행<br/>
        actions으로 데이터를 넘겨주고 actions에서 mutations를 호출하여 핸들링
      </p>
      <input class="nameInput" v-model="newInfo.name" placeholder="이름을 입력하세요"/>
      <select v-model="newInfo.age">
        <option v-for="option in ageOptions" :value="option.value">
          {{ option.text }}
        </option>
      </select>
      <p><button class="check" @click="runActions">actions run</button></p>
      <p>🔼 actions로 mutations 실행 후 위의 state.info 데이터 확인</p>
    </div>

    <div class="margin">
      <h2>⚾ Default state 데이터 가져오기 (getters)</h2>
      <p>🏀 state가 변경되었더라도 기존의 값을 가져오기</p>
      <p><button class="check" @click="runGetters">getters run</button></p>
      <p>🔼 mutations 실행 후 위의 state.info 데이터 확인</p>
    </div>


  </div>
  <a @click="scrollToTop()" class="top">🔝</a>
</template>

<script>
//import { store } from "@/store/modules/Practice";
/*import { useStore } from "vuex";*/
import { store } from "@/store/store";
import { actions, mutations } from "@/store/modules/Practice";

export default {
  name: "ComTen",

  data() {
    return {
      // state // store.state.Practice.info
      infoData: store.state.Practice.info,
      //mutations
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
    }
  },

  /*created() {
    const store = useStore();
    this.infoData = store.state.Practice.info;
  },*/

  methods: {
    runActions() {
      /*const store = useStore();
      this.infoData = store.state.Practice.info;*/
      if(this.newInfo.name.length < 2) {
        alert("이름을 두 글자 이상 입력해주세요")
      } else {
        /*mutations.setInfo(state, this.newInfo);*/
        /*actions.settingInfo('setInfo', this.infoData);*/
        /*store.actions.settingInfo('setInfo', this.infoData)*/
        /*this.$store.dispatch('Practice/settingInfo', this.infoData);*/
        /*store.dispatch("settingInfo", this.infoData)*/

        this.$store.dispatch('Practice/settingInfo', this.infoData)
        this.infoData = state.info;
      }
    },
    runGetters() {
      this.infoData = getters.getDefaultInfo(state);
    },

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