import imagemCAD from '../assets/cad-ux-ui.png';
import imagemCAD2 from '../assets/cad-ux-ui2.png';
import imagemIP from '../assets/ip.png';
import imagemIP2 from '../assets/ip2.png';
import imagemMonitoria from '../assets/icone-monitoria-ip.png';
import fortinet from '../assets/fortinet-sticker-cybersecurity.png';
import fortinet2 from '../assets/fortinet-sticker-threat-landscape.png';
import certCAD from '../assets/certificado-projeto-extensao.png';

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
                <img className="imagem-projeto" src={imagemCAD2} alt="Foto projeto CAD-UX-UI" />
            </div>
            <div className="projeto-descricao">
                <h4 className="cadeira">CAD - Concepção de artefatos digitais</h4>
                <h3 className="nomeprojeto">Coreto - Hub de Inovação do Recife</h3>
                    <p className="descricao">Projeto de UI/UX e IHC desenvolvido para a plataforma Coreto, com o objetivo de facilitar a conexão entre startups, pesquisadores, organizações e oportunidades de inovação. A solução foi construída por meio de pesquisas, acompanhamento de stakeholders, testes de usabilidade e prototipação de melhorias para a plataforma.</p>
                    <p className="competencias">CAD — UI/UX • IHC • pesquisa com usuários • testes de usabilidade • prototipação • ideação • análise de problemas • comunicação com stakeholders • documentação • trabalho em equipe</p>
                    <ul className="linksprojeto">
                      <li> <a href='https://drive.google.com/file/d/1zidLYb3TZa5qqsbp_piKxHVRjkiUPmcw/view?usp=sharing'>Acessar apresentação do projeto</a></li>                     
                      <li><a href='https://www.figma.com/make/r2Rht7AaffSdeHOJTTaKnK/Coreto?p=f&t=1f52uZ5hcOO4zF17-0&fullscreen=1'>Acessar protótipo no Figma</a></li>
                    </ul>
            </div>
        </li>

        <li className="projeto">
            <div>
                <img className="imagem-projeto" src={imagemIP} alt="Foto de projeto IP" />
                <img className="imagem-projeto" src={imagemIP2} alt="Foto de projeto IP" />
            </div>
            <div className="projeto-descricao">
                <h4 className="cadeira">IP - Introdução à Programação</h4>
                <h3 className="nomeprojeto">FIND AI AT CiN</h3>
                    <p className="descricao">Find AI at CIn é um jogo desenvolvido em Python com o framework Pygame, no qual o jogador explora um labirinto de três andares, coleta chaves e inteligências artificiais e supera diferentes desafios. O projeto aplicou conceitos de programação orientada a objetos, colisões, inventário, interfaces e desenvolvimento colaborativo.</p>
                    <p className="competencias">IP — Python • Pygame • programação orientada a objetos • lógica de programação • modularização • colisões • interfaces • game design • Git/GitHub • trabalho em equipe</p>
                    <a href='https://github.com/Fbelt/Projeto-IP'>Acessar GitHub do projeto</a>
            </div>
        </li>
      </ul>
      
    <h2 className="subtitulo">Experiências e certificados</h2>
  </section>
);
}

function Experiencias() {
  return (
    <section > 
      <div className="experiencias">
        <div className="experiencia">
          <h3 className="nomeexperiencia">Monitoria de IP</h3>
            <img className="imagem-experiencia" src={imagemMonitoria} alt="Foto de monitoria" />
              <p className="descricaoEXP">Aprovado no processo seletivo para atuar como monitor de Introdução à Programação, auxiliando estudantes na aprendizagem de lógica, Python e resolução de problemas.</p>
              <div className="competencias">
              Lógica de programação • Python • resolução de problemas • comunicação • didática • colaboração • responsabilidade acadêmica
              </div>
        </div>
        <div className="experiencia">
          <h3 className="nomeexperiencia">Fortinet NSE 1</h3>
            <div className="imagem-experiencia">
              <img src={fortinet} alt="Foto de certificado Fortinet" />
              <img src={fortinet2} alt="Foto de certificado Fortinet" />
            </div>
              <ol className="descricaoEXP">
                <li>Getting started in cybersecurity</li>
                <li>Introduction to the threat landscape</li>
              </ol>
            <div className="competencias">
              Fundamentos de cibersegurança • identificação de ameaças • segurança de redes • firewalls • controle de acesso • análise de riscos
              </div>
        </div>
        <div className="experiencia">
          <h3 className="nomeexperiencia">Certificado de Projeto de Extensão</h3>
            <img className="imagem-experiencia" src={certCAD} alt="Foto de certificado de projeto de extensão" />
              <p className="descricaoEXP">Participação como membro da equipe executora no projeto de extensão Concepção de Artefatos Digitais com a Secretaria de Tecnologia do Recife, com carga horária de 20 horas.</p>
            <div className="competencias">
              UI/UX • IHC • pesquisa com usuários • testes de usabilidade • prototipação • comunicação com stakeholders • documentação • trabalho em equipe
              </div>
        </div>
      </div>
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
            <Experiencias />
        </main>
    </div>
  );
}   

export default Portfolio;