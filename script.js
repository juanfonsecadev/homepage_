document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var animationTopics = document.querySelector('#topics');
        var posicaoElemento = animationTopics.getBoundingClientRect().bottom;
        var posicaoScroll = window.innerHeight;

        var posicaoElemento2 = animationTopics.getBoundingClientRect().top; 

        if (posicaoElemento <= posicaoScroll && posicaoElemento2 >= 0) {
            animationTopics.classList.remove('escondido'); // Remover classe 'escondido' para garantir que o elemento esteja visível
            animationTopics.classList.add('aparecer'); // Adicionar classe 'aparecer'
        } else {
            animationTopics.classList.remove('aparecer'); // Remover classe 'aparecer' para garantir que o elemento não seja visível
            animationTopics.classList.add('escondido'); // Adicionar classe 'escondido'
        }
    });
});