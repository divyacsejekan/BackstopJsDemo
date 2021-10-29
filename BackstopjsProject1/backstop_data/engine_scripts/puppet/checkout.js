// This custom file completes whole check out process login->add product to cart-> checkout
module.exports = async (page) => {
    await require('./add_to_cart')(page);       //using the function from add_to_cart.js to add product in cart
    await page.waitForSelector('.cart_item')
    await page.click("#checkout")

    //fill up checkout form
    await page.waitForSelector('#first-name')
    await page.type("#first-name","standard");
    await page.type("#last-name","user");
    await page.type("#postal-code","581332");
    await page.click("#continue");
    await page.click("#finish");
    
    //thank you page
    await page.waitForSelector('img.pony_express', { visible: true })
}