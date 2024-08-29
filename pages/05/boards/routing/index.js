import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
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

export default function ProductPage() {
  const router = useRouter();

  const [func] = useMutation(CREATE_PRODUCT);
  const [seller, setSeller] = useState();
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();

  const onChangeSeller = (data) => {
    setSeller(data.target.value);
  };
  const onChangeName = (data) => {
    setName(data.target.value);
  };
  const onChangeDetail = (data) => {
    setDetail(data.target.value);
  };
  const onChangePrice = (data) => {
    setPrice(data.target.value);
  };

  const onClickSubmit = async () => {
    try {
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
      router.push(`
      /05/boards/${result.data.createProduct._id}
      `);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      판매자: <input onChange={onChangeSeller} type="text"></input>
      <br></br>
      상품명: <input onChange={onChangeName} type="text"></input>
      <br></br>
      상품내용: <input onChange={onChangeDetail} type="text"></input>
      <br></br>
      상품가격: <input onChange={onChangePrice} type="number"></input>
      <br></br>
      <button onClick={onClickSubmit}>상품 등록하기</button>
    </>
  );
}
