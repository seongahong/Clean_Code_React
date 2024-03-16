import React from "react";
import { useState, useEffect } from "react";

/**
 * 연관된 상태 객체로 묶어내기
 * => KISS라고도 함. (Keep it simple, stupid)
 */

function FlatState() {
  // 서로 연관이 되어있는 states..라면 하나의 state로 관리하는 방법도 있음
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [isFinish, setIsFinish] = useState(false);
  //   const [isError, setIsError] = useState(false);
  const [fetchState, setFetchState] = useState({
    isLoading: false,
    isFinish: false,
    isError: false,
  });

  const fetchData = () => {
    // fetch Data 시도
    setFetchState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    fetch("https://test.com")
      .then(() => {
        // fetch Data 성공
        setFetchState((prevState) => ({
          ...prevState,
          isFinish: true,
        }));
      })
      .catch(() => {
        // fetch Data 실패
        setFetchState((prevState) => ({
          ...prevState,
          isError: true,
        }));
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (fetchState.isLoading) return <div>로딩컴포넌트 렌더링</div>;
  if (fetchState.isError) return <div>에러컴포넌트 렌더링</div>;
  if (fetchState.isFinish) return <div>성공컴포넌트 렌더링</div>;
}
export default FlatState;
