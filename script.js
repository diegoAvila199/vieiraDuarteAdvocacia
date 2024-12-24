document.addEventListener('DOMContentLoaded', function() {
    const questBoxes = document.querySelectorAll('#faq-section .quest-bx h3');
    
    questBoxes.forEach(function(questBox) {
        questBox.addEventListener('click', function() {
            const answer = this.nextElementSibling; // A resposta vem depois do título
            const arrow = this.querySelector('.arrow'); // A seta é o ícone dentro do <h3>
            
            // Alterna a visibilidade da resposta
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block'; // Mostra a resposta
            } else {
                answer.style.display = 'none'; // Esconde a resposta
            }
            
            // Alterna a rotação da seta
            arrow.classList.toggle('open');
        });
    });
});
