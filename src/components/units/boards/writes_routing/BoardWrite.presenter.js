import { Seller, Name, Detail, Price, Btn } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      판매자: <Seller onChange={props.onChangeSeller} type="text"></Seller>
      <br></br>
      상품명: <Name onChange={props.onChangeName} type="text"></Name>
      <br></br>
      상품내용: <Detail onChange={props.onChangeDetail} type="text"></Detail>
      <br></br>
      상품가격: <Price onChange={props.onChangePrice} type="number"></Price>
      <br></br>
      <Btn onClick={props.onClickSubmit}>상품 등록하기</Btn>
    </>
  );
}
