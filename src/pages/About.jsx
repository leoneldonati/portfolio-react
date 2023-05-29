import "../sass/styles/About.scss";
import Leo from '../assets/png/foto.png'

export const About = () => (
  <section className="About">
    <div className="Container">
      <div className="Container--top">
        <div className="Container-img">
          <img src={Leo} alt="Foto Leonel" loading="lazy" />
          <div className="Back-img"></div>
        </div>
        <div className="Container-description">
          <p className="Container-p">
          Persona autodidacta, enfocada y con constante crecimiento profesional. <br />
        Mi objetivo es seguir aprendiendo este maravilloso arte que es programar, descubrí este mundo
        de casualidad y quedé fascinado con tal variedad que habia de herramientas, lenguajes, propósitos e incluso
        la infinita posibilidad de poder escribir tus ideas en un código e imprimirlo en pantalla. <br />
        Próximamente desarrollo Full Stack.-
          </p>
        </div>
      </div>

      <div className="Container--bottom">
        <ul className="Container-ul--hardSkills">
          <li className="Title-skills">Hard Skills</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React JS</li>
          <li>Git & GitHub</li>
          <li>Node JS</li>
        </ul>
        <ul className="Container-ul--softSkills">
          <li className="Title-skills">Soft Skills</li>
          <li>Adaptability</li>
          <li>Communication</li>
          <li>Time management</li>
          <li>Critical opinion</li>
        </ul>
      </div>
    </div>
  </section>
);
