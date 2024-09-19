//
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScorecardBuilderComponent } from './scorecard-builder/scorecard-builder.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ScorecardBuilderComponent],
  imports: [FormsModule, DragDropModule, CommonModule],
  exports: [ScorecardBuilderComponent],
})
export class AppModule {}
