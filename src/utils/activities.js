export const categories = [
  { id: 'todos', label: 'Todas as atividades' },
  { id: 'certificados', label: 'Certificados' },
  { id: 'relatorios', label: 'Relatórios e palestras' },
  { id: 'eventos', label: 'Eventos' },
];

export const categoryLabels = {
  certificados: 'Certificado',
  relatorios: 'Relatório',
  eventos: 'Evento',
};

export function normalizeText(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export function filterActivities(activities, category, search) {
  const query = normalizeText(search.trim());

  return activities.filter((activity) => {
    const matchesCategory = category === 'todos' || category === activity.category;
    const searchableText = `${activity.title} ${categoryLabels[activity.category]} ${activity.date ?? ''}`;

    return matchesCategory && normalizeText(searchableText).includes(query);
  });
}
