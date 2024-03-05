import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftSideNavComponent } from './components/left-side-nav/left-side-nav.component';
import { CommentSearchComponent } from './components/comment-search/comment-search.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MapComponent,
    HeaderComponent, 
    LeftSideNavComponent,
    CommentSearchComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'social-pin-point';
}
