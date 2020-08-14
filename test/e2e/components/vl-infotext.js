const {VlElement} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;

class VlInfotext extends VlElement {
  async getValue() {
    return this.findElement(By.css('div[data-vl-value]'));
  }

  async getText() {
    return this.findElement(By.css('div[data-vl-text]'));
  }

  async isBadge() {
    const childrenWithBadgeClass = await this.findElements(By.css('.vl-infotext--badge'));
    return childrenWithBadgeClass.length > 0;
  }
}

module.exports = VlInfotext;
