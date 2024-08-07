import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dev } from '../dev';
import { INFO } from '../info';
import { LanguageService } from './../language.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  infos: dev[] = INFO;
  lg: string = '';

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.lg = this.languageService.lg;
    this.filterInfosByLanguage();
  }

  filterInfosByLanguage() {
    const language = this.languageService.lg;
    this.infos = INFO.filter(info => info.id === language);
  }
}
