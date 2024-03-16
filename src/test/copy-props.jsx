import { useMemo } from "react";
import { useState } from "react";

/**
 * useMemo 사용하기
 * 불필요한 props 복사
 * props로 받은 상태나 데이터를 하위 컴포넌트에서 직접 조작해야하는 경우!!!
 */

// 1. props로 받은 데이터로 그대로 그리는 방법 best!
function CopyProps1({ value }) {
  return <div>{value}</div>;
}

// 2. props로 받은 데이터를 useState에 담아 복사하는 경우
// - 연산중복수행: 값비싸고 무거운 연산을 리렌더링 될 때마다 실행하게 되어 메모리 낭비 등의 성능저하 문제 발생.
// - 데이터가 컴포넌트 내에서 복사되면서 메모리 소비가 일어남.
// - props로 전달된 데이터와 복사된 데이터 사이의 동기화 문제 발생 가능성.
// - 복사된 값이 부모 컴포넌트에서 전달된 props의 변경과 동기화되지 않을 수 있으며, 이로 인해 데이터 불일치 문제가 발생할 수 있음.
function CopyProps2({ value }) {
  const [copiedValue] = useState(값_비싸고_무거운_연산(value));

  return <div>{copiedValue}</div>;
}

// 3. props로 받은 데이터 컴포넌트 내부 변수에 담아 복사하는 경우
function CopyProps3({ value }) {
  const copiedValue = 값_비싸고_무거운_연산(value);

  return <div>{copiedValue}</div>;
}

// 4. useMemo를 사용한 연산 값 캐싱.
// - 사실 애초에 이러한 연산은 props로 내려주기 전, 부모 컴포넌트에서 하는 것이 best.
function CopyProps4({ value }) {
  const copiedValue = useMemo(() => 값_비싸고_무거운_연산(value), [value]);

  return <div>{copiedValue}</div>;
}
