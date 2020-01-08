import { VlElement, define } from '/node_modules/vl-ui-core/vl-core.js';



/**
 * VlInfotext
 * @class
 * @classdesc 
 * 
 * @extends VlElement
 * 
 * @property {boolean} badge - Attribuut wordt gebruikt om een badge te maken. Indien weggelaten wordt er geen badge gemaakt.
 * @property {boolean} link - Attribuut wordt gebruikt om een badge te maken. Indien weggelaten wordt er geen badge gemaakt.
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-infotext/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-infotext/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-infotext.html|Demo}
 * 
 */
export class VlInfotext extends VlElement(HTMLElement) {

    static get _observedAttributes() {
        return ['badge', 'link'];
    }

    constructor() {

       /*
        super(`
            <style>
                @import '../style.css';
            </style>

            <div class="vl-infotext-wrapper">
                <div class="vl-infotext">
                    <div class="vl-infotext__value" data-vl-infotext-value><slot name='value'></slot></div>
                    <div class="vl-infotext__text"><slot name='text'></slot></div>
                </div>
            </div>
        `);

        */

        super(`
            <style>
                @import '../style.css';
            </style>

            <div class="vl-infotext-wrapper">
            </div>
    
        `);

        let hasBadgeAttribute = this.hasAttribute("badge");
        let hasLinkAttribute = this.hasAttribute("link");


        let element = document.createElement(hasLinkAttribute?'a':'div');
        if (hasLinkAttribute) {
            element.setAttribute('href', '#');
        }
        element.classList.add('vl-infotext');


        let valueDiv = document.createElement('div');
        valueDiv.classList.add('vl-infotext__value');

        valueDiv.appendChild(this.__createSlot('value'));


        let textDiv = document.createElement('div');
        textDiv.classList.add('vl-infotext__text');

        textDiv.appendChild(this.__createSlot('text'));

        element.appendChild(valueDiv);
        element.appendChild(textDiv);

        

        this._element.appendChild(element);

    }


    __createSlot(name) {
        let slot = document.createElement('slot');
        slot.setAttribute('name', name);
        return slot;
    }

    _badgeChangedCallback(oldValue, newValue) {
        console.log('_badgeChangedCallback: ' + oldValue);
        console.log('_badgeChangedCallback: ' + newValue);
    }


    _linkChangedCallback(oldValue, newValue) {
        console.log('_linkChangedCallback: ' + oldValue);
        console.log('_linkChangedCallback: ' + newValue);
    }

}

define('vl-infotext', VlInfotext);
