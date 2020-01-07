const VLInfotext = require('../components/vl-infotext');
const Page = require('./page');
const config = require('../config');

class VLInfotextPage extends Page {
    async _getInfotext(selector) {
        return new VlInfotext(this.driver, selector);
    }

    async load() {
        await super.load(config.baseUrl);
    }
}

module.exports = VLInfotextPage;
