<template>
  <div class="margin">
    <h1>3. Computed 속성과 Watch</h1>
    <div class="margin">
      <h4>⚾ computed 미사용</h4>
      <p>출판된 책 : <span>{{ auther.books.length > 0 ? '있음' : '없음' }}</span></p>
                             <!--  (조건)    (비교식) ? (true : false)  -->
      <p>🥎 auther.books.length > 0 ? '있음' : '없음' 🥎<br>
        라는 계산의 수행에 따른 결과를 표시<br>
        하지만 template 내에 이 계산을 한번 더 넣으려는 경우, 복잡해짐<br>
        반응형 데이터를 포함하는 복잡한 로직의 경우, computed 속성을 사용
      </p>
    </div>


    <div class="margin">
      <h4>⚾ computed 사용</h4>
      <p>🔽 배열의 기준 값이 변경되면 의존하는 모든 바인딩을 업데이트</p>
      <p>출판된 책 : <span>{{ publishedBooksMessage }}</span></p>
    </div>


    <div class="margin">
      <h4>⚾ computed 속성의 캐싱 vs Methods</h4>
      <p>🔽 이중괄호에서 Methods를 바로 호출하여 동일한 결과를 얻을 수도 있음</p>
      <p>computed가 아닌 methods에서 계산하여 출력 : {{ calculateBooksMessage() }}</p>
    </div>


    <div class="margin">
      <h4>⚾ computed 와 methods의 차이점</h4>
      <p>
        🏀 computed 속성은 반응형(reactive) 종속성에 기반하여 캐시됨<br>
        🏀 computed 속성은 반응형 종속성 중 일부가 변경된 경우에만 재평가됨<br>
        🏀 기준 데이터가 변경되지 않는다면 호출하는 computed 속성에 대해 여러번 접근하더라도,<br>
        수를 다시 실행할 필요 없이 이전에 계산된 결과를 즉시 반환함<br>
        🏀 methods : 다시 렌더링이 발생할 때마다 항상 함수를 실행함
      </p>
    </div>

    <div class="margin">
      <h4>⚾ Watch 속성 (사용자 지정 감시자 Watcher)</h4>
      <p>watch 옵션을 통해 데이터의 변경에 대응하는 방법을 제공<br>
        데이터 변경에 대한 응답으로 비동기 혹은 비용이 많이 드는 작업을 수행하려는 경우에 유용용
      </p>
      <p>
        예/아니오 질문을 물어보세요.
        <input v-model="question" />
      </p>
      <p>{{ answer }}</p>
      <p>🔼watch 옵션을 사용하면 비동기 작업(API접근)을 수행하고,<br>
        이 작업을 수행하기 위한 조건을 설정할 수 있음. computed 속성은 이러한 기능을 수행할 수 없음<br>
        🎈 추가로 watch 옵션 외에도 명령형 vm$watch API를 사용할 수 있음
      </p>
    </div>

    <div class="margin">
      <h4>⚾ computed 속성 vs Watch 속성</h4>
      <p>Vue는 현재 활성화된 인스턴스에서 데이터 변경을 관찰하고 이에 반응하는 좀 더 일반적인 방법인 watch 속성을 제공<br>
        다른 데이터를 기반으로 변경해야 하는 데이터가 있는 경우, watch를 과도하게 쓰고자 하는 유혹이 있을 수 있음<br>
        🎈 특히 AngularJS 기반에서 온 경우<br>
        그러나 명령형 watch 콜백보다 computed 속성을 쓰는 것이 더 나은 경우가 많음
      </p>
      <span>{{ fullName }}</span>
    </div>
  </div>
  <a @click="scrollToTop()" class="top">맨위로</a>
</template>

<script>
import axios from 'axios'
export default {
  name: "ServeThree",

  props: {
  },

  data() {
    return {
      /* computed */
      auther: {
        name: 'John',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },

      /* Watch 속성 (사용자 지정 감시자 Watcher)*/
      question: '',
      answer: '질문은 보통 물음표를 포함합니다. ;-',

      /* computed 속성 vs Watch 속성 */
      firstName: 'Foo',
      lastName: 'Bar',
      /*fullName: 'Foo Bar'*/
    }
  },

  computed: {
    // computed getter
    publishedBooksMessage() { // computed 속성 선언
      return this.auther.books.length > 0 ? '있음' : '없음'
    },
    // computed 속성 vs Watch 속성 -> computed 사용의 경우
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  },

  methods: {
    calculateBooksMessage() {
      return this.auther.books.length > 0 ? '있음' : '없음'
    },
    getAnswer() {
      this.answer = '생각중...'
      axios
          .get('https://yesno.wtf/api')
          .then(response => {
            this.answer = response.data.answer
          })
          .catch(error => {
            this.answer = '에러! API에 닿지 못했습니다. ' + error
          })
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },

  watch: {
    // question 이 변경될 때마다, 이 함수가 실행될 것 입니다.
    question(newQuestion, oldQuestion) {
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer()
      }
    },
    // computed 속성 vs Watch 속성 -> watch 사용의 경우
    /*firstName(val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName(val) {
      this.fullName = this.firstName + ' ' + val
    }*/
  }
}
</script>

<style> @import "../css/css.css"; </style>
<style scoped>
</style>