// Particle animation setup
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth/3;
canvas.height = window.innerHeight/3;

const particles = [];

class Particle {
  constructor() {
    this.x = canvas.width / 1.1;
    this.y = canvas.height / 1.1;
    this.size = Math.random() * 20 + 1;
    this.speedX = Math.random() * 0.5 - 0.5;
    this.speedY = Math.random() * 0.5 - 0.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }

  draw() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

function handleParticles() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].size <= 0.2) {
      particles.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

function createParticle() {
  particles.push(new Particle());
}

setInterval(createParticle, 500);

animate();
