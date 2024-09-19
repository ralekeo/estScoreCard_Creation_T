//
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScorecardBuilderComponent } from './scorecard-builder/scorecard-builder.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ScorecardBuilderComponent],
  imports: [FormsModule, DragDropModule],
  exports: [ScorecardBuilderComponent],
})
export class AppModule {}
