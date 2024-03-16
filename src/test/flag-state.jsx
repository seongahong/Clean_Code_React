/**
 * 플래그 상태
 * useState 대신 플래그로 상태를 정의할 수 있다.
 *
 * 플래그 값
 * - 프로그래밍에서 주로 특정 조건 혹은 제어를 위한 조건을 불리언으로 나타내는 것.
 */

function FlagState() {
  //   const [isLogin, setIsLogin] = useState(false);

  // [4단계] 이렇게 조건을 따로 뺴서 관리한다면 굳이 상태가 필요하지 않음.
  const isLogin =
    hasToken &&
    hasCookie &&
    isValidCookie &&
    isValidToken &&
    isNewUser === false;
  //   useEffect(() => {
  // [1단계] 초기 코딩.
  // if (hasToken) {
  //   setIsLogin(true);
  // }

  // if (hasCookie) {
  //   setIsLogin(true);
  // }

  // if (isValidCookie) {
  //   setIsLogin(true);
  // }

  // if (isValidToken) {
  //   setIsLogin(true);
  // }

  // if (isNewUser === false) {
  //   setIsLogin(true);
  // }

  // [2단계] 분기문 합치기
  // if (
  //   hasToken &&
  //   hasCookie &&
  //   isValidCookie &&
  //   isValidToken &&
  //   isNewUser === false
  // ) {
  //   setIsLogin(true);
  // }

  // [3단계] 조건문에 들어가는 부분 변수로 따로 빼기 => 이 변수를 밖으로 빼기 && isLogin 상태 필요없을듯.

  // if (isLogin) {
  //   setIsLogin(true);
  // }
  //   }, [hasToken, hasCookie, isValidCookie, isValidToken, isNewUser]);

  return <div>{isLogin && "안녕하세요! 반갑습니다!"}</div>;
}

export default FlagState;
