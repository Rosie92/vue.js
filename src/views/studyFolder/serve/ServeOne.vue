<template>
  <div class="margin">
    <div class="margin">
      <h1>1. 템플릿 문법</h1>
      <h3>⚾ v-once</h3>
      <p>{{ msg }}</p>
      <p v-once>{{ v_once }}</p>
    </div>


    <div class="margin">
      <h3>⚾ v-html</h3>
      <p>🔽{ { } } 이중괄호는 data를 html이 아닌 일반 텍스트로 해석🔽</p>
      - 이중괄호 일반 Text :   <span>{{ rawHtml }}</span><br>
      - v-html 사용 실제 html :   <span v-html="rawHtml"></span>
    </div>


    <div class="margin">
      <h3>⚾ v-bind, v-on</h3>
      <!--
        디렉티브 : v- 로 시작하는 특수 속성, 디렉티브 속성 값 : 단일 JS 표현식(v-for, v-on 예외)
        디렉티브 역할 : 표현식의 값이 변경될 때 발생하는 부수 효과(side effects)들을 반응적으로 DOM에 적용하는 것
      -->
      <p>🔽이중괄호는 html 속성에 사용할 수 없음. v-bind를 사용🔽</p>
      <div v-if="con">
        <button type="button" v-on:click="con=false">false로 변경</button>
      </div>
      <div v-else> <!-- v-on의 약어 @ -->
        <button type="button" @click="con=true">true로 변경</button>
      </div><br>

      <input type="text"
             :placeholder="con?item1:item2"
             v-bind:disabled="!con"/>
      <br> <!-- v-bind의 약어 : -->
      <p>
        ✅ 동적 전달인자, v-bind의 속성 값을 변수로 지정<br>
        ＜a v-bind:[attribute]="url"＞Click＜/a＞<br>
        &nbsp;┃ attribute: "href", url: "about" ┃
      </p>
      <a v-bind:[attribute]="url">Click</a>
    </div>


    <div class="margin">
      <h3>⚾ v-if</h3>
      <p>🔽조건으로 사용할 변수를 지정, 조건의 true/false를 판단해 표시/미표시🔽</p>
      <div v-if="seen">
        <button type="button" @click="seen=false">false로 변경</button>
      </div>
      <div v-else>
        <button type="button" @click="seen=true">true로 변경</button>
      </div>
      <p v-if="seen">[v-if="seen"] 📕 v-if의 조건이 true 인 경우에만 볼 수 있음</p>
      <p v-else>[v-else] 📕 조건이 false 인 경우에만 볼 수 있음</p>
    </div>
  </div>
  <a @click="scrollToTop()" class="top">맨위로</a>
</template>

<script>
export default {
  name: "ServeOne",

  props: {
    msg: String,
    v_once: String,
    rawHtml: String
  },

  data() {
    return {
      // v-bind
      con: true,
      item1: "조건이 true일 때 기본값",
      item2: "조건 false로 변경됨",
      attribute: "href",
      url: "about",

      // v-if
      seen: true
    }
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style> @import "../css/css.css"; </style>
<style scoped> /* scoped 이 파일에서만 적용되는 style*/
</style>