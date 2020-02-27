
const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlInfotextPage = require('./pages/vl-infotext.page');

describe('vl-infotext', async () => {
    const vlInfotextPage = new VlInfotextPage(driver);

    before(() => {
        return vlInfotextPage.load();
    });

    it('als gebruiker kan ik de waarde en tekst zien', async () => {
        const infoText = await vlInfotextPage.getInfotext();

        await assert.eventually.equal(infoText.getValue(), '3.200');
        await assert.eventually.equal(infoText.getText(), 'Bezoekers per dag');
        await assert.eventually.isFalse(infoText.isBadge());
    });

    it('als gebruiker kan ik de infotext als badge zien', async () => {
        const infoText = await vlInfotextPage.getInfotextBadge();

        await assert.eventually.isTrue(infoText.isBadge());
    });
});
