import imagemCAD from '../assets/cad-ux-ui.png';
import imagemIP from '../assets/ip.png';

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
function Titulo() {
    return (
        <>
        <h1 className="titulo">Portfólio</h1>
            <p className="subtitulo">Projetos acadêmicos, experiências e certificados.</p>
        </>
    );
}


function Projetos() {
  return (
    <section className="projetos">
    <h2 className="subtitulo">Projetos Acadêmicos</h2>
      <ul>
        <li className="projeto">
            <div>
                <img className="imagem-projeto" src={imagemCAD} alt="Foto projeto CAD-UX-UI" />
            </div>
            <div>
                <h4 className="cadeira">CAD-UX-UI</h4>
                <h3 className="nomeprojeto">Coreto - Hub de Inovação do Recife</h3>
                    <p className="descricao"></p>
            </div>
        </li>
        <li className="projeto">
            <div>
                <img className="imagem-projeto" src={imagemIP} alt="Foto de projeto IP" />
            </div>
            <div>
                <h4 className="cadeira">IP - Introdução à Programação</h4>
                <h3 className="nomeprojeto">FIND AI AT CiN</h3>
                    <p className="descricao"></p>
            </div>
        </li>
      </ul>
      
    <h2 className="subtitulo">Experiências e certificados</h2>
  </section>
);
}
function Portfolio() {
  return (
    <div>
      <Cabecalho />
        <main>
            <Titulo />
            <Projetos />
        </main>
    </div>
  );
}   

export default Portfolio;