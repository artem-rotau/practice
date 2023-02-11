'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let yuorGenre = prompt(`Ваш любимый жанр ${i + 1}`);
        if (yuorGenre != '' && yuorGenre != null && yuorGenre.length <= 50 && isNaN(yuorGenre)) {
            personalMovieDB.genres[i] = yuorGenre;
        } else {
            i--;
        }
    }
}
writeYourGenres();


function detectPersonalLevel() {
    if (numberOfFilms <= 10) {
        console.log('Просмотренно мало фильмов.');
    } else if (numberOfFilms > 10 && numberOfFilms <= 30) {
        console.log('Вы классический зритель.');
    } else if (numberOfFilms > 30) {
        console.log('Вы киноман.');
    } else {
        console.log('Произошла ошибка.');
    }
}
detectPersonalLevel();


function rememberMyFilms() {
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
}
rememberMyFilms();

function showMyDB(element) {
    if (element === false) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);
