import { LanguageService } from './../language.service';
import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit{
  lg: string = '';

  constructor(private languageService: LanguageService) { }

  ngAfterViewInit(): void {
    ($('.dropdown-trigger') as any).dropdown();
    this.lg = this.languageService.lg;
  }

  get languageSwitch(): { url: string, label: string, src: string } {
    const language = this.languageService.lg;
    if (language.includes('fr')) {
      return { url: '/en', label: 'en', src: 'svg/flags/france.svg' };
    } else if (language.includes('en')) {
      return { url: '/fr', label: 'fr', src: 'svg/flags/united-kingdom.svg' };
    }
    return { url: '/fr', label: 'fr', src: 'svg/flags/france.svg' };  // Default values
  }

}
