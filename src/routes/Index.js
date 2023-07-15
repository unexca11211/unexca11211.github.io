import Slider from "../components/Slider";
import Article from "../components/Article";

function Index() {
  const data = [
    {
      url: "http://localhost:3001/LbBqmJ9.png",
    },
    {
      url: "http://localhost:3001/dM0QAEA.png",
    },
    {
      url: "http:///localhost:3001/Organigrama.png",
    },
  ];

  return (
    <>
      <Slider data={data} />
      <Article />
    </>
  );
}

export default Index;
