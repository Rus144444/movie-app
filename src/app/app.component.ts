import { Component } from '@angular/core';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { ContainerComponent } from '../../src/app/shared/container/container.component';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MovieListComponent,
    ContainerComponent,
    CommonModule,
    RouterModule,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
