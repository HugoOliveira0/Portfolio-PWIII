import { Search, X } from 'lucide-react';
import { categories } from '../utils/activities.js';

export default function ActivityFilters({
  activities,
  category,
  onCategoryChange,
  search,
  onSearchChange,
}) {
  return (
    <div className="filter-area">
      <div
        className="category-filters"
        role="group"
        aria-label="Filtrar por tipo de atividade"
      >
        {categories.map((item) => (
          <button
            key={item.id}
            aria-pressed={category === item.id}
            className={`filter-button ${category === item.id ? 'is-active' : ''}`}
            onClick={() => onCategoryChange(item.id)}
          >
            {item.label}
            <span>
              {item.id === 'todos'
                ? activities.length
                : activities.filter((activity) => activity.category === item.id).length}
            </span>
          </button>
        ))}
      </div>
      <div className="search-field">
        <Search size={19} aria-hidden="true" />
        <label className="sr-only" htmlFor="activity-search">
          Buscar atividades
        </label>
        <input
          id="activity-search"
          type="search"
          placeholder="Buscar uma atividade..."
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
        />
        {search ? (
          <button onClick={() => onSearchChange('')} aria-label="Limpar busca">
            <X size={17} />
          </button>
        ) : null}
      </div>
    </div>
  );
}
