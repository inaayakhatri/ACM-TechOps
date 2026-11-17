(() => {
  'use strict';
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const TBC = '<span class="tbc" title="Placeholder: awaiting approved content">Details to be confirmed</span>';
  const val = v => (v ? esc(v) : '');
  const pad = n => String(n + 1).padStart(2, '0');
  const safeUrl = u => (/^(https?:|mailto:|tel:)/i.test(u) ? u : null);
  const linkList = (arr, cls = 'links') => {
    const ok = (arr || []).filter(l => l && safeUrl(l.url));
    return ok.length ? `<div class="${cls}">${ok.map(l => `<a href="${esc(safeUrl(l.url))}" target="_blank" rel="noopener">${esc(l.label || 'Link')} ↗</a>`).join('')}</div>` : '';
  };
  const win = (title, body, extra = '') =>
    `<article class="win reveal ${extra}"><div class="tb"><span class="tt">${esc(title)}</span><span class="wb" aria-hidden="true"><i></i><i></i><i></i></span></div><div class="body">${body}</div></article>`;
  const field = (k, v) => (v ? `<div><dt>${k}</dt><dd>${v}</dd></div>` : '');
  const nosig = t => `<div class="shot" role="img" aria-label="${t} not available"><span>NO SIGNAL</span></div>`;

  /* ---------- Render content ---------- */
  $('#intro').textContent = S.intro;

  // Highlights
  const hl = (href, t, p, cls = '') =>
    `<a class="win hl reveal ${cls}" href="${href}"><div class="tb"><span class="tt">${t}</span><span class="wb" aria-hidden="true"><i></i><i></i><i></i></span></div><div class="body"><h3>${t}</h3><p>${p}</p></div></a>`;
  $('#highlights').innerHTML =
    hl('#projects', 'Projects', 'Technical work developed, maintained or supported for ACM FAST.') +
    hl('#events', 'Events', 'Activities and events supported by TechOps.');

  // About
  const a = S.about;
  $('#about-grid').innerHTML =
    win('MISSION.TXT', `<h3>Mission</h3><p>${val(a.mission)}</p>`) +
    win('SCOPE.TXT', `<h3>Scope</h3><p>${val(a.scope)}</p>`) +
    win('RESPONSIBILITIES.LOG', `<h3>Responsibilities</h3>${a.responsibilities.length ? `<ul>${a.responsibilities.map(r => `<li>${esc(r)}</li>`).join('')}</ul>` : `<p>${TBC}</p>`}`) +
    win('SUPPORT.SYS', `<h3>How TechOps supports the society</h3><p>${val(a.support)}</p>`);

  // Projects
  $('#proj-grid').innerHTML = S.projects.map((p, i) => {
    const shot = p.screenshot ? `<div class="shot"><img src="${esc(p.screenshot)}" alt="Screenshot of ${esc(p.name || 'project')}" loading="lazy"></div>` : nosig('SCREENSHOT');
    const tech = p.tech && p.tech.length ? `<div class="chips">${p.tech.map(t => `<span class="chip">${esc(t)}</span>`).join('')}</div>` : '';
    return `<div class="proj">${win(`PROJECT_${pad(i)}.EXE`, `${shot}<h3>${p.name ? esc(p.name) : `Project ${pad(i)} ${TBC}`}</h3>
      <dl class="fields">${field('Purpose', val(p.purpose))}${field('Date / Year', val(p.date))}${field('TechOps contribution', val(p.contribution))}${field('Technologies / tools', tech)}${field('Outcome', val(p.outcome))}</dl>${linkList(p.links)}`)}</div>`;
  }).join('');

  // Events
  $('#timeline').innerHTML = S.events.map((e, i) => {
    const poster = e.poster ? `<div class="shot"><img src="${esc(e.poster)}" alt="Poster for ${esc(e.name || 'event')}" loading="lazy"></div>` : nosig('POSTER');
    const by = e.by ? `<span class="tag ev-by ">${esc(e.by)}</span>` : '';
    return `<li>${win(`EVENT_${pad(i)}.LOG`, `<div class="ev-grid">${poster}<div><h3>${e.name ? esc(e.name) : `Event ${pad(i)} ${TBC}`}${by}</h3>
      <dl class="fields">${field('Date', val(e.date))}${field('About', val(e.description))}${field('Actual contribution', val(e.contribution))}</dl>${linkList(e.links)}</div></div>`)}</li>`;
  }).join('');

  // Team
  const svgFace = '<svg viewBox="0 0 16 16" aria-hidden="true" shape-rendering="crispEdges"><path d="M5 2h6v1h1v5h-1v1H5V8H4V3h1zM3 11h10v1h1v4H2v-4h1z"/></svg>';
  const card = (m, cls = '') => {
    const av = m.photo ? `<div class="avatar"><img src="${esc(m.photo)}" alt="Photo of ${esc(m.name || m.title)}" loading="lazy"></div>` : `<div class="avatar" role="img" aria-label="Photo placeholder">${svgFace}</div>`;
    return win(m.title, `${av}<h3>${esc(m.title)}</h3><p class="nm">${m.name ? esc(m.name) : TBC}</p><p class="dim" style="font-size:13px">${val(m.responsibilities || m.area)}</p>`, `person ${cls}`);
  };
  const T = S.team;
  const group = (title, list, cls = '', tag = '') => list.length ? `<h3 class="grp-t">${title}${tag}</h3><div class="people">${list.map(m => card(m, cls)).join('')}</div>` : '';
  $('#team-groups').innerHTML =
    group('▌ TechOps leadership', T.techops) +
    group('▌ Heads / domain leads', T.leads);

  // Stats
  $('#stats').innerHTML = S.stats.filter(s => s.value != null).map(s =>
    `<div class="win stat reveal"><div class="body"><b ${typeof s.value === 'number' ? `data-count="${s.value}"` : ''}>${esc(s.value)}</b><span>${esc(s.label)}</span></div></div>`).join('');
  const ach = list => list.length
    ? `<ul>${list.map(x => `<li><strong>${esc(x.title)}</strong>${x.detail ? ` — ${esc(x.detail)}` : ''}${x.context ? ` <span class="dim">(${esc(x.context)})</span>` : ''}</li>`).join('')}</ul>` : `<p>${TBC}</p>`;
  $('#ach-grid').innerHTML =
    win('TECHOPS_IMPACT.LOG', `<h3>TechOps outcomes</h3>${ach(S.achievements.techops)}`);

  // Contact
  const links = S.contact.links.filter(l => safeUrl(l.url));
  $('#contact-grid').innerHTML =
    win('LINKS.LST', `<h3>Official channels</h3><ul class="link-list">${S.contact.links.map(l => safeUrl(l.url)
      ? `<li><a href="${esc(safeUrl(l.url))}" target="_blank" rel="noopener"><span>${esc(l.label)}</span><span>↗</span></a></li>`
      : `<li><span class="off"><span>${esc(l.label)}</span><span>link to be confirmed</span></span></li>`).join('')}</ul>`) +
    win('JOIN_ACM.EXE', `<h3>Connect with ACM FAST</h3><p>Follow the chapter on its official channels to stay updated on competitions, technical initiatives and department activities, and to find out how to join.</p>${links.map(l => `<a class="btn" style="margin:0 10px 10px 0" href="${esc(safeUrl(l.url))}" target="_blank" rel="noopener">${esc(l.label.split(':')[0].replace(/ @.*/, ''))} ↗</a>`).join('')}`);

  /* ---------- Taskbar tasks, scrollspy ---------- */
  const secs = [['home', 'Home'], ['about', 'About'], ['projects', 'Projects'], ['events', 'Events'], ['team', 'Team'], ['achievements', 'Impact'], ['contact', 'Contact']];
  $('#tasks').innerHTML = secs.map(([id, t]) => `<a href="#${id}" data-sec="${id}">${t}</a>`).join('');
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) $$('[data-sec],.mb-nav a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  secs.forEach(([id]) => spy.observe($('#' + id)));

  /* ---------- Reveal + counters ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in'); io.unobserve(e.target);
    const n = $('[data-count]', e.target);
    if (n && !reduce) {
      const end = +n.dataset.count; let t0;
      const step = t => { t0 = t0 || t; const k = Math.min((t - t0) / 1200, 1); n.textContent = Math.round(end * k); if (k < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }
  }), { threshold: .12 });
  $$('.reveal').forEach(el => io.observe(el));

  /* ---------- Clock + uptime ---------- */
  setInterval(() => {
    $('#clock').textContent = new Date().toLocaleTimeString('en-GB');
  }, 1000);
  $('#clock').textContent = new Date().toLocaleTimeString('en-GB');

  /* ---------- Typewriter ---------- */
  const lines = ['Technical Operations.', 'Building for ACM FAST.', 'Supporting the society.'];
  const typed = $('#typed');
  if (reduce) typed.textContent = lines[0];
  else {
    let li = 0, ci = 0, del = false;
    const tick = () => {
      const w = lines[li];
      typed.textContent = w.slice(0, ci);
      if (!del && ci === w.length) { del = true; return setTimeout(tick, 1600); }
      if (del && ci === 0) { del = false; li = (li + 1) % lines.length; }
      ci += del ? -1 : 1;
      setTimeout(tick, del ? 25 : 60);
    };
    tick();
  }

  /* ---------- Start menu ---------- */
  const start = $('#start'), menu = $('#startmenu');
  const toggleMenu = open => { menu.hidden = !open; start.setAttribute('aria-expanded', open); };
  start.addEventListener('click', e => { e.stopPropagation(); toggleMenu(menu.hidden); });
  menu.addEventListener('click', e => { if (e.target.closest('a')) toggleMenu(false); });
  document.addEventListener('click', e => { if (!menu.hidden && !menu.contains(e.target)) toggleMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { toggleMenu(false); } });

  /* ---------- Code rain ---------- */
  const cv = $('#rain'), cx = cv.getContext('2d'); let color = "#4da3ff", cols = [], fs = 16, run = !reduce;
  function rainColor() { color = getComputedStyle(document.documentElement).getPropertyValue('--ph').trim() || color; }
  function size() { cv.width = innerWidth; cv.height = innerHeight; cols = Array.from({ length: Math.ceil(innerWidth / fs) }, () => Math.random() * -50); }
  const glyphs = '01ABCDEF{}<>/;=+*#$アイウエオカキクケコ'.split('');
  let last = 0;
  function rain(t) {
    requestAnimationFrame(rain);
    if (!run || t - last < 55) return; last = t;
    cx.fillStyle = 'rgba(0,0,0,.12)'; cx.fillRect(0, 0, cv.width, cv.height);
    cx.fillStyle = color; cx.font = fs + 'px monospace';
    cols.forEach((y, i) => {
      cx.fillText(glyphs[Math.random() * glyphs.length | 0], i * fs, y * fs);
      cols[i] = y * fs > cv.height && Math.random() > .975 ? 0 : y + 1;
    });
  }
  if (!reduce) { size(); addEventListener('resize', size); document.addEventListener('visibilitychange', () => { run = !document.hidden; }); rainColor(); requestAnimationFrame(rain); }

  /* ---------- Boot sequence ---------- */
  const boot = $('#boot');
  const seen = (() => { try { return sessionStorage.getItem('acm-booted'); } catch (e) { return null; } })();
  if (reduce || seen) { boot.remove(); }
  else {
    boot.hidden = false;
    const log = $('#bootlog'), fill = $('#bootfill');
    const L = ['ACM-OS BIOS v26.11  (c) ACM FAST', 'CPU ........................ OK', 'MEMORY CHECK .............. 65536K OK', 'Mounting /techops ......... OK', 'Loading modules: about projects events team impact', 'Initialising CRT display .. OK', '', 'WELCOME TO TECHOPS_'];
    let i = 0, done = false;
    const finish = () => { if (done) return; done = true; try { sessionStorage.setItem('acm-booted', 1); } catch (e) {} boot.classList.add('out'); setTimeout(() => boot.remove(), 600); };
    const next = () => { if (done) return; if (i < L.length) { log.textContent += L[i++] + '\n'; fill.style.width = (i / L.length * 100) + '%'; setTimeout(next, 170); } else setTimeout(finish, 350); };
    next();
    $('#bootskip').addEventListener('click', finish);
    addEventListener('keydown', finish, { once: true });
    boot.addEventListener('click', finish);
  }
})();
