import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function Page() {
  const [func] = useMutation(CREATE_BOARD);
  const router = useRouter();

  const onClickSubmit = async () => {
    try {
      const result = await func({
        variables: {
          writer: "hyyyy",
          title: "helllo",
          contents: "hahaha",
        },
      });
      console.log(result);
      router.push(`
          /05/dynamics/${result.data.createBoard.number}
          `);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <button onClick={onClickSubmit}>이동하기</button>
    </>
  );
}
