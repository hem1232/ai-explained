// ============================================================
// AI, Explained — shared site behavior
// Plain JS, no build step, no framework.
// ============================================================

const SITE_ROOT = window.SITE_ROOT || ''; // set per-page depth, e.g. '../'

const NAV_LINKS = [
  { label: 'Tracks', href: 'tracks.html' },
  { label: 'Foundations', href: 'concepts/what-is-ai.html' },
  { label: 'Deep Learning', href: 'concepts/neural-networks.html' },
  { label: 'LLMs & NLP', href: 'concepts/transformers.html' },
];

function renderHeader() {
  const mount = document.getElementById('site-header');
  if (!mount) return;
  const links = NAV_LINKS.map(
    (l) => `<li><a href="${SITE_ROOT}${l.href}">${l.label}</a></li>`
  ).join('');
  mount.innerHTML = `
    <div class="wrap">
      <a class="brand" href="${SITE_ROOT}index.html">AI<span class="dot">·</span>Explained</a>
      <nav>
        <ul class="nav-links">${links}</ul>
      </nav>
      <button class="nav-toggle" aria-label="Menu">☰</button>
    </div>`;
}

function renderFooter() {
  const mount = document.getElementById('site-footer');
  if (!mount) return;
  mount.innerHTML = `
    <div class="wrap">
      <span>AI, Explained — built one concept at a time.</span>
      <span>Foundations · Deep Learning · NLP & LLMs · Generative AI · Ethics · Future</span>
    </div>`;
}

// ---------- interactive diagram tooltip helper ----------
// Usage inside a page: wire up elements with [data-tip] to a
// .diagram-tooltip element with id="diagram-tooltip"
function wireDiagramTooltips() {
  const tip = document.getElementById('diagram-tooltip');
  if (!tip) return;
  document.querySelectorAll('[data-tip]').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      tip.innerHTML = el.getAttribute('data-tip');
    });
    el.addEventListener('click', () => {
      tip.innerHTML = el.getAttribute('data-tip');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  wireDiagramTooltips();
});
