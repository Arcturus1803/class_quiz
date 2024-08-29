import { FETCH_PRODUCT } from "./BoardWrite.quries";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWrite(props) {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId },
  });
  console.log(data);
  console.log(router);

  return (
    <>
      <BoardWriteUI router={router} data={data} />
    </>
  );
}
