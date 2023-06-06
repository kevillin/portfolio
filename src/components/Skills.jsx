import UxUiImg from "../assets/design.png";
import JestImg from "../assets/jest.png";
import JsImg from "../assets/js.png";
import ReactImg from "../assets/react.png";
import CssImg from "../assets/css.png";
import HtmlImg from "../assets/html.png";
import MySqlImg from "../assets/mysql.png";
import NodeImg from "../assets/node.png";

import "../styles/Skills.css";

function Skills() {
  return (
    <div>
      <h1>Hardskills</h1>
      <hr />
      <div className="skills-container">
        <img className="skills-img" src={UxUiImg} alt="uxui-img" />
        <img className="skills-img" src={JestImg} alt="jest-img" />
        <img className="skills-img" src={JsImg} alt="javascript-img" />
        <img className="skills-img" src={ReactImg} alt="react-img" />
        <img className="skills-img" src={CssImg} alt="css-img" />
        <img className="skills-img" src={HtmlImg} alt="html-img" />
        <img className="skills-img" src={MySqlImg} alt="mysql-img" />
        <img className="skills-img" src={NodeImg} alt="node-img" />
      </div>
    </div>
  )
}

export default Skills