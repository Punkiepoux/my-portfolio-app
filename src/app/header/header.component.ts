import { AfterViewInit, Component } from '@angular/core';
import { Location } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit{
  constructor(private location: Location) {}

  ngAfterViewInit(): void {
    ($('.dropdown-trigger') as any).dropdown();
  }

  get languageSwitch(): { url: string, label: string, src: string } {
    const path = this.location.path();
    if (path.includes('/fr')) {
      return { url: '/en', label: 'en', src: 'svg/flags/france.svg' };
    } else if (path.includes('/en')) {
      return { url: '/fr', label: 'fr', src: 'svg/flags/united-kingdom.svg' };
    }
    return { url: '/fr', label: 'fr', src: 'svg/flags/france.svg' };  // Default values
  }
}
