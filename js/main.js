// Funções globais
function showLoader() {
    const loader = document.querySelector('.loader');
    if (loader) loader.classList.add('active');
}

function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) loader.classList.remove('active');
}

function showAlert(message, type = 'success') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    document.body.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// Inicialização geral
document.addEventListener('DOMContentLoaded', function () {
    // Esconder loader após carregamento
    setTimeout(hideLoader, 500);
});