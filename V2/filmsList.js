// Création d'une liste de films et de leurs réalisateurs et leurs images

export default function generateFilmsList(filmsData) {
    return filmsData.reduce((acc, element) => {
        // Identification des films de Miyazaki par l'ajout d'une classe
        const directorsClass = element.director === "Hayao Miyazaki" ? "miyazakiClass" : "noMiyazakiClass";
        return `<li class="${directorsClass}">${element.title} : ${element.director} <br>
        <img src="${element.image}" class="filmPoster"></li>`
            + acc;
    }, "");

}

