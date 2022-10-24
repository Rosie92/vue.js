<template>
  <div class="margin">
    <h1>9. 부모 자식간의 데이터 핸들링</h1>
    <div class="margin">
      <h2>⚾ 전달 방법</h2>
<!--  <p>
          ┏━━━━━━▶━━━━━━ 상위(부모) ━━━━━━▶━━━━━━┓
         Emit　　　　　　　　　　　　　　　　　　　　  Pass
        Events　　　　　　　　　　　　　　　　　　　  Props
          ┗━━━━━━◀━━━━━━ 하위(자식) ━━━━━━◀━━━━━━┛
      </p> -->
      <img src="../../assets/img/ComponentDataTransferMethod.png"  alt="ComponentDataTransferMethod"/>
      <div class="margin">
        🏀 Component Tree<br/><br/>
        Root Instance (main.js)<br/>
        　　　　　┗━ 최상위 컴포넌트 (App.vue)<br/>
        　　　　　　　　┗━ Parent Component<br/>
        　　　　　　　　　　　　┗━ Child Component
      </div>
    </div>


    <div class="margin">
      <h2>⚾ 상위(부모) ▶ 하위(자식)</h2>
      🏀 props라는 특별한 속성을 이용하여 하위 컴포넌트로 데이터 전달
      <div class="margin">
        🏀 순서<br/><br/>
        1️⃣ 「 v-bind:하위 컴포넌트에서 받을 props 이름 」을 사용. 하위 컴포넌트에서 데이터를 전달 받음<br/>
        2️⃣ 약식 : 「 :하위 컴포넌트에서 받을 props 이름 」 : v-bind 생략<br/>
        3️⃣ 하위의 props에 v-bind에 등록해준 명칭을 써주면 사용 가능
      </div>

      <div class="margin">
        🎈 데이터 확인
        <p>fromParentToChild : {{ this.fromParentToChild }}</p>
      </div>
    </div>

    <div class="margin">
      <h2>⚾ 하위(자식) ▶ 상위(부모)</h2>
      🏀 event 전달
      <div class="margin">
        🏀 순서<br/><br/>
        1️⃣ 하위에 위치한 button 클릭, 메소드 실행 「 v-on, @ 」<br/>
        2️⃣ 「 this.$emit("상위에서 받을 이벤트 명", 함께 전달할 데이터) 」 으로 상위로 송신<br/>
        3️⃣ 상위에서 「 v-on:이벤트명="실행될 메소드"」 으로 이벤트를 수신하여 메소드 실행
      </div>

      <div class="margin">
        🎈 데이터 확인<br/>
        <p>🔽상위로 데이터를 넘겨준 후, 상위로부터 핸들링 된 데이터를 다시 되돌려 받은 것</p>

        <p><button class="check" @click="$emit('childEvent',++this.childData)">dataSend</button></p>
        <!-- (🎨) 위처럼 메소드를 거치지 않고 v-on(@)에서 바로 이동하도록 할 수도 있음
        <p><button class="check" @click="updateParentData">dataSend</button></p> -->

        <p>parentData1 : {{ fromParentToChildOne }}<br/>
          parentData2 : {{ fromParentToChildTwo }}
        </p>
      </div>
    </div>

    <div class="margin">
      <h2>⚾ 컴포넌트에서 v-model 사용</h2>
      <p>나중에</p>
    </div>


  </div>
  <a @click="scrollToTop()" class="top">🔝</a>
</template>

<script>
export default {
  name: "ServeNine",

  /*props: [ // 이것도 정상 동작함
    "fromParentToChild"
  ],*/
  props: { // 부모 컴포넌트로부터 전달 받은 데이터
    fromParentToChild: String,
    fromParentToChildOne: Number,
    fromParentToChildTwo: Number
  },

  data() {
    return {
      childData: 10,
    }
  },

  methods: {
    /* 위 설명 참고 (🎨)
    updateParentData() {
      // 부모 컴포넌트로 이벤트명과 자식 컴포넌트에 있는 데이터를 파라미터로 전달
      this.$emit("childEvent", ++this.childData);
    },*/
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
}
</script>

<style> @import "../../views/studyFolder/css/css.css"; </style>
<style scoped>

</style>