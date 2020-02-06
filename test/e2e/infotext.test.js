
const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlInfotextPage = require('./pages/vl-infotext.page');

describe('vl-infotext', async () => {
    const vlInfotextPage = new VlInfotextPage(driver);

    before(() => {
        return vlInfotextPage.load();
    });

    it('als gebruiker kan ik de value opvragen', async () => {
        const infoText = await vlInfotextPage.getInfotext();
        await assert.eventually.equal(infoText.getValue(), '3200');
    });

    it('als gebruiker kan ik de tekst opvragen', async () => {
        const infoText = await vlInfotextPage.getInfotext();
        await assert.eventually.equal(infoText.getText(), 'Bezoekers per dag');
    });
});
