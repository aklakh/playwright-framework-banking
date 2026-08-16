# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: src\main\ts\tests\transferFund.spec.ts >> Transfer Funds between Accounts
- Location: src\main\ts\tests\transferFund.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#fromAccountId')
    - locator resolved to <select class="input" id="fromAccountId">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    44 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=f2e1]:
  - generic [ref=f2e2]:
    - generic [ref=f2e3]:
      - link:
        - /url: admin.htm
        - img [ref=f2e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=f2e5] [cursor=pointer]
      - paragraph [ref=f2e6]: Experience the difference
    - generic [ref=f2e7]:
      - list [ref=f2e8]:
        - listitem [ref=f2e9]: Solutions
        - listitem [ref=f2e10]:
          - link "About Us" [ref=f2e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=f2e12]:
          - link "Services" [ref=f2e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=f2e14]:
          - link "Products" [ref=f2e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=f2e16]:
          - link "Locations" [ref=f2e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=f2e18]:
          - link "Admin Page" [ref=f2e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=f2e20]:
        - listitem [ref=f2e21]:
          - link "home" [ref=f2e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=f2e23]:
          - link "about" [ref=f2e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=f2e25]:
          - link "contact" [ref=f2e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=f2e27]:
      - generic [ref=f2e28]:
        - paragraph [ref=f2e29]: Welcome Aklakh Ahmad
        - heading "Account Services" [level=2] [ref=f2e30]
        - list [ref=f2e31]:
          - listitem [ref=f2e32]:
            - link "Open New Account" [ref=f2e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=f2e34]:
            - link "Accounts Overview" [ref=f2e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=f2e36]:
            - link "Transfer Funds" [ref=f2e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=f2e38]:
            - link "Bill Pay" [ref=f2e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=f2e40]:
            - link "Find Transactions" [ref=f2e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=f2e42]:
            - link "Update Contact Info" [ref=f2e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=f2e44]:
            - link "Request Loan" [ref=f2e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=f2e46]:
            - link "Log Out" [ref=f2e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=f2e50]:
        - heading "Transfer Funds" [level=1] [ref=f2e51]
        - generic [ref=f2e52]:
          - paragraph [ref=f2e53]:
            - text: "Amount: $"
            - textbox [active] [ref=f2e54]: "500"
          - generic [ref=f2e55]:
            - text: "From account #"
            - combobox [ref=f2e56]:
              - option "30438" [selected]
            - text: "to account #"
            - combobox [ref=f2e57]:
              - option "30438" [selected]
          - button "Transfer" [ref=f2e59] [cursor=pointer]
  - generic [ref=f2e61]:
    - list [ref=f2e62]:
      - listitem [ref=f2e63]:
        - link "Home" [ref=f2e64] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=f2e65]:
        - link "About Us" [ref=f2e66] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=f2e67]:
        - link "Services" [ref=f2e68] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=f2e69]:
        - link "Products" [ref=f2e70] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=f2e71]:
        - link "Locations" [ref=f2e72] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=f2e73]:
        - link "Forum" [ref=f2e74] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=f2e75]:
        - link "Site Map" [ref=f2e76] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=f2e77]:
        - link "Contact Us" [ref=f2e78] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=f2e79]: © Parasoft. All rights reserved.
    - list [ref=f2e80]:
      - listitem [ref=f2e81]: "Visit us at:"
      - listitem [ref=f2e82]:
        - link "www.parasoft.com" [ref=f2e83] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Transfer Funds between Accounts', async ({ page }) => {
  4  |   await page.goto('http://parabank.parasoft.com/parabank/index.htm');
  5  |   await page.fill('input[name="username"]', 'user123');
  6  |   await page.fill('input[name="password"]', 'test123');
  7  |   await page.click('input[value="Log In"]');
  8  | 
  9  |   await page.click('a[href*="transfer.htm"]');
  10 |   await page.fill('#amount', '500');
> 11 |   await page.selectOption('#fromAccountId', '17562');
     |              ^ Error: page.selectOption: Test timeout of 30000ms exceeded.
  12 |   await page.selectOption('#toAccountId', '17118');
  13 |   await page.click('input[value="Transfer"]');
  14 | 
  15 |   await expect(page.locator('#rightPanel')).toContainText('Transfer Complete!');
  16 | });
```