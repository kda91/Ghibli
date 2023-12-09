// Tri d'un tableau par nom puis prénom  
function sortDirectors(directors) {
    return directors.sort((a, b) => {
        const [firstNameA, ...lastNameA] = a.split(" ");
        const [firstNameB, ...lastNameB] = b.split(" ");
        // Tri par ordre alphabétique en fonction du nom
        const compareLastName = lastNameA.join(" ").localeCompare(lastNameB.join(" "));
        // Si les noms sont égaux, comparer les prénoms
        return compareLastName === 0 ? firstNameA.localeCompare(firstNameB) : compareLastName;
    });
}

export default function generateDirectorsList(filmsData) {
    // Creation d'un tableau des realisateurs uniques par Set
    const uniqueDirectors = [...new Set(filmsData.map(film => film.director))];
    const sortedDirectors = sortDirectors(uniqueDirectors);
    // Tri du tableau des réalisateurs
    const sortedDirectorsLi = sortedDirectors.map(realisateur => `<li>${realisateur}</li>`);
    return sortedDirectorsLi.join("");
}
