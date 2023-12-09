// Recuperation de la bdd
async function getData() {
    try {
        const data = await fetch("https://ghibliapi.vercel.app/films");
        const filmsData = await data.json();

        // CODE
        //! PARTIE 1 : Films de H. Miyazaki

        // Création d'une liste de films et de leurs réalisateurs
        const filmsListLi = filmsData.reduce((acc, element) => {
            // Identification des films de Miyazaki par l'ajout d'une classe
            const directorsClass = element.director === "Hayao Miyazaki" ? "miyazakiClass" : "noMiyazakiClass";
            return `<li class="${directorsClass}"> ${element.title} : ${element.director} </li >` + acc;
        }, "");

        // Insertion de la liste dans <ol id="filmsBy">ICI</ol>
        const filmsListHTML = document.getElementById("filmsBy");
        filmsListHTML.insertAdjacentHTML("beforeend", filmsListLi);

        //! PARTIE 2 : Réalisateurs

        // Creation d'un tableau des realisateurs uniques par Set
        const uniqueDirectors = [...new Set(filmsData.map(film => film.director))];

        // Tri des realisateur 
        const sortedDirectors = uniqueDirectors.sort((a, b) => {
            const [firstNameA, ...lastNameA] = a.split(" ");
            const [firstNameB, ...lastNameB] = b.split(" ");
            // Tri par ordre alphabétique en fonction du nom
            const compareLastName = lastNameA.join(" ").localeCompare(lastNameB.join(" "));
            // Si les noms sont égaux, comparer les prénoms
            return compareLastName === 0 ? firstNameA.localeCompare(firstNameB) : compareLastName;
        });

        // Transformation de l'objet du tableau sortedDirectors en HTML
        const sortedDirectorsLi = sortedDirectors.map(realisateur => `<li>${realisateur}</li>`);
        const directorsListLi = sortedDirectorsLi.join("");

        // Insertion de la liste dans <ol id="directors">ICI</ol>
        const directorsListHTML = document.getElementById("directors");
        directorsListHTML.insertAdjacentHTML("beforeend", directorsListLi);

        //! PARTIE 3 : Films par réalisateur

        const filmsByDirector = filmsData.reduce((acc, film) => {
            const { director, title } = film;
            if (!acc[director]) acc[director] = [];
            acc[director].push(title);
            return acc;
        }, {});

        // Transformation de l'objet filmsByDirector en HTML
        const filmsByDirectorHTML = Object.keys(filmsByDirector).reduce((html, realisateur) => {
            const filmsListAppearance = filmsByDirector[realisateur].reduce((filmsHTML, film) => {
                return filmsHTML + `<li>${film}</li>`;
            }, "");

            return `<li>${realisateur}<ul>${filmsListAppearance}</ul></li>` + html;
        }, "");

        // Insertion de la liste dans <ul id="directorsfilmsList">ICI</ul>
        const directorsFilmsList = document.getElementById("directorsfilmsList");
        directorsFilmsList.innerHTML = filmsByDirectorHTML;

    } catch (error) {
        console.error(`Erreur lors de la récupération des données depuis l'API : ${error}`);
    }
}

getData();