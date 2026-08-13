// ── State ──────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'sprint18_v1';
const LINKS_KEY = 'sprint18_links_v1';
const TOTAL = DAYS.reduce((a, d) => a + d.tasks.length, 0);

let state = DAYS.map(d => d.tasks.map(() => false));
let active = 0;
let dayLinks = {};

// ── Persistence: progress ─────────────────────────────────────────────────
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ state, active }));
    const note = document.getElementById('save-note');
    note.textContent = 'Saved ✓';
    setTimeout(() => { note.textContent = 'Progress saves to localStorage'; }, 1500);
  } catch (e) {
    console.warn('Could not save to localStorage:', e);
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved.state && saved.state.length === DAYS.length) {
      state = saved.state.map((arr, i) =>
        arr.length === DAYS[i].tasks.length ? arr : DAYS[i].tasks.map(() => false)
      );
    }
    if (typeof saved.active === 'number' && saved.active < DAYS.length) {
      active = saved.active;
    }
  } catch (e) {
    console.warn('Could not load from localStorage:', e);
  }
}

// ── Persistence: GitHub links per day ─────────────────────────────────────
function loadLinks() {
  try {
    dayLinks = JSON.parse(localStorage.getItem(LINKS_KEY)) || {};
  } catch (e) {
    dayLinks = {};
  }
}

function saveLinks() {
  try {
    localStorage.setItem(LINKS_KEY, JSON.stringify(dayLinks));
  } catch (e) {
    console.warn('Could not save links:', e);
  }
}

// ── URL normalization ───────────────────────────────────────────────────
// Ensures a URL has a protocol. Without one, browsers treat it as a
// relative path (e.g. "github.com/x" -> "http://127.0.0.1:5500/github.com/x")
// instead of an absolute external link.
function normalizeUrl(url) {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

// ── Helpers ────────────────────────────────────────────────────────────────
function dayStatus(i) {
  const done = state[i].filter(Boolean).length;
  if (done === 0) return '';
  if (done === state[i].length) return 'done';
  return 'partial';
}

// ── Render: Day grid ───────────────────────────────────────────────────────
function renderGrid() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  DAYS.forEach((d, i) => {
    const cell = document.createElement('div');
    const status = dayStatus(i);
    cell.className = 'cell' + (status ? ' ' + status : '') + (i === active ? ' active' : '');
    cell.textContent = i + 1;
    cell.title = `Day ${i + 1}: ${d.t}`;
    cell.addEventListener('click', () => { active = i; render(); saveState(); });
    grid.appendChild(cell);
  });
}

// ── Render: Stats ──────────────────────────────────────────────────────────
function renderStats() {
  const done = state.flat().filter(Boolean).length;
  const daysDone = DAYS.filter((_, i) => state[i].every(Boolean)).length;
  const pct = Math.round(done / TOTAL * 100);

  document.getElementById('s-done').innerHTML = `${done} <span>/ ${TOTAL}</span>`;
  document.getElementById('s-pct').innerHTML = `${pct}<span>%</span>`;
  document.getElementById('s-days').innerHTML = `${daysDone} <span>/ 18</span>`;
  document.getElementById('prog').style.width = pct + '%';
}

// ── Render: Panel ──────────────────────────────────────────────────────────
function renderPanel() {
  const d = DAYS[active];
  const doneCnt = state[active].filter(Boolean).length;
  const tot = d.tasks.length;
  const pct = Math.round(doneCnt / tot * 100);
  const allDone = state[active].every(Boolean);

  document.getElementById('p-num').textContent = `Day ${active + 1} of 18`;
  document.getElementById('p-title').textContent = d.t;
  document.getElementById('p-count').textContent = `${doneCnt} / ${tot} done`;
  document.getElementById('p-bar').style.width = pct + '%';

  const badge = document.getElementById('p-badge');
  badge.textContent = `Tier ${d.tier}`;
  badge.className = `badge t${d.tier}`;

  // GitHub link for this day
  const linkEl = document.getElementById('p-link');
  const linkBtn = document.getElementById('p-link-edit');
  const existingLink = dayLinks[active];

  if (existingLink) {
    linkEl.href = existingLink;
    linkEl.style.display = 'inline';
    linkBtn.textContent = 'Edit link';
  } else {
    linkEl.style.display = 'none';
    linkBtn.textContent = '+ Add link';
  }

  linkBtn.onclick = () => {
    const raw = prompt('Paste GitHub link for this day:', existingLink || '');
    if (raw !== null) {
      const url = raw.trim();
      if (url === '') {
        delete dayLinks[active];
      } else {
        dayLinks[active] = normalizeUrl(url);
      }
      saveLinks();
      renderPanel();
    }
  };

  const btnAll = document.getElementById('btn-all');
  btnAll.textContent = allDone ? 'Unmark all' : 'Mark all complete';

  // Tasks
  const wrap = document.getElementById('p-tasks');
  wrap.innerHTML = '';
  d.tasks.forEach((txt, ti) => {
    const checked = state[active][ti];
    const row = document.createElement('div');
    row.className = 'task' + (checked ? ' done-t' : '');

    const chk = document.createElement('div');
    chk.className = 'chk' + (checked ? ' on' : '');
    chk.textContent = checked ? '✓' : '';

    const label = document.createElement('div');
    label.className = 'task-txt';
    label.textContent = txt;

    row.appendChild(chk);
    row.appendChild(label);

    row.addEventListener('click', () => {
      state[active][ti] = !state[active][ti];
      render();
      saveState();
    });

    wrap.appendChild(row);
  });

  document.getElementById('prev').disabled = active === 0;
  document.getElementById('next').disabled = active === DAYS.length - 1;
}

// ── Master render ──────────────────────────────────────────────────────────
function render() {
  renderGrid();
  renderStats();
  renderPanel();
}

// ── Event listeners ────────────────────────────────────────────────────────
document.getElementById('btn-all').addEventListener('click', () => {
  const allDone = state[active].every(Boolean);
  state[active] = state[active].map(() => !allDone);
  render();
  saveState();
});

document.getElementById('prev').addEventListener('click', () => {
  if (active > 0) { active--; render(); saveState(); }
});

document.getElementById('next').addEventListener('click', () => {
  if (active < DAYS.length - 1) { active++; render(); saveState(); }
});

document.getElementById('reset-btn').addEventListener('click', () => {
  if (confirm('Reset all progress? This cannot be undone.')) {
    state = DAYS.map(d => d.tasks.map(() => false));
    active = 0;
    render();
    saveState();
  }
});

// ── Keyboard navigation ────────────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && active > 0) {
    active--; render(); saveState();
  } else if (e.key === 'ArrowRight' && active < DAYS.length - 1) {
    active++; render(); saveState();
  }
});

// ── Init ───────────────────────────────────────────────────────────────────
loadLinks();
loadState();
render();