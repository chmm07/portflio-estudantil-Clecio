import imagem from './assets/imagem de perfil.png';

function Cabecalho() {
  return (
    <header className="cabecalho">
      <h1><strong>Clécio Muniz</strong></h1>
      <nav className="navegacao">
        <a className="linknav" href="portfolio/">Portfólio</a>
      </nav>
    </header>
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
          <strong>Instituição:</strong> Universidade Federal de Pernambuco — UFPE
        </p>

        <p>
          <strong>Centro:</strong> Centro de Informática - CIn
        </p>

        <p>
          <strong>Ingresso:</strong> 2026.1
        </p>
      </article>
    </section>
  );
}

function Descricao() {
  return (
    <section className="descricao">
      <h2>Descrição</h2>
      <p>
        Sou estudante de Sistemas de Informação na Universidade Federal de Pernambuco (UFPE), vinculado ao Centro de Informática (CIn), e busco construir uma formação que integre conhecimentos técnicos, criatividade e compreensão das necessidades dos usuários. Tenho interesse nas áreas de desenvolvimento de software, cibersegurança, inteligência artificial e administração, procurando compreender tanto a construção das tecnologias quanto a maneira como elas podem solucionar problemas reais.

Durante minha trajetória acadêmica, participei de projetos envolvendo programação em Python, desenvolvimento de jogos com Pygame, pesquisa em UI/UX e interação humano-computador. Também venho ampliando meus conhecimentos em segurança da informação por meio das formações da Fortinet e fui selecionado para atuar como monitor de Introdução à Programação. Meu objetivo é continuar desenvolvendo competências técnicas e profissionais, participar de novos projetos e transformar os conhecimentos adquiridos no curso em soluções úteis, acessíveis e bem estruturadas.
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
          <strong>E-mail:</strong> <a href="mailto:chmm@cin.ufpe.br">chmm@cin.ufpe.br</a>
        </li>
        <li>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/clécio-muniz-598655322">Meu linkedin</a>
        </li>
        <li>
          <strong>GitHub:</strong> <a href="https://github.com/chmm07">github.com/chmm07</a>
        </li>
        <li>
          <strong>Instagram:</strong> <a href="https://www.instagram.com/clecio_muniz/">@clecio_muniz</a>
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