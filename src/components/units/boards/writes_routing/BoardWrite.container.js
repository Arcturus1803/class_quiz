import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_PRODUCT } from "./BoardWrite.queries";

export default function ProductPage(props) {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  const [func] = useMutation(CREATE_PRODUCT);
  const [seller, setSeller] = useState();
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();

  const onChangeSeller = (data) => {
    setSeller(data.target.value);

    if (data.target.value && name && detail && price) {
      setIsActive(true);
    }
  };

  const onChangeName = (data) => {
    setName(data.target.value);
    if (seller && data.target.value && detail && price) {
      setIsActive(true);
    }
  };

  const onChangeDetail = (data) => {
    setDetail(data.target.value);
    if (seller && name && data.target.value && price) {
      setIsActive(true);
    }
  };

  const onChangePrice = (data) => {
    setPrice(data.target.value);
    if (seller && name && detail && data.target.value) {
      setIsActive(true);
    }
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
      /06/boards/${result.data.createProduct._id}
      `);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <BoardWriteUI
        onChangeSeller={onChangeSeller}
        onChangeName={onChangeName}
        onChangeDetail={onChangeDetail}
        onChangePrice={onChangePrice}
        onClickSubmit={onClickSubmit}
        isActive={isActive}
      />
    </>
  );
}
