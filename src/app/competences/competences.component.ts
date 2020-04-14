import { Component, OnInit } from '@angular/core';
import {TransService} from '../service/trans.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {

  constructor(public translate: TransService) { }

  ngOnInit(): void {
  }

}
