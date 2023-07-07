import Slider from "./Slider";

function App() {
  const data = [
    {
      title: "lorem ipsum titulo",
      description: "una description sencilla",
      url: "https://images.pexels.com/photos/11631746/pexels-photo-11631746.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      title: "lorem ipsum titulo2",
      description: "una description sencilla",
      url: "https://images.pexels.com/photos/15857477/pexels-photo-15857477/free-photo-of-tunel-pavimento-interior-vacio.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
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
      url: "http:///localhost:3000/logo192.png",
    },
  ];
  const containerStyles = {
    width: "90vw",
    height: "90vh",
  };
  return (
    <div className="App">
      <header style={containerStyles}>
        <Slider data={data} />
      </header>
    </div>
  );
}

export default App;
