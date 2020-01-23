//function that returns html that will display movie title and date (HTML representation of our movie)
const movieFactory = (movie) => {
    return `
        <section class="movie">
            <div>Movie: ${movie.title}</div>
            <div>Date: ${movie.yearReleased}</div>
        </section>
    `;
};
//function that accepts array of movies, iterates over array, and generates html to put on the dom. 
//start with: takes list of movies as argument, iterates over that list and displays each one to the console
//change function such that whenever we call it, instead of writing movies to console it will write to dom

const renderMovies = (movies) => {
    const container = document.querySelector("#movie-container");
    movies.forEach(movie => {
        const movieHtml = movieFactory(movie);
        container.innerHTML += movieHtml;
    });
};