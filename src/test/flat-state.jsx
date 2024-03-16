import { useState, useEffect } from "react";

/**
 * 연관된 상태 단순화 하기
 * => KISS라고도 함. (Keep it simple, stupid)
 */

// JAVA에서의 ENUM과 같이 열거형 상태로 정의. => 사이드이펙과 불필요한 상태를 줄여 에러를 방지할 수 있음
const PROMISE_STATE = {
  INIT: "init",
  LOADING: "loading",
  FINISH: "finish",
  ERROR: "error",
};

function FlatState() {
  // 서로 연관이 되어있는 states..
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [isFinish, setIsFinish] = useState(false);
  //   const [isError, setIsError] = useState(false);
  const [promiseState, setPromiseState] = useState(PROMISE_STATE.INIT);

  const fetchData = () => {
    // fetch Data 시도
    setPromiseState(PROMISE_STATE.LOADING);

    fetch("https://test.com")
      .then(() => {
        // fetch Data 성공
        setPromiseState(PROMISE_STATE.FINISH);
      })
      .catch(() => {
        // fetch Data 실패
        setPromiseState(PROMISE_STATE.ERROR);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (promiseState === PROMISE_STATE.LOADING)
    return <div>로딩컴포넌트 렌더링</div>;
  if (promiseState === PROMISE_STATE.ERROR)
    return <div>에러컴포넌트 렌더링</div>;
  if (promiseState === PROMISE_STATE.FINISH)
    return <div>성공컴포넌트 렌더링</div>;
}
export default FlatState;
