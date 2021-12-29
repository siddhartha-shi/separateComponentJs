$(document).ready(() => {
    let nabHeader = document.querySelector('nab-header');

    if (nabHeader && !nabHeader?.getAttribute('nabbarScript')) {
        nabHeader.setAttribute('nabbarScript', true);

        let uniqueElements = [...new Set(document.querySelectorAll('nab-header'))];
        uniqueElements.forEach((element, index) => {
            // element.shadowRoot.getElementById(element.getAttribute('selectId')).value = element.getAttribute('select');

            let nabSelect = element.shadowRoot.getElementById(element.getAttribute('selectId'));
            nabSelect.value = element.getAttribute('select');

            nabSelect.addEventListener('change', changeEvent);

            function changeEvent() {
                switch (nabSelect.value) {
                    case '0':
                        window.open(window.location.href.toString().includes('http') ? '../index.html' : './index.html', '_self');
                        break;
                    case '1':
                        window.open(window.location.href.toString().includes('http') ? '../component/page1.html' : './page1.html', '_self');
                        break;
                    case '2':
                        window.open(window.location.href.toString().includes('http') ? '../component/page2.html' : './page2.html', '_self');
                        break;

                    default:
                        alert(nabSelect.value);
                        break;
                }
            }
        });
    }


    let showHelloElm = document.querySelector('show-hello');

    if (showHelloElm && !showHelloElm?.getAttribute('nabbarScript')) {
        showHelloElm.setAttribute('nabbarScript', true);

        let uniqueElements = [...new Set(document.querySelectorAll('show-hello'))];
        uniqueElements.forEach((element, index) => {
            element.shadowRoot.getElementById(element.getAttribute('selectId')).value = element.getAttribute('select');
        });
    }
});