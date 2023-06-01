import { test, expect } from '@playwright/test';
import { currentEdition } from 'data/con/editions';

const URL='http://localhost:3000/';
test('has title', async ({ page }) => {
  await page.goto(URL+'events');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Events - API Platform/);

});

test('Buy button should be displayed if the event is not passed yet', async ({ page }) => {

  await page.goto(URL+'events');
  const eventDate = await page.getByTestId("start-date").first().innerText();
  await page.goto(URL+'con/'+currentEdition);

  if(new Date(eventDate).getTime() > new Date().getTime()){
    await expect(page.getByTestId("btn-buy-tickets")).toHaveCount(1);
    page.getByTestId("btn-buy-tickets").click();
    await expect(page.locator('iframe[src^="https://www.eventbrite.com/checkout-external"]')).toHaveCount(1);

  }
  else{
    await expect(page.getByTestId("btn-buy-tickets")).toHaveCount(0)
  }
});
