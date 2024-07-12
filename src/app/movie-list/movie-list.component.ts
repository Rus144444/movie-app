import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import movies from "../../assets/json/movies.json";
import { MovieItemComponent } from "../movie-item/movie-item.component";
import { Movie } from "../models/movie.models";

@Component({
  selector: "app-movie-list",
  standalone: true,
  imports: [CommonModule, MovieItemComponent],
  templateUrl: "./movie-list.component.html",
  styleUrl: "./movie-list.component.scss",
})
export class MovieListComponent {
  movies: Movie[] = movies;
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
