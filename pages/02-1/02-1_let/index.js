import { Click, Hello } from "../../../styles/02-1";

export default function page() {
  function textChange() {
    const text = document.getElementById("qqq");
    text.innerText = "반갑습니다.";
  }

  return (
    <>
      <Hello id="qqq">안녕하세요</Hello>
      <Click onClick={textChange}>클릭!</Click>
    </>
  );
}
