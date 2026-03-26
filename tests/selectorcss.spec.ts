import {test,expect,Locator} from '@playwright/test'

test("test the css selector test case", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    await expect(page.locator("input#small-searchterms")).toBeVisible();
    //const searchbox:Locator=page.locator("input#small-searchterms");
    //await searchbox.fill("Computer");
    await page.locator("input#small-searchterms").fill("computer");

})