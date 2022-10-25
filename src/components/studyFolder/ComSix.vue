<template>
  <div class="margin">
    <h1>6. List 렌더링</h1>
    <div class="margin">
      <h3>⚾ v-for로 엘리먼트에 배열 매핑하기</h3>
      <p>v-for 디렉티브를 사용하여 배열 기반으로 리스트를 렌더링<br>
        v-for디렉티브는 item in items 형태로 특별한 문법이 필요<br>
        🏀 items : 원본 데이터 배열<br>
        🏀 item : 반복되는 배열 엘리먼트의 별칭
      </p>

      <div :style="style.border">
        <p>
          ＜ul :style="ul"＞<br>
          ＜li v-for="item in testItems"＞<br>
          { { item.message } }<br>
          ＜/li＞<br>
          ＜/ul＞<br><br>
          style: { ul: { display: 'inline-block' }, border: { border: '2px solid lightgray' } },<br><br>
          ⬇ ⬇ ⬇
        </p>
        <ul class="demo" :style="style.ul">
          <li v-for="item in testItems">
            {{ item.message }}
          </li>
        </ul>
      </div>

      <p>v-for 블록 안에는 부모 범위 속성에 대한 모든 권한이 있음.<br>
        🏀 v-for는 또한, 현재 항목의 인덱스에 대한 두 번째 전달인자 옵션을 제공
      </p>

      <div :style="style.border">
        <p>
          ＜ul :style="style.ul"＞<br>
          ＜li v-for="(item, index) in testItems"＞<br>
          { { parentMessage } } - { { index } } - { { item.message } }<br>
          ＜/li＞<br>
          ＜/ul＞<br><br>
          ⬇ ⬇ ⬇
        </p>
        <ul class="demo" :style="style.ul">
          <li v-for="(item, index) in testItems">
            {{ parentMessage }} - {{ index }} - {{ item.message }}
          </li>
        </ul>
      </div>
      <p>🏀 in 대신 of 를 구분자로 사용할 수 있음. 이는 JS의 이터레이터 구문과 유사</p>
    </div>


    <div class="margin">
      <h3>⚾ v-for와 객체</h3>
      <p>🏀 v-for를 사용하여 객체의 속성을 반복할 수도 있음</p>
      <div :style="style.border">
        <p>
          ＜ul class="demo" :style="style.ul"＞<br>
          ＜li v-for="value in myObject"＞<br>
          { { value } }<br>
          ＜/li＞<br>
          ＜/ul＞<br><br>
          ⬇ ⬇ ⬇
        </p>
        <ul class="demo" :style="style.ul">
          <li v-for="value in myObject">
            {{ value }}
          </li>
        </ul>
      </div>

      <p>🏀 키에 대한 두 번째 전달인자를 제공할 수도 있음</p>
      <div :style="style.border">
        <p>
          ＜ul class="demo" :style="style.ul"＞<br>
          ＜li v-for="(value, name) in myObject"＞<br>
          { { name } }: { { value } }<br>
          ＜/li＞<br>
          ＜/ul＞<br><br>
          ⬇ ⬇ ⬇
        </p>
        <ul class="demo" :style="style.ul">
          <li v-for="(value, name) in myObject">
            {{ name }}: {{ value }}
          </li>
        </ul>
      </div>

      <p>🏀 그리고 인덱스도 제공함</p>
      <div :style="style.border">
        <p>
          ＜ul class="demo" :style="style.ul"＞<br>
          ＜li v-for="(value, name, index) in myObject"＞<br>
          { { index } }. { { name } }: { { value } }<br>
          ＜/li＞<br>
          ＜/ul＞<br><br>
          ⬇ ⬇ ⬇
        </p>
        <ul class="demo" :style="style.ul">
          <li v-for="(value, name, index) in myObject">
            {{ index }}. {{ name }}: {{ value }}
          </li>
        </ul>
      </div>
      <p>🏀 객체를 반복할 때 순서는 Object.keys()의 키 나열 순서에 따라 결정됨. 이 순서는 JS 엔진 구현간에 일관적이지는 않음</p>
    </div>

    <div class="margin">
      <h3>⚾ 상태 유지</h3>
      <p>각 노드의 id를 추적하여, 재사용하거나 순서를 변경하는등의 작업을 위해 각 아이템에 유일한 key 속성을 주어 vue에게 힌트를 줄 수 있음</p>
      <p>
        ＜div v-for="item in items" :key="item.id"＞
          <!-- content -->
        ＜/div＞
      </p>
      <p>🏀 반복되는 DOM 내용이 단순한 경우나 의도적인 성능 향상을 위해 기본동작에 의존하지 않는 경우를 제외하면 가능하면 언제나 v-for에 key를 추가하는 것이 좋음</p>
    </div>

    <div class="margin">
      <h3>⚾ 배열 변경 감지</h3>
      <div class="margin">
        <h4>🏀 변이 메소드</h4>
        <p>Vue는 감시중인 배열의 변이 메소드를 래핑하여 뷰 갱신을 트리거함. 래핑된 메소드는 다음과 같음<br>
          🎈 push()<br>
          🎈 pop()<br>
          🎈 shift()<br>
          🎈 unshift()<br>
          🎈 splice()<br>
          🎈 sort()<br>
          🎈 reverse()<br>
          콘솔을 열고 변형 메소드를 호출하여 이전의 예제의 items 배열로 사용할 수 있음<br>
          ex) example1.items.push({ message: 'Baz' })
        </p>
      </div>
      <div class="margin">
        <h4>🏀 배열 교체</h4>
        <p>1. 변이 메소드는 호출된 원래 배열을 변경함<br>
          2. filter(), concat(), slice()와 같은 원래 배열을 변경하지는 않지만 항상 새 배열을 반환하는 비-변이 메소드도 있음<br>
          3. 비-변이 메소드로 작업할 때 이전 배열을 새 배열로 바꿀 수 있음
        </p>
      </div>
    </div>

    <div class="margin">
      <h3>⚾ 필터링/정렬된 결과 표시</h3>
      <p>데이터를 변경/재설정하지 않고 배열의 필터링/정렬된 버전을 표시하고 싶다면<br>
      필터링되거나 정렬된 배열을 반환하는 computed 속성을 만들 수 있음</p>
      <div :style="style.border">
        <p>
          ＜ul class="demo" :style="style.ul"＞<br>
          ＜li v-for="n in eventNumbers"＞{{ n }}＜/li＞<br>
          ＜/ul＞<br><br>
          numbers: [ 1, 2, 3, 4, 5 ],<br><br>
          computed: {<br>
          eventNumbers() {<br>
          return this.numbers.filter(number => number % 2 === 0)<br>
          }<br>
          }<br><br>
          ⬇ ⬇ ⬇
        </p>
        <ul class="demo" :style="style.ul">
          <li v-for="n in eventNumbers">{{ n }}</li>
        </ul>
      </div>

      <p>🔽computed 속성이 실행 가능하지 않은 상황(ex. 중첩된 v-for 루프 내부)에서는 다음 메소드를 사용할 수 있음</p>
      <div :style="style.border">
        <p>
          ＜ul class="demo" :style="style.ul" v-for="numbers in sets"＞<br>
          ＜li v-for="n in even(numbers)"＞{{ n }}＜/li＞<br>
          ＜/ul＞<br><br>
          numbers: [ 1, 2, 3, 4, 5 ],<br>
          sets: [ [ 1, 2, 3, 4, 5 ],  [ 6, 7, 8, 9, 10 ] ]<br><br>
          methods: {<br>
          even(numbers) {<br>
          return numbers.filter(number => number % 2 === 0)<br>
          }<br>
          }<br><br>
          ⬇ ⬇ ⬇
        </p>
        <ul class="demo" :style="style.ul" v-for="numbers in sets">
          <li v-for="n in even(numbers)">{{ n }}</li>
        </ul>
      </div>
    </div>

    <div class="margin">
      <h3>⚾ 범위가 있는 v-for</h3>
      <p>v-for도 정수를 사용할 수 있음. 이 경우 템플릿을 여러번 반복함</p>
      <div :style="style.border">
        <p>
          ＜div id="range" class="demo" :style="style.ul"＞<br>
            ＜span v-for="n in 10">{{ n }} ＜/span＞<br>
          ＜/div＞<br><br>
          ⬇ ⬇ ⬇
        </p>
        <div class="demo" :style="style.ul">
          <span v-for="n in 10">{{ n }} </span>
        </div>
      </div>
    </div>

    <div class="margin">
      <h3>⚾ ＜template＞에서의 v-for</h3>
      <p>템플릿의 v-if와 마찬가지로, v-for와 함께 ＜template＞태그를 사용하여 여러 요소의 블록을 렌더링 할 수 있음</p>
      <div :style="style.border">
        <p>
          ＜ul class="demo" :style="style.ul"＞<br>
          ＜template v-for="item in testItems"＞<br>
          ＜li＞{ { item.message } }＜/li＞<br>
          ＜li class="divider" role="presentation"＞＜/li＞<br>
          ＜/template＞<br>
          ＜/ul＞<br><br>
          ⬇ ⬇ ⬇
        </p>
        <ul class="demo" :style="style.ul">
          <template v-for="item in testItems">
            <li>{{ item.message }}</li>
            <li class="divider" role="presentation"></li>
          </template>
        </ul>
      </div>
    </div>

    <div class="margin">
      <h3>⚾ 컴포넌트의 v-for</h3>
      <p>컴포넌트 숙지 후 재확인</p>
    </div>
  </div>
  <a @click="scrollToTop()" class="top">🔝</a>
</template>

<script>
export default {
  name: "ComSix",

  data() {
    return {
      /*⚾ v-for로 엘리먼트에 배열 매핑하기*/
      testItems: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      parentMessage: 'Parent',

      /*⚾ v-for와 객체*/
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },

      /*⚾ 필터링/정렬된 결과 표시*/
      numbers: [ 1, 2, 3, 4, 5 ],
      sets: [
          [ 1, 2, 3, 4, 5 ],
          [ 6, 7, 8, 9, 10 ]
      ],

      /*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
      style: {
        ul: {
          display: 'inline-block'
        },
        border: {
          border: '2px solid lightgray'
        }
      },
    }
  },
  methods: {
    /*⚾ 필터링/정렬된 결과 표시*/
    even(numbers) {
      return numbers.filter(number => number % 2 === 0)
    },

    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  computed: {
    /*⚾ 필터링/정렬된 결과 표시*/
    eventNumbers() {
      return this.numbers.filter(number => number % 2 === 0)
    }
  }
}
</script>

<style> @import "../../views/studyFolder/css/css.css"; </style>
<style scoped>
  .demo {
    font-family: sans-serif;
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 20px 30px;
    margin-top: 1em;
    margin-bottom: 40px;
    user-select: none;
    overflow-x: auto;
  }
</style>