// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,HeaderComponent, FooterComponent],
//   standalone: true,
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'mybusiness';
// }

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <nav style="padding: 10px; background: #ddd;">
      <a routerLink="" routerLinkActive="active" style="margin-right: 15px;">Home</a>
      <a routerLink="/about-us" routerLinkActive="active" style="margin-right: 15px;">About Us</a>
      <a routerLink="/contact-us" routerLinkActive="active">Contact Us</a>
    </nav>

    <main style="padding: 1rem;">
      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>
  `
})
export class AppComponent {}
