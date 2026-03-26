import {test, expect, Locator} from "@playwright/test";

test("test the duplicate elements in dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const allelecolors:string[]=(await page.locator("#colors option").allTextContents()).map(text=>text.trim());
    
    //This is how we declare set
    const myset=new Set<String>();

    //This is how we declare string
    const duplicates:String[]=[];

    for(const data of allelecolors)
    {
        if(myset.has(data))
        {
            duplicates.push(data);
        }
        else{
            myset.add(data);
        }
    }
    console.log("Duplicate options are : " ,duplicates);
    if(duplicates.length>0)
    {
        console.log("Duplicate options found.", duplicates)
    }
    else{
        console.log("No duplicate options found..")
    }
    expect(duplicates.length).toBe(0);



})