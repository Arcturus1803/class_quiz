import { useState } from "react";
import { Click, Hello } from "../../../styles/02-1";

export default function page() {
  const [text, setText] = useState("안녕하세요");

  function textChange(event) {
    setText("반갑습니다.");
  }

  return (
    <>
      <Hello>{text}</Hello>
      <Click onClick={textChange}>클릭!</Click>
    </>
  );
}
