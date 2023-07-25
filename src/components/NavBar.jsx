import logo from '../assets/logo.png';
import '../styles/NavBar.css';

export default function NavBar() {
  const mobileMenu = () => {
    const navBar = document.querySelector('.nav');
    navBar.classList.toggle('active');
  };

  return (
    <header className="header">
      <img src={logo} id="logo" alt="logo" />
      <nav className="nav">
      <span id="hamburguer" onClick={() => mobileMenu()}></span>
        <ul className="menu">
          <li>
            <a href="#sobre" className="links">
              Sobre
            </a>
          </li>
          <li>
            <a href="#contato" className="links">
              Contato
            </a>
          </li>
          <li>
            <a href="#stacks" className="links">
              Stacks
            </a>
          </li>
          <li>
            <a href="#projetos" className="links">
              Projetos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
