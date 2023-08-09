import Page from "./page.ts"

class CartPage extends Page {
    private get cartURL() {
        return "https://eduki.com/de/warenkorb"
    }

    private get cartProductTitle() {
        return $(".description")
    }

    private get cartProductPrice() {
        return $(".digits")
    }

    private get cartProductAuthor() {
        return $(".author-name")
    }

    private async getCartProductTitle() {
        await this.cartProductTitle.waitForExist( {timeout: 30000})
        return this.cartProductTitle.getText()
    }

    private async getCartProductPrice() {
        this.cartProductPrice.waitForDisplayed()
        return await this.cartProductPrice.getText()
    }

    private async getCartProductAuthorText() {
         return await this.cartProductAuthor.getText()
    }

    public async verifyCartURL() {
        await $(".digits").waitForDisplayed()
        const getURL = await browser.getUrl()
        await expect(await getURL).toEqual("https://eduki.com/de/warenkorb?cartTest=0")
    }

    public async verifyCartProduct(title, price, author) {
        await browser.waitUntil(
            () => {
                return $(".description").isExisting();
            },
            {
                timeout: 30000,
                timeoutMsg: 'Element not found'
            }
        );
        await this.cartProductTitle.waitForExist()
        await expect(await this.getCartProductTitle()).toEqual(title)
        await expect(await this.getCartProductPrice()).toEqual(price)
        await expect(await this.getCartProductAuthorText()).toEqual(author)
    }
}

export default new CartPage()