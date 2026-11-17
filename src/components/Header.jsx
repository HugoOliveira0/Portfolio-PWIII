import { FolderOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Hugo Oliveira — início">
          <span className="brand-symbol" aria-hidden="true">
            h.
          </span>
          <span>
            Hugo Oliveira
            <span className="brand-subtitle">Desenvolvimento de Sistemas</span>
          </span>
        </a>
        <nav aria-label="Navegação principal">
          <a className="nav-link" href="#atividades">
            <FolderOpen size={17} aria-hidden="true" /> Minhas atividades
          </a>
          <span className="class-badge">3°AMS-DS</span>
        </nav>
      </div>
    </header>
  );
}
