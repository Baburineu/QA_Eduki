import Page from "./page.ts"

class ProductPage extends Page {
    private get addToCartButton() {
        return $(".add-to-cart-btn")
    }

    private get productTile() {
        return $("h1 b")
    }

    private get productAuthorName() {
        return $(".public-name")
    }

    private get productPrice() {
        return $(".current-price")
    }

    private get continueBrowsingButton() {
        return $("button.transparent-yellow.float-right")
    }

    public async addProductToCart() {
        await this.addToCartButton.waitForClickable()
        await this.addToCartButton.click()
        return this
    }

    public async clickOnTheContinueBrowsingButton() {
        await this.continueBrowsingButton.waitForDisplayed()
        await this.continueBrowsingButton.click()
        return this
    }

    public openAndVerifyURL(path?) {
        return super.openAndVerifyURL(path);
    }


    public async getProductTitleText() {
        await this.productTile.waitForDisplayed({timeout: 40000})
        return await this.productTile.getText()
    }

    public async getProductAuthorNameText() {
        await this.productAuthorName.waitForDisplayed()
        return await this.productAuthorName.getText()
    }

    public async getProductPriceText() {
        return await this.productPrice.getText()
    }

}

export default new ProductPage()