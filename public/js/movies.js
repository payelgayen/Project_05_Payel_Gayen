$("#movies").hide();
$.getJSON(BASE_URL + "/discover/movie", apiOptions)
  .then((data) => {
    const { results } = data;
    const { page } = data;
    console.log(results);
    results.forEach((movie) => {
      console.log(movie);
      $("#movies").append(
        `
        <div class="col s12 m4 l3 movie-container">
        <a href="/movie/${movie.id}">
        <img src="${IMAGE_URL}${movie.poster_path}" class="responsive-img" alt="${movie.title}"/>
        </a>
        </div>
        `
      );
    });

    $(".preloader-wrapper").hide();
    $("#movies").show();
  })

  .catch((err) => {
    console.log(err);
  });
