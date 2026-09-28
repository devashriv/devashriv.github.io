const SECTION_ORDER = ['featured', 'code', 'things'];

const renderBookshelf = async () => {
  const target = document.getElementById('bookshelf-list');
  if (!target) {
    return;
  }

  try {
    const response = await fetch('content/bookshelf.json');
    if (!response.ok) {
      throw new Error('Unable to load bookshelf data');
    }

    const books = await response.json();
    target.innerHTML = books
      .map(
        (book) => `
          <div class="book-item">
            <img class="book-cover" src="${book.thumbnail}" alt="${book.title}" />
            <div class="book-meta">
              <div class="book-title">${book.title}</div>
              <div class="book-author">${book.author}</div>
            </div>
          </div>
        `
      )
      .join('');
  } catch (error) {
    target.innerHTML = '<p class="collapse-message">Bookshelf data is unavailable right now.</p>';
  }
};

const isExternalLink = (href) => /^https?:\/\//.test(href);

const renderProjectLink = (link) => {
  const target = isExternalLink(link.href) ? '_blank' : '_self';

  return `
    <a
      class="card-link"
      href="${link.href}"
      target="${target}"
      rel="noreferrer"
    >
      ${link.label}
    </a>
  `;
};

const renderProjectCard = (project) => {
  const links = (project.links || []).map(renderProjectLink).join('');

  return `
    <article class="card project-card">
      <img class="card-img-top" src="${project.image}" alt="${project.title}" />
      <div class="card-body">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>
        <div class="card-links">
          ${links}
        </div>
      </div>
    </article>
  `;
};

const renderPortfolioSections = () => {
  const content = window.portfolioContent || {};

  SECTION_ORDER.forEach((key) => {
    const target = document.getElementById(`${key}-grid`);
    if (!target || !content[key]) {
      return;
    }

    target.innerHTML = content[key].map(renderProjectCard).join('');
  });
};

const getCurrentSectionId = () => {
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const scrollPosition = window.scrollY + 140;
  let currentSectionId = '#featured';

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPosition) {
      currentSectionId = `#${section.id}`;
    }
  });

  return { navLinks, currentSectionId };
};

const applyActiveNavigationState = () => {
  const { navLinks, currentSectionId } = getCurrentSectionId();

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === currentSectionId;
    link.classList.toggle('active', isActive);
    link.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
};

const initPortfolioPage = async () => {
  renderPortfolioSections();
  await renderBookshelf();
  applyActiveNavigationState();
  window.addEventListener('scroll', applyActiveNavigationState, { passive: true });
};

document.addEventListener('DOMContentLoaded', initPortfolioPage);
