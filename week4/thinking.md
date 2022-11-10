# 패칭 라이브러리에 대해 알아보자

## 패칭 라이브러리에는 무엇이 있나?

프론트는 데이터를 서버로부터 받아오기 때문에 시간이 지나면서 서버와 데이터일관성이 깨진다. 데이터를 최신 상태로로 유지하기 위해 주기적으로 호출함(refetching)으로써 프론트와 서버의 데이터 상태를 동기화하여 데이터 일관성을 보장한다.

기존에는 redux를 사용하였는데 비동기로직을 사용하기 위해서 비동기 로직을 처리하는 미들웨어인 redux-thunk 또는 redux-saga를 사용해야한다. 미들웨어 사용으로 인해 코드의 양은 증가하게 되었다.

비동기 처리
데이터 패칭 라이브러리의 대표자로는 react-query, swr, Recoil 있다.

[Data Fetching Library](https://kooku0.github.io/blog/data-fetching-library-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%95%BC%ED%95%A0%EA%B9%8C/)

[React에서 서버 데이터를 최신으로 관리하기(React Query, SWR)](https://fe-developers.kakaoent.com/2022/220224-data-fetching-libs/)

제일 유명한 react-query, swr에 대해 알아보자.

- react-query : 리액트 애플리케이션에 서버 상태를 가져오고, 캐싱하고, 동기화하고, 업데이트하는 것을 쉽게 해 준다.

- swr : 먼저 캐시에서 데이터를 반환한 다음, 서버에 데이터를 가져오는 요청을 보내고, 마지막으로 최신 데이터를 제공하는 전략이다.

## 패칭 할 때의 기능적인 차이는 무엇인가? 왜 차이가 나는 것이지?

useQuery, useSWR 모두 번째 인자로 fetcher를 받는다.

- React Query

```js
const ReactQueryProfile = () => {
  const {isLoading, error, data, isFetching} = useQuery("users", () =>
    fetch("https://61b88c9d64e4a10017d19053.mockapi.io/user").then(res => res.json())
  );
```

fetcher의 url을 직접 전달해야한다.

React Query는 항상 두 번째 인자에 fetcher를 넘겨 줘야 한다.

- SWR

```js
const SWRProfile = () => {
  const {data, error} = useSWR("https://61b88c9d64e4a10017d19053.mockapi.io/user", url =>
    fetch(url).then(res => res.json())
  );
```

fetcher의 인자로 useSWR의 첫 번째 인자를 넘겨준다.

SWR은 전역 설정을 통해 fetcher를 정해 둘 수 있다.

```js
const fetcher = (url) => axios.get(url).then((res) => res.data);
const SWRTodos = () => {
  const { data, error } = useSWR("http://localhost:3000/todos", fetcher);
};
```

[react-query vs swr](https://tech.madup.com/react-query-vs-swr/)

## 각각의 장점은 무엇인가? 어떻게 결정하는가?

react-query에는 있지만 SWR에는 없는, react-query에는 없지만 SWR에는 있는 기능들이 있다.
대체적으로 react-query에 더 다양한 기능들이 있는데, 기능이 많다보니 SWR의 번들 사이즈는 15kb지만 React Query의 번들 사이즈는 50kb을 가지고 있다.

또한 react-query는 사용자 커스텀이 자유롭다.

[번들 사이즈 비교](https://goongoguma.github.io/2021/11/04/React-Query-vs-SWR/)

## 패칭 라이브러리를 잘 쓰기 위한 방안에는 무엇이 있는가?

따라서 편리성과 번들 사이즈를 고려해 두 라이브러리 중 선택하면 될 것 같다.
