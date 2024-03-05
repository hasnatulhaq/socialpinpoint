import { Component ,ViewChild, ElementRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-left-side-nav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './left-side-nav.component.html',
  styleUrl: './left-side-nav.component.scss'
})
export class LeftSideNavComponent {
  @ViewChild('leftPanel', { static: false }) leftPanel!: ElementRef;

  closePanel(): void {
    if (this.leftPanel) {
      this.leftPanel.nativeElement.style.display = 'none';
    }
  }
}
