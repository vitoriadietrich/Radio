// Captura todos os inputs de perfil
const inputs = document.querySelectorAll('input[name="profile"]');

inputs.forEach(input => {
    input.addEventListener('change', (e) => {
        console.log("Perfil selecionado:", e.target.value);
        // Aqui você pode adicionar animações extras ou sons se desejar
    });
});