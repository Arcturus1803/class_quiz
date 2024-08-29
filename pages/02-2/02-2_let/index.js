import { Text, Btn } from "../../../styles/02-2";

export default function page() {
  function countUp() {
    const num = Number(document.getElementById("n").innerText) + 1;
    document.getElementById("n").innerText = num;
  }

  return (
    <>
      <Text id="n">0</Text>
      <Btn onClick={countUp}>클릭!</Btn>
    </>
  );
}
