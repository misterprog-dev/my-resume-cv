import { Component, OnInit } from '@angular/core';
import {TransService} from '../service/trans.service';

@Component({
  selector: 'app-langues',
  templateUrl: './langues.component.html',
  styleUrls: ['./langues.component.css']
})
export class LanguesComponent implements OnInit {

  constructor(public translate: TransService) { }

  ngOnInit(): void {
  }

}
