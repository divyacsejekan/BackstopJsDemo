//this custom file is used to verify the homepage
module.exports = async (page) => {
    await require('./login')(page);     //login
    
    //Replace all dynamic contents 
    page.evaluate(() => {
        //replace all images by a single image
        document.querySelectorAll(".inventory_item_img").forEach(function (image) {
            image.setAttribute('src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
        });

        //replace all titles by a single title
        document.querySelectorAll(".inventory_item_name").forEach(function (title) {
            title.innerHTML = "Sauce Labs Backpack";
        });

        //replace all descriptions by a single descriptions
        document.querySelectorAll(".inventory_item_desc").forEach(function (description) {
            description.innerHTML = "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.";
        });

        //replace all price by a single price
        document.querySelectorAll(".inventory_item_price").forEach(function (price) {
            price.innerHTML = "$29.99";
        });
    })
    await page.waitFor(5000)
}