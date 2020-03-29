import { Injectable } from '@angular/core';
declare var require: any
const FileSaver = require('file-saver');

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

  downloadPdf(pdfUrl: string, pdfName: string ) {
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
