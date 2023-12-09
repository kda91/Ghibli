export default function displayPopup() {
    // Affiche popup
    const popup = document.querySelector('.popup');
    popup.style.display = 'block';

    // Cacher la popup après 7 secondes
    setTimeout(() => {
        popup.style.display = 'none';
    }, 10000);
}