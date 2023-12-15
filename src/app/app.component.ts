import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedFeature = 'recipe';

  /**
   * Updates the loaded feature.
   * @param {string} feature - The name of the feature to load.
   */
  onNavigate(feature: string) {
    // Update the loaded feature
    this.loadedFeature = feature;
  }
}
