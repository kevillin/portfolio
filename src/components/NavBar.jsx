import logo from "../assets/logo.png";
import "../styles/NavBar.css";
import whatsAppIcon from "../assets/whatsapp.png";
import linkedinIcon from "../assets/linkedin.png";
import gitHubIcon from "../assets/github.png";
import gmailIcon from "../assets/envelope.png";

export default function NavBar() {
  return (
    <nav className="nav">
      <img src={logo} id="logo" alt="logo" />
      <div className="links-pai">
        <a href="#about" className="links">sobre</a>
        <a href="#contato" className="links">contato</a>
        <a href="#stacks" className="links">stacks</a>
        <a href="#projetos" className="links">projetos</a>
      </div>
      <div className="icons-pai">
        <a href="https://wa.me/5561982788831" rel="noreferrer" target="_blank"><img className="icons" src={whatsAppIcon} alt="" /></a>
        <a href="https://www.linkedin.com/in/kevillinsantos/" rel="noreferrer" target="_blank"><img className="icons" src={linkedinIcon} alt="" /></a>
        <a href="https://www.github.com/kevillin" rel="noreferrer" target="_blank"><img className="icons" src={gitHubIcon} alt="" /></a>
        <a href="mailto:ksantos621@gmail.com" rel="noreferrer" target="_blank"><img className="icons" src={gmailIcon} alt="" /></a>
      </div>
    </nav>
  )
}