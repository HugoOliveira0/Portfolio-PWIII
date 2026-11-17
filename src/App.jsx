import { useState } from 'react';
import { ArrowUp, FolderSearch } from 'lucide-react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ActivityCard from './components/ActivityCard.jsx';
import ActivityFilters from './components/ActivityFilters.jsx';
import DocumentViewer from './components/DocumentViewer.jsx';
import activities from './data/activities.json';
import { filterActivities } from './utils/activities.js';

export default function App() {
  const [category, setCategory] = useState('todos');
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const filteredActivities = filterActivities(activities, category, search);
  const selectedIndex = filteredActivities.findIndex((item) => item.id === selectedId);
  const selectedActivity = filteredActivities[selectedIndex];

  function navigateDocument(direction) {
    const nextIndex =
      (selectedIndex + direction + filteredActivities.length) % filteredActivities.length;
    setSelectedId(filteredActivities[nextIndex].id);
  }

  function clearFilters() {
    setCategory('todos');
    setSearch('');
  }

  return (
    <>
      <a className="skip-link" href="#atividades">
        Pular para as atividades
      </a>
      <Header />
      <main>
        <Hero activities={activities} />
        <section
          className="activities-section"
          id="atividades"
          aria-labelledby="activities-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <h2 id="activities-title">Minha pasta de experiências.</h2>
                <p>Conhecimentos, encontros e desafios ao longo da formação.</p>
              </div>
              <span className="record-count">
                {activities.length} atividades registradas
              </span>
            </div>
            <ActivityFilters
              activities={activities}
              category={category}
              onCategoryChange={setCategory}
              search={search}
              onSearchChange={setSearch}
            />
            <div className="results-heading">
              <p role="status">
                {filteredActivities.length}{' '}
                {filteredActivities.length === 1
                  ? 'atividade encontrada'
                  : 'atividades encontradas'}
              </p>
              {category !== 'todos' || search ? (
                <button className="reset-button" onClick={clearFilters}>
                  Limpar filtros
                </button>
              ) : null}
            </div>
            {filteredActivities.length ? (
              <div className="activity-grid">
                {filteredActivities.map((activity) => (
                  <ActivityCard
                    key={activity.id}
                    activity={activity}
                    onOpen={(item) => setSelectedId(item.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <FolderSearch size={40} aria-hidden="true" />
                <h3>Nenhuma atividade por aqui.</h3>
                <p>Tente outro nome ou escolha uma categoria diferente.</p>
                <button className="button button-primary" onClick={clearFilters}>
                  Mostrar todas as atividades
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <strong>Hugo Oliveira da Silva</strong>
            <p>3°AMS-DS</p>
          </div>
          <p>Portfólio de atividades complementares</p>
          <a href="#inicio">
            Voltar ao início
            <ArrowUp size={17} aria-hidden="true" />
          </a>
        </div>
      </footer>
      {selectedActivity ? (
        <DocumentViewer
          activity={selectedActivity}
          onClose={() => setSelectedId(null)}
          onPrevious={() => navigateDocument(-1)}
          onNext={() => navigateDocument(1)}
          position={selectedIndex}
          total={filteredActivities.length}
        />
      ) : null}
    </>
  );
}
