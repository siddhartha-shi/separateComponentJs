customElements.define('nab-header', class extends HTMLElement {
    connectedCallback() {

        let shadowDiv = document.createElement('div');
        let shadowTemplate = document.createElement('template');
        shadowTemplate.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <select id=${this.getAttribute('selectId')} class="custom-select">
                <option value="" hidden></option>
                <option value="0">Home</option>
                <option value="1">Page 1</option>
                <option value="2">Page 2</option>
            </select>
        </div>
    </nav>
`;
        shadowDiv.appendChild(shadowTemplate.content);

        let script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js';
        script.integrity = 'sha512-n/4gHW3atM3QqRcbCn6ewmpxcLAHGaDjpEBu4xZd47N0W2oQ+6q7oc3PXstrJYXcbNU1OHdQ1T7pAP+gi5Yu8g==';
        script.crossOrigin = 'anonymous';
        script.referrerPolicy = 'no-referrer"';
        shadowDiv.appendChild(script);

        script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
        script.integrity = 'sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==';
        script.crossOrigin = 'anonymous';
        script.referrerPolicy = 'no-referrer"';
        shadowDiv.appendChild(script);

        script = document.createElement('script');
        script.src = window.location.href.toString().includes('http') ? '../header/nabbar.js' : './header/nabbar.js';
        shadowDiv.appendChild(script);


        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        shadowRoot.appendChild(shadowDiv);
    }
});