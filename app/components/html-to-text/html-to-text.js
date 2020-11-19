export class HtmlToText extends HTMLElement {
    constructor() {
        super();
        this._replaceContent();
    }

    /**
     * Converts the inner html into text
     * @private
     */
    _replaceContent() {
        const content = this.innerHTML;
        this.innerHTML = null;
        this.innerText = content;
    }
}
customElements.define('html-to-text', HtmlToText);