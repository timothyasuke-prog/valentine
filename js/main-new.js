document.addEventListener('DOMContentLoaded', () => {
  // Check if unlocked for home page protection
  if (location.pathname.includes('index.html') && !localStorage.getItem('valentine_unlocked')) {
    location.href = 'entry.html';
  }

  // ===== FLOATING HEARTS =====
  const container = document.getElementById('floating-hearts');
  if (container) {
    const maxHearts = innerWidth < 520 ? 4 : 8;
    for (let i = 0; i < maxHearts; i++) {
      const h = document.createElement('div');
      h.className = 'floating-heart';
      h.style.left = (Math.random() * 100) + '%';
      h.style.animationDuration = (6 + Math.random() * 6) + 's';
      h.style.fontSize = (12 + Math.random() * 22) + 'px';
      h.style.top = (80 + Math.random() * 20) + '%';
      h.innerText = '❤';
      container.appendChild(h);
    }
  }

  // ===== HERO ANIMATIONS =====
  const title = document.getElementById('mainTitle');
  if (title) {
    title.addEventListener('mouseenter', () => {
      title.style.animation = 'titleBounce 0.8s ease-out';
    });
  }

  // ===== CARDS STAGGERED ANIMATION =====
  const cards = document.querySelectorAll('.card.hoverable');
  cards.forEach((card, idx) => {
    card.style.animationDelay = (idx * 0.08) + 's';
  });

  // ===== SURPRISE 1: HEART REVEAL =====
  const heartBtn = document.getElementById('heartBtn');
  if (heartBtn) {
    heartBtn.addEventListener('click', () => {
      const msg = document.getElementById('msg');
      msg.innerText = '❤ You are my favorite person in the whole world. I love you. ❤';
      const heart = document.querySelector('.big-heart');
      if (heart) {
        heart.style.animation = 'none';
        setTimeout(() => {
          heart.style.animation = 'heartBeat 1.5s ease-in-out infinite 0.5s';
        }, 10);
      }
      // Pop animation on text
      msg.style.animation = 'none';
      setTimeout(() => {
        msg.style.animation = 'popWord 0.5s cubic-bezier(0.34,1.56,0.64,1)';
      }, 10);
    });
  }

  // ===== SURPRISE 2: CAROUSEL =====
  const carousel = document.getElementById('carousel');
  if (carousel) {
    let idx = 0;
    const slides = carousel.querySelectorAll('.slide');
    function show(i) {
      slides.forEach((s, si) => {
        s.style.transform = `translateX(${(si - i) * 100}%)`;
      });
    }
    show(0);
    
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        idx = (idx - 1 + slides.length) % slides.length;
        show(idx);
      });
      nextBtn.addEventListener('click', () => {
        idx = (idx + 1) % slides.length;
        show(idx);
      });
    }
    
    // Allow tapping slides on mobile
    slides.forEach(s => {
      s.addEventListener('click', () => {
        idx = (idx + 1) % slides.length;
        show(idx);
      });
    });
  }

  // ===== SURPRISE 3: CONFETTI =====
  const confettiBtn = document.getElementById('confettiBtn');
  const canvas = document.getElementById('confetti-canvas');
  if (confettiBtn && canvas) {
    const ctx = canvas.getContext('2d');
    function resizeCanvas() {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    }
    resizeCanvas();
    addEventListener('resize', resizeCanvas);

    confettiBtn.addEventListener('click', () => {
      const pieces = [];
      for (let i = 0; i < 120; i++) {
        pieces.push({
          x: innerWidth / 2,
          y: innerHeight / 2,
          dx: (Math.random() - 0.5) * 10,
          dy: (Math.random() - 3) * 10,
          sz: 4 + Math.random() * 10,
          c: `hsl(${Math.random() * 360} 80% 60%)`,
          rot: Math.random() * 360
        });
      }
      let t = 0;
      const id = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        t++;
        pieces.forEach(p => {
          p.x += p.dx;
          p.y += p.dy;
          p.dy += 0.25;
          p.rot += 10;
          ctx.save();
          ctx.translate(p.x + p.sz / 2, p.y + p.sz / 2);
          ctx.rotate(p.rot * Math.PI / 180);
          ctx.fillStyle = p.c;
          ctx.fillRect(-p.sz / 2, -p.sz / 2, p.sz, p.sz);
          ctx.restore();
        });
        if (t > 150) {
          clearInterval(id);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }, 16);
    });
  }

  // ===== REASONS FLIP CARD =====
  document.querySelectorAll('.reason').forEach(reason => {
    reason.addEventListener('click', () => {
      reason.classList.toggle('flipped');
    });
  });

  // ===== ENVELOPES OPEN =====
  document.querySelectorAll('.envelope').forEach(env => {
    env.addEventListener('click', () => {
      const note = env.querySelector('.note-text');
      if (note) {
        const isOpen = note.style.display !== 'none';
        note.style.display = isOpen ? 'none' : 'block';
        const front = env.querySelector('.envelope-front');
        if (front) {
          front.style.opacity = isOpen ? '1' : '0.3';
        }
      }
    });
  });

  // ===== BACKGROUND MUSIC TOGGLE =====
  const bgMusic = document.getElementById('bgMusic');
  const musicToggle = document.getElementById('musicToggle');
  if (musicToggle && bgMusic) {
    function updateLabel() {
      musicToggle.innerText = bgMusic.paused ? '🎵 Play Music' : '⏸ Pause Music';
    }
    musicToggle.addEventListener('click', (e) => {
      e.preventDefault();
      if (bgMusic.paused) {
        bgMusic.play().catch(() => {});
      } else {
        bgMusic.pause();
      }
      updateLabel();
    });
    bgMusic.addEventListener('play', updateLabel);
    bgMusic.addEventListener('pause', updateLabel);
    updateLabel();
  }

  // ===== COUNTER AUTO-UPDATE =====
  const counter = document.getElementById('counter');
  if (counter) {
    function updateCounter() {
      const startStr = counter.dataset.start;
      if (!startStr) return;
      const start = new Date(startStr);
      const now = new Date();
      let diff = now - start;
      const days = Math.floor(diff / 86400000);
      diff %= 86400000;
      const hours = Math.floor(diff / 3600000);
      diff %= 3600000;
      const mins = Math.floor(diff / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      counter.innerText = `We've been together for ${days} days, ${hours} hours, ${mins} minutes, ${secs} seconds`;
    }
    updateCounter();
    setInterval(updateCounter, 1000);
  }

  // ===== PARTICLE EFFECTS ON CLICK =====
  if (canvas && !document.getElementById('confettiBtn')) {
    // General click particles (soft effect everywhere)
    document.addEventListener('click', (e) => {
      if (e.target.closest('.btn') || e.target.closest('.card')) {
        createClickParticles(e.clientX, e.clientY);
      }
    });
  }

  function createClickParticles(x, y) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const particles = [];
    for (let i = 0; i < 6; i++) {
      particles.push({
        x: x,
        y: y,
        dx: (Math.random() - 0.5) * 4,
        dy: (Math.random() - 0.5) * 4 - 2,
        life: 60,
        size: 3 + Math.random() * 3,
        color: `rgba(255, 107, 159, ${Math.random() * 0.8})`
      });
    }
    let frame = 0;
    const animate = () => {
      particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        p.dy += 0.1;
        p.life--;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      if (particles.some(p => p.life > 0)) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  }

  // ===== TYPING EFFECT FOR QUIZ/TEXT INPUTS =====
  const quizCheckBtn = document.getElementById('checkQ');
  if (quizCheckBtn) {
    quizCheckBtn.addEventListener('click', () => {
      const v = document.getElementById('q1')?.value.trim().toLowerCase();
      const qRes = document.getElementById('qRes');
      if (qRes) {
        qRes.style.animation = 'none';
        setTimeout(() => {
          qRes.style.animation = 'popWord 0.5s cubic-bezier(0.34,1.56,0.64,1)';
        }, 10);
      }
    });
  }

  // ===== SMOOTH SCROLL FOR TIMELINE =====
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    const milestones = timeline.querySelectorAll('.milestone');
    milestones.forEach((m, i) => {
      m.style.animationDelay = (i * 0.1) + 's';
    });
  }

  // ===== POLAROID HOVER EFFECT =====
  document.querySelectorAll('.polaroid').forEach((p, i) => {
    p.style.animationDelay = (i * 0.08) + 's';
    p.addEventListener('mouseenter', () => {
      p.style.transform = 'rotateZ(' + (Math.random() > 0.5 ? 5 : -5) + 'deg) scale(1.08)';
    });
    p.addEventListener('mouseleave', () => {
      p.style.transform = 'rotateZ(0) scale(1)';
    });
  });

  // ===== PREVENT PASTE IN PASSWORD FIELD (FOR SECURITY) =====
  const pwInput = document.getElementById('pw');
  if (pwInput) {
    pwInput.addEventListener('paste', (e) => {
      e.preventDefault();
    });
  }

  // ===== LOADING ANIMATION ON PAGE LOAD =====
  if (document.body.classList.contains('fade-in') === false) {
    document.documentElement.style.opacity = '0';
    setTimeout(() => {
      document.documentElement.style.transition = 'opacity 0.5s ease-in';
      document.documentElement.style.opacity = '1';
    }, 100);
  }
});
