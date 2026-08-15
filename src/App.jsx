import imagem from './assets/imagem de perfil.png';

function Cabecalho() {
  return (
    <header className="cabecalho">
      <header>Início</header>
    </header>
  );
}

function Apresentacao() {
  return (
    <section className="apresentacao">
      <h2>Sobre Mim</h2>

        <img src={imagem} alt="Foto de perfil de Clécio Muniz" />
  
      <article>
        <p>
          <strong>Nome:</strong> Clécio Muniz
        </p>

        <p>
          <strong>Idade:</strong> 18 anos
        </p>

        <p>
          <strong>Curso:</strong> Sistemas de Informação
        </p>

        <p>
          <strong>Período:</strong> 2026.1
        </p>
      </article>
    </section>
  );
}

function Descricao() {
  return (
    <section className="descricao">
      <h2>Descrição</h2>
      <article>
        Como estudante de Sistemas de Informação, tenho um forte interesse em tecnologia e desenvolvimento de software. Alem de possuir interesse nas areas de administracao, ciberseguranca e inteligencia artificial. Ao longo do curso tendo aproveitar das atividades disponibilizadas pelo CiN para desenvolver minhas competências e buscar aprender novas habilidades e aprimorar meus conhecimentos na área de TI.
      </article>
    </section>
  );
}
export { Cabecalho, Apresentacao, Descricao };

function App() {
  return (
    <div className="App">
      <header>
        <Cabecalho />  
      </header>
      <section>
        <Apresentacao />
        <Descricao />
      </section>
    </div>
  );
}

export default App;