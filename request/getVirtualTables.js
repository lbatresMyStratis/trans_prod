"use strict"
var axios = require('axios');


module.exports = {
    getVirtualTables: async function (url_base, chain_cookies, hierarchiePrincipal) {
        try {
            var config = {
                method: 'get',
                url: url_base + 'rest/queuefilter/init/bucket/1?usefor=FIND_TRANSACTION',
                headers: {
                    'Cookie': chain_cookies
                }
            };
            const responseData = await axios(config);

            const jsonFilters = responseData.data.queueFilters;
            
            const arrNameFiltersDES = [];
            for (let i in jsonFilters) {
                const strDeso = jsonFilters[i].description;
                arrNameFiltersDES.push(strDeso.toLowerCase());
            }
            arrNameFiltersDES.sort();
            const FiltersOrde = [];

            for (let i = 0; i < arrNameFiltersDES.length; i++) {
                const nameStrMin = arrNameFiltersDES[i];
                for (let a = 0; a < jsonFilters.length; a++) {
                    const nameOriMay = jsonFilters[a];
                    const nameOriMin = nameOriMay.description.toLowerCase();
                    if (nameStrMin == nameOriMin) {
                        FiltersOrde.push(jsonFilters[a].description);
                    }
                }
            }
            const strFiltersOrde = FiltersOrde.toString();
            const arrFilters = strFiltersOrde.split(" ");
            //console.log(FiltersOrde);

            //-----------------------------------------------------------------------------------
            const jsonVirtualTables = responseData.data.virtualTables;
            const virtualTable = [];
            const arrVirtualTables = [];
            const jsonVirtualTablesR = {};
            for (let i in jsonVirtualTables) {
                const transacions = hierarchiePrincipal + ' Transactions';
                if (jsonVirtualTables[i]._l === transacions) {
                    virtualTable.push(jsonVirtualTables[i]);
                }
                arrVirtualTables.push(jsonVirtualTables[i]);
            }
            jsonVirtualTablesR.virtual_table = virtualTable;
            jsonVirtualTablesR.virtual_tables = arrVirtualTables
            const virtualTables = [jsonVirtualTablesR];
            const arVT = jsonVirtualTablesR.virtual_tables;
            const nameVT = [];
            for (let i = 0; i < arVT.length; i++) {
                const name = arVT[i]._l.toLowerCase();
                nameVT.push(name);
            }
            const namesVT_DESC = nameVT.sort();
            const arr_VT_DESC = [];
            for (let i = 0; i < namesVT_DESC.length; i++) {
                const n_l = namesVT_DESC[i];
                for (let a = 0; a < arVT.length; a++) {
                    if (n_l === arVT[a]._l.toLowerCase()) {
                        arr_VT_DESC.push(arVT[a]);
                    }
                }
            }
            for (let i = 0; i < arr_VT_DESC.length; i++) {
                const l = arr_VT_DESC[i]._l;
                if (l === 'Select Virtual Table') {
                    arr_VT_DESC.splice(i, 1);
                }
            }

            jsonVirtualTablesR.virtual_tables = arr_VT_DESC;
            jsonVirtualTablesR.filters_saved = arrFilters;
            const arrVTS = [jsonVirtualTablesR];
            return arrVTS;
        } catch (err) {
            return { err };
        }
    }
}



