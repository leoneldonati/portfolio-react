import "../sass/styles/About.scss";
import Leo from "../assets/png/foto.png";

export const About = () => (
  <section className="About">
    <div className="Container">
      <div className="Container--top">
        <div className="Container-img">
          <img src={Leo} alt="Foto Leonel" loading="lazy" />
        </div>
        <div className="Container-description">
          <p className="Container-p">
            Profesional autodidacta, enfocado y apasionado por el arte de programar. <br />
            Descubrí este mundo de casualidad y quedé
            fascinado con la idea de poder crear con código cualquier idea que
            cruce por mi cabeza. <br />
            Próximamente dedicado al desarrollo Full Stack Web
            .-
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
