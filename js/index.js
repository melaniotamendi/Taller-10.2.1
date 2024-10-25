document.getElementById('buttonText').addEventListener('click', function() {
    const dato = document.getElementById('inputText').value; 
    localStorage.setItem('inputUsuario', dato);  
});
