import { Component } from '@angular/core';
import { COMPETENCES } from './competences-mockup';
import { competence } from './competence';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css',
})
export class CompetencesComponent {
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
    'materialize',
  ];

  displayedCompetences: competence[] = this.competenceList.filter(competence =>
    this.myCompetences.includes(competence.id)
  );

}
