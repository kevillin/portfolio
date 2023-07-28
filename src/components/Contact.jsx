import { useState } from 'react';
import emailjs from '@emailjs/browser';

import localizacaoIcon from '../assets/localizacao.png';
import telefoneIcon from '../assets/telefone.png';
import envelopeIcon from '../assets/email.png';
import '../styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      assunto: assunto,
      message: message,
      email: email,
    };
    emailjs
      .send(
        'service_2wzyedq',
        'template_wtdkupp',
        templateParams,
        'HKRbX51FLnsO2P9uT'
      )
      .then(() => {
        setName('');
        setEmail('');
        setAssunto('');
        setMessage('');
        alert('Mensagem enviada com sucesso!');
      })
      .catch((error) => alert('Erro ao enviar mensagem!' | error.message));
  };

  return (
    <div>
      <h1 id="contato">Contato</h1>
      <hr />
      <div className="contact-container">
        <div className="info-container first">
          <img
            className="contact-icon"
            src={telefoneIcon}
            alt="telefone-icon"
          />
          <h3 className="info">+55 (61) 98278-8831</h3>
        </div>
        <div className="info-container">
          <img
            className="contact-icon"
            src={localizacaoIcon}
            alt="localizacao-icon"
          />
          <h3 className="info">Brasília, DF - Brasil</h3>
        </div>
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name-input"
          className="form-control"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email-input"
          className="form-control"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="assunto-input"
          className="form-control"
          placeholder="Digite o assunto"
          onChange={(e) => setAssunto(e.target.value)}
        />
        <textarea
          name="textarea-input"
          className="form-control"
          id=""
          cols="30"
          rows="10"
          placeholder="Digite sua mensagem"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" className="btn btn-outline-dark">
          Enviar mensagem!
        </button>
      </form>
    </div>
  );
}

export default Contact;
