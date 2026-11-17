import { useEffect, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Minus,
  Plus,
  X,
} from 'lucide-react';
import { categoryLabels } from '../utils/activities.js';

export default function DocumentViewer({
  activity,
  onClose,
  onPrevious,
  onNext,
  position,
  total,
}) {
  const dialogRef = useRef(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const dialog = dialogRef.current;
    const activeElement = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      activeElement?.focus();
    };
  }, []);

  function changeActivity(direction) {
    setZoom(1);
    if (direction === 'previous') onPrevious();
    else onNext();
  }

  return (
    <dialog
      ref={dialogRef}
      className="viewer"
      aria-labelledby="viewer-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="viewer-surface">
        <header className="viewer-header">
          <div>
            <span className="viewer-type">{categoryLabels[activity.category]}</span>
            <h2 id="viewer-title">{activity.title}</h2>
          </div>
          <button
            className="icon-button"
            onClick={onClose}
            aria-label="Fechar visualizador"
            autoFocus
          >
            <X size={22} />
          </button>
        </header>
        <div className="viewer-image-area">
          <img
            src={activity.file}
            alt={activity.title}
            style={{ width: `${zoom * 100}%`, maxWidth: zoom === 1 ? '100%' : 'none' }}
          />
        </div>
        <div className="viewer-toolbar">
          <div className="viewer-navigation">
            <button
              className="icon-button"
              onClick={() => changeActivity('previous')}
              aria-label="Atividade anterior"
              disabled={total < 2}
            >
              <ChevronLeft size={20} />
            </button>
            <span aria-live="polite">
              {position + 1} de {total}
            </span>
            <button
              className="icon-button"
              onClick={() => changeActivity('next')}
              aria-label="Próxima atividade"
              disabled={total < 2}
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="zoom-controls">
            <button
              className="icon-button"
              onClick={() => setZoom((value) => Math.max(1, value - 0.5))}
              disabled={zoom === 1}
              aria-label="Diminuir imagem"
            >
              <Minus size={18} />
            </button>
            <span>{Math.round(zoom * 100)}%</span>
            <button
              className="icon-button"
              onClick={() => setZoom((value) => Math.min(3, value + 0.5))}
              disabled={zoom === 3}
              aria-label="Ampliar imagem"
            >
              <Plus size={18} />
            </button>
          </div>
          <div className="viewer-links">
            <a
              className="button button-subtle"
              href={activity.file}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={17} aria-hidden="true" />
              Abrir original
            </a>
            <a className="button button-primary" href={activity.file} download>
              <Download size={17} aria-hidden="true" />
              Baixar
            </a>
          </div>
        </div>
      </div>
    </dialog>
  );
}
