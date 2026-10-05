class commonmethod
{
   constructor(page)
   {
    this.page=page;
   }

   static async click(locator)
   {
        if (await locator.isVisible() && locator.isEnabled())
        {
            await locator.click();
        }
    }
    static async inputTextbox(locator, value)
    {
        if (await locator.isVisible() && locator.isEnabled())
        {
            await locator.fill(value);
        }
    }
    
}
module.exports= commonmethod;