<template>
  <div>
    <h1>━ Vue.js ━</h1>
    <p>Study Page (MainView)</p>
    <div class="menu">
      <p>📕 ▶ 📗 ▶ 📙 ▶ 📘 ▶ 📒
      </p>
      <div class="inline">
        <button @click="comItem='comOne'">📕 Template 문법</button>
        <button @click="comItem='comTwo'">📗 Data 속성과 Methods</button>
        <button @click="comItem='comThree'">📙 Computed 속성과 Watch</button>
        <button @click="comItem='comFour'">📘 Class와 Style 바인딩</button>
        <button @click="comItem='comFive'">📒 조건부 렌더링</button>
      </div>
      <div class="inline">
        <button @click="comItem='comSix'">📕 List 렌더링</button>
        <button @click="comItem='comSeven'">📗 Event 핸들링</button>
        <button @click="comItem='comEight'">📙 Form 입력 바인딩</button>
        <button @click="comItem='comNine'">📘 부모 자식간의 Data 핸들링</button>
        <button @click="comItem='comTen'">📒 store 활용 (Vuex)</button>
        <button @click="comItem='comEleven'">📓 axios 활용</button>
      </div>
      <hr class="hr">
    </div>

    <div v-if="comItem==='comOne'">
      <com-one
        msg="- ComOne의 'msg'"
        v_once="- 갱신되지 않는 데이터 'v-once, Option'"
        rawHtml="<span style='color: red'>This should be red.</span>"/>
    </div>
    <div v-else-if="comItem==='comTwo'"><com-two/></div>
    <div v-else-if="comItem==='comThree'"><com-three/></div>
    <div v-else-if="comItem==='comFour'"><com-four/></div>
    <div v-else-if="comItem==='comFive'"><com-five/></div>
    <div v-else-if="comItem==='comSix'"><com-six/></div>
    <div v-else-if="comItem==='comSeven'"><com-seven/></div>
    <div v-else-if="comItem==='comEight'"><com-eight/></div>
    <div v-else-if="comItem==='comNine'">
      <!--  ➕ 하위 컴포넌트로 데이터(props)를 전달
              ┗ v-bind:fromParentToChild="dataFromParentToChild"
              ┗ :fromParentToChildOne="parentData1"
              ┗ :fromParentToChildTwo="parentData2"

            ➕하위 컴포넌트에서 보내는 데이터('event',parameter)를 받아옴
              ┗ v-on:childEvent="updateParentValue" -->
      <com-nine
          v-bind:fromParentToChild="dataFromParentToChild"
          :fromParentToChildOne="parentData1"
          :fromParentToChildTwo="parentData2"
          @:childEvent="runParentMethods"
      />
      <!-- 정/동적 Prop 전달 (예시)
             🎈 String : <blog-post :title="post.title + ' by ' + post.author.name"></blog-post>
             🎈 Number :
                  ┗ <blog-post :likes="post.likes"></blog-post>
                      변수 값에 동적으로 할당
             🎈 Boolean :
                  ┗ <blog-post is-published></blog-post>
                      값이 없는 prop을 포함하면 'true'를 의미
                  ┗ <blog-post :is-published="false"></blog-post>
                      (🎨) 'false'는 정적이지만 Vue에게 문자가 아닌 JS 표현식을 알리려면 v-bind가 필요
                  ┗ <blog-post :is-published="post.isPublished"></blog-post>
                      변수 값에 동적 할당
                  ┗
                  ┗
             🎈 Array :
                  ┗ <blog-post :comment-ids="[234, 266, 273]"></blog-post>
                      (🎨)
                  ┗ <blog-post :comment-ids="post.commentIds"></blog-post>
                      변수 값에 동적 할당
             🎈 Object (객체) :
                  ┗ <blog-post
                      :author="{
                        name: 'Veronica',
                        company: 'Veridian Dynamics'
                      }"
                    ></blog-post>
                      (🎨)
                  ┗ <blog-post :author="post.author"></blog-post>
                      변수 값에 동적 할당        -->
    </div>
    <div v-else-if="comItem==='comTen'"><com-ten/></div>
    <div v-else-if="comItem==='comEleven'"><com-eleven/></div>
  </div>
</template>

<script>
import ComOne from "@/components/studyFolder/ComOne"; // ComOne.vue를 갖다씀
import ComTwo from "@/components/studyFolder/ComTwo";
import ComThree from "@/components/studyFolder/ComThree";
import ComFour from "@/components/studyFolder/ComFour";
import ComFive from "@/components/studyFolder/ComFive";
import ComSix from "@/components/studyFolder/ComSix";
import ComSeven from "@/components/studyFolder/ComSeven";
import ComEight from "@/components/studyFolder/ComEight";
import ComNine from "@/components/studyFolder/ComNine";
import ComTen from "@/components/studyFolder/ComTen";
import ComEleven from "@/components/studyFolder/ComEleven";

export default {
  name: "MainView",

  props: { // 변수 설정, 상위 컴포넌트로부터 전달 받은 데이터
    /* 변수 타입 목록 : String, Number, Boolean, Array, Object, Function, Promise(또는 다른 생성자), Simbol */
    /* 유효성 검사 (검사 실패 시 콘솔에 경고를 출력)
          propA: Number,                            // 기본 타입 체크 (`null`과 `undefined`는 모든 타입 유효성 검사를 통과합니다.)
          propB: [String, Number],                  // 여러 타입 허용
          propC: { type: String, required: true },  // 문자열 필수
          propD: { type: Number, default: 100 },    // 기본 값을 갖는 숫자형

          propE: {                                  // 기본 값을 갖는 객체 타입
            type: Object,
            default: function() {                   // 객체나 배열의 기본 값은 항상 팩토리 함수로부터 반환되어야 합니다.
              return { message: 'hello' }
            }
          },

          propF: {                                  // 커스텀 유효성 검사 함수
            validator: function(value) {
              return ['success',                    // 값이 꼭 아래 세 문자열 중 하나와 일치해야 합니다.
              'warning', 'danger'].indexOf(value) !== -1
            }
          },

          propG: {                                  // 기본 값을 갖는 함수
            type: Function,
            default: function() {                   // 객체나 배열과 달리 아래 표현은 팩토리 함수가 아닙니다. 기본 값으로 사용되는 함수입니다.
              return 'Default function'
            }
          }
    */
  },

  components: {
    ComEleven,
    ComTen,
    ComNine,
    ComEight,
    ComSeven,
    ComFour,
    ComSix,
    ComFive,
    ComThree,
    ComTwo,
    ComOne // MainServce.vue를 갖다씀
  },

  data() {
    return {
      comItem: "",

      dataFromParentToChild: "부모로부터 자식에게 온 데이터",
      parentData1: 0,
      parentData2: 0
    }
  },

  methods: {
    // 자식 컴포넌트로부터 전달 받은 이벤트 명으로 인해 실행되는 메소드(와 전달받은 파라미터 값)
    runParentMethods(childData) {
      this.parentData1++;
      this.parentData2 = childData;
    },
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
    margin: 5px;
  }
</style>