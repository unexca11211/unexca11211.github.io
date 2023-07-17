import Slider from "../components/Slider";
import Article from "../components/Article";

export default function Index() {
  const data = [
    {
      title: "lorem ipsum titulo",
      description: "una description sencilla",
      url: "https://imgur.com/LbBqmJ9",
    },
    {
      title: "lorem ipsum titulo2",
      description: "una description sencilla",
      url: "https://imgur.com/dM0QAEA",
    },
    {
      title: "lorem ipsum titulo3",
      description: "una description sencilla",
      url: "http:///localhost:3000/favicon.ico",
    },
    {
      title: "lorem ipsum titulo4",
      description: "una description sencilla",
      url: "https://images.pexels.com/photos/16159464/pexels-photo-16159464/free-photo-of-edificio-cielo-azul-urbano-pueblo.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      title: "lorem ipsum titulo5",
      description: "una description sencilla",
      url: "https://images.pexels.com/photos/15109908/pexels-photo-15109908/free-photo-of-flores-insecto-mariposa-floracion.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      title: "lorem ipsum titulo6",
      description: "una description sencilla",
      url: "https://images.pexels.com/photos/15857477/pexels-photo-15857477/free-photo-of-tunel-pavimento-interior-vacio.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
  ];

  return (
    <>
      <Slider data={data} />
      <Article />
    </>
  );
}
