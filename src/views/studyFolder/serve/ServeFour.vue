<template>
  <div class="margin">
    <h1>4. 클래스와 스타일 바인딩</h1>
    <div class="margin">
      <h3>⚾ HTML 클래스 바인딩</h3>
      <h4>🥎 객체 구문</h4>
      <p>v-bind가 class와 style과 함께 사용될 때 특별한 개선사항을 제공</p>
      <div class="inline">
        <div v-if="isActive">
          <button type="button" @click="isActive=false">isActive false로 변경</button>
        </div>
        <div v-else>
          <button type="button" @click="isActive=true">isActive true로 변경</button>
        </div>
      </div>
      <div class="inline">
        <div v-if="isActive2">
          <button type="button" @click="isActive2=false">isActive2 false로 변경</button>
        </div>
        <div v-else>
          <button type="button" @click="isActive2=true">isActive2 true로 변경</button>
        </div> <!-- v-bind 약어 (:) -->
      </div>
      <p class="default" :class="{active: isActive, border: isActive2}">
        🎨 ＜p class="default" :class="{active: isActive, border: isActive2}"＞<br>
        default ◀ color: red; "<br>
        active ◀ background-color: black; "<br>
        border ◀ border: 5px dotted orange; "
      </p>
      <p>🏀 바인딩 된 객체는 인라인일 필요는 없음</p>
      <div :class="classObject">
          ＜div :class="classObject"＞<br>
          classObject: { border: true, active: false }
      </div>


      <div class="margin">
        <h4>🥎 배열 구문</h4>
        <p>🏀 배열을 :class에 전달하여 클래스 목록을 적용할 수 있음</p>
        <div :class="[defaultClass, borderClass]">
          ＜div :class="[defaultClass, borderClass]"＞<br>
          activeClass: 'default', borderClass: 'border'
        </div>

        <p>🏀 조건부로 목록의 클래스도 전환하려면 삼항 표현식을 사용하여 수행할 수 있음</p>
        <div :class="[isActive ? activeClass : '', borderClass]">
          ＜div :class="[isActive ? defaultClass : '', borderClass]"＞
        </div>
      </div>

<!--      <div class="margin">
        <h4>🥎 component에서 사용하기</h4>
        <p>단일 루트 엘리먼트가 있는 커스텀 컴포넌트에서 class 속성을 사용하면 해당 클래스가 이 엘리먼트에 추가됨<br>
          이 엘리먼트의 기존 클래스는 덮어 쓰지 않음
        </p>
        <my-component class="default">
          my-component class="default"<br>
          components: { myComponent: '＜p class="border"＞hi＜/p＞!' }
        </my-component>
      </div>-->
    </div>


    <div class="margin">
      <h3>⚾ inline style 바인딩하기</h3>
      <div class="margin">
        <h4>🥎 객체 구문</h4>
        <p>:style의 객체 구문은 매우 간단함. JS객체라는 점을 제외하면 CSS와 거의 비슷<br>
          css속성 이름에는 카멜케이스(camelCase) 또는 케밥케이스(kebab-case)를 사용할 수 있음
        </p>
        <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
          ＜div :style="{ color: activeColor, fontSize: fontSize + 'px' }"＞<br>
          [ activeColor: 'red', fontSize: 20 ]
        </div>
        <p>🔽템플릿을 더 깔끔하게 만들기 위해 스타일 객체에 직접 바인딩</p>
        <div :style="styleObject">
          ＜div :style="styleObject"＞<br>
          styleObject: { color: 'red', fontSize: '13px' }
        </div>
        <p>기억해둘것 : 객체 구문의 객체를 반환하는 computed 속성과 함께 자주 사용됨</p>
      </div>

      <div class="margin">
        <h4>🥎 배열 구문</h4>
        <p>:style의 배열 구문을 사용하면, 동일한 요소에 여러 스타일 객체를 적용할 수 있음</p>
        <div :style="[styleObject, styleObject2]">
          ＜div :style="[styleObject, styleObject2]"＞<br>
          styleObject: { color: 'red', fontSize: '13px' },<br>
          styleObject2: { border: '2px solid lightgray' }
        </div>
      </div>
    </div>

  </div>
  <a @click="scrollToTop()" class="top">맨위로</a>
</template>

<script>
export default {
  name: "ServeFour",
  props: {
  },

  /*components: {
    myComponent: '<p class="border">hi!</p>'
  },*/

  data() {
    return {
      /*⚾ HTML 클래스 바인딩*/
      isActive: false,
      isActive2: false,
      classObject: {
        border: true,
        active: false
      },
      defaultClass: 'default',
      activeClass: 'active',
      borderClass: 'border',

      /*⚾ inline style 바인딩하기*/
      activeColor: 'red',
      fontSize: 20,
      styleObject: {
        color: 'red',
        fontSize: '13px'
      },
      styleObject2: {
        border: '2px solid lightgray'
      }
    }
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },

  computed: {
  }
}
</script>

<style> @import "../css/css.css"; </style>
<style scoped>
  /*HTML 클래스 바인딩*/
  .default {
    color: red;
  }
  .active {
    background-color: lightgray;
  }
  .border {
    border: 5px dotted orange;
    padding: 20px;
  }

</style>