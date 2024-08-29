import { useState } from "react";

export default function Page() {
  const [num, setNum] = useState();
  function RandomNumber() {
    let random = Math.floor(Math.random() * 1000000);

    while (random <= 99999) {
      random = Math.floor(Math.random() * 1000000);
    }

    setNum(random);
  }
  return (
    <>
      <div>{num}</div>
      <button onClick={RandomNumber}>인증번호 전송</button>
    </>
  );
}
