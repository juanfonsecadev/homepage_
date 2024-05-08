document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var animationTopics = document.querySelector('#topics');
        var posicaoElemento = animationTopics.getBoundingClientRect().top;
        var posicaoScroll = window.innerHeight;

        if (posicaoElemento < posicaoScroll) {
            animationTopics.classList.add('aparecer');
        } else { 
            animationTopics.classList.add ('escondido');
        }
    });
});
