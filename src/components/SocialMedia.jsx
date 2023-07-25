import whatsAppIcon from '../assets/whats-dark.png';
import linkedinIcon from '../assets/linkedin-dark.png';
import gitHubIcon from '../assets/git-dark.png';
import gmailIcon from '../assets/mail-dark.png';
import '../styles/SocialMedia.css'

function SocialMedia() {
  return (
    <div className="icons-pai">
    <a
      href="https://wa.me/5561982788831"
      rel="noreferrer"
      target="_blank"
    >
      <img className="icons" src={whatsAppIcon} alt="" />
    </a>
    <a
      href="https://www.linkedin.com/in/kevillinsantos/"
      rel="noreferrer"
      target="_blank"
    >
      <img className="icons" src={linkedinIcon} alt="" />
    </a>
    <a
      href="https://www.github.com/kevillin"
      rel="noreferrer"
      target="_blank"
    >
      <img className="icons" src={gitHubIcon} alt="" />
    </a>
    <a
      href="mailto:ksantos621@gmail.com"
      rel="noreferrer"
      target="_blank"
    >
      <img className="icons" src={gmailIcon} alt="" />
    </a>
  </div>
  )
}

export default SocialMedia