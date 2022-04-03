import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  let usuario = {
    nombre: "Noel",
    edad: 22,
  };

  let usuarios = [
    { nombre: "Noel", edad: 22 },
    { nombre: "Joel", edad: 25 },
    {
      nombre: "Anderson",
      edad: 29,
    },
  ];

  return (
    <>
      <Header />
      <Main usuarios={usuarios} />
      <Footer>
        <div>
          <p>Hola soy un pie</p>
        </div>
      </Footer>
    </>
  );
};

export default App;
