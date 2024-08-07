import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { formation } from './formation';
import { FORMATIONS } from './formations';

declare var M: any;

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent implements AfterViewInit {
  formationList: formation[] = FORMATIONS;

  ngAfterViewInit(): void {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems, {});
  }

}
