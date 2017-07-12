// Importing required libraries.
import { Injectable } from "@angular/core"
import { Movie, IRating } from "./movie"

@Injectable()
export class MovieService {
    // Movie collection Array
    movieList: Array<Movie> = new Array<Movie>();
    
    // Get movie data.
    getMovieList() {
        return this.movieList = [];
    }

    // Add movie data.
    addMovie(currentMovie: Movie) {
        this.movieList.unshift(currentMovie);
    }
}

@Injectable()
export class RatingService {
    movieRatings: IRating[] = [];

    // Get Ratings.
    getRatings() {
       return this.movieRatings = [
            {id: 1, title: "*"},
            {id: 2, title: "**"},
            {id: 3, title: "***"},
            {id: 4, title: "****"},
            {id: 5, title: "*****"},
        ]
    }
}