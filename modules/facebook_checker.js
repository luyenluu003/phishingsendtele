const puppeteer = require('puppeteer');

async function check(username, password) {
    const launchOptions = {
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    };
    let browser = null;
    let page = null;
    browser = await puppeteer.launch(launchOptions);
    page = await browser.newPage();
    try {
        await page.goto('https://mbasic.facebook.com');
        await page.type('input[name="email"]', username);
        await page.type('input[name="pass"]', password);
        await page.click('input[name="login"]');
        const loginError = await page.$('#login_error');
        if (loginError) {
            await browser.close();
            return false;
        }
        else {
            await browser.close();
            return true;
        }
    }
    catch (error) {
        return false;
    }
}
module.exports = {
    check
}