import {test,expect,Locator} from '@playwright/test'

/*test("test input functions", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const textbox:Locator=page.locator("input[id='name']");
    //await expect(textbox).toBeVisible();
    await textbox.fill("Bharat Bhardwaj");
    const maxlength:string | null=await textbox.getAttribute("maxlength");//returns the maxlength attribute value
    expect(maxlength).toBe("15");
    const enteredvalue:string=await textbox.inputValue();
    console.log(enteredvalue);

})

test("test radio button functions", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const maleRadioButton:Locator= page.locator("input[value='male']");
    //await expect(maleRadioButton).toBeEnabled();
    expect(await maleRadioButton.isChecked()).toBe(false);
    await maleRadioButton.check();
    await expect(maleRadioButton).toBeChecked();

})
    */

//looping and selecting all checkboxes using the traditional loop
/*test("test the checkboxes",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const checkboxes:Locator= page.locator("div.form-check-inline input[type='checkbox']");
    const checkboxcount=await checkboxes.count();
    console.log(checkboxcount);
    for(let i=0;i<checkboxcount;i++)
    {
        await checkboxes.nth(i).check();
    }
})
    */


test("test the checkboxes",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //const checkboxes:Locator= page.locator("div.form-check-inline input[type='checkbox']");
    const days:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const checkboxes:Locator[]=days.map(day=>page.getByLabel(day));
    expect(checkboxes.length).toBe(7);
    for(const checkbox of checkboxes)
    {
        checkbox.check();
        await expect(checkbox).toBeChecked(); 
    }

//const days:string[]=['','']
//const checkboxes:Locator[]=days.map(day=>page.getByLabel(day));
//for(const checkbox of checkboxes)
//{
//  checkbox.check()
//await expect(checkboxe).toBeChecked();
//}

})