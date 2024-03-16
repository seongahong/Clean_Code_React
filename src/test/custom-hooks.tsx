import React from "react";
import { useEffect, useReducer } from "react";

/**
 * 반복 로직 custom hook으로 빼내기.
 */
const INIT_STATE = {
  isLoading: false,
  isSuccess: false,
  isFail: false,
};

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

/**
 * FetchData CustomHook 생성
 * @param url
 */
const useFetchData = (url) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_LOADING" });

      await fetch("https://test.com")
        .then(() => {
          dispatch({ type: "FETCH_SUCCESS" });
        })
        .catch(() => {
          dispatch({ type: "FETCH_FAIL" });
        });
    };
  }, [url]);

  return state;
};

function CustomHooks() {
  // --------------------<여기부터>------------------------
  // const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // const fetchData = () => {
  //   dispatch({ type: "FETCH_LOADING" });
  //   fetch("https://test.com")
  //     .then(() => {
  //       dispatch({ type: "FETCH_SUCCESS" });
  //     })
  //     .catch(() => {
  //       dispatch({ type: "FETCH_FAIL" });
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // --------------------<여기까지>------------------------

  // Custom hook 적용
  const { isLoading, isSuccess, isFail } = useFetchData("https://test.com");

  if (isLoading) return <div>로딩컴포넌트 렌더링</div>;
  if (isFail) return <div>에러컴포넌트 렌더링</div>;
  if (isSuccess) return <div>성공컴포넌트 렌더링</div>;
}
export default CustomHooks;
