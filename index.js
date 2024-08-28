function filtrarPartidos(criterio) {
    let partidos = document.querySelectorAll('tbody tr');
    partidos.forEach(partido => {
        let resultado = partido.getAttribute('data-resultado').trim();

        if (criterio === 'todos') {
            partido.style.display = '';
        } else if (criterio === 'ganado' && resultado.includes('ganado')) {
            partido.style.display = '';
        } else if (criterio === 'empatado' && resultado.includes('empatado')) {
            partido.style.display = '';
        } else if (criterio === 'perdido' && resultado.includes('perdido')) {
            partido.style.display = '';
        } else {
            partido.style.display = 'none';
        }
    });
}



document.getElementById('filtro-todos').addEventListener('click', () => filtrarPartidos('todos'));
document.getElementById('filtro-ganado').addEventListener('click', () => filtrarPartidos('ganado'));
document.getElementById('filtro-empatado').addEventListener('click', () => filtrarPartidos('empatado'));
document.getElementById('filtro-perdido').addEventListener('click', () => filtrarPartidos('perdido'));