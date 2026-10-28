/* Website functionality. You don't need to edit this file to add projects. */
(() => {
  'use strict';
  const data = window.PORTFOLIO;
  if (!data) return;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const esc = (input) => String(input ?? '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  const safeUrl = (input) => {
    const url = String(input || '').trim();
    if (!url || /^javascript:/i.test(url) || /^data:/i.test(url)) return '';
    return url;
  };
  const tagHtml = tags => (tags || []).map(tag => `<span class="tag">${esc(tag)}</span>`).join('');
  const projectLink = p => `project.html?id=${encodeURIComponent(p.id)}`;
  const imageHtml = (p, large = false) => {
    const src = safeUrl(p.image);
    return `<div class="project-media media-${esc(p.visual || 'future')} ${large ? 'project-media-large' : ''}">
      <div class="media-geometry" aria-hidden="true"><span class="geometry-circle"></span><span class="geometry-line"></span><span class="geometry-line two"></span></div>
      ${src ? `<img src="${esc(src)}" alt="Photo of ${esc(p.title)}" loading="${large ? 'eager' : 'lazy'}" onerror="this.style.display='none'">` : ''}
      <span class="media-number">${esc(p.number)}</span><span class="media-label">${esc(p.category).toUpperCase()} / ${esc(p.year)}</span>
    </div>`;
  };
  const cardHtml = p => `<a class="project-card" href="${projectLink(p)}" aria-label="Read about ${esc(p.title)}">
    ${imageHtml(p)}
    <div class="project-card-body"><div class="project-meta"><span>${esc(p.category)}</span><span>${esc(p.type)}</span></div>
    <div class="project-card-head"><h3>${esc(p.title)}</h3><span class="round-arrow" aria-hidden="true">↗</span></div>
    <p>${esc(p.summary)}</p><div class="tags">${tagHtml(p.tags)}</div></div>
  </a>`;

  $$('[data-name]').forEach(el => el.textContent = data.name);
  $$('[data-initials]').forEach(el => el.textContent = data.initials);
  $$('[data-eyebrow]').forEach(el => el.textContent = data.eyebrow);
  $('#copyright').textContent = `© ${new Date().getFullYear()} ${data.name}`;

  if (document.body.dataset.page === 'home') {
    $('[data-headline]').textContent = data.headline;
    $('[data-intro]').textContent = data.intro;
    $('[data-about]').textContent = data.about;
    $('#focus-areas').innerHTML = (data.focusAreas || []).map((t, i) => `<span><b>${String(i+1).padStart(2, '0')}</b> ${esc(t)}</span>`).join('');

    const categories = ['All', ...new Set(data.projects.map(p => p.category))];
    const filters = $('#filters');
    filters.innerHTML = categories.map(c => `<button class="filter ${c === 'All' ? 'active' : ''}" data-filter="${esc(c)}" aria-pressed="${c === 'All'}">${c === 'All' ? 'All projects' : esc(c)}</button>`).join('');
    const render = c => {
      const projects = c === 'All' ? data.projects : data.projects.filter(p => p.category === c);
      $('#project-grid').innerHTML = projects.map(cardHtml).join('') || '<p>No projects in this category yet.</p>';
      $('#project-count').textContent = `${String(projects.length).padStart(2, '0')} PROJECTS`;
      $$('.filter', filters).forEach(b => { const selected = b.dataset.filter === c; b.classList.toggle('active', selected); b.setAttribute('aria-pressed', String(selected)); });
    };
    filters.addEventListener('click', e => { const b = e.target.closest('button[data-filter]'); if (b) render(b.dataset.filter); });
    render('All');

    const links = [];
    if (data.email) links.push(`<a class="button button-primary" href="mailto:${esc(data.email)}">Send an email <span aria-hidden="true">↗</span></a>`);
    if (data.linkedin) links.push(`<a class="button button-outline" href="${esc(safeUrl(data.linkedin))}" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>`);
    if (data.github) links.push(`<a class="button button-outline" href="${esc(safeUrl(data.github))}" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>`);
    if (data.resume) links.push(`<a class="button button-outline" href="${esc(safeUrl(data.resume))}" target="_blank" rel="noopener noreferrer">Download résumé <span aria-hidden="true">↗</span></a>`);
    if (links.length) $('#contact-actions').innerHTML = links.join('');
    document.title = `${data.name} | Engineering Portfolio`;
  }

  if (document.body.dataset.page === 'project') {
    const id = new URLSearchParams(location.search).get('id');
    const project = data.projects.find(p => p.id === id);
    if (!project) {
      $('#project-detail').innerHTML = `<div class="container not-found"><p class="section-kicker">PROJECT NOT FOUND</p><h1>Nothing here — yet.</h1><p>This project may have moved. Head back to explore the current collection.</p><a class="button button-primary" href="./#projects">Back to projects ↗</a></div>`;
      return;
    }
    document.title = `${project.title} | ${data.name}`;
    const sections = (project.sections || []).map((s, i) => `<section class="detail-section"><span class="detail-index">${String(i+1).padStart(2, '0')}</span><div><h2>${esc(s.heading)}</h2><p>${esc(s.text)}</p></div></section>`).join('');
    const nextIndex = (data.projects.findIndex(p => p.id === project.id) + 1) % data.projects.length;
    const next = data.projects[nextIndex];
    $('#project-detail').innerHTML = `
      <section class="detail-top section"><div class="container"><a class="back-link" href="./#projects">← Back to all projects</a>
        <div class="detail-kicker"><span>${esc(project.category).toUpperCase()} / ${esc(project.year)}</span><span>${esc(project.type)}</span></div>
        <h1>${esc(project.title)}</h1><p class="detail-subtitle">${esc(project.summary)}</p>
        <div class="tags detail-tags">${tagHtml(project.tags)}</div>
        ${imageHtml(project, true)}
      </div></section>
      <section class="detail-content section"><div class="container detail-layout"><aside class="detail-aside"><div class="aside-label">PROJECT AT A GLANCE</div><dl><dt>Category</dt><dd>${esc(project.category)}</dd><dt>Status</dt><dd>${esc(project.status)}</dd><dt>Year</dt><dd>${esc(project.year)}</dd></dl></aside>
        <div class="detail-main"><div class="overview"><p class="section-kicker">PROJECT OVERVIEW</p><p>${esc(project.overview)}</p></div>
        <div class="detail-role"><h2>My involvement</h2><p>${esc(project.role)}</p></div>${sections}
        </div></div></section>
      <section class="next-project section"><div class="container"><p class="section-kicker">CONTINUE EXPLORING</p><a href="${projectLink(next)}"><span>Next project</span><strong>${esc(next.title)}</strong><span class="next-arrow" aria-hidden="true">↗</span></a></div></section>`;
  }
})();
