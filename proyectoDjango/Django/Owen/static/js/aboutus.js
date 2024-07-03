const scrollingText = document.getElementById('scrollingText');
const container = document.querySelector('.container');
const textContainer = document.querySelector('.text-container');
const initialFontSize = 50;
let currentFontSize = initialFontSize;
let isMinSizeReached = false;

container.addEventListener('scroll', () => {
    const scrollTop = container.scrollTop;
    const delta = scrollTop - container.previousScrollTop;
    const newFontSize = currentFontSize - (delta / 10);

    // Verificar si se ha alcanzado el tamaño mínimo
    if (newFontSize <= 10) {
        isMinSizeReached = true;
        container.style.overflowY = 'visible'; // Permitir el scroll hacia abajo
    } else {
        container.style.overflowY = 'hidden'; // Deshabilitar el scroll hacia abajo
    }

    if (!isMinSizeReached) {
        scrollingText.style.fontSize = `${newFontSize}px`;
        currentFontSize = newFontSize;
    }

    container.previousScrollTop = scrollTop;
});

container.addEventListener('wheel', (e) => {
    e.preventDefault();
    const deltaY = e.deltaY;
    const delta = deltaY > 0 ? 10 : -10;
    const newFontSize = currentFontSize - (delta / 10);

    // Verificar si se ha alcanzado el tamaño mínimo
    if (newFontSize <= 10) {
        isMinSizeReached = true;
        container.style.overflowY = 'visible'; // Permitir el scroll hacia abajo
    } else {
        container.style.overflowY = 'hidden'; // Deshabilitar el scroll hacia abajo
    }

    if (!isMinSizeReached) {
        scrollingText.style.fontSize = `${newFontSize}px`;
        currentFontSize = newFontSize;
    }
});

scrollingText.classList.add('centered');




