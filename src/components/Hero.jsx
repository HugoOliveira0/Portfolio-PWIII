import { ArrowDown, FileText, FolderOpen } from 'lucide-react';

export default function Hero({ activities }) {
  const programming = activities.find((item) => item.id === 'acp-12');
  const games = activities.find((item) => item.id === 'acp-08');

  return (
    <section id="inicio" className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-intro">
          <span aria-hidden="true" /> Portfólio de atividades complementares
        </p>
        <h1 id="hero-title">
          Aprender.
          <br />
          Participar.
          <br />
          Construir.
        </h1>
        <p className="hero-description">
          Um registro das experiências que fazem parte da minha formação, dentro e fora da
          sala de aula.
        </p>
        <div className="student-signature">
          <strong>Hugo Oliveira da Silva</strong>
          <span>3°AMS-DS</span>
        </div>
        <a className="button button-primary" href="#atividades">
          Explorar atividades <ArrowDown size={18} aria-hidden="true" />
        </a>
      </div>
      <div className="hero-folder" aria-hidden="true">
        <div className="folder-tab">Minha trajetória</div>
        <div className="folder-back" />
        <div className="paper paper-back">
          <img src={games.file} alt="" fetchPriority="high" />
        </div>
        <div className="paper paper-front">
          <img src={programming.file} alt="" fetchPriority="high" />
        </div>
        <div className="folder-front">
          <FolderOpen size={26} />
          <div>
            <strong>Experiências que ficam.</strong>
            <span>Cursos, encontros e novas ideias.</span>
          </div>
          <FileText size={22} className="folder-file-icon" />
        </div>
        <div className="folder-note">Cada experiência, um novo repertório.</div>
      </div>
    </section>
  );
}
