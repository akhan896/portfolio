/* ═══════════════════════════════════════════════════════
   PORTFOLIO — script.js  (Full redesign + bird cursor)
   Author: Arman Khan
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════════════════════
   1. STARFIELD CANVAS
   ══════════════════════════════════════════════════════ */
(function initStarfield() {
  const canvas = document.getElementById('starfield');
  const ctx    = canvas.getContext('2d');
  let W, H, stars = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function makeStar() {
    return {
      x:    Math.random() * W,
      y:    Math.random() * H,
      r:    Math.random() * 1.4 + 0.2,
      o:    Math.random(),
      spd:  Math.random() * 0.4 + 0.05,
      dir:  Math.random() * Math.PI * 2,
    };
  }

  function initStars() {
    stars = Array.from({ length: 180 }, makeStar);
  }

  function drawStars(t) {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      s.x += Math.cos(s.dir) * s.spd;
      s.y += Math.sin(s.dir) * s.spd;
      s.o  = 0.3 + 0.5 * Math.abs(Math.sin(t * 0.001 + s.dir));
      if (s.x < 0 || s.x > W || s.y < 0 || s.y > H) Object.assign(s, makeStar(), { x: Math.random() * W, y: Math.random() * H });
      ctx.save();
      ctx.globalAlpha = s.o;
      ctx.fillStyle   = '#b0b0ff';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    requestAnimationFrame(drawStars);
  }

  window.addEventListener('resize', () => { resize(); initStars(); }, { passive: true });
  resize(); initStars(); requestAnimationFrame(drawStars);
})();

/* ══════════════════════════════════════════════════════
   2. BIRD FLOATING & CHASING CURSOR
   ══════════════════════════════════════════════════════ */
(function initBird() {
  const wrap   = document.getElementById('bird-wrap');
  const svg    = document.getElementById('bird-svg');
  const shadow = document.getElementById('bird-shadow');

  if (!wrap || !svg) return;

  // Bird physics state
  let bx = window.innerWidth  / 2;
  let by = window.innerHeight / 2;
  let tx = bx, ty = by;       // target (mouse)
  let vx = 0,  vy = 0;        // velocity
  let flap = false;
  let time = 0;
  let scrollDelta = 0;
  let isScrolling = false;
  let scrollTimeout;

  // Mouse tracking
  window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });

  // Scroll excitement
  window.addEventListener('scroll', () => {
    scrollDelta += 8;
    isScrolling = true;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => { isScrolling = false; }, 600);
  }, { passive: true });

  // Wing flap oscillator
  setInterval(() => {
    flap = !flap;
    svg.classList.toggle('wing-up',   flap);
    svg.classList.toggle('wing-down', !flap);
  }, 170);

  function update() {
    time += 0.05;

    // Calculate distance to target (mouse)
    const dx = tx - bx;
    const dy = ty - by;
    const dist = Math.hypot(dx, dy);
    
    // Create an offset target so it stays a bit far from the cursor
    // The bird will aim for a point that is 'offsetDist' away from the cursor
    const offsetDist = 120; // 120 pixels away
    let targetX = tx;
    let targetY = ty;
    
    if (dist > 0) {
      targetX = tx - (dx / dist) * offsetDist;
      targetY = ty - (dy / dist) * offsetDist;
    }

    // Recalculate dx/dy based on the new offset target
    const odx = targetX - bx;
    const ody = targetY - by;

    // Reduce the easing multiplier significantly so it trails behind very lazily
    const ease = Math.min(0.006 + (isScrolling ? 0.02 : 0) + scrollDelta * 0.0005, 0.03);

    vx += odx * ease;
    vy += ody * ease;
    
    // Add slightly more damping (friction) so it doesn't overshoot aggressively
    vx *= 0.88;
    vy *= 0.88;
    
    bx += vx;
    by += vy;

    scrollDelta *= 0.88;

    // Add the smooth floating sine-wave effect ON TOP of the cursor position
    const floatY = Math.sin(time) * 12;
    const finalY = by + floatY;

    // Flip bird to face direction of movement
    const moving = Math.abs(vx) > 0.5;
    svg.style.transform = moving && vx < 0 ? 'scaleX(-1)' : 'scaleX(1)';

    // Tilt based on both vertical velocity and a subtle sine wave
    const velocityTilt = Math.max(-25, Math.min(25, vy * 2));
    const floatTilt = Math.cos(time) * 5;
    const finalTilt = velocityTilt + floatTilt;

    wrap.style.transform = `translate(${bx}px, ${finalY}px) rotate(${finalTilt}deg) translate(-50%, -50%)`;

    // Shadow scale logic if still present
    if (shadow) {
      const scl = Math.max(0.4, 1 - finalY / window.innerHeight * 0.6);
      shadow.style.transform = `scaleX(${scl})`;
    }

    requestAnimationFrame(update);
  }
  update();
})();

/* ══════════════════════════════════════════════════════
   3. THEME TOGGLE
   ══════════════════════════════════════════════════════ */
const html        = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');

applyTheme(localStorage.getItem('theme') || 'dark');
themeToggle.addEventListener('click', () => {
  const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);

  // Trigger dancing micro-interaction
  const dancer = document.getElementById('theme-dancer');
  if (dancer) {
    dancer.classList.remove('active');
    // Force reflow
    void dancer.offsetWidth;
    dancer.classList.add('active');
    
    // Clear previous timeout if any
    if (dancer.dataset.timeoutId) {
      clearTimeout(parseInt(dancer.dataset.timeoutId));
    }
    
    const timeoutId = setTimeout(() => {
      dancer.classList.remove('active');
    }, 1800); // Fades out after 1.8s
    
    dancer.dataset.timeoutId = timeoutId;
  }
});
function applyTheme(t) {
  html.dataset.theme  = t;
  themeIcon.className = t === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

/* ══════════════════════════════════════════════════════
   4. NAVBAR — scroll shadow + active link
   ══════════════════════════════════════════════════════ */
const navbar  = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nl');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(l => l.classList.remove('active'));
    const a = document.querySelector(`.nl[href="#${e.target.id}"]`);
    if (a) a.classList.add('active');
  });
}, { rootMargin: '-40% 0px -55% 0px' })
  .observe && sections.forEach(s => {
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        navLinks.forEach(l => l.classList.remove('active'));
        const a = document.querySelector(`.nl[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      });
    }, { rootMargin: '-40% 0px -55% 0px' }).observe(s);
  });

/* ══════════════════════════════════════════════════════
   5. HAMBURGER
   ══════════════════════════════════════════════════════ */
const hamburger  = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const open = navLinksEl.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
navLinksEl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinksEl.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ══════════════════════════════════════════════════════
   6. TYPED TEXT
   ══════════════════════════════════════════════════════ */
const roles   = ['Developer', 'Cybersec Enthusiast', 'Problem Solver', 'AI Explorer', 'Open Source Fan'];
const typedEl = document.getElementById('typedText');
let ri = 0, ci = 0, del = false;

(function type() {
  const w = roles[ri];
  typedEl.textContent = del ? w.slice(0, ci - 1) : w.slice(0, ci + 1);
  if (!del) ci++; else ci--;
  let ms = del ? 55 : 105;
  if (!del && ci === w.length)   { ms = 1700; del = true; }
  else if (del && ci === 0)      { del = false; ri = (ri + 1) % roles.length; ms = 350; }
  setTimeout(type, ms);
})();

/* ══════════════════════════════════════════════════════
   7. SCROLL REVEAL (data-reveal)
   ══════════════════════════════════════════════════════ */
document.querySelectorAll('[data-reveal]').forEach(el => {
  new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const delay = parseInt(e.target.dataset.delay || 0);
      setTimeout(() => e.target.classList.add('revealed'), delay);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.12 }).observe(el);
});

/* ══════════════════════════════════════════════════════
   8. SKILL BARS
   ══════════════════════════════════════════════════════ */
const barsWrap = document.querySelector('.skill-bars-wrap');
if (barsWrap) {
  new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      document.querySelectorAll('.sbar-fill').forEach((f, i) => {
        // Stagger the animation so each bar fills one after the other
        setTimeout(() => { f.style.width = f.dataset.w + '%'; }, 200 + (i * 150));
      });
    } else {
      // Reset to 0 so it animates again every time it enters the viewport
      document.querySelectorAll('.sbar-fill').forEach(f => {
        f.style.width = '0%';
      });
    }
  }, { threshold: 0.3 }).observe(barsWrap);
}

/* ══════════════════════════════════════════════════════
   9. ANIMATED COUNT-UP (about stats)
   ══════════════════════════════════════════════════════ */
document.querySelectorAll('.as-num').forEach(el => {
  const target = parseInt(el.dataset.count);
  new IntersectionObserver((entries, obs) => {
    if (!entries[0].isIntersecting) return;
    let start = 0;
    const step = target / 40;
    const tick = () => {
      start = Math.min(start + step, target);
      el.textContent = target === 10 ? `#${Math.round(start)}` : Math.round(start) + '+';
      if (start < target) requestAnimationFrame(tick);
      else el.textContent = target === 10 ? 'Top 10' : target + '+';
    };
    tick();
    obs.unobserve(el);
  }, { threshold: 0.5 }).observe(el);
});

/* ══════════════════════════════════════════════════════
   10. ORB STAGGER (skill orbs)
   ══════════════════════════════════════════════════════ */
document.querySelectorAll('.skills-orbs').forEach(wrap => {
  new IntersectionObserver((entries, obs) => {
    if (!entries[0].isIntersecting) return;
    wrap.querySelectorAll('.orb-group').forEach((g, i) => {
      setTimeout(() => {
        g.style.transition = `opacity .5s ease, transform .5s ease`;
        g.style.opacity    = '1';
        g.style.transform  = 'none';
      }, i * 55 + parseInt(g.dataset.delay || 0));
    });
    obs.unobserve(wrap);
  }, { threshold: 0.1 }).observe(wrap);

  // hide initially
  wrap.querySelectorAll('.orb-group').forEach(g => {
    g.style.opacity   = '0';
    g.style.transform = 'translateY(20px)';
  });
});

/* ══════════════════════════════════════════════════════
   11. CERT CARDS STAGGER
   ══════════════════════════════════════════════════════ */
document.querySelectorAll('.cert-cards-grid').forEach(grid => {
  new IntersectionObserver((entries, obs) => {
    if (!entries[0].isIntersecting) return;
    grid.querySelectorAll('.cert-card').forEach((c, i) => {
      setTimeout(() => { c.classList.add('revealed'); }, i * 90);
    });
    obs.unobserve(grid);
  }, { threshold: 0.1 }).observe(grid);

  grid.querySelectorAll('.cert-card').forEach(c => {
    c.style.cssText += 'opacity:0;transform:translateY(18px);transition:opacity .5s ease,transform .5s ease;';
  });
});
// Reuse data-reveal revealed class for certs
document.querySelector('style') || (() => {})(); // no-op placeholder

const certReveal = document.createElement('style');
certReveal.textContent = `.cert-card.revealed{opacity:1 !important;transform:none !important}`;
document.head.appendChild(certReveal);

/* ══════════════════════════════════════════════════════
   12. CONTACT FORM
   ══════════════════════════════════════════════════════ */
const form      = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formOk    = document.getElementById('formSuccess');

form && form.addEventListener('submit', e => {
  e.preventDefault();
  const name  = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const msg   = document.getElementById('cMsg').value.trim();
  if (!name || !email || !msg || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    submitBtn.style.animation = 'none';
    submitBtn.offsetHeight;
    submitBtn.style.animation = 'shake .4s ease';
    return;
  }
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
  setTimeout(() => {
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    formOk.classList.add('show');
    setTimeout(() => formOk.classList.remove('show'), 5000);
  }, 1600);
});

/* ══════════════════════════════════════════════════════
   13. DOWNLOAD CV PLACEHOLDER
   ══════════════════════════════════════════════════════ */
document.getElementById('downloadBtn')?.addEventListener('click', e => {
  e.preventDefault();
  alert('📄 Add your resume.pdf to the portfolio folder and set the href to "resume.pdf"!');
});

/* ══════════════════════════════════════════════════════
   14. BACK TO TOP
   ══════════════════════════════════════════════════════ */
document.getElementById('backToTop')?.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ══════════════════════════════════════════════════════
   15. HERO NAME ENTRANCE
   ══════════════════════════════════════════════════════ */
{
  const l = document.createElement('style');
  l.textContent = `
  @keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}
  .name-line{animation:clipIn .8s cubic-bezier(.4,0,.2,1) both}
  .name-line:nth-child(2){animation-delay:.15s}
  @keyframes clipIn{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
  .hero-badge{animation:fadeSlide .7s .3s both}
  .hero-handle{animation:fadeSlide .7s .45s both}
  .hero-typed-row{animation:fadeSlide .7s .55s both}
  .hero-bio{animation:fadeSlide .7s .65s both}
  .hero-actions{animation:fadeSlide .7s .75s both}
  .hero-links{animation:fadeSlide .7s .85s both}
  .hero-right{animation:fadeSlide .9s .4s both}
  @keyframes fadeSlide{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
  `;
  document.head.appendChild(l);
}

/* ══════════════════════════════════════════════════════
   16. PARALLAX TILT on hero cards (mouse)
   ══════════════════════════════════════════════════════ */
const heroStack = document.querySelector('.hero-card-stack');
heroStack && document.addEventListener('mousemove', e => {
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  const rx = ((e.clientY - cy) / cy) * 5;
  const ry = ((e.clientX - cx) / cx) * -5;
  heroStack.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
});

/* ══════════════════════════════════════════════════════
   17. SMOOTH SCROLL
   ══════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const t = document.querySelector(this.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});

/* ══════════════════════════════════════════════════════
   18. PROFILE IMAGE ZOOM MODAL
   ══════════════════════════════════════════════════════ */
const profile = document.querySelector(".profile-image");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close-modal");

if (profile && modal && modalImg && closeBtn) {
  profile.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = profile.src;
  };

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
}
