
const { assert, driver } = require('./test');
const VLInfotextPage = require('./pages/vl-infotext.page');

describe('vl-infotext', async () => {
    const VLInfotextPage = new VLInfotextPage(driver);

    before(() => {
        return VLInfotextPage.load();
    });

    it('dummy', async () => {
        await assert.eventually.equal(true, true);
    });

    after(() => driver && driver.quit());
});
