<template>
  <div class="margin">
    <div class="margin">
      <h1>1. Template ๋ฌธ๋ฒ</h1>
      <h3>โพ v-once</h3>
      <p>{{ msg }}</p>
      <p v-once>{{ v_once }}</p>
    </div>


    <div class="margin">
      <h3>โพ v-html</h3>
      <p>๐ฝ{ { } } ์ด์ค๊ดํธ๋ data๋ฅผ html์ด ์๋ ์ผ๋ฐ ํ์คํธ๋ก ํด์๐ฝ</p>
      - ์ด์ค๊ดํธ ์ผ๋ฐ Text :   <span>{{ rawHtml }}</span><br>
      - v-html ์ฌ์ฉ ์ค์  html :   <span v-html="rawHtml"></span>
    </div>


    <div class="margin">
      <h3>โพ v-bind, v-on</h3>
      <!--
        ๋๋ ํฐ๋ธ : v- ๋ก ์์ํ๋ ํน์ ์์ฑ, ๋๋ ํฐ๋ธ ์์ฑ ๊ฐ : ๋จ์ผ JS ํํ์(v-for, v-on ์์ธ)
        ๋๋ ํฐ๋ธ ์ญํ  : ํํ์์ ๊ฐ์ด ๋ณ๊ฒฝ๋  ๋ ๋ฐ์ํ๋ ๋ถ์ ํจ๊ณผ(side effects)๋ค์ ๋ฐ์์ ์ผ๋ก DOM์ ์ ์ฉํ๋ ๊ฒ
      -->
      <p>๐ฝ์ด์ค๊ดํธ๋ html ์์ฑ์ ์ฌ์ฉํ  ์ ์์. v-bind๋ฅผ ์ฌ์ฉ๐ฝ</p>
      <div class="check">
        <input type="checkbox" id="con" v-model="con" />
        <label for="con">change</label>
      </div>
      <input type="text"
             :placeholder="con?item1:item2"
             v-bind:disabled="!con"/>
      <br> <!-- v-bind์ ์ฝ์ด : -->
      <p>
        โ ๋์  ์ ๋ฌ์ธ์, v-bind์ ์์ฑ ๊ฐ์ ๋ณ์๋ก ์ง์ <br>
        ๏ผa v-bind:[attribute]="url"๏ผClick๏ผ/a๏ผ<br>
        &nbsp;โ attribute: "href", url: "about" โ
      </p>
      <div class="check">
        <a v-bind:[attribute]="url">Click</a>
      </div>
    </div>


    <div class="margin">
      <h3>โพ v-if</h3>
      <p>๐ฝ์กฐ๊ฑด์ผ๋ก ์ฌ์ฉํ  ๋ณ์๋ฅผ ์ง์ , ์กฐ๊ฑด์ true/false๋ฅผ ํ๋จํด ํ์/๋ฏธํ์๐ฝ</p>
      <div class="check">
        <input type="checkbox" id="seen" v-model="seen" />
        <label for="seen">change</label>
      </div>
      <p v-if="seen">[v-if="seen"] ๐ v-if์ ์กฐ๊ฑด์ด true ์ธ ๊ฒฝ์ฐ์๋ง ๋ณผ ์ ์์</p>
      <p v-else>[v-else] ๐ ์กฐ๊ฑด์ด false ์ธ ๊ฒฝ์ฐ์๋ง ๋ณผ ์ ์์</p>
    </div>
  </div>
  <a @click="scrollToTop()" class="top">๐</a>
</template>

<script>
export default {
  name: "ComOne",

  props: {
    msg: String,
    v_once: String,
    rawHtml: String
  },

  data() {
    return {
      // v-bind
      con: true,
      item1: "์กฐ๊ฑด์ด true์ผ ๋ ๊ธฐ๋ณธ๊ฐ",
      item2: "์กฐ๊ฑด false๋ก ๋ณ๊ฒฝ๋จ",
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

<style> @import "../../views/studyFolder/css/css.css"; </style>
<style scoped> /* scoped ์ด ํ์ผ์์๋ง ์ ์ฉ๋๋ style*/
</style>