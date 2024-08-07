import { AfterViewInit, Component } from '@angular/core';
import { COMPETENCES } from './competences-mockup';
import { competence } from './competence';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css',
})
export class CompetencesComponent implements AfterViewInit {
  competenceList: competence[] = COMPETENCES;
  myCompetences: string[] = [
    'html',
    'css',
    'javascript',
    'typescript',
    'angular',
    'nodejs',
    'git',
    'github',
    'confluence',
    'jira',
    'python',
    'ubuntu',
  ];

  displayedCompetences: competence[] = this.competenceList.filter(
    (competence) => this.myCompetences.includes(competence.id)
  );

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      modules: [Autoplay, FreeMode],
      slidesPerView: 7,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      speed: 5000,
      loop: true,
      touchRatio: 0.3,
      spaceBetween: 20,
      effect: 'slide',
      simulateTouch: true,
      freeMode: {
        enabled: true,
      },
    });

    const swiperElement = document.querySelector('.swiper') as HTMLElement;

    // Événement pour arrêter l'autoplay lorsque la souris entre
    swiperElement.addEventListener('mouseenter', () => {
      console.log('mouseenter');
      swiper.autoplay.stop();
    });

    // Événement pour démarrer l'autoplay lorsque la souris sort
    swiperElement.addEventListener('mouseleave', () => {
      console.log('mouseleave');
      swiper.autoplay.start();
    });
  }
}
