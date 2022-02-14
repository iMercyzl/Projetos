document.querySelectorAll('.accordionQuestion').forEach(item => {
    item.addEventListener('click', (event) => {
        let accColapse = item.nextElementSibling;

        if(!item.classList.contains('open')) {
            

            accColapse.style.display = 'block';
            let accHeight = accColapse.clientHeight;

            setTimeout(() => {
                accColapse.style.heigth = accHeight + 'px';
            accColapse.style.display = '';
            }, 1);

            
            accColapse.classList = 'accordionCollapse collapsing';


            setTimeout(() => {
                accColapse.classList = 'accordionCollapse collapse open';
                
            }, 300);
        }
        else {
            accColapse.classList = 'accordionCollapse collapsing';

            setTimeout(() => {
                accColapse.style.heigth = '0px';
            }, 1)

            setTimeout(() => {
                accColapse.classList = 'accordionCollapse collapse';
            }, 300);
        }

        item.classList.toggle('open');
    });
});