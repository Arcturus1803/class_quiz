import { ProductId, Seller, Name, Detail, Price } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      상품 아이디: <ProductId>{props.router.query.productId}</ProductId>
      <br></br>
      판매자:<Seller>{props.data?.fetchProduct?.seller}</Seller>
      <br></br>
      이름:<Name>{props.data?.fetchProduct?.name}</Name>
      <br></br>
      디테일:<Detail>{props.data?.fetchProduct?.detail}</Detail>
      <br></br>
      가격:<Price>{props.data?.fetchProduct?.price}</Price>
    </>
  );
}
