import React from "react";
import { useState, useEffect, useReducer } from "react";

/**
 * 구조화 된 상태를 원한다면 useReducer()
 * 여러 상태가 연관됐을 때 useState 대신 useReducer를 사용하면 상태를 구조화할 수 있음.
 */
const INIT_STATE = {
  isLoading: false,
  isSuccess: false,
  isFail: false,
};

// redux와 비슷한 형태
// 콜백 인자로 현재 상태 state, state를 변화시키는 action!
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_LOADING":
      return { isLoading: true, isSuccess: false, isFail: false };
    case "FETCH_SUCCESS":
      return { isSuccess: true, isLoading: false, isFail: false };
    case "FETCH_FAIL":
      return { isFail: true, isSuccess: false, isLoading: false };
    default:
      return INIT_STATE;
  }
};

function StateToReducer() {
  // useReducer 사용
  // state와 state를 조작하는 함수 dispatch
  // useReducer에 첫번째 인자: reducer리스너, 두번째 인자: 초깃값
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  // const [isFail, setIsFail] = useState(false);

  const fetchData = () => {
    // fetch Data 시도
    // setIsLoading(true);
    dispatch({ type: "FETCH_LOADING" });
    fetch("https://test.com")
      .then(() => {
        // fetch Data 성공
        // setIsLoading(false);
        // setIsSuccess(true);
        dispatch({ type: "FETCH_SUCCESS" });
      })
      .catch(() => {
        // fetch Data 실패
        dispatch({ type: "FETCH_FAIL" });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (state.isLoading) return <div>로딩컴포넌트 렌더링</div>;
  if (state.isFail) return <div>에러컴포넌트 렌더링</div>;
  if (state.isSuccess) return <div>성공컴포넌트 렌더링</div>;
}
export default StateToReducer;
