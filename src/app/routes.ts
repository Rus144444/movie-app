import { Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { DetailsComponent } from './components/details/details.component';
import { FavoriteMovieComponent } from '@pages/favorite-movie/favorite-movie.component';
import { NotFoundPageComponent } from '@pages/not-found-page/not-found-page.component';
import { HomeComponent } from '@pages/home/home.component';
import { WatchLaterListComponent } from '@pages/watch-later-list/watch-later-list.component';

const routeConfig: Routes = [
  { path: '', redirectTo: 'movie-list', pathMatch: 'full' },
  { path: 'movie-list', title: 'movie-list', component: MovieListComponent },
  {
    path: 'details/:id',
    title: 'details',
    component: DetailsComponent,
  },
  {
    path: 'home',
    title: 'Home - page',
    component: HomeComponent,
  },
  {
    path: 'favorite',
    title: 'My favorite movie',
    component: FavoriteMovieComponent,
  },
  {
    path: 'watch-later-list',
    title: 'My list movies',
    component: WatchLaterListComponent,
  },
  { path: '**', title: 'Not found page', component: NotFoundPageComponent },
];

export default routeConfig;
