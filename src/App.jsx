import imagem from './assets/imagem de perfil.png';

function Cabecalho() {
  return (
    <h1 className="cabecalho">
      <strong>Clécio Muniz</strong>
    </h1>
  );
}

function Apresentacao() {
  return (
    <section className="apresentacao">
      <img src={imagem} alt="Foto de perfil de Clécio Muniz" />
  
      <article className="informacoes">
        <p>
          <strong>Data de nascimento:</strong> 09/09/2007
        </p>

        <p>
          <strong>Curso:</strong> Sistemas de Informação
        </p>

        <p>
          <strong>Instituição:</strong> UFPE
        </p>

        <p>
          <strong>Centro:</strong> Centro de Informática - CIn
        </p>

        <p>
          <strong>ingresso:</strong> 2026.1
        </p>
      </article>
    </section>
  );
}

function Descricao() {
  return (
    <section className="descricao">
      <h2>Sobre Mim</h2>
      <p>
        Como estudante de Sistemas de Informação, tenho forte interesse em tecnologia e desenvolvimento de software. Também possuo interesse nas áreas de administração, cibersegurança e inteligência artificial. Ao longo do curso, procuro aproveitar as atividades disponibilizadas pelo CIn para desenvolver minhas competências, aprender novas habilidades e aprimorar meus conhecimentos na área de TI.
      </p>
    </section>
  );
}

function Contatos() {
  return (
    <section className="contatos">
      <h2>Contatos</h2>
      <ul>
        <li>
          <strong>Email:</strong> <a href="mailto:chmm@cin.ufpe.br">chmm@cin.ufpe.br</a>
        </li>
        <li>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/clécio-muniz-598655322">https://www.linkedin.com/in/clécio-muniz-598655322</a>
        </li>
        <li>
          <strong>GitHub:</strong> <a href="https://github.com/chmm07">https://github.com/chmm07</a>
        </li>
        <li>
          <strong>Instagram:</strong> <a href="https://www.instagram.com/clecio_muniz/">https://www.instagram.com/clecio_muniz/</a>
        </li>
        <li>
          <strong>Telefone:</strong> <a href="tel:+5581992694311">+55 (81) 99269-4311</a>
        </li>
      </ul>
    </section>
  );
}

function App() {
  return (
    <div className="App">
        <Cabecalho />  
      <main>
        <Apresentacao />
        <Descricao />
        <Contatos />
      </main>
    </div>
  );
}

export default App;