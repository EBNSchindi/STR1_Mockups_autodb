// Lightweight UC Tour engine

const qs = new URLSearchParams(location.search);
const conf = Object.assign({
  backHref: '/index.html',
  md: '',
  delay: 3500,
  loop: false
}, window.UC_TOUR_OPTS || {});

// URL parameter overrides
const mdUrl = qs.get('md') || conf.md;
const backHref = qs.get('back') || conf.backHref;
let autoplay = qs.get('autoplay') === '1';
let step = Number(qs.get('step') ?? '1');

const state = { meta: null, steps: [], current: isNaN(step) ? 1 : step, playing: autoplay, timer: null };

// DOM helpers
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; };
const rectOf = (node) => node.getBoundingClientRect();

function updateUrl() {
  const p = new URL(location.href);
  p.searchParams.set('step', String(state.current));
  history.replaceState({}, '', p);
}

function showToast(msg) {
  const t = el('div', 'uc-toast', msg);
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2500);
}

function parseUcBlock(md) {
  const m = md.match(/```uc\s*([\s\S]*?)```/);
  if (!m) return null;
  try { return JSON.parse(m[1]); } catch { return null; }
}

function fallbackMeta(md) {
  // title from first H1
  const titleLine = md.split('\n').find(l => l.trim().startsWith('# ')) || '';
  const title = titleLine.replace(/^#\s+/, '').trim() || 'Use Case';
  // problem from **Problem:** line
  const probMatch = md.match(/\*\*Problem:\*\*\s*(.+)/);
  const problem = probMatch ? probMatch[1].trim() : 'Problem description not found in markdown.';
  // core from **Solution:** line
  const coreMatch = md.match(/\*\*Solution:\*\*\s*(.+)/);
  const core = coreMatch ? coreMatch[1].trim() : 'Core information not found in markdown.';
  // sensible defaults for UC1 selectors
  const defaults = [
    { selector: '#quick-actions', title: 'Quick Actions', text: 'One-click theme configuration.', effect: 'box' },
    { selector: '#theme-preview', title: 'Live Preview', text: 'See changes before applying.', effect: 'zoom' },
    { selector: '#manual-steps', title: 'Manual Steps', text: 'Fallback instructions available.', effect: 'box' }
  ];
  return { title, problem, core, highlights: defaults };
}

function buildSteps(meta) {
  const steps = [];
  // 0 is banner (persist), we start rendering from 1
  steps.push({ kind: 'banner', title: meta.title });
  steps.push({ kind: 'center', title: 'Problem', text: meta.problem, bullets: meta.problem_bullets });
  steps.push({ kind: 'center', title: 'Core', text: meta.core, bullets: meta.core_bullets });
  for (const h of (meta.highlights || [])) steps.push({ kind: 'highlight', ...h });
  // explicit terminal step without overlays
  steps.push({ kind: 'end' });
  return steps;
}

// Render banner once
function renderBanner(title) {
  let node = document.querySelector('.uc-tour-banner');
  if (!node) {
    node = el('div', 'uc-tour-banner');
    node.innerHTML = `<span class="uc-title">${title}</span>`;
    document.body.appendChild(node);
  } else {
    node.querySelector('.uc-title').textContent = title;
  }
}

// Clear step overlays/effects (not the banner/controls)
function clearStep() {
  document.querySelectorAll('.uc-tour-overlay, .uc-tour-tip, .uc-spotlight-box, .uc-spotlight-ring, .uc-spotlight-tip')
    .forEach(n => n.remove());
  document.querySelectorAll('.uc-zoom-target').forEach(n => n.classList.remove('uc-zoom-target'));
}

function ensureControls() {
  let c = document.querySelector('.uc-tour-controls');
  if (c) return c;
  c = el('div', 'uc-tour-controls');
  const prev = el('button', 'uc-btn', '← Back');
  const next = el('button', 'uc-btn primary', 'Next →');
  const auto = el('button', 'uc-btn', state.playing ? '⏸ Auto' : '⏵ Auto');
  const stepInd = el('span', 'uc-step-indicator', '');
  const back = el('a', 'uc-back-link', 'Back to Landing Page'); back.href = backHref;
  c.append(prev, next, auto, stepInd, back);
  document.body.appendChild(c);
  prev.addEventListener('click', prevStep);
  next.addEventListener('click', nextStep);
  auto.addEventListener('click', toggleAuto);
  updateControls();
  return c;
}

function updateControls() {
  const total = state.steps.length - 1; // excluding banner index 0 from count
  const idx = Math.max(0, state.current);
  const ind = document.querySelector('.uc-step-indicator');
  if (ind) ind.textContent = `Step ${Math.max(0, idx)} / ${total}`;
  const auto = document.querySelector('.uc-tour-controls .uc-btn:nth-child(3)');
  if (auto) auto.textContent = state.playing ? '⏸ Auto' : '⏵ Auto';
}

function centerTip(title, text, bullets) {
  const tip = el('div', 'uc-tour-tip center');
  const list = Array.isArray(bullets) && bullets.length
    ? `<ul class="uc-list">${bullets.map(i => `<li>${i}</li>`).join('')}</ul>`
    : '';
  tip.innerHTML = `<div class="uc-tip-title">${title}</div><div class="uc-tip-text">${text}</div>${list}`;
  document.body.appendChild(el('div', 'uc-tour-overlay'));
  document.body.appendChild(tip);
}

function highlightStep({ selector, title, text, effect }) {
  const target = document.querySelector(selector);
  if (!target) { showToast(`Element not found: ${selector}`); return false; }
  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  const r = rectOf(target);
  if (effect === 'zoom') {
    target.classList.add('uc-zoom-target');
    target.style.transformOrigin = 'center center';
    target.style.transform = 'scale(1.12)';
    setTimeout(() => { target.style.transform = ''; }, Math.min(conf.delay, 1800));
  }
  // spotlight box
  const box = el('div', 'uc-spotlight-box');
  Object.assign(box.style, { top: `${Math.max(4, r.top - 6)}px`, left: `${Math.max(4, r.left - 6)}px`, width: `${r.width + 12}px`, height: `${r.height + 12}px` });
  document.body.appendChild(box);
  // tip to the right by default
  const tip = el('div', 'uc-tour-tip');
  tip.innerHTML = `<div class="uc-tip-title">${title || ''}</div><div class="uc-tip-text">${text || ''}</div>`;
  // UI element tips use the smaller base width
  const tLeft = Math.min(window.innerWidth - 560 - 12, r.right + 12);
  const tTop = Math.max(12, r.top);
  Object.assign(tip.style, { left: `${tLeft}px`, top: `${tTop}px` });
  document.body.appendChild(tip);
  // ring is applied via CSS directly on the tip (outline + shadow)
  return true;
}

function renderStep() {
  clearStep();
  updateControls();
  const s = state.steps[state.current];
  if (!s) return;
  // Only suppress overlays on explicit 'end' step
  if (s.kind === 'end') return;
  if (s.kind === 'center') centerTip(s.title, s.text, s.bullets);
  if (s.kind === 'highlight') {
    const ok = highlightStep(s);
    if (!ok) nextStep();
  }
}

function nextStep() {
  if (state.current < state.steps.length - 1) {
    state.current += 1;
  } else if (conf.loop) {
    state.current = 1;
  }
  updateUrl();
  renderStep();
}

function prevStep() {
  if (state.current > 1) state.current -= 1; else state.current = 1;
  updateUrl();
  renderStep();
}

function toggleAuto() {
  state.playing = !state.playing;
  updateControls();
  if (state.playing) schedule(); else clearTimeout(state.timer);
}

function schedule() {
  clearTimeout(state.timer);
  state.timer = setTimeout(() => {
    // stop at last step unless loop enabled
    if (state.current >= state.steps.length - 1 && !conf.loop) { state.playing = false; updateControls(); return; }
    nextStep(); schedule();
  }, conf.delay);
}

function onKey(e) {
  if (e.key === 'ArrowRight' || e.key === 'Enter') { e.preventDefault(); nextStep(); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); prevStep(); }
  if (e.key === ' ') { e.preventDefault(); toggleAuto(); }
  if (e.key === 'Escape') { e.preventDefault(); clearStep(); state.playing = false; updateControls(); }
}

function readInlineMeta() {
  // Prefer explicit JSON script block
  const jsonNode = document.getElementById('uc-meta');
  if (jsonNode) {
    try { return JSON.parse(jsonNode.textContent); } catch { /* ignore */ }
  }
  // Or a raw markdown script with ```uc block
  const mdNode = document.getElementById('uc-md');
  if (mdNode) {
    const meta = parseUcBlock(mdNode.textContent || '')
      || fallbackMeta(mdNode.textContent || '');
    return meta;
  }
  // Last resort: derive from document
  const title = (document.title || 'Use Case').split('·')[0].trim();
  return {
    title,
    problem: 'Problem not provided (inline).',
    core: 'Core information not provided (inline).',
    highlights: [
      { selector: '#quick-actions', title: 'Quick Actions', text: 'Fast actions for this use case.', effect: 'box' },
      { selector: '#theme-preview', title: 'Preview', text: 'Live preview of changes.', effect: 'zoom' },
      { selector: '#manual-steps', title: 'Manual Steps', text: 'Fallback instructions.', effect: 'box' }
    ]
  };
}

async function loadMeta() {
  // If no md URL or file protocol (no-fetch), use inline meta
  if (!mdUrl || location.protocol === 'file:') {
    return readInlineMeta();
  }
  try {
    const res = await fetch(mdUrl, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const md = await res.text();
    return parseUcBlock(md) || fallbackMeta(md);
  } catch (e) {
    // Fallback to inline
    console.warn('Falling back to inline meta:', e);
    return readInlineMeta();
  }
}

async function main() {
  const meta = await loadMeta();
  state.meta = meta;
  state.steps = buildSteps(meta);
  renderBanner(meta.title || 'Use Case');
  ensureControls();
  if (state.current === 0) { updateControls(); } else { renderStep(); }
  if (state.playing && state.current !== 0) schedule();
  window.addEventListener('keydown', onKey);
}

main();
