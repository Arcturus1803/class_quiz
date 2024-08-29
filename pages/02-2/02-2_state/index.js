import { Text, Btn } from "../../../styles/02-2";
import { useState } from "react";

export default function page() {
  const [number, setNumber] = useState(0);

  function countUp(event) {
    setNumber(number + 1);
  }

  return (
    <>
      <Text>{number}</Text>
      <Btn onClick={countUp}>클릭!</Btn>
    </>
  );
}
