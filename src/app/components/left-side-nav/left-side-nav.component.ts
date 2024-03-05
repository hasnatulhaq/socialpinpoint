import { Component ,ViewChild, ElementRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';


@Component({
  selector: 'app-left-side-nav',
  standalone: true,
  imports: [MatIconModule , AboutComponent , InstructionsComponent , TermsAndConditionsComponent],
  templateUrl: './left-side-nav.component.html',
  styleUrl: './left-side-nav.component.scss'
})
export class LeftSideNavComponent {
  @ViewChild('leftPanel', { static: false }) leftPanel!: ElementRef;

  selectedComponent: string | null = null;

  openPanel(componentType: string): void {
    this.selectedComponent = null;

    if (componentType === 'app-about') {
      this.selectedComponent = 'AboutComponent';
    } else if (componentType === 'InstructionsComponent') {
      this.selectedComponent = 'Instructions';
    } else if (componentType === 'Terms-and-conditions') {
      // You can handle 'Terms-and-conditions' if needed
    }

    if (this.leftPanel) {
      this.leftPanel.nativeElement.style.display = 'block';
    }
  }

  closePanel(): void {
    if (this.leftPanel) {
      this.leftPanel.nativeElement.style.display = 'none';
      this.selectedComponent = null;
    }
  }
}
