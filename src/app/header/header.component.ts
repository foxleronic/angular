import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  collapsed: boolean;

  /**
   * Emits the selected feature.
   * @param feature - The feature to be emitted.
   */
  onSelect(feature: string): void {
    this.featureSelected.emit(feature);
  }
}
