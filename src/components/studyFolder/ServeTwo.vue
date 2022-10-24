<template>
  <div>
    <h1>2. Data 속성과 Methods</h1>
    <h3>⚾ methods</h3>
    <p>item1 : {{ item1 }}</p>
    <p>item2 : {{ item2 }}</p>
    <p>item3 : {{ item3 }}</p>
    <button @click="methodsCall">item1 + item2 실행</button>
  </div>
</template>


<script>
export default {
  name: "ServeTwo",

  props: {

  },

  /*  Vue는 새로운 component instance 생성의 일환으로 data함수를 호출
      Vue는 반응형 시스템으로 객체를 감싸 component instance에 $data로 저장 */
  data() {
    return {
      item1: 10,
      item2: 20,
      item3: 0,
    }
  },

  methods: { // 동작하기를 원하는 메서드들이 담긴 하나의 객체
    methodsCall() {
      /*  'this'는 component instance 를 참조
          Vue는 methods 안에서 component instance를 항상 참조할 수 있도록 this 값을 자동으로 바인딩
          methods가 event listener나 callback으로 사용될 때 올바른 this 값을 유지하게 됨
          component instance의 다른 속성들처럼 methods 또한 component template 내부에 접근할 수 있음
          methods는 일반적으로 template 내부에서 event listener로 사용됨
      */
      this.item3 = this.item1 + this.item2;
      this.resultView = true;
    }
  }
}
</script>

<style> @import "../../views/studyFolder/css/css.css"; </style>
<style scoped>
</style>