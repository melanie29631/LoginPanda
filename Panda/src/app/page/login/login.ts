import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  imports: [FormsModule, FloatLabelModule, CardModule, SplitterModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ButtonModule, PasswordModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  usuario: string = '';
  password: string = '';

  constructor(private router: Router) { }
  login() {
    this.router.navigate(['/dashboard']);
  }
}

// src/app/particles.ts (puedes importarlo en tu componente)
export function initParticles() {
  const canvas = document.getElementById('particles') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  let particles: { x: number, y: number, r: number, vx: number, vy: number }[] = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // Crear partículas
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 2,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 213, 79, 0.8)'; // amarillo glow
      ctx.fill();

      // movimiento
      p.x += p.vx;
      p.y += p.vy;

      // rebote
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });
    requestAnimationFrame(draw);
  }
  draw();
}
