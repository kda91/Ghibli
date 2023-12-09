export default async function fetchData() {
    //cas nrml
    try {
        const data = await fetch("https://ghibliapi.vercel.app/films");
        return data.json(); //recuperation de la bdd convertie en json
    }
    //cas erreur
    catch (error) {
        console.error(`Erreur lors de la récupération des données depuis l'API : ${error}`);
    }
}
