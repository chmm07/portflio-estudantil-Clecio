function Cabecalho() {
  return (
    <header className="cabecalho">
      <h1><strong>Clécio Muniz</strong></h1>
      <nav className="navegacao">
        <a className="linknav" href="../">Início</a>
      </nav>
    </header>
  );
}


function Portfolio() {
  return (
    <div>
      <Cabecalho />
    </div>
  );
}   

export default Portfolio;