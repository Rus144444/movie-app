import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@models/movie.models';
import { MovieService } from '../../movie.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: 'details.component.html',
  styleUrl: 'details.component.scss',
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class DetailsComponent implements OnInit {
  itemDetail!: Movie | undefined;
  maxOverviewLength = 170;
  imageUrl!: string;
  genres!: string[];
  shorterDescription!: string;
  rating!: number[];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const movieId = Number(params.get('id'));
      this.itemDetail = this.movieService.getMovieLocationById(movieId);
    });
  }
  goBack() {
    this.location.back();
  }
}
