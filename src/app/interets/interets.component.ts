import { Component, OnInit } from '@angular/core';
import {TransService} from '../service/trans.service';

@Component({
  selector: 'app-interets',
  templateUrl: './interets.component.html',
  styleUrls: ['./interets.component.css']
})
export class InteretsComponent implements OnInit {

  constructor(public translate: TransService) { }

  ngOnInit(): void {
  }

}
