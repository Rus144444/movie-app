import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { Movie } from '../../models/movie.models';
import { MovieService } from '../../movie.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieItemComponent, RouterOutlet],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  movies: Movie[] = [];
  movieService: MovieService = inject(MovieService);
  constructor() {
    this.movies = this.movieService.getAllMovieLocations();
  }

  favoriteMovies: Movie[] = [];
  watchLaterMovies: Movie[] = [];
  private addToList(list: Movie[], id: number) {
    const movieInList = list.find((movie) => movie.id === id);
    if (movieInList) return list;
    const addedMovie = this.movies.find((movie) => movie.id === id);
    if (addedMovie) {
      return [...list, addedMovie];
    }
    return list;
  }

  onAddToFavorites(id: number) {
    this.favoriteMovies = this.addToList(this.favoriteMovies, id);
  }
  onAddToWatchlist(id: number) {
    this.watchLaterMovies = this.addToList(this.watchLaterMovies, id);
  }
}
