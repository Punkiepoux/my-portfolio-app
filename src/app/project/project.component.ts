import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { PROJECTS } from './projects';
import { project } from './project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: project[] = [];

  constructor(private location: Location) {}

  ngOnInit() {
    this.filterProjectsByLanguage();
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

  filterProjectsByLanguage() {
    const language = this.getLanguage();
    this.projects = PROJECTS.filter(project => project.language === language);
  }
}
