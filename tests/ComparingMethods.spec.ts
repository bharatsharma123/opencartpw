import { test, expect, Locator } from '@playwright/test';

test("Comparing Methods", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    const product:Locator=page.locator("div[class='add-info'] input[value='Add to cart']");
    const count:number=await product.count();
    console.log(count);
    const productTitles:Locator=await page.locator("h2[class='product-title']");

    for(let i=0;i<count;i++)
    {
        const productToAdd=await productTitles.nth(i).innerText();
        if(productToAdd==='14.1-inch Laptop')
        {
            product.nth(i).click();
            //page.waitForTimeout(5000);
            break;
        }
        
    }
    const successmessage=await page.locator("div[id='bar-notification'] p[class='content']").innerText();
    console.log(successmessage);
    await expect(successmessage).toContain("The product has been added");
    
    
})