var elementosFaq = document.querySelectorAll('.faq')

elementosFaq.forEach(function(faq) {
    faq.addEventListener('click', function() {
        faq.classList.toggle('ativa')
    })
})


