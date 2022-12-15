"use strict"
const fs = require('fs');
const parse = require('csv-parse');
const Papa = require('papaparse');
var xlsx = require('node-xlsx').default;
var colors = require('colors');
require("dotenv").config();
const { resolutionsTr } = require('./puppeteer/helpersResolutions');
const { getDoodle } = require('./figlet');
const { getHiearchi } = require('./request/getHiearchies');
const { getCookies } = require('./puppeteer/helpersDataExtra');





async function run() {
    const path_file_csv = process.env.PATH_FILE_CSV;
    const prefix_tester = process.env.UUI_PREFIJO_NAME_TESTER;
    const url_base = process.env.URL_BASE_UAT;
    const url_actived = process.env.URL_UAT;
    const user = process.env.USER_LOGIN_AUT;
    const pass = process.env.PASS_LOGIN_UAT;
    const hierarchiePrincipal = process.env.HIRARCHY_PRINCIPAL_UAT;


    try {
        console.log("");
        console.log("-------------------------------------------------------------------------------------------------------------------------");
        console.log("--> URL WEB: " + url_actived);
        console.log("--> CLIENT: " + hierarchiePrincipal);

        
        var url_file_prod = "C:/ProgramData/Jenkins/.jenkins/workspace/CSV_Files/PROD_2022_12_14_99464_lbatres.csv";
        const array_transactions_prod = await testGetData(url_file_prod);

        for (let i = 0; i < array_transactions_prod.length; i++) {
            await resolutionsTr (user, pass, url_actived, url_base, hierarchiePrincipal, array_transactions_prod[i]);    
        }

        //await resolutionsTr (user, pass, url_actived, url_base, hierarchiePrincipal, "lba3_2022_12_13_15_21_85543_8");    
        
        

        





        function getData(file) {
            let data = [];
            var csvData = [];
            return new Promise((resolve, reject) => {
                fs.createReadStream(file)
                    .on('error', error => {
                        reject(error);
                    })
                    .pipe(parse({ delimiter: ',' }))
                    .on('data', (csvrow) => {
                        csvData.push(csvrow);
                    })
                    .on('end', () => {
                        let arr = [];
                        for (let i = 1; i < csvData.length; i++) {
                            let transactionID = csvData[i][3];
                            arr.push(transactionID);
                        }
                        resolve(arr);
                    });
            });
        }

        async function testGetData(url) {
            try {
                const data = await getData(url);
                return data;
            } catch (error) {
                console.error("testGetData: An error occurred: ", error.message);
            }
        }

        



    } catch (error) {
        console.log(error);
    }



}



getDoodle();
run();
