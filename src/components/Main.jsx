import "../styles/Main.css";
import selfieImg from "../assets/kevillin.png";

function Main() {
  return (
    <main className="main">
      <div className="about">
      <h1>Sobre mim</h1>
      <h3>Sou Desenvolvedor Web Fullstack Jr.</h3>
      <p>Sou apaixonado por resolver problemas e aprender novas metodologias para serem usadas no mercado de tecnologia. Tenho estudado principalmente a área de desenvolvimento Front-End e UX/UI, utilizando React, Vanilla Javascript, CSS, Figma e testes utilizando Jest. Além disso, me aventuro no Back-End fazendo requisições HTTP utilizando o ThunderClient e consumindo APIs com funções de Fetch utilizando o node.JS, fazendo inserção, remoção e alteração de informações em banco de dados SQL e noSQL.</p>
      </div>
      <div id="selfie-container">
        <img id="selfie" src={selfieImg} alt="selfie-img" />
      </div>
    </main>
  )
}

export default Main