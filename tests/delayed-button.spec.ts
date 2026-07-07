import { test, expect } from '@playwright/test';

test('Delayed Button Flow', async ({ page }) => {

  // Open the application
  await page.goto('https://claude.ai/public/artifacts/1e02a9a5-4f20-4f19-a7ba-6c3f16c6eab9');

  // Open Timing Challenges tab
  await page.getByRole('tab', { name: 'Timing Challenges' }).click();

  // Click Start Process
  await page.getByTestId('start-process').click();

  // Wait until Confirm Action button becomes enabled
  const confirmButton = page.getByTestId('confirm-button');
  await expect(confirmButton).toBeEnabled();

  // Click Confirm Action
  await confirmButton.click();

  // Verify success message appears
  await expect(page.getByText('Action completed successfully!')).toBeVisible();

});