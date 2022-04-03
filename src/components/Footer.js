const Footer = (props) => {
  return (
    <>
      <footer>
        <p>Pie de Pagina</p>
        {props.children}
      </footer>
    </>
  );
};

export default Footer;
