import { useRouter } from "next/router";

export default function Coba() {
  const router = useRouter();

  let id = router.query.id;

  return (
    <>
      <p>ini adalah id {id}</p>
    </>
  );
}
