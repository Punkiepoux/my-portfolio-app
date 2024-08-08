import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="back-to-top blue-grey darken-3 white-text waves-effect waves-light"
      (click)="scrollToTop()"
      [ngClass]="{ visible: isScrolled }"
      aria-label="Retour en haut"
    >
      <i class="material-icons">arrow_upward</i>
    </button>
  `,
  styles: [`
      .back-to-top {
        position: fixed;
        bottom: 60px;
        right: 30px;
        z-index: 1000;
        display: none;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: opacity 0.3s ease, visibility 0.3s ease;
      }

      .back-to-top.visible {
        display: flex;
        opacity: 1;
        visibility: visible;
      }

      .back-to-top:not(.visible) {
        opacity: 0;
        visibility: hidden;
      }
    `],
})
export class BackToTopComponent {
  isScrolled = false;

  constructor(private viewportScroller: ViewportScroller) { }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 100;
  }

  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
