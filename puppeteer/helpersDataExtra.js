"use strict"
const puppeteer = require("puppeteer");

module.exports = {

    getCookies: async function (user, pass, url_actived){
        try{
            const browser = await puppeteer.launch({
                headless: true, // true = no show  != false = show web
                devtools: false,
                defaultViewport: null,
                args: ['--start-maximized']
            });
            const page = await browser.newPage();
            await page.goto(url_actived);
            await page.waitForSelector('input[id="username"]', { visible: true, });
            await page.type('input[id="username"]', user, { delay: 10 });
            await page.waitForSelector('input[id="password"]', { visible: true, });
            await page.type('input[id="password"]', pass, { delay: 10 });
            await page.click('input[id="loginSubmitButton"]');
            await page.waitForTimeout(5000);
            await page.waitForSelector('.change-link');
            await page.click('.change-link', { visible: true, });
            const client = await page.target().createCDPSession();
            const cookies = (await client.send('Network.getAllCookies')).cookies;
            const icLocale = cookies[2].value;
            const accToken = cookies[0].value;
            const jsessionid = cookies[3].value;
            const bigipServername = cookies[1].name;
            const bigipServer = cookies[1].value;
            const cadena = "icLocale=" + icLocale + "; accToken=" + accToken + "; JSESSIONID=" + jsessionid + "; " + bigipServername + "=" + bigipServer
            await page.waitForTimeout(5000);
            await browser.close();
            return cadena;
        }catch(err){
            return {err};
        }
    }
}