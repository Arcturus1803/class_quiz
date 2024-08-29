import { Fragment, useState } from "react";

export default function FilterAndMap() {
  const classmates = [
    { name: "철수", age: 10, school: "토끼초등학교" },
    { name: "영희", age: 13, school: "다람쥐초등학교" },
    { name: "훈이", age: 11, school: "토끼초등학교" },
  ];

  const [arr, setArr] = useState(classmates);
  const candyArr = { candy: 10 };
  console.log(arr);

  const result = arr
    .filter((el) => el.school == "토끼초등학교")

    .map((data) => {
      setArr(...arr, candyArr);
      console.log(arr);
    });

  return <Fragment>{result}</Fragment>;
}
