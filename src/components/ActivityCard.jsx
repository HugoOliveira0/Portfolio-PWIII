import { ArrowUpRight, CalendarDays, Clock3, FileText, Award, Users } from 'lucide-react';
import { categoryLabels } from '../utils/activities.js';

const icons = { certificados: Award, relatorios: FileText, eventos: Users };

export default function ActivityCard({ activity, onOpen }) {
  const Icon = icons[activity.category];
  const isEvent = activity.category === 'eventos';

  return (
    <article className={`activity-card activity-card--${activity.category}`}>
      {!isEvent ? (
        <button
          className="document-preview"
          onClick={() => onOpen(activity)}
          aria-label={`Visualizar ${activity.title}`}
        >
          <img
            src={activity.file}
            alt={`Comprovante: ${activity.title}`}
            loading="lazy"
            decoding="async"
          />
          <span className="preview-action">
            <ArrowUpRight size={20} aria-hidden="true" />
          </span>
        </button>
      ) : (
        <div className="event-illustration" aria-hidden="true">
          <Users size={38} strokeWidth={1.3} />
          <span>{activity.date.slice(-4)}</span>
        </div>
      )}
      <div className="activity-content">
        <span className={`type-label type-label--${activity.category}`}>
          <Icon size={15} aria-hidden="true" />
          {categoryLabels[activity.category]}
        </span>
        <h3>{activity.title}</h3>
        {isEvent ? (
          <>
            <div className="event-details">
              <span>
                <CalendarDays size={15} aria-hidden="true" />
                {activity.date}
              </span>
              <span>
                <Clock3 size={15} aria-hidden="true" />
                {activity.hours} horas
              </span>
            </div>
            <p className="event-caption">Participação sem emissão de certificado.</p>
          </>
        ) : null}
        <button className="text-button" onClick={() => onOpen(activity)}>
          {isEvent ? 'Ver registro' : 'Ver comprovante'}
          <ArrowUpRight size={17} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
