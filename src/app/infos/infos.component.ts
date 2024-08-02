import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { INFO } from '../info';
import { dev } from '../dev';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css'
})
export class InfosComponent {
  infosList: dev[] = INFO;
  devLanguage: dev|undefined;

  constructor(private location: Location) {
    this.setLanguageInfos();
  }

  setLanguageInfos(): void {
    const path = this.location.path();
    if (path.includes('/fr')) {
      this.devLanguage = this.infosList.find(dev => dev.id === 'fr');
    } else if (path.includes('/en')) {
      this.devLanguage = this.infosList.find(dev => dev.id === 'en');
    } else {
      this.devLanguage = this.infosList.find(dev => dev.id === 'fr');
    }
  }
}
