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
        this.classList.add('vl-infotext-wrapper');

        let element = this.__maakInfotextContainer();
        this.__populateInfoTextContainer(element);
        this.__setDataVlInfotextValue();
    }

    
    __maakInfotextContainer() {
        let element = this.__link ? this.__link: document.createElement('div');
        element.classList.add('vl-infotext');
        if (this.__badge) element.classList.add('vl-infotext--badge');
        if (! this.__link) {
            this.appendChild(element);
        }
        return element;
    }
    
    __addClass(element, className) {
        if (element) {
            element.classList.add(className)
        }
    }

    __populateInfoTextContainer(container) {
        this.__appendNodeAanContainer(container, this.__value, 'vl-infotext__value');
        this.__appendNodeAanContainer(container, this.__text, 'vl-infotext__text');
    }

    __appendNodeAanContainer(container, node, className) {
        if (node) {
            node.classList.add(className);
            container.appendChild(node);
        }
    }

    __setDataVlInfotextValue() {
        if (!this.__link && this.__value) {
            this.__value.setAttribute('data-vl-infotext-value','');
        }
    }

    get __value() {
        return this.querySelector('[data-vl-value]');
    }

    get __text() {
        return this.querySelector('[data-vl-text]');
    }

    get __link() {
        return this.querySelector('a');
    }

    get __badge() {
        return this.hasAttribute('data-vl-badge');
    }

    get _stylePath() {
        return '../style.css';
    }
}

define('vl-infotext', VlInfotext, {extends: 'div'});
