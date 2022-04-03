const Main = ({ usuarios }) => {
  return (
    <>
      <main>
        {usuarios.map((usuarios) => (
          <div>
            <p>Nombre: {usuarios.nombre}</p>
            <p>Edad: {usuarios.edad}</p>
          </div>
        ))}
      </main>
    </>
  );
};

export default Main;
