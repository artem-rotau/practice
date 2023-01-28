'use strict';

let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
let oneMovie = prompt('Один из последних просмотренных фильмов?', '');
let oneFilmScore = prompt('На сколько оцените его?', '');
let secondMovie = prompt('Один из последних просмотренных фильмов?', '');
let secondFilmScore = prompt('На сколько оцените его?', '');



let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[oneMovie] = oneFilmScore;
personalMovieDB.movies[secondMovie] = secondFilmScore;

console.log(personalMovieDB);