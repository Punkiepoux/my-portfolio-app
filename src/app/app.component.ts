import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { dev } from './dev';
import { INFO } from './info';
import { FooterComponent } from "./footer/footer.component";
import { CompetencesComponent } from "./competences/competences.component";
import { FormationComponent } from "./formation/formation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    CompetencesComponent,
    FormationComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-portfolio-app';
}
