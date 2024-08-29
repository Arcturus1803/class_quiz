import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

export default function MovedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId },
  });
  console.log(data);
  console.log(router);

  return (
    <>
      상품 아이디: <div>{router.query.productId}</div>
      <br></br>
      판매자:<div>{data?.fetchProduct?.seller}</div>
      <br></br>
      이름:<div>{data?.fetchProduct?.name}</div>
      <br></br>
      디테일:<div>{data?.fetchProduct?.detail}</div>
      <br></br>
      가격:<div>{data?.fetchProduct?.price}</div>
    </>
  );
}
