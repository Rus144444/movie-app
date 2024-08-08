import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { genreIds } from '../../constants/genreIds';
import { Movie } from '../../models/movie.models';
import { MovieTimePipe } from '../../pipes/movie-time.pipe';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [CommonModule, MovieTimePipe, MatCardModule, RouterLink],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss',
})
export class MovieItemComponent implements OnInit {
  @Input() item!: Movie;
  @Output() addedToFavorites: EventEmitter<number> = new EventEmitter<number>();
  @Output() addedToWatchlist: EventEmitter<number> = new EventEmitter<number>();
  baseImageUrl = 'https://image.tmdb.org/t/p/original';
  maxOverviewLength = 170;
  imageUrl!: string;
  genres!: string[];
  shorterDescription!: string;
  rating!: number[];

  ngOnInit() {
    this.imageUrl = `${this.baseImageUrl}/${this.item.backdrop_path}`;
    this.genres = this.transformGenreIds(genreIds);
    this.rating = this.generateRatingArray();
    this.shorterDescription = this.truncateDescription();
  }

  addToFavorites(id: number) {
    this.addedToFavorites.emit(id);
  }

  addToWatchlist(id: number) {
    this.addedToWatchlist.emit(id);
  }

  transformGenreIds(genres: Record<string, string>): string[] {
    return this.item.genre_ids.map((id) => genres[String(id)].toLowerCase());
  }

  truncateDescription(): string {
    if (this.item.overview.length > this.maxOverviewLength) {
      return `${this.item.overview.substring(
        0,
        this.maxOverviewLength + 1
      )}...`;
    }
    return this.item.overview;
  }

  generateRatingArray(): number[] {
    const rate = Math.round(this.item.vote_average / 2);
    return Array.from({ length: 5 }, (_, i) => i + 1).map((number) =>
      number <= rate ? 1 : 0
    );
  }
}