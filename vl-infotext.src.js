import { NativeVlElement, define, awaitScript, awaitUntil } from '/node_modules/vl-ui-core/vl-core.js';

Promise.all([
    awaitScript('util', '/node_modules/@govflanders/vl-ui-util/dist/js/util.min.js'),
    awaitScript('infotext', '/node_modules/@govflanders/vl-ui-infotext/dist/js/infotext.min.js'),
    awaitUntil(() => window.vl && window.vl.infotext)]
  ).then(() => define('vl-infotext', VlInfotext, {extends: 'div'}));


/**
 * VlInfotext
 * @class
 * @classdesc Gebruik de infotext om belangrijke getallen weer te geven.
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
    static get _observedAttributes() {
        return ['data-vl-badge'];
    }

    connectedCallback() {
        if (this.__hasOneChild()) {
            this.classList.add('vl-infotext-wrapper');
            this.__setupChildClasses();
            this._data_vl_badgeChangedCallback(null, this.getAttribute('data-vl-badge')); 
            this._valueObserver = this.__observeValueElement(() => this.__processValueElement());
            this._textObserver = this.__observeTextElement(() => this.__processTextElement());
        } else {
            console.warn('De infotext component mag slechts 1 child hebben (<div> of <a>)');
        }
    }

    disconnectedCallback() {
        if (this._valueObserver) {
            this._valueObserver.disconnect();
        }
        if (this._textObserver) {
            this._textObserver.disconnect();
        }
	}

    __setupChildClasses() {
        if (this.firstElementChild) {
            this.firstElementChild.classList.add('vl-infotext');
        }

        if (this.__valueElement) {
            this.__valueElement.classList.add('vl-infotext__value');
            this.__valueElement.setAttribute('data-vl-infotext-value', '');
            this.__valueElement.setAttribute('data-vl-js-dress', 'false');
        }

        if (this.__textElement) {
            this.__textElement.classList.add('vl-infotext__text');
            this.__textElement.setAttribute('data-vl-js-dress', 'false');
        }
    }

    __hasOneChild() {
        return this.children.length == 1;
    }

    get __valueElement() {
        return this.querySelector('[data-vl-value]');
    }

    get __textElement() {
        return this.querySelector('[data-vl-text]');
    }

    get _stylePath() {
        return '../style.css';
    }

    _data_vl_badgeChangedCallback(oldValue, newValue) {
        if (this.firstElementChild) {
            this._toggleClass(this.firstElementChild, newValue, 'vl-infotext--badge')
        }
    }

    __observeElement(element, callback) {
        const observer = new ResizeObserver(callback);
        observer.observe(element);
		return observer;
    }

    __observeValueElement(callback) {
        return this.__observeElement(this.__valueElement, callback);
	}

    __observeTextElement(callback) {
        return this.__observeElement(this.__textElement, callback);
	}

    __processValueElement() {
        vl.infotext.dress(this.__valueElement);
    }

    __processTextElement() {
        vl.infotext.dress(this.__textElement);
    }
}