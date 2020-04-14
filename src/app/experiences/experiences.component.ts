import { Component, OnInit } from '@angular/core';
import {TransService} from '../service/trans.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  constructor(public translate: TransService) { }

  ngOnInit(): void {
  }

}
