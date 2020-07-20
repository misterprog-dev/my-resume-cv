import { Component, OnInit } from '@angular/core';
import {TransService} from '../service/trans.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public translate: TransService) { }

  ngOnInit(): void {
  }
}