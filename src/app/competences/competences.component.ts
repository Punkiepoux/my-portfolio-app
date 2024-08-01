import { Component } from '@angular/core';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css'
})
export class CompetencesComponent {
  myComptences: string[] = [
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
    'python'
  ];
}
