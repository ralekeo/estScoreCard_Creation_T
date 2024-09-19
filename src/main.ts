import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-scorecard-builder></app-scorecard-builder>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [importProvidersFrom(AppModule)],
});
