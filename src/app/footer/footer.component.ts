import { AfterViewInit, Component } from '@angular/core';
import { LanguageService } from '../language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit {
  lg: string = '';

  constructor(private languageService: LanguageService,) { }

  ngAfterViewInit(): void {
    this.lg = this.languageService.lg;
  }
}
