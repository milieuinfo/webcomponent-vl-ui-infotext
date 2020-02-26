import { NativeVlElement, define } from 'vl-ui-core';
import '@govflanders/vl-ui-util/dist/js/util.js';
import '@govflanders/vl-ui-infotext/dist/js/infotext.js';

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
            this._childObserver = this.__observeChildElement((records) => this.__processChildElementChange(records));
            this._childResizeObserver = this.__observeChildElementResize(() => this.__processChildElementResize());
        } else {
            console.warn('De infotext component mag slechts 1 child hebben (<div> of <a>)');
        }
    }

    disconnectedCallback() {
        if (this._childObserver) {
            this._childObserver.disconnect();
        }

        if (this._childResizeObserver) {
            this._childResizeObserver.disconnect();
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

    _data_vl_badgeChangedCallback(oldValue, newValue) {
        if (this.firstElementChild) {
            this._toggleClass(this.firstElementChild, newValue, 'vl-infotext--badge')
        }
    }

    __observeChildElement(callback) {
        const observer = new MutationObserver(callback);
        observer.observe(this.firstElementChild, { childList: true, subtree: true });
        return observer;
    }

    __observeChildElementResize(callback) {
        const observer = new ResizeObserver(callback);
        observer.observe(this.firstElementChild);
        return observer;
    }

    __processChildElementChange(records) {
        records.forEach(record => {
            if (VlInfotext.__isMutationRecordOfTypeChildList(record) && VlInfotext.__isMutationRecordTextContentChanged(record)) {
                this.__dress();
            }
        });
    }

    __processChildElementResize() {
        this.__dress();
    }

    __dress() {
        vl.infotext.dress(this.__valueElement);
        vl.infotext.dress(this.__textElement);
    }

    static __isMutationRecordOfTypeChildList(record) {
        return record.type == 'childList';
    }

    static __hasMutationRecordOneChangedNode(record) {
        const hasOneAddedNode = record.addedNodes && record.addedNodes.length == 1;
        const hasOneRemovedNode = record.removedNodes && record.removedNodes.length == 1;
        return hasOneAddedNode && hasOneRemovedNode;
    }

    static __isMutationRecordTextContentChanged(record) {
        return this.__hasMutationRecordOneChangedNode(record) && record.addedNodes[0].textContent != record.removedNodes[0].textContent;
    }
}

define('vl-infotext', VlInfotext, { extends: 'div' });
