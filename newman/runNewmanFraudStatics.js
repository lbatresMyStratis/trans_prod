"use strict"

const fs = require('fs');
const Papa = require('papaparse');
const newman = require('newman');
const path = require("path");

module.exports = {
    run_NewmanImport_Statics_UAT: function (json, name_file) {
        try {
            let urlFile = name_file;
            newman.run({
                collection: json,
                reporters: 'cli'
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

            });
        } catch (error) {
            return { "ERROR_runNewmanImport": "UPS!!  SOMETHING IS WRONG." };
        }
    },

}