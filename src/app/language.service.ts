import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root' // Fournit le service à la racine de l'application
})
export class LanguageService {
  lg: string = 'fr';

  constructor(private location: Location) {
    this.lg = this.getLanguage();
  }

  getLanguage(): string {
    const path = this.location.path();
    if (path.includes('/fr')) {
      return 'fr';
    } else if (path.includes('/en')) {
      return 'en';
    }
    return 'fr'; // Valeur par défaut
  }
}
