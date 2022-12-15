"use strict"

const fs = require('fs');
const Papa = require('papaparse');
const newman = require('newman');
const path = require("path");

module.exports = {
    run_NewmanImport_UAT: function (json, name_file) {
        try {
            let urlFile = name_file;
            newman.run({
                collection: json,
                reporters: 'cli',
                iterationData: urlFile
            }, (error) => {
                if (error) {
                    throw error;
                }
                console.log('[ OK ] COLLECTION IMPORTER RUN IS COMPLETE.');
            }).on('beforeDone', (error, data) => {
                if (error) {
                    throw error;
                }
                const findFailures = (a, c) => {
                    return a && (c.error === null || c.error === undefined);
                }
                //const testResults = data.summary.run.executions.reduce((a, c) => {
                   // if (a[c.cursor.iteration] !== 'FAILED') {
                   //     a[c.cursor.iteration] = c.assertions.reduce(findFailures, true) ? 'PASSED' : 'FAILED';
                   //  }
                   // return a;
                //}, []);
                //updateCsvFile(testResults);
            });
        } catch (error) {
            return { "ERROR_runNewmanImport": "UPS!!  SOMETHING IS WRONG." };
        }
    },
    updateCsvFile(testResults) {
        try {
            fs.readFile(urlFile, 'utf8', (error, data) => {
                if (error) {
                    throw error;
                }
                const jsonData = Papa.parse(data, { header: true });

                jsonData.data.map((item, index) => item.testResult = testResults[index]);
                const updatedCsv = Papa.unparse(jsonData.data);
                console.log("----On updatedCsv actualizado---");
                console.log(updatedCsv);
                console.log("----Off updatedCsv---");

                fs.writeFile('../CSV_Results/data-updated.csv', updatedCsv, (error) => {
                    if (error) {
                        throw error;
                    }
                    console.log('Updated CSV file DONE!!');
                });
            });
        } catch (error) {
            console.log(error);
        }
    }
}