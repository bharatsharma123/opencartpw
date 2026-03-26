import { test, expect } from '@playwright/test';

test('Mouse hover',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const pointme=page.locator('.dropbtn');
    await pointme.hover();

    const laptops=page.locator('.dropdown-content a:nth-child(2)');
    await laptops.hover();
    await laptops.click();

    await page.waitForTimeout(5000);

})

test('Right click',async ({page})=>{

    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');

    const button=page.locator('span.context-menu-one');
    await button.click({button:'right'});  // this will perform the right click action
    await page.locator("li[class='context-menu-item context-menu-icon context-menu-icon-quit context-menu-visible'] span").hover();
    await page.locator("li[class='context-menu-item context-menu-icon context-menu-icon-quit context-menu-visible'] span").click();
  await page.waitForTimeout(5000);

})