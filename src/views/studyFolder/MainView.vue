<template>
  <div>
    <h1>β Vue.js β</h1>
    <p>Study Page (MainView)</p>
    <div class="menu">
      <p>π βΆ π βΆ π βΆ π βΆ π
      </p>
      <div class="inline">
        <button @click="comItem='comOne'">π Template λ¬Έλ²</button>
        <button @click="comItem='comTwo'">π Data μμ±κ³Ό Methods</button>
        <button @click="comItem='comThree'">π Computed μμ±κ³Ό Watch</button>
        <button @click="comItem='comFour'">π Classμ Style λ°μΈλ©</button>
        <button @click="comItem='comFive'">π μ‘°κ±΄λΆ λ λλ§</button>
      </div>
      <div class="inline">
        <button @click="comItem='comSix'">π List λ λλ§</button>
        <button @click="comItem='comSeven'">π Event νΈλ€λ§</button>
        <button @click="comItem='comEight'">π Form μλ ₯ λ°μΈλ©</button>
        <button @click="comItem='comNine'">π λΆλͺ¨ μμκ°μ Data νΈλ€λ§</button>
        <button @click="comItem='comTen'">π store νμ© (Vuex)</button>
        <button @click="comItem='comEleven'">π axios νμ©</button>
      </div>
      <hr class="hr">
    </div>

    <div v-if="comItem==='comOne'">
      <com-one
        msg="- ComOneμ 'msg'"
        v_once="- κ°±μ λμ§ μλ λ°μ΄ν° 'v-once, Option'"
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
      <!--  β νμ μ»΄ν¬λνΈλ‘ λ°μ΄ν°(props)λ₯Ό μ λ¬
              β v-bind:fromParentToChild="dataFromParentToChild"
              β :fromParentToChildOne="parentData1"
              β :fromParentToChildTwo="parentData2"

            βνμ μ»΄ν¬λνΈμμ λ³΄λ΄λ λ°μ΄ν°('event',parameter)λ₯Ό λ°μμ΄
              β v-on:childEvent="updateParentValue" -->
      <com-nine
          v-bind:fromParentToChild="dataFromParentToChild"
          :fromParentToChildOne="parentData1"
          :fromParentToChildTwo="parentData2"
          @:childEvent="runParentMethods"
      />
      <!-- μ /λμ  Prop μ λ¬ (μμ)
             π String : <blog-post :title="post.title + ' by ' + post.author.name"></blog-post>
             π Number :
                  β <blog-post :likes="post.likes"></blog-post>
                      λ³μ κ°μ λμ μΌλ‘ ν λΉ
             π Boolean :
                  β <blog-post is-published></blog-post>
                      κ°μ΄ μλ propμ ν¬ν¨νλ©΄ 'true'λ₯Ό μλ―Έ
                  β <blog-post :is-published="false"></blog-post>
                      (π¨) 'false'λ μ μ μ΄μ§λ§ Vueμκ² λ¬Έμκ° μλ JS ννμμ μλ¦¬λ €λ©΄ v-bindκ° νμ
                  β <blog-post :is-published="post.isPublished"></blog-post>
                      λ³μ κ°μ λμ  ν λΉ
                  β
                  β
             π Array :
                  β <blog-post :comment-ids="[234, 266, 273]"></blog-post>
                      (π¨)
                  β <blog-post :comment-ids="post.commentIds"></blog-post>
                      λ³μ κ°μ λμ  ν λΉ
             π Object (κ°μ²΄) :
                  β <blog-post
                      :author="{
                        name: 'Veronica',
                        company: 'Veridian Dynamics'
                      }"
                    ></blog-post>
                      (π¨)
                  β <blog-post :author="post.author"></blog-post>
                      λ³μ κ°μ λμ  ν λΉ        -->
    </div>
    <div v-else-if="comItem==='comTen'"><com-ten/></div>
    <div v-else-if="comItem==='comEleven'"><com-eleven/></div>
  </div>
</template>

<script>
import ComOne from "@/components/studyFolder/ComOne"; // ComOne.vueλ₯Ό κ°λ€μ
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

  props: { // λ³μ μ€μ , μμ μ»΄ν¬λνΈλ‘λΆν° μ λ¬ λ°μ λ°μ΄ν°
    /* λ³μ νμ λͺ©λ‘ : String, Number, Boolean, Array, Object, Function, Promise(λλ λ€λ₯Έ μμ±μ), Simbol */
    /* μ ν¨μ± κ²μ¬ (κ²μ¬ μ€ν¨ μ μ½μμ κ²½κ³ λ₯Ό μΆλ ₯)
          propA: Number,                            // κΈ°λ³Έ νμ μ²΄ν¬ (`null`κ³Ό `undefined`λ λͺ¨λ  νμ μ ν¨μ± κ²μ¬λ₯Ό ν΅κ³Όν©λλ€.)
          propB: [String, Number],                  // μ¬λ¬ νμ νμ©
          propC: { type: String, required: true },  // λ¬Έμμ΄ νμ
          propD: { type: Number, default: 100 },    // κΈ°λ³Έ κ°μ κ°λ μ«μν

          propE: {                                  // κΈ°λ³Έ κ°μ κ°λ κ°μ²΄ νμ
            type: Object,
            default: function() {                   // κ°μ²΄λ λ°°μ΄μ κΈ°λ³Έ κ°μ ν­μ ν©ν λ¦¬ ν¨μλ‘λΆν° λ°νλμ΄μΌ ν©λλ€.
              return { message: 'hello' }
            }
          },

          propF: {                                  // μ»€μ€ν μ ν¨μ± κ²μ¬ ν¨μ
            validator: function(value) {
              return ['success',                    // κ°μ΄ κΌ­ μλ μΈ λ¬Έμμ΄ μ€ νλμ μΌμΉν΄μΌ ν©λλ€.
              'warning', 'danger'].indexOf(value) !== -1
            }
          },

          propG: {                                  // κΈ°λ³Έ κ°μ κ°λ ν¨μ
            type: Function,
            default: function() {                   // κ°μ²΄λ λ°°μ΄κ³Ό λ¬λ¦¬ μλ ννμ ν©ν λ¦¬ ν¨μκ° μλλλ€. κΈ°λ³Έ κ°μΌλ‘ μ¬μ©λλ ν¨μμλλ€.
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
    ComOne // MainServce.vueλ₯Ό κ°λ€μ
  },

  data() {
    return {
      comItem: "",

      dataFromParentToChild: "λΆλͺ¨λ‘λΆν° μμμκ² μ¨ λ°μ΄ν°",
      parentData1: 0,
      parentData2: 0
    }
  },

  methods: {
    // μμ μ»΄ν¬λνΈλ‘λΆν° μ λ¬ λ°μ μ΄λ²€νΈ λͺμΌλ‘ μΈν΄ μ€νλλ λ©μλ(μ μ λ¬λ°μ νλΌλ―Έν° κ°)
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