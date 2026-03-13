/* ═══════════════════════════════════════════════════════
   PORTFOLIO – script.js
   Author: Arman Khan
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ── 1. Theme Toggle ─────────────────────────────────── */
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');
const html        = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

/* ── 2. Navbar Scroll & Active Links ─────────────────── */
const navbar  = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // scrolled class for shadow
  navbar.classList.toggle('scrolled', window.scrollY > 20);

  // active nav link
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}, { passive: true });

/* ── 3. Hamburger Menu ───────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksEl.classList.toggle('open');
  document.body.style.overflow = navLinksEl.classList.contains('open') ? 'hidden' : '';
});

// Close on nav link click
navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksEl.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── 4. Typed Text Effect ────────────────────────────── */
const roles   = [
  'Developer',
  'Cybersecurity Enthusiast',
  'Problem Solver',
  'CSE Student',
  'Open Source Fan',
];
const typedEl = document.getElementById('typedText');
let   rIdx    = 0, cIdx = 0, isDeleting = false, typingTimer;

function type() {
  const word    = roles[rIdx];
  const display = isDeleting ? word.slice(0, cIdx - 1) : word.slice(0, cIdx + 1);
  typedEl.textContent = display;

  if (!isDeleting) cIdx++;
  else             cIdx--;

  let speed = isDeleting ? 60 : 110;

  if (!isDeleting && cIdx === word.length) {
    speed = 1800;          // pause at end
    isDeleting = true;
  } else if (isDeleting && cIdx === 0) {
    isDeleting = false;
    rIdx = (rIdx + 1) % roles.length;
    speed = 400;
  }

  typingTimer = setTimeout(type, speed);
}

type();

/* ── 5. Scroll-triggered AOS ─────────────────────────── */
const aosEls = document.querySelectorAll('[data-aos]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.aosDelay || 0);
      setTimeout(() => {
        entry.target.classList.add('aos-animate');
        // trigger skill bars when visible
        entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

aosEls.forEach(el => observer.observe(el));

// Also observe skill bars independently (they're nested)
document.querySelectorAll('.skill-bars').forEach(el => {
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          setTimeout(() => {
            bar.style.width = bar.dataset.width + '%';
          }, 200);
        });
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  barObserver.observe(el);
});

/* ── 6. Contact Form ─────────────────────────────────── */
const form        = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name    = document.getElementById('contactName').value.trim();
  const email   = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();

  if (!name || !email || !message) {
    shakeBtn();
    return;
  }
  if (!isValidEmail(email)) {
    shakeBtn();
    return;
  }

  // Simulate send
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';

  setTimeout(() => {
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    formSuccess.classList.add('show');
    setTimeout(() => formSuccess.classList.remove('show'), 5000);
  }, 1800);
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function shakeBtn() {
  submitBtn.style.animation = 'none';
  submitBtn.offsetHeight; // reflow
  submitBtn.style.animation = 'shake 0.4s ease';
  setTimeout(() => { submitBtn.style.animation = ''; }, 400);
}

/* ── 7. Download CV button (placeholder) ────────────────*/
document.getElementById('downloadBtn').addEventListener('click', (e) => {
  e.preventDefault();
  alert('📄 Please replace the href with your actual CV PDF link to enable download!');
});

/* ── 8. Back to Top ──────────────────────────────────── */
document.getElementById('backToTop').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── 9. Smooth scroll for all internal links ─────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ── 10. Cursor particle effect (desktop only) ───────── */
if (window.matchMedia('(pointer:fine)').matches) {
  const canvas  = document.createElement('canvas');
  const ctx     = canvas.getContext('2d');
  canvas.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:9999;opacity:0.45;';
  document.body.appendChild(canvas);

  let W = window.innerWidth, H = window.innerHeight;
  canvas.width = W; canvas.height = H;
  window.addEventListener('resize', () => {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });

  const particles = [];
  const MAX = 30;

  document.addEventListener('mousemove', (e) => {
    i = 0;
    while (i++ < 2) {
      particles.push({
        x: e.clientX, y: e.clientY,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 1,
        r: Math.random() * 3 + 1,
        hue: Math.random() > 0.5 ? 250 : 160,
      });
    }
    if (particles.length > MAX) particles.splice(0, particles.length - MAX);
  });

  let i = 0;
  function animateParticles() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p, idx) => {
      p.x  += p.vx;
      p.y  += p.vy;
      p.vy += 0.04;
      p.life -= 0.025;
      if (p.life <= 0) { particles.splice(idx, 1); return; }
      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.fillStyle = `hsl(${p.hue},80%,65%)`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
}

/* ── 11. Shake keyframe (injected) ───────────────────── */
{
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%,100% { transform: translateX(0); }
      20%      { transform: translateX(-8px); }
      40%      { transform: translateX(8px); }
      60%      { transform: translateX(-5px); }
      80%      { transform: translateX(5px); }
    }
  `;
  document.head.appendChild(style);
}
