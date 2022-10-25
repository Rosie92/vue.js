<template>
  <div class="margin">
    <h1>8. Form 입력 바인딩</h1>

    <div class="margin">
      <h3>⚾ 기본 사용법</h3>
      <p>🏀 v-model 디렉티브 사용. input, textarea, select 요소들에 양방향 데이터 바인딩을 생성<br>
        v-model 디렉티브는 input type 요소를 변경하는 올바른 방법을 자동으로 선택<br>
        v-model은 기본적으로 사용자 입력 에빈트에 대한 데이터를 업데이트하는 "syntax suger"이며, 일부 경우 특별한 주의가 필요
      </p>
      <p>🏀 v-model은 모든 form 엘리먼트의 초기 value와 checked. 그리고 selected 속성을 무시<br>
        항상 Vue 인스턴스 데이터를 원본 소스로 취급. 컴포넌트의 data 옵션 안에 있는 JS에서 초기값을 선언해야 함
      </p>
      <p>🏀 v-model은 내부적으로 서로 다른 속성을 사용하고 서로 다른 입력 요소에 대해 서로 다른 이벤트를 전송함<br>
        🎈 text와 textarea 태그는 value 속성과 input 이벤트를 사용<br>
        🎈 체크박스들과 라디오 버튼들은 checked 속성과 change 이벤트를 사용<br>
        🎈 select 태그는 value를 prop으로, change를 이벤트로 사용
      </p>

      <div class="margin">
        <h3>⚾ 문자열 (input)</h3>
        <input v-model="message" placeholder="여기를 수정해보세요"/>
        <p>메시지 : {{ message }}</p>
      </div>

      <div class="margin">
        <h3>⚾ 여러 줄을 가진 문장 (textarea)</h3>
        <span>여러 줄을 가지는 메시지 :</span>
        <p style="white-space: pre-line;">{{ message2 }}</p>
        <br />
        <textarea v-model="message2" placeholder="여러 줄을 입력해보세요"></textarea>
        <p>🔽 textarea의 텍스트 보간은 작동하지 않음. 대신 v-model을 사용<br>
          🎈 😢 : ＜textarea＞ { { text } } ＜/textarea＞<br>
          🎈 😎 : ＜textarea v-model="text"＞ ＜/textarea＞
        </p>
      </div>

      <div class="margin">
        <h3>⚾ CheckBox</h3>
        <p>🎈 하나의 체크박스는 단일 boolean 값을 가짐</p>
        <div class="check">
          <input type="checkbox" id="checkbox" v-model="checked" />
          <label for="checkbox">{{ checked }}</label>
        </div>

        <p>🎈 여러개의 체크박스에 동일한 배열을 바인딩할 수 있음</p>
        <div class="check"><input type="checkbox" id="jack" value="Jack" v-model="checkedNames" /><label for="jack">Jack</label></div>
        <div class="check"><input type="checkbox" id="john" value="John" v-model="checkedNames" /><label for="john">John</label></div>
        <div class="check"><input type="checkbox" id="mike" value="Mike" v-model="checkedNames" /><label for="mike">Mike</label></div>
        <span>Checked names: {{ checkedNames }}</span>
      </div>

      <div class="margin">
        <h3>⚾ Radio</h3>
        <input type="radio" id="one" value="One" v-model="picked" />
        <label for="one">One</label>
        <br />
        <input type="radio" id="two" value="Two" v-model="picked" />
        <label for="two">Two</label>
        <br />
        <span>Picked: {{ picked }}</span>
      </div>

      <div class="margin">
        <h3>⚾ Select</h3>
        <h4>🏀 단일 셀렉트</h4>
        <select v-model="selected">
          <option disabled value="">고르시오</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <br/>
        <span>Selected : {{ selected }}</span>
        <p>🎈 v-model 표현식의 초기 값이 어떤 옵션에도 없으면 ＜select＞ 엘리먼트는 "선택없음"("unselected") 상태로 렌더링됨<br>
          ios에서는 이 경우 변경 이벤트가 발생하지 않아 사용자가 첫 번째 항목을 선택할 수 없게 되기에, 사용하지 않는 옵션에 빈 값을 넣는 것이 좋음
        </p>

        <div class="margin">
          <h4>🏀 다중 셀렉트</h4>
          <select v-model="selected2" multiple>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <br />
          <span>Selected2 : {{ selected2 }}</span>
        </div>

        <div class="margin">
          <h4>🏀 v-for를 이용한 동적 옵션 렌더링</h4>
          <select v-model="selected3">
            <option v-for="option in options" :value="option.value">
              {{ option.text }}
            </option>
          </select>
          <br/>
          <span>Selected3 : {{ selected3 }}</span>
        </div>
      </div>
    </div>


    <div class="margin">
      <h3>⚾ 값 바인딩하기</h3>
      <p>radio, checkbox, select 옵션의 경우, v-model 바인딩 값은 보통 정적인 문자열(또는 checkbox의 boolean)임<br>
        그러나 때로는 현재 활성 인스턴스의 동적 속성에 값을 바인딩할 때, v-bind를 사용할 수 있음.<br>
        또한 v-bind를 사용하면 입력 ㄱ밧을 문자열이 아닌 값에 바인딩 할 수 있음
      </p>

      <h4>🏀 checkBox</h4>
      <div class="check">
        <input type="checkbox" id="bindCheckbox" v-model="toggle" true-value="yes" false-value="no" />
        <label for="bindCheckbox">change</label>
      </div>
      <span>toggle : {{ toggle }}</span>

      <div class="margin">
        <h4>🏀 radio</h4>
        <input type="radio" v-model="pick" v-bind:value="radioCheck" />
        <span>toggle : {{ pick }}</span>
      </div>

      <div class="margin">
        <h4>🏀 select option</h4>
        <select v-model="selected4">
          <!-- 인라인 객체 리터럴 -->
          <option :value="{ number: 41867415 }">phone</option>
        </select>
        <br/>
        <span>selected4 : {{ selected4 }}</span>
      </div>
    </div>


    <div class="margin">
      <h3>⚾ 수식어</h3>
      <h4>🏀 .lazy</h4>
      <p>기본적으로, v-model은 각 input 이벤트 후 입력과 데이터를 동기화 함. lazy 수식어를 추가하여 change 이벤트 이후에 동기화 할 수 있음<br/>
        🔽"input" 대신 "change" 이후에 동기화 됨<br/>
        ＜input v-model.lazy="msg" /＞
      </p>

      <div class="margin">
        <h4>🏀 .number</h4>
        <p>사용자 입력이 자동으로 숫자로 형변환 되기를 원하면, v-model이 관리하는 input에 number 수식어를 추가하면 됨<br/>
          ＜input v-model.number="age" type="number" /＞<br/>
          🔼type="number"를 사용하는 경우에 HTML 입력 요소의 값은 항상 문자열을 반영하기 떄문에 종종 유용함<br/>
          만약 값이 parseFloat()에 의해서 분석할 수 없는 경우, 원래의 값이 리턴됨
        </p>
      </div>

      <div class="margin">
        <h4>🏀 .trim</h4>
        <p>사용자가 입력한 내용에서 자동으로 앞뒤 공백을 제거하는 트림 처리를 원한다면, v-model이 관리하는 input에 trim 수식어 추가</p>
        ＜input v-model.trim="msg" /＞
      </div>
    </div>
  </div>
  <a @click="scrollToTop()" class="top">🔝</a>
</template>

<script>
export default {
  name: "ComEight",

  data() {
    return {
      /* 기본 사용법 */
      message: '',
      message2: '',
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      selected2: '',
      selected3: '빨갛다',
      options: [
        { text: '원숭이 엉덩이', value: '빨갛다' },
        { text: '사과는', value: '맛있어' },
        { text: '맛있으면', value: '바나나' },
        { text: '바나나는', value: '길다' }
      ],

      /* 값 바인딩하기 */
      toggle: '',
      pick: '',
      radioCheck: '라디오 체크',
      selected4: ''
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