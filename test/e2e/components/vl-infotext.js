const { VlElement } = require('vl-ui-core').Test;
const { By } = require('selenium-webdriver');

class VlInfotext extends VlElement {
    async getValue() {
        const value = await this.findElement(By.css('div[data-vl-value]'));
        return value.getText();
    }

    async getText() {
        const text = await this.findElement(By.css('div[data-vl-text]'));
        return text.getText();
    }

    async isBadge() {
        const childrenWithBadgeClass = await this.findElements(By.css('.vl-infotext--badge'));
        return childrenWithBadgeClass.length > 0;
    }
}

module.exports = VlInfotext;
