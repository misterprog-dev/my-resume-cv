import { Component, OnInit } from '@angular/core';
import {DownloadService} from '../service/download.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private downloadService: DownloadService) { }

  ngOnInit(): void {
  }

  downloadPdf(url: string, file: string) {
    this.downloadService.downloadPdf(url, file);
  }

}
