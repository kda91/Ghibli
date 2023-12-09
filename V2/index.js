import fetchData from "./fetchData.js";
import generateFilmsList from "./filmsList.js";
import generateDirectorsList from "./directorsList.js";
import generateFilmsByDirector from "./filmsByDirector.js";
import displayPopup from "./displayPopup.js";

async function main() {
    //cas nrml
    try {
        // Recuperation de la bdd dans le .json
        const filmsData = await fetchData();

        // Insertion du HTML correspondant dans <ol id="filmsBy">ICI</ol>
        const filmsListHTML = generateFilmsList(filmsData);
        document.getElementById("filmsBy").insertAdjacentHTML("beforeend", filmsListHTML);

        // Insertion du HTML correspondant dans <ol id="directors">ICI</ol>
        const directorsListHTML = generateDirectorsList(filmsData);
        document.getElementById("directors").insertAdjacentHTML("beforeend", directorsListHTML);

        // Insertion du HTML correspondant dans <ul id="directorsfilmsList">ICI</ul>
        const filmsByDirectorHTML = generateFilmsByDirector(filmsData);
        document.getElementById("directorsfilmsList").innerHTML = filmsByDirectorHTML;

        // Affichage d'une popup de bienvenue
        displayPopup();
    }

    //cas erreur
    catch (error) {
        `Erreur lors de la récupération des données depuis le json : ${error}`
    }
}

main();
