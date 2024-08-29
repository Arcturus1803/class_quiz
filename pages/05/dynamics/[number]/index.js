import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function PageMoved() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });
  console.log(data);

  return (
    <>
      <div>{router.query.number}</div>번 게시글
      <br></br>
      작성자: <div>{data?.fetchBoard?.writer}</div>
      <br></br>
      제목: <div>{data?.fetchBoard?.title}</div>
      <br></br>
      내용: <div>{data?.fetchBoard?.contents}</div>
      <br></br>
    </>
  );
}
