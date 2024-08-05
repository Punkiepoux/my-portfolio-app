import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { dev } from '../dev';
import { INFO } from '../info';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  infos: dev[] = INFO;
  lg: string = 'fr';

  constructor(private location: Location) { }

  ngOnInit() {
    this.lg = this.getLanguage();
    this.filterInfosByLanguage();
  }

  getLanguage(): string {
    const path = this.location.path();
    if (path.includes('/fr')) {
      return 'fr';
    } else if (path.includes('/en')) {
      return 'en';
    }
    return 'fr';
  }

  filterInfosByLanguage() {
    const language = this.getLanguage();
    this.infos = INFO.filter(info => info.id === language);
  }
}
