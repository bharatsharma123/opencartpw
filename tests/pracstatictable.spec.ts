import { test, expect, Locator } from '@playwright/test';


test("static web table",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table:Locator=page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible();

    //Count the number of rows
    const rows=table.locator("tr");
    const rowcount:number=await rows.count();
    console.log("Number of rows are :" +rowcount);

    //Count the number of columns
    const columns=rows.locator("th");
    const columncount:number=await columns.count();

    // 3) Read all data from 2nd row (index 2 means 3rd row including header)
    const rowtwoLocator:Locator= rows.nth(2).locator("td");
    const rowtwoCellData:string[]=await rowtwoLocator.allInnerTexts();
    //console.log("2nd Row data: ", rowtwoCellData);
    for(let text of rowtwoCellData)
    {
        console.log(text);
    }

    //Read all data from the table (excluding header)

    console.log('Printing all Table Data.......');

    const allRowData=await rows.all();  // get all row locators   //all() returns array of locators

    console.log("BookName   Author  subject   price");
    for(let row of allRowData.slice(1))
    {
        const cols=await row.locator("td").allInnerTexts();
        console.log(cols);
    }




})