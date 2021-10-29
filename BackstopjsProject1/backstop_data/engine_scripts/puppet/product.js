//this custom file is used to verify the product page
module.exports = async (page) => {
    await require('./login')(page);         //login
    await page.click("#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > a");
    
    //Replace all dynamic contents
    page.evaluate(() => {
        //replace image
        document.querySelectorAll(".inventory_details_img").forEach(function (image) {
            image.setAttribute('src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
        });
        //replace title
        document.querySelectorAll(".inventory_details_name large_size").forEach(function (title) {
            title.innerHTML = "Sauce Labs Backpack";
        });
        //replace description
        document.querySelectorAll(".inventory_details_desc large_size").forEach(function (description) {
            description.innerHTML = "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.";
        });
        //replace price
        document.querySelectorAll(".inventory_details_price").forEach(function (price) {
            price.innerHTML = "$29.99";
        });
    })
    await page.waitForSelector('.btn.btn_inventory', { visible: true })
    await page.click('.btn.btn_inventory')
    
}