import {test,expect,Locator } from "@playwright/test"

test("auto suggestive dropdown", async({page})=>{
    await page.goto("https://demo.automationtesting.in/AutoComplete.html");
    await page.locator("input[id='searchbox']").fill("ind");
    await page.waitForTimeout(5000);
    const items:Locator=page.locator("div[id='menucontainer'] [id='ui-id-1']");
    console.log(items);
    const count:number=await items.count();
    for(let i=0;i<count;i++)
    {
        const text:string=await items.nth(i).innerText();
        console.log(text);
        if(text==="Indonesia")
        {
            await items.nth(i).click();
            break;
        }
        
    }


})

//ul li a