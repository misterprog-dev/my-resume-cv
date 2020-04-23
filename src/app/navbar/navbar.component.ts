import { Component, OnInit } from '@angular/core';
import {DownloadService} from '../service/download.service';
import {TranslateService} from '@ngx-translate/core';
import {TransService} from '../service/trans.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public downloadService: DownloadService, public translate: TransService) { }

  ngOnInit(): void {
  }

  switchLang(lang: string) {
    this.translate.translate.use(lang);
  }
}
