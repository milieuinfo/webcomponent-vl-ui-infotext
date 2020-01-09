import { NativeVlElement, define } from '/node_modules/vl-ui-core/vl-core.js';



/**
 * VlInfotext
 * @class
 * @classdesc 
 * 
 * @extends VlElement
 * 
 * @property {boolean} data-vl-badge - Attribuut wordt gebruikt om een badge te maken. Indien weggelaten wordt er geen badge gemaakt.
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-infotext/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-infotext/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-infotext.html|Demo}
 * 
 */
export class VlInfotext extends NativeVlElement(HTMLDivElement) {

    constructor() {
        super();
        if (this.__heeftEénChild()) {
            this.classList.add('vl-infotext-wrapper');
            this.__zetJuisteClassOpContainerElement();
            this.__addClass(this.__value, 'vl-infotext__value');
            this.__addClass(this.__text, 'vl-infotext__text');
        } else {
            console.warn('De <infotext> component mag slechts 1 child hebben (<div> of <a>)');
        }
    }

    __heeftEénChild() {
        return this.children.length == 1;
    }

    __zetJuisteClassOpContainerElement() {
        this.firstElementChild.classList.add('vl-infotext');
        if (this.__badge) {
            this.firstElementChild.classList.add('vl-infotext--badge');
        }
    }
    
    __addClass(element, className) {
        if (element) {
            element.classList.add(className)
        }
    }

    get __value() {
        return this.querySelector('[data-vl-value]');
    }

    get __text() {
        return this.querySelector('[data-vl-text]');
    }

    get __badge() {
        return this.hasAttribute('data-vl-badge');
    }

    get _stylePath() {
        return '../style.css';
    }
}

define('vl-infotext', VlInfotext, {extends: 'div'});
