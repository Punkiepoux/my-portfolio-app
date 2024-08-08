import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div *ngIf="lg === 'fr'" class='center'>
      <img src="png/404.png"/>
      <h1>Hey, cette page n'existe pas !</h1>
    </div>

    <div *ngIf="lg === 'en'" class='center'>
      <img src="png/404.png"/>
      <h1>Hey, this page does not exist !</h1>
    </div>
  `,
  styles: ``
})
export class PageNotFoundComponent implements OnInit {
  lg: string = '';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.lg = this.languageService.lg;
  }
 }
