import { Component, OnInit } from '@angular/core';
import {DownloadService} from '../service/download.service';
import {TransService} from '../service/trans.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})

export class CertificationsComponent implements OnInit {

  constructor(private downloadService: DownloadService, public translate: TransService) { }

  ngOnInit(): void {
  }

  downloadPdf(url: string, file: string) {
    this.downloadService.downloadPdf(url, file);
  }

}
