const {assert, getDriver, By} = require('vl-ui-core').Test.Setup;
const VlInfotextPage = require('./pages/vl-infotext.page');

describe('vl-infotext', async () => {
  let vlInfotextPage;

  before(() => {
    vlInfotextPage = new VlInfotextPage(getDriver());
    return vlInfotextPage.load();
  });

  it('WCAG', async () => {
    await assert.eventually.isFalse(vlInfotextPage.hasWcagIssues());
  });

  it('als gebruiker kan ik de waarde en tekst zien', async () => {
    const infoText = await vlInfotextPage.getInfotext();

    const value = await infoText.getValue();
    await assert.eventually.equal(value.getText(), '3.200');

    const text = await infoText.getText();
    await assert.eventually.equal(text.getText(), 'Bezoekers per dag');

    await assert.eventually.isFalse(infoText.isBadge());
  });

  it('als gebruiker kan ik de infotext als badge zien', async () => {
    const infoText = await vlInfotextPage.getInfotextBadge();

    await assert.eventually.isTrue(infoText.isBadge());
  });

  it('als gebruiker kan ik een complexere waarde en tekst zien', async () => {
    const infoText = await vlInfotextPage.getComplexeInfotextBadge();

    const value = await infoText.getValue();
    await assert.eventually.equal(value.getText(), '150 cm');
    await assert.eventually.exists(value.findElement(By.css('span.eenheid-waarde')));
    await assert.eventually.exists(value.findElement(By.css('span.lengte-waarde')));

    const text = await infoText.getText();
    await assert.eventually.equal(text.getText(), 'Lengte (eenheid)');
    await assert.eventually.exists(text.findElement(By.css('span.eenheid')));
    await assert.eventually.exists(text.findElement(By.css('span.lengte')));

    await assert.eventually.isTrue(infoText.isBadge());
  });
});
