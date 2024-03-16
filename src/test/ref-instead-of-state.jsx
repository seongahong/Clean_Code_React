import { useEffect, useRef } from "react";

/**
 * 리렌더링 방지가 필요하다면 useState 대신 useRef
 *
 * 컴포넌트의 전체적인 수명과 동일하게 지속된 정보를 일관적으로 제공해야하는 경우
 */
function RefInsteadOfState() {
  //   const [isMount, setIsMount] = useState(false);
  // useRef는 렌더링을 유발하지 않는 가변컨테이너.
  // useRef로 관리하는 값은 값이 변해도 화면이 렌더링되지 않음.
  const isMount = useRef(false);

  useEffect(() => {
    isMount.current = true;

    return () => (isMount.current = false); // 해제 시키기
  }, []);
  return <div>{isMount && "컴포넌트 마운트 완료!"}</div>;
}

export default RefInsteadOfState;
