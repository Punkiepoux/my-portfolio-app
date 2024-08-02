import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { formation } from './formation';
import { FORMATIONS } from './formations';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {
  formationList: formation[] = FORMATIONS;
}
