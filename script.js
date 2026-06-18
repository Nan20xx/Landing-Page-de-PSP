// --- FUNCIONALIDAD DEL CARRUSEL ---
const track = document.getElementById('track');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const contenedoresIndicadores = document.getElementById('indicadores');

const imagenes = document.querySelectorAll('.carrusel-tracks img');
let index = 0; 

// Crear puntitos dinámicamente
imagenes.forEach((_, i) => {
    const punto = document.createElement('div');
    punto.classList.add('punto');
    if (i === 0) punto.classList.add('activo'); 
    
    punto.addEventListener('click', () => {
        index = i;
        actualizarCarrusel();
    });
    
    contenedoresIndicadores.appendChild(punto);
});

const puntos = document.querySelectorAll('.punto');

function actualizarCarrusel() {
    track.style.transform = `translateX(-${index * 100}%)`;
    puntos.forEach(p => p.classList.remove('activo'));
    puntos[index].classList.add('activo');
}

btnNext.addEventListener('click', () => {
    index++;
    if (index >= imagenes.length) {
        index = 0; 
    }
    actualizarCarrusel();
});

btnPrev.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = imagenes.length - 1; 
    }
    actualizarCarrusel();
});


// --- FUNCIONALIDAD MODO OSCURO ---
const btnDarkMode = document.getElementById('btn-dark-mode');

btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        btnDarkMode.textContent = '☀️';
    } else {
        btnDarkMode.textContent = '🌙';
    }
});


// --- NUEVO: FUNCIONALIDAD MENÚ HAMBURGUESA ---
const btnHamburguesa = document.getElementById('btn-hamburguesa');
const navLinks = document.getElementById('nav-links');
const enlaces = document.querySelectorAll('.nav-links a');

// Abrir o cerrar menú al pulsar la hamburguesa
btnHamburguesa.addEventListener('click', () => {
    btnHamburguesa.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// Cerrar el menú automáticamente al hacer clic en cualquier enlace (para viajar por la página)
enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        btnHamburguesa.classList.remove('open');
        navLinks.classList.remove('open');
    });
});