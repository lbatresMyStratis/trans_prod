"use strict"
const puppeteer = require("puppeteer");

module.exports = {

    addDataWebImporter: async function (user, pass, url_actived, url_base, id_hiearchi, pathFile, flag) {
        try {
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
            await page.waitForTimeout(5000);
            await page.evaluate(() => {
                document.querySelector("a[ng-click='ctrl.expandAll()']").click();
            });
            await page.waitForTimeout(5000);
            if (flag === "principal") {
                await page.evaluate((id_hiearchi) => {
                    document.querySelector("div[data-id='" + id_hiearchi + "'] > a").click();
                }, id_hiearchi);
            } else {
                await page.evaluate((id_hiearchi) => {
                    document.querySelector("div[data-id='" + id_hiearchi + "'] > a:nth-child(1)").click();
                }, id_hiearchi);
            }
            await page.waitForTimeout(5000);
            await page.evaluate(() => {
                document.querySelector('a[id="bookmark-menu-link"]').click();
            });
            await page.waitForSelector('input[id="bookmark-search-input"]', { visible: true, });
            await page.type('input[id="bookmark-search-input"]', 'Web Import', { visible: true, delay: 10 });
            await page.click('a[id="search-result-menu_webimport"]', { visible: true, });
            await page.waitForTimeout(5000);
            await page.goto(url_base + "/maintain/webimport/webimport");
            await page.waitForTimeout(5000);
            await page.waitForSelector('select[id="webImporter"]', { visible: true, });
            await page.waitForSelector('input[id="fileData"]', { visible: true, });
            await page.evaluate(() => {
                document.querySelector('select[id="webImporter"] option:nth-child(6)').selected = true;  // lbatres UAT 1 revisar como obtener el ID del web importer
                //document.querySelector('select[id="webImporter"] option:nth-child(2)').selected = true;  // alf UAT 1 revisar como obtener el ID del web importer
            });
            const fileInput = await page.$('input[type=file]');
            await fileInput.uploadFile(pathFile);
            await page.waitForTimeout(5000);
            await page.evaluate(() => {
                document.querySelector('input[id="btnSubmit"]').click();
            });
            await page.screenshot({ path: `webImport.jpeg` });
            await page.waitForTimeout(5000);
            await browser.close();
            return data;
        } catch (err) {
            return { "Error_Puppeteer_getDataExportRules": err };
        }
    }
}