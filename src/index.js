const movieCardMarkup = '<div class="movie-card"></div>';

const movie = { markup: movieCardMarkup, id: 2 };

const addToQueueBtnRef = document.querySelector('.add-to-queue');
const addTowatchedBtnRef = document.querySelector('.add-to-watched');
const removeFromQueueBtnRef = document.querySelector('.remove-from-queue');
const removeFromWatchedBtnRef = document.querySelector('.remove-from-watched');

addToQueueBtnRef.addEventListener('click', addMovieToQueue);
addTowatchedBtnRef.addEventListener('click', addMovieToWatched);
removeFromQueueBtnRef.addEventListener('click', removeMovieFromQueue);
removeFromWatchedBtnRef.addEventListener('click', removeMovieFromWatched);

renderMovieCardsToQueue();
renderMovieCardsToWatched();

// function action(e) {
//   if (e.currentTarget.classList.contains('add')) {
//     addMovieToQueue();
//     console.log(e.currentTarget);
//     return;
//   }
//   if (e.currentTarget.classList.contains('remove')) {
//     removeMovieFromQueue();
//   }
// }

function addMovieToQueue() {
  const savedInQueue = localStorage.getItem('queue');
  const arrOfQueueMovie = JSON.parse(savedInQueue) || [];

  //   const arrOfMovieId = arrOfQueueMovie.map(movie => movie.id);

  //   if (arrOfMovieId.includes(movie.id)) {
  //     addToQueueBtnRef.textContent = 'remove from queue';
  //     addToQueueBtnRef.classList.replace('add', 'remove');

  //     return;
  //   }

  arrOfQueueMovie.push(movie);
  localStorage.setItem('queue', JSON.stringify(arrOfQueueMovie));
  renderMovieCardsToQueue();
  return arrOfQueueMovie;
}

function addMovieToWatched() {
  const savedInwatched = localStorage.getItem('watched');
  const arrOfwatchedMovie = JSON.parse(savedInwatched) || [];

  arrOfwatchedMovie.push(movie);
  localStorage.setItem('watched', JSON.stringify(arrOfwatchedMovie));
  renderMovieCardsToWatched();
  return arrOfwatchedMovie;
}

function removeMovieFromQueue(e) {
  const savedInQueue = localStorage.getItem('queue');
  let arrOfQueueMovie = JSON.parse(savedInQueue);
  const newArrOfQueueMovie = arrOfQueueMovie.filter(
    movieCard => movie.id !== movieCard.id
  );
  localStorage.setItem('queue', JSON.stringify(newArrOfQueueMovie));
  renderMovieCardsToQueue();
  return newArrOfQueueMovie;
}

function removeMovieFromWatched(e) {
  const savedInWatched = localStorage.getItem('watched');
  let arrOfWatchedMovie = JSON.parse(savedInWatched);
  const newArrOfWatchedMovie = arrOfWatchedMovie.filter(
    movieCard => movie.id !== movieCard.id
  );
  localStorage.setItem('watched', JSON.stringify(newArrOfWatchedMovie));
  renderMovieCardsToWatched();
  return newArrOfWatchedMovie;
}

function renderMovieCardsToQueue() {
  const savedInQueue = localStorage.getItem('queue');

  if (savedInQueue) {
    const arrOfQueueMovie = JSON.parse(savedInQueue);
    const markup = arrOfQueueMovie.map(movieCard => movieCard.markup).join('');

    document.querySelector('.queue-container').innerHTML = markup;
  }
}

function renderMovieCardsToWatched() {
  const savedInwatched = localStorage.getItem('watched');

  if (savedInwatched) {
    const arrOfwatchedMovie = JSON.parse(savedInwatched);
    const markup = arrOfwatchedMovie
      .map(movieCard => movieCard.markup)
      .join('');

    document.querySelector('.watched-container').innerHTML = markup;
  }
}
