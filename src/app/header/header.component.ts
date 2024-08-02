import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private location: Location) {}

  get languageSwitch(): { url: string, label: string, src: string } {
    const path = this.location.path();
    if (path.includes('/fr')) {
      return { url: '/en', label: 'fr', src: 'svg/flags/united-kingdom.svg' };
    } else if (path.includes('/en')) {
      return { url: '/fr', label: 'fr', src: 'svg/flags/france.svg' };
    }
    return { url: '/fr', label: 'fr', src: 'svg/flags/france.svg' };  // Default values
  }
}
