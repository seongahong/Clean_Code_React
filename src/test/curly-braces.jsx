/**
 * Curly braces
 * 어떤 경우에 중괄호 사용할까. => jsx에서!
 */
function CurlyBraces() {
  // jsx에서의 {""} 또는 {''} 는 결국 문자열이기 때문에 굳이 중괄호를 사용하지 않아도 됨.
  // 표현식의 경우 중괄호 사용! (value에서.)
  return (
    <header
      className="clean-header"
      id="clean-code"
      // 요건 객체를 넣은거임
      style={{
        backgroundColor: "blue",
        width: 100,
      }}
      title="Clean Code React"
      value={1}
      //   value={true}
      //   value={{}}
      //   value={[]}
      //   value={() => {}}
      //   value={1 + 2}
      //   value={isLogin && hasCookie}
    >
      <img
        className="profile"
        src="fake-path/fake-file.jpg"
        alt="profile-image"
      />
    </header>
  );
}
export default CurlyBraces;
