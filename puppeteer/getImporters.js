"use strict"
const puppeteer = require("puppeteer");

module.exports = {

    getImporters: async function (user, pass, url_actived, id_hiearchi, url_import, flag) {
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
            if(flag === "principal"){
                await page.evaluate((id_hiearchi) => {
                    document.querySelector("div[data-id='" + id_hiearchi + "'] > a").click();
                }, id_hiearchi);
            }else{
                await page.evaluate((id_hiearchi) => {
                    document.querySelector("div[data-id='" + id_hiearchi + "'] > a:nth-child(1)").click();
                }, id_hiearchi);
            }
           
            await page.waitForTimeout(5000);
            await page.evaluate(() => {
                document.querySelector('a[id="bookmark-menu-link"]').click();
            });
            await page.waitForSelector('input[id="bookmark-search-input"]', { visible: true, });
            await page.type('input[id="bookmark-search-input"]', 'Importers', { visible: true, delay: 10 });
            await page.click('a[id="search-result-menu_importer"]', { visible: true, });
            await page.waitForTimeout(5000);
            const data = await page.evaluate(() => {
                const tds = Array.from(document.querySelectorAll('table > tbody > tr > td'));
                const rows = tds.map(td => td.innerText);
                const link = Array.from(document.querySelectorAll('table > tbody > tr > td > a'));
                const href = link.map(hr => hr.getAttribute('href'));
                const jsonRow = {"rows": rows};
                const jsonLink = {"link":href};
                const arrRow = [jsonRow,jsonLink];
                return arrRow;
            });

            const dataF = [];
            let cont = 0;
            for (let i = 0; i < data[0].rows.length; i++) {
                let t = 0;
                let f = 0;
                let y = 0;
                let dest = data[0].rows;
                if(dest[i] === ''){
                    cont++;
                    t = i+2;
                    y = i+5;
                    f = i+6;
                    let urls = url_import+dest[y];
                    dataF.push({
                        "importer": dest[t],
                        "format": dest[f],
                        "transportID": urls
                    });
                }
            }
            for (let i = 0; i < dataF.length; i++) {
                for (let i = 0; i < data[1].link.length; i++) {   
                    const re = data[1].link;
                    dataF[i].link = re[i];
                }
            }
            await page.waitForTimeout(5000);
            await browser.close();
            return dataF;
        } catch (err) {
            return { "Error_Puppeteer_getImporters": "UPS!!  SOMETHING IS WRONG OR DONT HAVE ANY DATA" };
        }
    }
}