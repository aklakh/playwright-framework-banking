package com.banktests.tests;

import com.microsoft.playwright.*;
import org.testng.Assert;
import org.testng.annotations.*;

public class LoginTest {
    private Playwright playwright;
    private Browser browser;
    private BrowserContext context;
    private Page page;

    @BeforeClass
    public void setUp() {
        playwright = Playwright.create();
        browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(true));
        context = browser.newContext();
        page = context.newPage();
    }

    @Test
    public void testLogin() {
        page.navigate("http://parabank.parasoft.com/parabank/index.htm");
        page.fill("input[name='username']", "ahmad");
        page.fill("input[name='password']", "test123");
        page.click("input[value='Log In']");

        // Validate successful login by checking Accounts Overview text
        String panelText = page.textContent("#leftPanel");
        Assert.assertTrue(panelText.contains("Accounts Overview"), "Login failed!");
    }

    @AfterClass
    public void tearDown() {
        context.close();
        browser.close();
        playwright.close();
    }
}
