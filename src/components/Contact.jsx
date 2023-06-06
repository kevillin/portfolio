import localizacaoIcon from "../assets/localizacao.png";
import telefoneIcon from "../assets/telefone.png";
import envelopeIcon from "../assets/email.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <div>
      <h1>Contato</h1>
      <div className="contact-container">
        <img className="contact-icon" src={telefoneIcon} alt="telefone-icon" />
        <h3>+55 (61) 98278-8831</h3>
        <div className="linha-vertical"></div>
        <img className="contact-icon" src={localizacaoIcon} alt="localizacao-icon" />
        <h3>Brasília, DF - Brasil</h3>
        <div className="linha-vertical"></div>
        <img className="contact-icon" src={envelopeIcon} alt="envelope-icon" />
        <h3>kevillin_santos@hotmail.com</h3>
        <h3>ksantos621@gmail.com</h3>
      </div>
      <form>
        <input type="text" name="name-input" className="input-contact" placeholder="Digite seu nome"/>
        <input type="email" name="email-input" className="input-contact" placeholder="Digite seu e-mail"/>
        <input type="text" name="assunto-input" className="input-contact" placeholder="Digite o assunto"/>
        <textarea name="textarea-input" className="input-textarea" id="" cols="30" rows="10" placeholder="Digite sua mensagem"></textarea>
        <button type="submit" className="button-contact">Enviar mensagem!</button>
      </form>
    </div>
  )
}

export default Contact