import { Component, OnInit } from '@angular/core';
import { DatabaseExportService } from 'src/app/services/database-export.service';

@Component({
  selector: 'app-file-export',
  templateUrl: './file-export.component.html',
  styleUrls: ['./file-export.component.css']
})
export class FileExportComponent implements OnInit {

  constructor(private exportService: DatabaseExportService) { }

  ngOnInit(): void {
  }

  getDatabaseJson() {
    this.exportService.getDatabaseJSON().subscribe(res => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'HospitalAppDatabase.json',
        text: JSON.stringify(res)
      });
    })
  }

  getDatabaseJsonPseudonymization() {
    this.exportService.getDatabaseJSONPseudonymization().subscribe(res => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'HospitalAppDatabase.json',
        text: JSON.stringify(res)
      });
    })
  }

  private dyanmicDownloadByHtmlTag(arg: {
    fileName: string,
    text: string
  }) {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
    element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
    element.setAttribute('download', arg.fileName);

    var event = new MouseEvent("click");
    element.dispatchEvent(event);
  }

  private setting = {
    element: {
      dynamicDownload: null as unknown as HTMLElement
    }
  }

}
