import{NativeVlElement,define,awaitScript,awaitUntil}from"/node_modules/vl-ui-core/vl-core.js";Promise.all([awaitScript("util","/node_modules/@govflanders/vl-ui-util/dist/js/util.min.js"),awaitScript("infotext","/node_modules/@govflanders/vl-ui-infotext/dist/js/infotext.min.js"),awaitUntil(()=>window.vl&&window.vl.infotext)]).then(()=>define("vl-infotext",VlInfotext,{extends:"div"}));export class VlInfotext extends(NativeVlElement(HTMLDivElement)){static get _observedAttributes(){return["data-vl-badge"]}connectedCallback(){this.__hasOneChild()?(this.classList.add("vl-infotext-wrapper"),this.__setupChildClasses(),this._data_vl_badgeChangedCallback(null,this.getAttribute("data-vl-badge")),this._valueObserver=this.__observeValueElement(()=>this.__processValueElement()),this._textObserver=this.__observeTextElement(()=>this.__processTextElement())):console.warn("De infotext component mag slechts 1 child hebben (<div> of <a>)")}disconnectedCallback(){this._valueObserver&&this._valueObserver.disconnect(),this._textObserver&&this._textObserver.disconnect()}__setupChildClasses(){this.firstElementChild&&this.firstElementChild.classList.add("vl-infotext"),this.__valueElement&&(this.__valueElement.classList.add("vl-infotext__value"),this.__valueElement.setAttribute("data-vl-infotext-value",""),this.__valueElement.setAttribute("data-vl-js-dress","false")),this.__textElement&&(this.__textElement.classList.add("vl-infotext__text"),this.__textElement.setAttribute("data-vl-js-dress","false"))}__hasOneChild(){return 1==this.children.length}get __valueElement(){return this.querySelector("[data-vl-value]")}get __textElement(){return this.querySelector("[data-vl-text]")}get _stylePath(){return"/node_modules/vl-ui-infotext/style.css"}_data_vl_badgeChangedCallback(e,t){this.firstElementChild&&this._toggleClass(this.firstElementChild,t,"vl-infotext--badge")}__observeElement(e,t){const s=new ResizeObserver(t);return s.observe(e),s}__observeValueElement(e){return this.__observeElement(this.__valueElement,e)}__observeTextElement(e){return this.__observeElement(this.__textElement,e)}__processValueElement(){vl.infotext.dress(this.__valueElement)}__processTextElement(){vl.infotext.dress(this.__textElement)}}
