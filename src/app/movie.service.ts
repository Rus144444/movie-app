import { Injectable } from '@angular/core';
import { Movie } from '@models/movie.models';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movieLocationList: Movie[] = [
    {
      adult: false,
      backdrop_path: '/cIztAxDn3H8JylRaJwiHHpkGe53.jpg',
      genre_ids: [878, 28, 12],
      id: 823464,
      original_language: 'en',
      original_title: 'Woody Woodpecker Goes to Camp',
      overview:
        "After getting kicked out of the forest, Woody thinks he's found a forever home at Camp Woo Hoo — until an inspector threatens to shut down the camp.",
      popularity: 1931.335,
      poster_path: '/mMnzNYvpqLLLdgF5TMmXfuy6wzx.jpg',
      release_date: '2024-04-12T00:00:00',
      title: 'Woody Woodpecker Goes to Camp',
      video: false,
      vote_average: 7.236,
      vote_count: 2527,
    },
    {
      adult: false,
      backdrop_path: '/7ZP8HtgOIDaBs12krXgUIygqEsy.jpg',
      genre_ids: [878, 12],
      id: 693134,
      original_language: 'en',
      original_title: 'Alienoid',
      overview:
        "Gurus in the late Goryeo dynasty try to obtain a fabled, holy sword, and humans in 2022 hunt down an alien prisoner that is locked in a human's body. The two parties cross paths when a time-traveling portal opens up.",
      popularity: 787.686,
      poster_path: '/8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg',
      release_date: '2022-07-20T00:00:00',
      title: 'Alienoid',
      video: false,
      vote_average: 8.169,
      vote_count: 4358,
    },
    {
      adult: false,
      backdrop_path: '/oe7mWkvYhK4PLRNAVSvonzyUXNy.jpg',
      genre_ids: [28, 10751, 35, 14],
      id: 1011985,
      original_language: 'en',
      original_title: 'Road House',
      overview:
        'Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.',
      popularity: 705.24,
      poster_path: '/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg',
      release_date: '2024-03-08T00:00:00',
      title: 'Road House',
      video: false,
      vote_average: 7.124,
      vote_count: 1900,
    },
  ];

  constructor() {}
  getAllMovieLocations(): Movie[] {
    return this.movieLocationList;
  }

  getMovieLocationById(id: number): Movie | undefined {
    return this.movieLocationList.find(
      (movieLocation) => movieLocation.id === id
    );
  }
}
