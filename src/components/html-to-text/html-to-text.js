export class HtmlToText extends HTMLElement {
    async connectedCallback() {
        await this.initElement();
    }

    async initElement() {
        const link = this.getAttribute("src");
        const response = await fetch(link).then((response) => response.text());
        this.innerText = response;
    }

}
customElements.define('html-to-text', HtmlToText);