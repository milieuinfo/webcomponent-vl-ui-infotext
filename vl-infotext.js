import{NativeVlElement,define}from"/node_modules/vl-ui-core/vl-core.js";export class VlInfotext extends(NativeVlElement(HTMLDivElement)){static get _observedAttributes(){return["data-vl-badge"]}constructor(){super(),this.__hasOneChild()?(this.classList.add("vl-infotext-wrapper"),this.__setClassnamesOnFirstChildElement(),this.__addClass(this.__valueElement,"vl-infotext__value"),this.__addClass(this.__textElement,"vl-infotext__text")):console.warn("De infotext component mag slechts 1 child hebben (<div> of <a>)")}__hasOneChild(){return 1==this.children.length}__setClassnamesOnFirstChildElement(){this.firstElementChild.classList.add("vl-infotext")}__addClass(e,t){e&&e.classList.add(t)}get __valueElement(){return this.querySelector("[data-vl-value]")}get __textElement(){return this.querySelector("[data-vl-text]")}get _stylePath(){return"/node_modules/vl-ui-infotext/style.css"}_data_vl_badgeChangedCallback(e,t){null!=e&&this.firstElementChild.classList.remove("vl-infotext--badge"),null!=t&&"false"!=t&&this.firstElementChild.classList.add("vl-infotext--badge")}}define("vl-infotext",VlInfotext,{extends:"div"});
