import { Component, OnInit } from '@angular/core';
import {TransService} from "../service/trans.service";

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  constructor(public translate: TransService) { }

  ngOnInit(): void {
  }

}
