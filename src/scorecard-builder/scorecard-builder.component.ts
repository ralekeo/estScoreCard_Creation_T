// scorecard-builder.component.ts
import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

interface Metric {
  id: string;
  name: string;
  actual: number;
  budget: number;
  weight: number;
}

interface Perspective {
  id: string;
  name: string;
  weight: number;
  metrics: Metric[];
}

@Component({
  selector: 'app-scorecard-builder',
  templateUrl: './scorecard-builder.component.html',
  styleUrls: ['./scorecard-builder.component.css'],
})
export class ScorecardBuilderComponent {
  perspectives: Perspective[] = [
    { id: 'p1', name: 'Financial', weight: 30, metrics: [] },
  ];
  error: string = '';

  addPerspective() {
    const newId = `p${this.perspectives.length + 1}`;
    this.perspectives.push({ id: newId, name: '', weight: 0, metrics: [] });
  }

  removePerspective(index: number) {
    this.perspectives.splice(index, 1);
  }

  addMetric(perspectiveIndex: number) {
    const perspective = this.perspectives[perspectiveIndex];
    const newId = `m${perspective.metrics.length + 1}`;
    perspective.metrics.push({
      id: newId,
      name: '',
      actual: 0,
      budget: 0,
      weight: 0,
    });
  }

  removeMetric(perspectiveIndex: number, metricIndex: number) {
    this.perspectives[perspectiveIndex].metrics.splice(metricIndex, 1);
  }

  calculateScore(): number {
    let totalScore = 0;
    let totalWeight = 0;

    this.perspectives.forEach((perspective) => {
      let perspectiveScore = 0;
      perspective.metrics.forEach((metric) => {
        const achievementPercentage = (metric.actual / metric.budget) * 100;
        const metricScore = (achievementPercentage / 100) * metric.weight;
        perspectiveScore += metricScore;
      });
      totalScore += perspectiveScore * (perspective.weight / 100);
      totalWeight += perspective.weight;
    });

    return totalWeight > 0 ? (totalScore / totalWeight) * 100 : 0;
  }

  validateWeights() {
    const totalWeight = this.perspectives.reduce((sum, p) => sum + p.weight, 0);
    if (totalWeight > 100) {
      this.error = 'Total weight exceeds 100%. Please adjust the weights.';
    } else {
      this.error = '';
    }
  }

  dropPerspective(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.perspectives, event.previousIndex, event.currentIndex);
  }

  dropMetric(perspectiveIndex: number, event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.perspectives[perspectiveIndex].metrics,
      event.previousIndex,
      event.currentIndex
    );
  }
}
