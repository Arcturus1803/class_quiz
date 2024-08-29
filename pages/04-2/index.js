import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

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
  const [title, setTitle] = useState();
  const [writer, setWriter] = useState();
  const [contents, setContents] = useState();

  const onClickSubmit = async () => {
    const result = await func({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter}></input>
      <br></br>
      제목: <input type="text" onChange={onChangeTitle}></input>
      <br></br>
      내용: <input type="text" onChange={onChangeContents}></input>
      <br></br>
      <button onClick={onClickSubmit}>API 요청하기</button>
    </>
  );
}
