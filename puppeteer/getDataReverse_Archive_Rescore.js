"use strict"
const puppeteer = require("puppeteer");

module.exports = {

    getDataReverse_Archive: async function (user, pass, url_actived, url_base, id_hiearchi) {
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
            await page.evaluate((id_hiearchi) => {
                document.querySelector("div[data-id='" + id_hiearchi + "'] > a:nth-child(1)").click();
            }, id_hiearchi);
            await page.waitForTimeout(5000);
            await page.evaluate(() => {
                document.querySelector('a[id="bookmark-menu-link"]').click();
            });
            await page.waitForSelector('input[id="bookmark-search-input"]', { visible: true, });
            await page.type('input[id="bookmark-search-input"]', 'Control Room', { visible: true, delay: 10 });
            await page.click('a[id="search-result-menu_controlroom"]', { visible: true, });
            await page.waitForTimeout(5000);
            await page.goto(url_base + "maintain/rescorereverse/init");
            await page.waitForTimeout(5000);
            const data = await page.evaluate(() => {
                //const arraIframes = Array.from(document.querySelectorAll('iframe[name="controlRoomFrame"]'));
                //const doc = arraIframes[0].contentDocument; 
                //const body = doc.body;
                const arrayVTName = Array.from(document.querySelectorAll('select[id="vtId"] option')).map(element => element.innerText);
                const arrayVTId = Array.from(document.querySelectorAll('select[id="vtId"] option')).map(element => element.value);
                const arraVTMarchen = ["",];
                for (let i = 0; i < arrayVTName.length; i++) {
                    if(arrayVTName[i] != ''){
                        var pzjson = {"id": arrayVTId[i], "name":arrayVTName[i]}
                    }else{
                        var pzjson = {"id": arrayVTId[i], "name":"NA"}
                    }
                    arraVTMarchen.push(pzjson);
                }
                return arraVTMarchen;
            });
            await page.waitForTimeout(15000);
            await browser.close();
            return data;
        } catch (err) {
            return { "Error_Puppeteer_getDataExportRules": err };
        }
    }
}