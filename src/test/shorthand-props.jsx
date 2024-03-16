/**
 * shorthand props (단축구문 props) 언제 사용할까?
 */
// props를 구조분해 할당으로 내려줄 수 있음
function ShorthandProps({ isDarkMode, isLogin, ...props }) {
  return (
    <header
      className="clean-header"
      id="clean-code"
      style={{
        backgroundColor: "blue",
        width: 100,
      }}
      title="Clean Code React"
      isDarkMode={isDarkMode}
      isLogin={isLogin}
      hasPadding // 항상 true임이 보장된다면 ={true} 생략가능.
    >
      {/* <ChildComponent name={props.name} content={props.name} /> */}
      <ChildComponent {...props} />
    </header>
  );
}

export default ShorthandProps;
