import Slider from "../components/Slider";
import Article from "../components/Article";

function Index() {
  const data = [
    {
      url: "https://imgur.com/LbBqmJ9",
    },
    {
      url: "https://imgur.com/dM0QAEA",
    },
    {
      url: "http:///localhost:3000/favicon.ico",
    },
    {
      url: "https://images.pexels.com/photos/16159464/pexels-photo-16159464/free-photo-of-edificio-cielo-azul-urbano-pueblo.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      url: "https://images.pexels.com/photos/15109908/pexels-photo-15109908/free-photo-of-flores-insecto-mariposa-floracion.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      url: "http:///localhost:3000/logo192.png",
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
