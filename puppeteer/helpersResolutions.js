"use strict"
const puppeteer = require("puppeteer");
require("dotenv").config();
const { getHiearchi } = require('../request/getHiearchies');


module.exports = {

    resolutionsTr: async function (user, pass, url_actived, url_base, hiearchi, transactionID){

        try{
            const browser = await puppeteer.launch({
                headless: false, // true = no show  != false = show web
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
            await page.waitForTimeout(10000);
            await page.evaluate(() => {
                document.querySelector("a[ng-click='ctrl.expandAll()']").click();
            });
            const data_Hierarchi_principal = await getHiearchi(url_base, cadena, hiearchi);
            const nameHiearchiPrincipal = data_Hierarchi_principal.principal[0].name;
            const dbdiHiearchiPrincipal = data_Hierarchi_principal.principal[0].id;
            await page.evaluate((dbdiHiearchiPrincipal) => {
                document.querySelector("div[data-id='" + dbdiHiearchiPrincipal + "'] > a").click();
            }, dbdiHiearchiPrincipal);
            await page.waitForTimeout(5000);
            await page.evaluate(() => {
                document.querySelector('a[id="bookmark-menu-link"]').click();
            });
            await page.waitForSelector('input[id="bookmark-search-input"]', { visible: true, });
            await page.type('input[id="bookmark-search-input"]', 'Find Transaction', { visible: true, delay: 10 });
            await page.click('a[id="search-result-menu_menuFindTransaction"]', { visible: true, });
            await page.waitForTimeout(9000);
            await page.evaluate(() => {
                document.querySelector('button[id="filterClear"]').click();
            });
            await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
            await page.waitForTimeout(7000);
            await page.evaluate(() => {
                document.querySelector('select[id="queueFilterHierarchy"] option:nth-child(2)').selected = true;
            });
            await page.waitForTimeout(7000);
            await page.evaluate(() => {
                document.querySelector('select[id="queueFilterVirtualTable"] option:nth-child(11)').selected = true;
            });
            await page.waitForTimeout(5000);
            await page.evaluate(() => {
                document.querySelector('select[id="queueFilterConditionsFilter1"] optgroup > option:nth-child(1)').selected = true;
            });
            await page.evaluate(() => {
                document.querySelector('select[id="queueFilterConditionsOperator1"] optgroup > option:nth-child(1)').selected = true;
            });
            await page.type('input[id="queueFilterConditionsValue1"]', transactionID, { visible: true, delay: 10 });
            await page.waitForTimeout(5000);
            await page.evaluate(() => {
                document.querySelector('button[id="savedFilterSubmit"]').click();
            });
            await page.waitForTimeout(5000);
            await page.evaluate(() => {
                document.querySelector('a[id="transaction-id-0"]').click();
            });
            await page.waitForTimeout(9000);
            await page.evaluate(() => {
                document.querySelector('button[id="button-claim"]').click();
            });
            await page.waitForTimeout(10000);
            await page.click('button[id="button-resolve"]', { visible: true, });
            await page.evaluate(() => {
                document.querySelector('span[id="resolutionType"]').click();
            });
            await page.waitForTimeout(7000);  
            await page.evaluate(() => {
                function randomIntFromInterval(min, max) { return Math.floor(Math.random() * (max - min + 1) + min)}  
                  const rndInt = randomIntFromInterval(1, 9)
                document.querySelector('div[id="item'+rndInt+'"]').click();
            });
            await page.waitForTimeout(7000);
            await page.click('button[id="resolve-save-bottom"]', { visible: true, });
            await browser.close();
        }catch(err){
            return {err};
        }
    }
}