import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileExportComponent } from './file-export/file-export.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    FileExportComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class FileExportModule { }
