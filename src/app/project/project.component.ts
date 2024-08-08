import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from './projects';
import { project } from './project';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: project[] = [];
  lg: string = '';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.filterProjectsByLanguage();
  }

  filterProjectsByLanguage() {
    const language = this.languageService.getLanguage();
    this.projects = PROJECTS.filter(project => project.language === language);
  }
}
