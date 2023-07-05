import localizacaoIcon from "../assets/localizacao.png";
import telefoneIcon from "../assets/telefone.png";
import envelopeIcon from "../assets/email.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <div>
      <h1 id="contato">Contato</h1>
      <hr />
      <div className="contact-container">
        <div className="info-container">
          <img
            className="contact-icon"
            src={telefoneIcon}
            alt="telefone-icon"
          />
          <h3 className="info">+55 (61) 98278-8831</h3>
        </div>
        <hr className="corte"/>
        <div className="info-container">
          <img
            className="contact-icon"
            src={localizacaoIcon}
            alt="localizacao-icon"
          />
          <h3 className="info">Brasília, DF - Brasil</h3>
        </div>
        <hr className="corte"/>
        <div className="info-container">
          <img
            className="contact-icon"
            src={envelopeIcon}
            alt="envelope-icon"
          />
          <h3 className="info">kevillin_santos@hotmail.com</h3>
          <h3 className="info">ksantos621@gmail.com</h3>
        </div>
      </div>
      <form>
        <input
          type="text"
          name="name-input"
          className="form-control"
          placeholder="Digite seu nome"
        />
        <input
          type="email"
          name="email-input"
          className="form-control"
          placeholder="Digite seu e-mail"
        />
        <input
          type="text"
          name="assunto-input"
          className="form-control"
          placeholder="Digite o assunto"
        />
        <textarea
          name="textarea-input"
          className="form-control"
          id=""
          cols="30"
          rows="10"
          placeholder="Digite sua mensagem"
        ></textarea>
        <button type="submit" className="btn btn-outline-dark">
          Enviar mensagem!
        </button>
      </form>
    </div>
  );
}

export default Contact;
