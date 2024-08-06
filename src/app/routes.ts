import { Routes } from '@angular/router';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { DetailsComponent } from './component/details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: MovieListComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
];

export default routeConfig;
