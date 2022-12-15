"use strict"
const fs = require('fs');
const Papa = require('papaparse');
var xlsx = require('node-xlsx').default;
var colors = require('colors');
const { getDataStatic_PROD, getDataStatic_Pasat_PROD, getDataStatic_Future_PROD, getDataDinamicPresent_PROD,
    getDataDinamicPast_PROD, getDataDinamic_Future_PROD, getDataStatic_TEST, getDataStatic_Pasat_TEST,
    getDataStatic_Future_TEST, getDataDinamicPresent_TEST, getDataDinamicPast_TEST, getDataDinamic_Future_TEST
} = require('./templates/templateJSONFraude');

const { getDataStatic_CHK_PROD, getDataStatic_Pasat_CHK_PROD, getDataStatic_Future_CHK_PROD, getDataDinamicPresent_CHK_PROD,
    getDataDinamicPast_CHK_PROD, getDataDinamic_Future_CHK_PROD, getDataStatic_CHK_TEST, getDataStatic_Pasat_CHK_TEST,
    getDataStatic_Future_CHK_TEST, getDataDinamicPresent_CHK_TEST, getDataDinamicPast_CHK_TEST, getDataDinamic_Future_CHK_TEST, getDataDinamic_Future_CHK_AMEX
} = require('./templates/templateJSONChargeBacks');

const { getPresentDayFormat, getUUIRandom } = require('./tools');
const { getCookies } = require('./puppeteer/helpersDataExtra');
const { getDoodle } = require('./figlet');
const { getHiearchi } = require('./request/getHiearchies');
const { setHiearchi } = require('./request/setHierarchiWork');
const { run_NewmanImport_UAT } = require('./newman/runNewmanFraud');
const { returnJsonCollectionImporter_Prod } = require('./collections/colletcion_importer_uat1_FR_base_PROD');
const { returnJsonCollectionImporter_Test } = require('./collections/colletcion_importer_uat1_FR_base_TEST');
const { addDataWebImporter } = require('./puppeteer/insertDataWebImporter');
const { addDataWebImporterAMEX } = require('./puppeteer/insertDataWebImporterAMEX');
const { json } = require('express');
const { returnJsonCollectionImporter_multi_Prod } = require('./collections/colletcion_importer_uat1_FR_multi_PROD');
const { run_NewmanImport_Statics_UAT } = require('./newman/runNewmanFraudStatics');



async function run() {
    const arrayData = [];
    const arraTransactionsId = [];
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
        const chain_cookies = await getCookies(user, pass, url_actived);
        const data_Hierarchi_principal = await getHiearchi(url_base, chain_cookies, hierarchiePrincipal);
        const nameHiearchiPrincipal = data_Hierarchi_principal.principal[0].name;
        const dbdiHiearchiPrincipal = data_Hierarchi_principal.principal[0].id;
        
        /**--ON---transaciones FR-------------------------------------------------------------------------------------------------------------------- */
        const arrayTransactions_PROD = [];
        const arrayTransactions_TEST = [];
        const objJsonStatics = getDataStatic_PROD();
        for (let i = 0; i < objJsonStatics.length; i++) {arrayTransactions_PROD.push(objJsonStatics[i]);}
        const onjJsonStaticsPast = getDataStatic_Pasat_PROD();
        for (let i = 0; i < onjJsonStaticsPast.length; i++) {arrayTransactions_PROD.push(onjJsonStaticsPast[i]);}
        const onjJsonStaticsFuture = getDataStatic_Future_PROD();
        for (let i = 0; i < onjJsonStaticsFuture.length; i++) {arrayTransactions_PROD.push(onjJsonStaticsFuture[i]);}
        const objJsonDinamic = getDataDinamicPresent_PROD();
        for (let i = 0; i < objJsonDinamic.length; i++) {arrayTransactions_PROD.push(objJsonDinamic[i]);}
        const objJsonDinamicPast = getDataDinamicPast_PROD();
        for (let i = 0; i < objJsonDinamicPast.length; i++) {arrayTransactions_PROD.push(objJsonDinamicPast[i]);}
        const objJsonDinamicFuture = getDataDinamic_Future_PROD();
        for (let i = 0; i < objJsonDinamicFuture.length; i++) {arrayTransactions_PROD.push(objJsonDinamicFuture[i]);}
        const objJsonStatics_TEST = getDataStatic_TEST();
        for (let i = 0; i < objJsonStatics_TEST.length; i++) {arrayTransactions_TEST.push(objJsonStatics_TEST[i]);}
        const onjJsonStaticsPast_TEST = getDataStatic_Pasat_TEST();
        for (let i = 0; i < onjJsonStaticsPast_TEST.length; i++) {arrayTransactions_TEST.push(onjJsonStaticsPast_TEST[i]);}
        const onjJsonStaticsFuture_TEST = getDataStatic_Future_TEST();
        for (let i = 0; i < onjJsonStaticsFuture_TEST.length; i++) {arrayTransactions_TEST.push(onjJsonStaticsFuture_TEST[i]);}
        const objJsonDinamic_TEST = getDataDinamicPresent_TEST();
        for (let i = 0; i < objJsonDinamic_TEST.length; i++) {arrayTransactions_TEST.push(objJsonDinamic_TEST[i]);}
        const objJsonDinamicPast_TEST = getDataDinamicPast_TEST();
        for (let i = 0; i < objJsonDinamicPast_TEST.length; i++) {arrayTransactions_TEST.push(objJsonDinamicPast_TEST[i]);}
        const objJsonDinamicFuture_TEST = getDataDinamic_Future_TEST();
        for (let i = 0; i < objJsonDinamicFuture_TEST.length; i++) {arrayTransactions_TEST.push(objJsonDinamicFuture_TEST[i]);}
        /**--OFF---transaciones FR-------------------------------------------------------------------------------------------------------------------- */

        /**--ON---transaciones CHK-------------------------------------------------------------------------------------------------------------------- */
        const arrayTransactions_CHK_PROD = [];
        const arrayTransactions_CHK_TEST = [];

        const objJsonStatics_CHK_PROD = getDataStatic_CHK_PROD();
        for (let i = 0; i < objJsonStatics_CHK_PROD.length; i++) { arrayTransactions_CHK_PROD.push(objJsonStatics_CHK_PROD[i]); }
        const onjJsonStaticsPast_CHK_PROD = getDataStatic_Pasat_CHK_PROD();
        for (let i = 0; i < onjJsonStaticsPast_CHK_PROD.length; i++) {arrayTransactions_CHK_PROD.push(onjJsonStaticsPast_CHK_PROD[i]);}
        const onjJsonStaticsFuture_CHK_PROD = getDataStatic_Future_CHK_PROD();
        for (let i = 0; i < onjJsonStaticsFuture_CHK_PROD.length; i++) {arrayTransactions_CHK_PROD.push(onjJsonStaticsFuture_CHK_PROD[i]);}
        const objJsonDinamic_CHK_PROD = getDataDinamicPresent_CHK_PROD();
        for (let i = 0; i < objJsonDinamic_CHK_PROD.length; i++) {arrayTransactions_CHK_PROD.push(objJsonDinamic_CHK_PROD[i]);}
        const objJsonDinamicPast_CHK_PROD = getDataDinamicPast_CHK_PROD();
        for (let i = 0; i < objJsonDinamicPast_CHK_PROD.length; i++) {arrayTransactions_CHK_PROD.push(objJsonDinamicPast_CHK_PROD[i]);}
        const objJsonDinamicFuture_CHK_PROD = getDataDinamic_Future_CHK_PROD();
        for (let i = 0; i < objJsonDinamicFuture_CHK_PROD.length; i++) {arrayTransactions_CHK_PROD.push(objJsonDinamicFuture_CHK_PROD[i]);}
        const objJsonStatics_CHK_TEST = getDataStatic_CHK_TEST();
        for (let i = 0; i < objJsonStatics_CHK_TEST.length; i++) {arrayTransactions_CHK_TEST.push(objJsonStatics_CHK_TEST[i]);}
        const onjJsonStaticsPast_CHK_TEST = getDataStatic_Pasat_CHK_TEST();
        for (let i = 0; i < onjJsonStaticsPast_CHK_TEST.length; i++) {arrayTransactions_CHK_TEST.push(onjJsonStaticsPast_CHK_TEST[i]);}
        const onjJsonStaticsFuture_CHK_TEST = getDataStatic_Future_CHK_TEST();
        for (let i = 0; i < onjJsonStaticsFuture_CHK_TEST.length; i++) {arrayTransactions_CHK_TEST.push(onjJsonStaticsFuture_CHK_TEST[i]);}
        const objJsonDinamic_CHK_TEST = getDataDinamicPresent_CHK_TEST();
        for (let i = 0; i < objJsonDinamic_CHK_TEST.length; i++) {arrayTransactions_CHK_TEST.push(objJsonDinamic_CHK_TEST[i]);}
        const objJsonDinamicPast_CHK_TEST = getDataDinamicPast_CHK_TEST();
        for (let i = 0; i < objJsonDinamicPast_CHK_TEST.length; i++) {arrayTransactions_CHK_TEST.push(objJsonDinamicPast_CHK_TEST[i]);}
        const objJsonDinamicFuture_CHK_TEST = getDataDinamic_Future_CHK_TEST();
        for (let i = 0; i < objJsonDinamicFuture_CHK_TEST.length; i++) {arrayTransactions_CHK_TEST.push(objJsonDinamicFuture_CHK_TEST[i]);}
        
        console.log("");
        console.log("");
        console.log("");

        var textCsv_PROD = Papa.unparse(arrayTransactions_PROD);
        const name_file_csv_PROD = path_file_csv + "PROD_" + getPresentDayFormat() + "_" + getUUIRandom() + "_" + user + ".csv";
        fs.writeFile(name_file_csv_PROD, textCsv_PROD, (error) => {
            if (error) {
                throw error;
            }
            console.log('[OK] CREATED CSV FILE PROD');
        });


        var textCsv_TEST = Papa.unparse(arrayTransactions_TEST);
        const name_file_csv_TEST = path_file_csv + "TEST_" + getPresentDayFormat() + "_" + getUUIRandom() + "_" + user + ".csv";
        fs.writeFile(name_file_csv_TEST, textCsv_TEST, (error) => {
            if (error) {
                throw error;
            }
            console.log('[OK] CREATED CSV FILE TEST');
        });

        var textCsv_CHK_PROD = Papa.unparse(arrayTransactions_CHK_PROD);
        const name_file_csv_CHK_PROD = path_file_csv + "CHK_PROD_" + getPresentDayFormat() + "_" + getUUIRandom() + "_" + user + ".csv";
        fs.writeFile(name_file_csv_CHK_PROD, textCsv_CHK_PROD, (error) => {
            if (error) {
                throw error;
            }
            console.log('[OK] CREATED CSV FILE CHK PROD');
        });

        var textCsv_CHK_TEST = Papa.unparse(arrayTransactions_CHK_TEST);
        const name_file_csv_CHK_TEST = path_file_csv + "CHK_TEST_" + getPresentDayFormat() + "_" + getUUIRandom() + "_" + user + ".csv";
        fs.writeFile(name_file_csv_CHK_TEST, textCsv_CHK_TEST, (error) => {
            if (error) {
                throw error;
            }
            console.log('[OK] CREATED CSV FILE CHK TEST');
        });



        const json_Collection_import_fraud_prod = await returnJsonCollectionImporter_Prod();
        await run_NewmanImport_UAT(json_Collection_import_fraud_prod, name_file_csv_PROD);
        const json_Collection_import_fraud_multi_prod = await returnJsonCollectionImporter_multi_Prod();
        await run_NewmanImport_Statics_UAT(json_Collection_import_fraud_multi_prod);
        const json_Collection_import_fraud_test = await returnJsonCollectionImporter_Test();
        await run_NewmanImport_UAT(json_Collection_import_fraud_test, name_file_csv_TEST);
        await addDataWebImporter(user, pass, url_actived, url_base, dbdiHiearchiPrincipal, name_file_csv_CHK_PROD, "principal");

        



    } catch (error) {
        console.log(error);
    }



}



getDoodle();
run();
