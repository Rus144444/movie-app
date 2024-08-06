import { Component } from '@angular/core';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { ContainerComponent } from '../../src/app/shared/container/container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MovieListComponent,
    ContainerComponent,
    CommonModule,
    RouterModule,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
