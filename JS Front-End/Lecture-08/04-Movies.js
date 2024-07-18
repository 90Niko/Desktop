// function movies(commands) {
//     let movies = {};

//     for (let command of commands) {
//         if (command.includes('addMovie')) {
//             let movieName = command.split('addMovie ')[1];
//             if (!movies.hasOwnProperty(movieName)) {
//                 movies[movieName] = {};
//                 movies[movieName].name = movieName;
//             }
//         } else if (command.includes('directedBy')) {
//             let [movieName, director] = command.split(' directedBy ');
//             if (movies.hasOwnProperty(movieName)) {
//                 movies[movieName].director = director;
//             }
//         } else if (command.includes('onDate')) {
//             let [movieName, date] = command.split(' onDate ');
//             if (movies.hasOwnProperty(movieName)) {
//                 movies[movieName].date = date;
//             }
//         }
//     }

//     for (let movie in movies) {
//         if (movies[movie].name && movies[movie].director && movies[movie].date) {
//             console.log(JSON.stringify(movies[movie]));
//         }
//     } 
// }


function storeMovies(commands) {

    const database = [];

  for (let cmd of commands) {
        if (cmd.startsWith("addMovie")) {

            const name = cmd.split("addMovie ").filter(Boolean);
            database.push({ name })

        } else if (cmd.includes("directedBy")) {

            const [name, director] = cmd.split(" directedBy ");
            const movie = database.find(m => m?.name === name);

            if (movie?.name) {
                movie.director = director;
            }
        } else if (cmd.includes("onDate")) {

            const [name, date] = cmd.split(" onDate ");
            const movie = database.find(m => m?.name === name);

            if (movie?.name) {
                movie.date = date;
            }
        }
    }

   for (let movie of database) {
        // if (movie.name && movie.director && movie.date) {
        //     console.log(JSON.stringify(movie));
        // }
        console.log(JSON.stringify(database));
    }
}

storeMovies([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford  Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Batman onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen"
]);