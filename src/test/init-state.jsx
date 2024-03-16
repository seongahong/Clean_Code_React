import { useState, useEffect } from "react";
/**
 * 초기값?
 * - 가장 먼저 렌더링될 때 순간저긍로 보여질 수 있는 값이기도 함.
 * - 초기에 렌더링 되는 값.
 *
 * 초기값
 * - 지키지 않을 경우? => 렌더링 이슈, 무한 루프, 타입 불일치로 인한 의도치 않은 동작 발생. => 런타임 에러 발생.
 * - 넣지 않으면 undefined 에러남.
 * - 상태를 CRUD 할 때, 상태를 지울 때도 초기값을 잘 기억해놔야 원상태로 돌아감.
 * - 빈값? null처리를 할 때 불필요한 방어코드도 줄여줌.
 */

// 불필요한 참조!!
// 이렇게 업데이트가 되지 않는 일반 싱글리터럴 객체라면 리액트 외부로 내보내자!!!
const INFO = {
  name: "file",
  content: "abc",
};

function InitState() {
  const [count, setCount] = useState("0"),
    [list, setList] = useState(); // 초깃값이 설정되지 않은 경우
  // [list, setList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.example.com/data");
      const result = await res.json();
      setList(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h2>리스트입니다.</h2>
        {list.map((el) => (
          <div key={el.id}>
            <p>{el.title}</p>
            <div>{el.content}</div>
          </div>
        ))}
      </div>
      <div>
        <p>Count : {count}</p>
        <buttton onClick={() => setCount(count + 1)}></buttton>
      </div>
      <div>{INFO.name}</div>
    </div>
  );
}

export default InitState;
