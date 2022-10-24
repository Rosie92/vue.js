<template>
  <div class="margin">
    <h1>5. 조건부 렌더링</h1>
    <div class="margin">
      <h3>⚾ v-if</h3>
      <p>v-if 디렉티브는 조건에 따라 블록을 렌더링할 때 사용. 디렉티브의 표현식이 true 값을 반환할 때만 렌더링</p>
      <div :style="style">v-if, v-else, v-else-if 설명 생략</div>
    </div>

    <div class="margin">
      <h3>⚾ v-show</h3>
      <p>엘리먼트를 조건에 따라 표시하기 위한 또 다른 방법, 사용방법은 거의 동일함<br>
        🎨 차이점<br>
        ✏ 항상 렌더링 되어 DOM에 남아있음<br>
        ✏ 단순히 엘리먼트의 CSS display 속성만을 전환함<br>
        ✏ ＜template＞ 엘리먼트를 지원하지 않음<br>
        ✏ v-else 와 함께 사용할 수 없음
      </p>
    </div>


    <div class="margin">
      <h3>⚾ v-if vs v-show</h3>
      <p>🏀 v-if는 "실제(real)" 조건부 렌더링<br>
        전환 도중 조건부 블록 내부의 이벤트 리스너 및 자식 컴포넌트들이 올바르게 제거되고 다시 생성됨<br>
        🏀 또한, v-if는 게으르다.<br>
        초기 렌더링 시, 조건이 거짓(false)이면 아무 작업도 하지 않음<br>
        조건부 블록은 조건이 처음으로 참(true)이 될 때까지 렌더링되지 않음<br>
        <br>
        🏀 v-show의 엘리먼트는 css 기반 전환으로 초기 조건과 관계 없이 항상 렌더링 됨<br>
        (v-show는 엘리먼트를 DOM에 우선 렌더링하고 조건에 따라 css 속성을 전환함)<br>
        <br>
        🏀 일반적으로 v-if는 전환 비용이 높은 반면, v-show는 초기 렌더링 비용이 높음<br>
        무언가 자주 전환해야 한다 ⏩ v-show<br>
        런타임 시 조건이 변경되지 않는다 ⏩ v-if
      </p>
    </div>

    <div class="margin">
      <h3>⚾ v-if 와 v-for</h3>
      <p>v-if와 v-for를 함께 사용하는 것은 권장되지 않음.<br>
        참고 : 동일 엘리먼트에 v-if와 v-for가 함께 사용될 때, v-if가 더 높은 우선순위
      </p>
    </div>
  </div>
  <a @click="scrollToTop()" class="top">🔝</a>
</template>

<script>
export default {
  name: "ServeFive",

  data() {
    return {
      style: {
        color: 'green'
      }
    }
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style> @import "../../views/studyFolder/css/css.css"; </style>
<style scoped>

</style>