export default function generateFilmsByDirector(filmsData) {
    // Création d'un objet filmsByDirector qui associe chaque réalisateur à la liste de ses films
    const filmsByDirector = filmsData.reduce((acc, film) => {
        const { director, title } = film;
        if (!acc[director]) acc[director] = [];
        acc[director].push(title);
        return acc;
    }, {});

    // Transformation de l'objet filmsByDirector en HTML
    const filmsByDirectorHTML = Object.keys(filmsByDirector).reduce((acc, realisateur) => {
        const filmsListAppearance = filmsByDirector[realisateur].reduce((filmsHTML, film) => {
            return filmsHTML + `<li>${film}</li>`;
        }, "");

        return `<li>${realisateur}<ul>${filmsListAppearance}</ul></li>` + acc;
    }, "");

    return filmsByDirectorHTML;
}
