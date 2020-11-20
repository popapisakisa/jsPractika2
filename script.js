"use strict";
const numerOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');//промпт вопроса
const numerOfFilmsDB = { // создание объекта 
    count: numerOfFilms, // переменной для ответа
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt("Один из последних просмотренных фильмов?", ''),
//         b = +prompt("На сколько вы его оцените?", ''),
//         c = prompt("Один из последних просмотренных фильмов?", ''),
//         d = +prompt("На сколько вы его оцените?", '');
// numerOfFilmsDB.movies[a] = b;
// numerOfFilmsDB.movies[c] = d;
for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", '');
    const b = prompt("На сколько вы его оцените?", '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
           numerOfFilmsDB.movies[a] = b;
            console.log("done");
        } 
        else{
            console.log("error");
            i--;
        }

if (numerOfFilmsDB.count < 10){
    console.log("Посмотрено довольно мало фильмов");
}
else if (numerOfFilmsDB.count >= 10 && numerOfFilmsDB.count < 20){
    console.log("Вы обычный чел");
}
else if (numerOfFilmsDB.count >= 20){
    console.log("Ебать ты киноман");

}
else{
    console.log("Ошибка");
}
}
console.log(numerOfFilmsDB);