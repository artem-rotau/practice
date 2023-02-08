'use strict';


let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (numberOfFilms <= 10) {
    alert('Просмотренно мало фильмов.');
} else if (numberOfFilms > 10 && numberOfFilms <= 30) {
    alert('Вы классический зритель.');
} else if (numberOfFilms > 30) {
    alert('Вы киноман.');
}


for (let i = 0; i < 2; i++) {
    let movie = prompt('Один из последних просмотренных фильмов?', '');
    let filmScore = prompt('На сколько оцените его?', '');

    if (movie == '' || filmScore == '' || movie == null || filmScore == null || movie.length >= 50 || filmScore.length >= 50) {
        alert('Строка не может быть пустой, её нельзя отменить, длинна строки не должна привышать 50 символов.');
        i--;
    } else {
        personalMovieDB.movies[movie] = filmScore;
    }
}

console.log(personalMovieDB);