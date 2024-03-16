import { useState } from "react";

/**
 * 이전 상태 (PrevState) 재활용하기 (1)
 */
function PrevState() {
  const [age, setAge] = useState(42);

  function updateAge() {
    // 바로 이전 상태가 아닌 갱신되기 전 상태를 바라보고 있을 수 있기 때문에
    // 원하던 결과가 나오지 않을 가능성 o.
    setAge(age + 1); // setAge(42 + 1);
    setAge(age + 1); // setAge(42 + 1);
    setAge(age + 1); // setAge(42 + 1);
  }
  //
  function updaterFunction() {
    setAge((prevAge) => prevAge + 1); // setAge(42 + 1 = 43);
    setAge((prevAge) => prevAge + 1); // setAge(43 + 1 = 44);
    setAge((prevAge) => prevAge + 1); // setAge(44 + 1 = 45);
  }
}

export default PrevState;
