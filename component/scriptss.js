customElements.define('show-hello', class extends HTMLElement {    
    connectedCallback() {
        let shadowDiv = document.createElement('div');
        let shadowTemplate = document.createElement('template');
        shadowTemplate.innerHTML = `
        <p>Hello, ${this.getAttribute('name')}</p>
        <select id='${this.getAttribute('selectId')}' class="custom-select">
                <option value="0">Home</option>
                <option value="1">Page 1</option>
                <option value="2">Page 2</option>
            </select>
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

        const shadow = this.attachShadow({
            mode: 'open'
        });
        shadow.appendChild(shadowDiv);
    }
});