$.getJSON("/api/single-movie/" + id)
  .then((movie) => {
    $("#movie-details").hide();
    $("#title").text(movie.title);
    $("#tagline").text(movie.tagline);

    $("#poster").append(
      `<img src="${IMAGE_URL}${movie.poster_path}" class="responsive-img" alt="${movie.title}"/>`
    );

    $("#year").text(movie.release_date.substr(0, 4));
    movie.genres.forEach((genre) => {
      $("#genres").append(`<span><em>${genre.name} | </em></span>`);
    });
    $("#synopsis").text(movie.overview);
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    $("#movie-details").fadeIn();
  });

$("#comment-form").submit((e) => {
  e.preventDefault();
  console.log($("#comment").val());
  $.post(`/movies/${id}`, { comment: $("#comment").val() })
    .then((response) => {
      console.log(response);
      const html = `
    <div>
      <p><strong>${response.comment}</strong></p>
      <p>${response.created_at}</p>
    </div>
      `;
      $("#comment-body").prepend(html);
    })
    .catch((error) => {
      console.log(error);
    });
});
