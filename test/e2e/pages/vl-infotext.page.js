const VlInfotext = require('../components/vl-infotext');
const {Page, Config} = require('vl-ui-core').Test;

class VLInfotextPage extends Page {
  async _getInfotext(selector) {
    return new VlInfotext(this.driver, selector);
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-infotext.html');
  }

  async getInfotext() {
    return this._getInfotext('#infotext');
  }

  async getInfotextBadge() {
    return this._getInfotext('#infotext-badge');
  }

  async getComplexeInfotextBadge() {
    return this._getInfotext('#infotext-badge-complex-content');
  }
}

module.exports = VLInfotextPage;
