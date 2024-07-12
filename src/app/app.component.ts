import { Component } from "@angular/core";
import { MovieListComponent } from "../app/movie-list/movie-list.component";
import { ContainerComponent } from "../../src/app/shared/container/container.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [MovieListComponent, ContainerComponent, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {}
