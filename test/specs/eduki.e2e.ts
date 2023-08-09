import ProductPage from "../pageobjects/product.page.ts"
import CartPage from "../pageobjects/cart.page.ts"

describe("Testing Eduki", ()=>{
    it('TC-001: The material should be added in the cart', async function () {
        let title;
        let price;
        let author;

        await ProductPage.openAndVerifyURL("/material/17537/vorlagen-und-hintergruenden-1")
        title = await ProductPage.getProductTitleText()
        price = await ProductPage.getProductPriceText()
        author = await ProductPage.getProductAuthorNameText()
        //add material to basket,
        await ProductPage.addProductToCart()
        await ProductPage.clickOnTheContinueBrowsingButton()
        // open basket page
        await CartPage.open("https://eduki.com/de/warenkorb?cartTest=0")
        await CartPage.verifyCartURL()
        // validate material in the basket(title, price, author)
        await CartPage.verifyCartProduct(title, price, author)
    });
})