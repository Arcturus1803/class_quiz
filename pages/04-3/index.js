import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function Page() {
  const [func] = useMutation(CREATE_PRODUCT);

  const [seller, setSeller] = useState();
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();

  const onClickSubmit = async () => {
    const result = await func({
      variables: {
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: Number(price),
        },
      },
    });
    console.log(result);
  };

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  return (
    <>
      판매자: <input type="text" onChange={onChangeSeller}></input>
      <br></br>
      이름: <input type="text" onChange={onChangeName}></input>
      <br></br>
      디테일: <input type="text" onChange={onChangeDetail}></input>
      <br></br>
      가격: <input type="number" onChange={onChangePrice}></input>
      <br></br>
      <button onClick={onClickSubmit}>API 요청하기</button>
    </>
  );
}
