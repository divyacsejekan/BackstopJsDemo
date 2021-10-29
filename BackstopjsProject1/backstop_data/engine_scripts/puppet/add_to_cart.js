// This custom file adds the product to the cart and verifies the cart.
module.exports = async (page) => {
    await require('./product')(page);       //using the function from product.js to add product in cart
    await page.waitForSelector('.shopping_cart_badge', { visible: true })
    await page.waitForSelector(".shopping_cart_link",{ visible: true })
    await page.click(".shopping_cart_link")
    await page.waitForSelector('.cart_item', { visible: true })

}