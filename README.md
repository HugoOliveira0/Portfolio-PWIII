# Portfólio de ACPs — Hugo Oliveira da Silva

Atividade desenvolvida para a matéria de **Programação Web 3 (PWIII)**, da turma **3°AMS-DS**.

Site em React que reúne minhas atividades complementares: certificados, relatórios, palestras e eventos.

## Funcionalidades

- Consulta aos 27 registros do portfólio.
- Busca por título, tipo de atividade ou data, sem diferenciação de acentos.
- Filtros por certificados, relatórios e eventos.
- Visualizador com ampliação, navegação entre registros e download das imagens.
- Layout responsivo, navegação por teclado e fontes hospedadas no próprio projeto.

## Tecnologias

React, Vite, CSS, Lucide React, ESLint e Prettier. O projeto é estático e não utiliza banco de dados.

## Executar localmente

Use Node.js 22.12 ou superior.

```bash
npm ci
npm run dev
```

## Verificações e build

```bash
npm run lint
npm run format:check
npm run build
npm run preview
```

O build é gerado em `dist/`.

## Estrutura

- `src/components/`: componentes da interface.
- `src/data/activities.json`: catálogo das atividades.
- `src/utils/activities.js`: filtros e informações das categorias.
- `public/arquivos/`: imagens originais dos documentos.

Para adicionar uma atividade, inclua a imagem em `public/arquivos/` e cadastre o registro no JSON. As categorias são `certificados`, `relatorios` e `eventos`.

As 22 imagens distintas do portfólio original estão preservadas em `public/arquivos/`. Os seis eventos sem emissão de certificado compartilham o registro visual utilizado no portfólio original, acessível em “Ver registro”.

## Deploy na Vercel

Importe este repositório, selecione o framework **Vite**, comando de build `npm run build` e diretório de saída `dist`. Não são necessárias variáveis de ambiente.
