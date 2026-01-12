import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initParticles, Login } from "./page/login/login";
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private primeng: PrimeNG) { }

  ngOnInit() {
    this.primeng.ripple.set(true);
    initParticles();
  }
}
