import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/05/statics/1");
  };

  return (
    <>
      <button onClick={onClickMove}>2000번 페이지 이동하기</button>
    </>
  );
}
