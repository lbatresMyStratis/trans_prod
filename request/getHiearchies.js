"use strict"
var axios = require('axios');


module.exports = {

    getHiearchi: async function (url_base, chain_cookies, hierarchiePrincipal) {
        try {
            var config = {
                method: 'get',
                url: url_base + 'rest/workingwith/5237260000000000001?application=INTERCEPTAS',
                headers: {
                    'Cookie': chain_cookies
                }
            };
            
            const responseData = await axios(config);
            
            const jsonHierarchies = responseData.data.data.hierarchiesMap;
            const arrHierarchies = [];
            const arrHierarchiesName = [];
            let jsonHierarchiPrincipal = {};
            let arrIdChilds = [];
            let arrChilds = [];
            let arrSeChilds = [];
            let arrSeVueChilds = [];
            let exist = false;
            for (let i in jsonHierarchies) {
                arrHierarchies.push(jsonHierarchies[i]);
                arrHierarchiesName.push(jsonHierarchies[i].name);
                if (jsonHierarchies[i].name === hierarchiePrincipal) {
                    exist = true;
                    jsonHierarchiPrincipal = jsonHierarchies[i];
                    jsonHierarchiPrincipal.id = i;
                    for (let a = 0; a < jsonHierarchies[i].children.length; a++) {
                        arrIdChilds.push(jsonHierarchies[i].children[a]);
                    }
                }
            }
            for (let a = 0; a < arrIdChilds.length; a++) {
                var indexChild = Object.keys(jsonHierarchies).indexOf(arrIdChilds[a]);
                var outputValues = Object.values(jsonHierarchies)[indexChild];
                outputValues.id = arrIdChilds[a];
                arrChilds.push(outputValues);
            }
            jsonHierarchiPrincipal.principal = arrChilds;
            const arrChildrens = jsonHierarchiPrincipal.principal;
            for (let c = 0; c < arrChildrens.length; c++) {
                const idChil = arrChildrens[c].children;
                for (let d = 0; d < idChil.length; d++) {
                    arrSeChilds.push(idChil[d]);
                }
            }
            for (let a = 0; a < arrSeChilds.length; a++) {
                var indexChild = Object.keys(jsonHierarchies).indexOf(arrSeChilds[a]);
                var outputValues = Object.values(jsonHierarchies)[indexChild];
                outputValues.id = arrSeChilds[a];
                arrSeVueChilds.push(outputValues);
            }
            jsonHierarchiPrincipal.childrens = arrSeVueChilds;
            return jsonHierarchiPrincipal;
        } catch (err) {
            return { err };
        }
    }
}