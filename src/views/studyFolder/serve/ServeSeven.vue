<template>
  <div class="margin">
    <h1>7. 이벤트 핸들링</h1>
    <div class="margin">
      <h3>⚾ 이벤트 청취, 메소드 이벤트 핸들러</h3>
      <p>🏀 v-on 디렉티브는 DOM 이벤트를 듣고 트리거 될 때와 JS를 실행할 때 사용함. v-on:/@ 으로 사용<br>
        많은 이벤트 핸들러의 로직은 더 복잡할 것이므로, JS를 v-on 속성 값으로 보관하는 것은 간단하지 않음<br>
        그게 v-on이 호출하고자 하는 메소드의 이름을 받는 이유
      </p>
      <div :style="style.border">
        <p>＜button @click="greet"＞Greet＜/button＞</p>
        <button @click="greet">Greet</button>
      </div>
    </div>

    <div class="margin">
      <h3>⚾ 인라인 메소드 핸들러</h3>
      <p>🏀 메소드 이름을 직접 바인딩하는 대신, 인라인 JS 구문에 메소드를 사용할 수 있음</p>
      <div :style="style.border">
        <p>＜button @click="say('hi')"＞Say hi＜/button＞</p>
        <p>＜button @click="say('what')"＞Say what＜/button＞</p>
        <button @click="say('hi')">Say hi</button>
        <button @click="say('what')">Say what</button>
      </div>

      <p>🏀 때로, 인라인 명령문 핸들러에서 원본 DOM 이벤트에 액세스 해야할 수도 있음. 특별한 $event를 사용해 메소드에 전달할 수 있음</p>
      <div :style="style.border">
        <p>＜button @click="warn('Form cannot be submitted yet.', $event)"＞Submit＜/button＞</p>
        <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>
      </div>
    </div>

    <div class="margin">
      <h3>⚾ 복합 이벤트 핸들러</h3>
      <p>🏀 다음 예시처럼, 연산자를 사용하여 이벤트 핸들러 안에서 복합 메소드를 지정할 수 있음</p>
      <!-- one()과 two() 둘다 버튼 클릭 이벤트를 실행할 수 있습니다.-->
      <div :style="style.border">
        <p>＜button @click="one($event), two($event)"＞Submit＜/button＞</p>
        <button @click="one($event), two($event)">Submit</button>
      </div>
    </div>

    <div class="margin">
      <h3>⚾ 이벤트 수식어</h3>
      <p>🏀 이벤트 핸들러 내부에서 event.preventDefault() 또는 event.stopPropagation()를 호출하는 것은 매우 보편적인 일<br>
        메소드 내에서 쉽게 이 작업을 할 수 있지만, DOM 이벤트 세보 사항을 처리하는 대신 데이터 로직에 대한 메소드만 사용할 수 있으면 더 좋음
      </p>
      <div>
        <p>🏀 이 문제를 해결하기 위하여 Vue는 v-on 이벤트에 이벤트 수식어를 제공함. ✅ 수식어는 점으로 된 접미사</p>
        <hr>
        <p>🎈 .stop</p>클릭 이벤트 전파가 중단<br>＜a @click.stop="doThis"＞＜/a＞
        <hr>
        <p>🎈 .prevent</p>제출 이벤트가 페이지를 다시 로드하지 않음<br>＜form @submit.prevent="onSubmit"＞＜/form＞<br>
          : 수정자는 체이닝이 가능 : ＜a @click.stop.prevent="doThat"＞＜/a＞<br>
          : 단순히 수식어만 사용이 가능 ＜form @submit.prevent＞＜/form＞<br>
        <hr>
        <p>🎈 .capture</p>캡처 모드를 사용할 때 이벤트 리스너를 사용 가능.<br>즉, 내부 엘리먼트를 대상으로 하는 이벤트가 해당 엘리먼트에서 처리되기 전에 여기서 처리함<br>
          ＜div @click.capture="doThis"＞...＜/div＞<br>
        <hr>
        <p>🎈 .self</p>event.target이 엘리먼트 자체인 경우에만 트리거를 처리. 자식 엘리먼트에서는 처리되지 않음<br>
          ＜div @click.self="doThat"＞...＜/div＞<br>
          <p>🔽 관련 코드가 동일한 순서로 생성되므로 수식어를 사용할 때 순서를 지정해야함</p>
            ➕ v-on:click.prevent.self : 모든 클릭을 막음<br>
            ➕ v-on:click.self.prevent : 엘리먼트 자체에 대한 클릭만 방지함<br>
        <hr>
        <p>🎈 .once</p>클릭 이벤트는 최대한 한번에 트리거됨<br>＜a @click.once="doThis"＞＜/a＞<br>
        <hr>
        <p>🎈 .passive</p>
          스크롤의 기본 이벤트를 취소할 수 없음<br>
          'onScroll' 완료되는 것을 기다리는 것을 대신함<br>
          이 경우에 'event.preventDefault()'를 포함하고 있음<br>
          특히 .passive 수식어는 모바일 환경에서 성능 향상에 도움이 됨<br>
          .prevent 수식어는 무시되고 브라우저에서 오류를 발생시키기 때문에, .passive 수식어와 .prevent 수식어를 함께 사용하면 안됨<br>
          ＜div @scroll.passive="onScroll"＞...＜/div＞
        <hr>
      </div>
    </div>

    <div class="margin">
      <h3>⚾ 키 수식어</h3>
      <p>🏀 키보드 이벤트를 청취할 때, 종종 공동 키 코드를 확인해야 함<br>
        Vue에서 키 이벤트를 청취할 때 키 수식어로 v-on 또는 @를 더할 수 있음</p>
      <div :style="style.border">
        키가 'Enter'일 때만 submit()을 호출할 수 있음
        ＜input @keyup.enter="submit" /＞
        <p>🏀 KeyboardEvent.key를 통해 노출된 유호 키 이름을 케밥 케이스로 변환하여 수식어로 사용할 수 있음</p>
        ＜input @keyup.page-down="onPageDown" /＞
        <p>위의 예제에서 핸들러는 $event.key === PageDown 일 때만 호출됨</p>
      </div>
    </div>

    <div class="margin">
      <h3>⚾ Key</h3>
      <h4>🥎 키 명령어</h4>
      <p>🏀 Vue는 가장 흔히 사용되는 키에서 명령어를 제공함</p>
      <div :style="style.border">
        🎈 .enter<br>
        🎈 .tab<br>
        🎈 .delete ("Delete"와 "Backspace" 키 모두를 캡처함)<br>
        🎈 .esc<br>
        🎈 .space<br>
        🎈 .up<br>
        🎈 .down<br>
        🎈 .left<br>
        🎈 .right
      </div>

      <h4>🥎 시스템 수식어 키 목록</h4>
      <p>🏀 다음 수식어를 사용해 해당 수식어 키가 눌러진 경우에만 마우스 또는 키보드 이벤트 리스너를 트리거 할 수 있음</p>
      <div :style="style.border">
        🎈 .ctrl<br>
        🎈 .alt<br>
        🎈 .shift<br>
        🎈 .meta (windows: window key, Mac: command key)
      </div>

      <h4>🥎 키 예시</h4>
      <div :style="style.border">
        <p>알트 + 엔터 : ＜input @keyup.alt.enter="clear" /＞</p>
        <p>컨트롤 + 클릭 : ＜div @click.ctrl="doSomething"＞Do something＜/div＞</p>
      </div>

      <h4>🥎 .exact 수식어</h4>
      <p>.exact 수식어는 다른 시스템 수식어와 조합해 그 핸들러가 실행되기 위해 정확한 조합이 눌러야하는 것을 요구함</p>
      <div :style="style.border">
        아래코드는 Alt 또는 Shift와 함께 눌렀을 때도 실행됩니다.<br>
        ＜button @click.ctrl="onClick"＞A＜/button＞<br><br>

        아래코드는 Ctrl키만 눌려져 있을 때 실행됩니다.<br>
        ＜button @click.ctrl.exact="onCtrlClick"＞A＜/button＞<br><br>

        아래 코드는 시스템 키가 눌리지 않은 상태인 경우에만 작동합니다.<br>
        ＜button @click.exact="onClick"＞A＜/button＞
      </div>

      <h4>🥎 마우스 버튼 수식어</h4>
      <div :style="style.border">
        🎈 .left<br>
        🎈 .right<br>
        🎈 .middle<br>
        위 수식어는 특정 마우스 버튼에 의해 트리거 된 이벤트로 핸들러를 제한함함
     </div>
    </div>

    <div class="margin">
      <h3>⚾ 왜 HTML로 된 리스너를 사용하는가?</h3>
      <div :style="style.border">
        1. HTML 템플릿을 간단히 하여 JS 코드 내에서 핸들러 함수 구현을 찾는 것이 더 쉬움<br>
        2. JS에서 이벤트 리스너를 수동으로 연결할 필요가 없으므로 ViewModel 코드는 순수 로직과 DOM이 필요로 하지 않음. 이렇게 하면 테스트가 쉬워짐<br>
        3. ViewModel이 파기되면 모든 이벤트 리스너가 자동으로 제거됨. 이벤트 제거에 대한 걱정이 필요 없어짐
      </div>
    </div>


    </div>
</template>

<script>
export default {
  name: "ServeSeven",

  methods: {
    /*⚾ 이벤트 청취, 메소드 이벤트 핸들러*/
    greet(event) {
      // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다.
      alert('Hello ' + this.name + '!')
      // `event` 는 네이티브 DOM 이벤트입니다
      if (event) {
        alert(event.target.tagName)
      }
    },

    /*⚾ 인라인 메소드 핸들러*/
    say(message) {
      alert(message)
    },
    warn(message, event) {
      // 네이티브 이벤트에 접근할 수 있습니다.
      if (event) {
        event.preventDefault()
      }
      alert(message)
    },

    /*⚾ 복합 이벤트 핸들러*/
    one(event) { // 첫번째 핸들러 로직...
      alert("one")
    },
    two(event) { // 두번째 핸들러 로직...
      alert("two")
    }
  },

  data() {
    return {
      /*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
      style: {
        border: {
          border: '2px solid lightgray',
          padding: '20px'
        }
      },
    }
  }
}
</script>

<style scoped>
  hr {
    margin: 30px
  }
</style>