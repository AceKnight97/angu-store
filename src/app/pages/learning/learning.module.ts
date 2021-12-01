import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';
// import { NzButtonModule } from 'ng-zorro-antd/button';
// import { MatIconModule } from '@angular/material/icon';
import { LearningComponent } from './learning.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // NzButtonModule,
    // MatButtonModule,
    // MatIconModule,
  ],
  declarations: [LearningComponent],
})
export class LearningModule {}
