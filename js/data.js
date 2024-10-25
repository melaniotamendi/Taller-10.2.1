document.addEventListener('DOMContentLoaded', function() {
const storedData= localStorage.getItem('inputUsuario');
const dataElement = document.getElementById('data');
    
    if (storedData) {
        dataElement.textContent = storedData; 
    } else {
        dataElement.textContent = 'No hay datos guardados.';
    }
});