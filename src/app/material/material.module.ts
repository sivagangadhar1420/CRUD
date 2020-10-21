import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';


export const materialComponents=[MatButtonModule, MatCheckboxModule]

@NgModule({
  declarations: [],
  imports: [CommonModule, materialComponents],
  exports:[materialComponents]
})

export class MaterialModule { }
