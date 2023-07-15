import { useParams } from "react-router-dom";

export default function Post() {
  const {postName} = useParams();
  return (
    <>
      <h1>{postName}</h1>
    </>
  );
}
