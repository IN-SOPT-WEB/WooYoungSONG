# [ React / Vue / Angular / Svelte 비교 ]

### ✔ 각 라이브러리/프레임워크의 주된 차이점은 무엇인가?

![thinking week3](https://user-images.githubusercontent.com/62867581/199374138-d85cc7ce-f879-4e5a-b386-da85d0723d4f.PNG)

**라이브러리**
라이브러리는 특정 기능들을 모아둔 코드, 함수의 집합
애플리케이션의 흐름을 직접 제어
예) npm 모듈, react

> 👩‍🌾 라이브러리는 팬트리라고 생각하면 된다. 요리하는 데에 정해진 규칙은 없지만 재료는 준비되어 있다. 팬트리에 있는 식재료와 식기 등을 원하는 대로 가져가 원하는 대로 요리하면 된다. 그 요리가 어떤 결과를 가져올 지는 아무도 모르지만.

**프레임워크**
프레임워크는 뼈대(구조)를 제공하여 사용자가 뼈대 위에서 코드를 작성
애플리케이션의 코드가 프레임워크에 의해 사용(애플리케이션 코드는 프레임워크가 짜 놓은 틀에서 수동적으로 동작)
예) spring, django, angular, vue, bootstrap

> 🧑‍🍳 프레임워크는 밀키트라고 생각하면 된다. 이미 주어진 재료를 가지고 정해진 레시피 대로만 하면 요리의 완성! 요리의 완성도는 어느정도 보장되어 있지만 자유도는 떨어진다.

[참고 아티클](https://cocoon1787.tistory.com/745)
[요리에 비유](https://velog.io/@nemo/framework-library-gfreqbgx)

### ✔ 스타트업을 창업한다고 할 때, 무슨 라이브러리/프레임워크를 사용해야 할까?

창업을 한다면 먼저 팀원들이 공통적으로 사용하는 라이브러리/프레임워크를 조사하여 공통적으로 사용할 수 있는 라이브러리/프레임워크로 개발을 해야할 것이다.
또한 창업아이템이 웹/앱 인지, 웹에서 확장되어 앱까지 나아갈 수 있는지에 따라서도 달라질 것이다.
만약 앱까지 간다면 react native로 app까지 만들 수 있기에 react를 적극적으로 추천할 것이며,

### ✔ 난 무엇을 위해 React 를 학습하는가?

- react native까지 학습하여 웹/앱을 모두 만들어보기 위해서!
- react 에 있는 상태관리 시스템(redux, recoil) 등 다양한 기능을 활용하기 위해서

# [ styled-components에 대해 알아보기 ]

### ✔ 해당하는 라이브러리의 장/단점은 무엇인가?

**장점**

- styled-components는 css파일을 html과 분리해야한다는 점을 해결( 한 파일 내에 작성 가능 )
- css in js 방식으로 컴포넌트가 랜더링 될 때만 해당 스타일 정보를 읽어온다.

**단점**

- 별도의 라이브러리 설치에 따른 번들 크기 증대
- css in js 방식이기에 js를 공부해한다.

🤔 [css in js](https://velog.io/@bepyan/CSS-in-JS-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B3%A0%EC%B0%B0) : 자바스크립트에서 css를 작성하는 방식

### ✔ 대체할 수 있는 라이브러리가 있는가? (emotion, stitches, …)

#### Tailwoind CSS

GitHub과 Nuxt.js 공식 사이트에서 사용한다.
styled-components을 사용하면 클래스명이 다른 컴포넌트를 무한히 만들어서 적용시켜야한다.

**장점**

- Tailwoind 는 bootstrap 처럼 Utility-First이기에 일관된 스타일을 할 수 있으며 시간이 절약될 수 있다.

**단점**

- `class="bg-primary-darken text-bold text-white inline-flex items-center p-4 rounded shadow-md"` 처럼 Tailwoind를 모르는 사용자가 보기에 코드를 이해하지 못한다.
- 각 스타일의 클래스명을 익혀야해서 러닝커브가 높다.

[참고 아티클](https://wonny.space/writing/dev/hello-tailwind-css)

✨**Tailwindcss + Styled-Component** 조합으로도 사용할 수 있다.
[참고 아티클](https://velog.io/@jinsunkimdev/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-tailwindcss-styled-components-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)

### ✔ 난 어떤 스타일링 라이브러리가 가장 마음에 드는가?

- 무엇이 더 낫다고 말할 수 는 없지만 컴포넌트별로 스타일을 나눌 수 있는 라이브러리를 선호하는 것 같다.
- 다른 사람이 보았을때도 코드를 이해할 수 있어야 하기에 가독성이 높은 스타일링을 하는 방법을 찾는 것 같다. ( 여러 라이브러리를 조합해서라도 )
