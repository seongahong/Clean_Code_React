import { useState, useEffect } from "react";

/**
 * 불필요한 상태를 만든다면?
 *
 * - 결국에는 리액트에 의해 관리되는 값이 늘어나는 것
 * - 렌더링에 영향을 주는 값이 늘어나게 되며 관리 포인트가 더더욱 늘어남.
 *
 */

const MOCK_DATA = [
  {
    userId: 1,
    id: 1,
    title: "clean code",
    completed: false,
  },
  {
    userId: 2,
    id: 2,
    title: "clean room",
    completed: true,
  },
  {
    userId: 3,
    id: 3,
    title: "clean desk",
    completed: false,
  },
];
function UnnecessaryState(props) {
  const [userList, setUserList] = useState(MOCK_DATA);

  // 컴포넌트 내부에서의 변수는?
  // 렌더링 마다 고유의 값을 가지는 계산된 값.
  const complUserList = complUserList.filter((user) => user.completed === true);

  useEffect(() => {}, [userList]);

  return (
    <div>
      <header></header>
      <article>
        <ul>
          <li></li>
        </ul>
      </article>
    </div>
  );
}

export default UnnecessaryState;
