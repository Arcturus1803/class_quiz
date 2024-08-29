export default function Page() {
  function Random() {
    const num = document.getElementById("qqq");

    let newNum = Math.floor(Math.random() * 1000000);
    while (newNum <= 99999) {
      newNum = Math.floor(Math.random() * 1000000);
    }
    num.innerText = newNum;
  }

  return (
    <>
      <div id="qqq">000000</div>
      <button onClick={Random}>인증번호 전송</button>
    </>
  );
}
