import {test, expect, Locator} from "@playwright/test";


//Below is  the code for the single select dropdown using 4 different ways
test("Single Select Drop down",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const countrydropdown:Locator= page.locator("#country");
    //console.log(countrydropdown);
    await countrydropdown.selectOption("Canada");
    await countrydropdown.selectOption({value:"uk"});
    await countrydropdown.selectOption({label:"India"});
    await countrydropdown.selectOption({index:3});




//Check if an option is present in the dropdown

    const countrycount:number=await page.locator("#country option").count();
    expect(countrycount).toHaveLength(10);
    //or you can write like this also
    const countrycount1:Locator=await page.locator("#country option");
    expect(countrycount1).toHaveCount(10);


//3) check an option present in the dropdown
const optionspresent:string[]=(await countrycount1.allTextContents()).map(text=>text.trim());
console.log(optionspresent);
expect(optionspresent).toContain("Red");

//Printing option from the dropdown
for(const option of optionspresent)
{
    console.log(option);
}



/*test("Multi select dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const multicoloroptions:Locator=page.locator("#colors");
    await multicoloroptions.selectOption(["Red","Blue","Green"]);


})*/
})