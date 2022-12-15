"use strict"
var axios = require('axios');


module.exports = {

    setHiearchi: async function (url_base, chain_cookies, idHiearchi) {
        try {
            var config = {
                method: 'get',
                url: url_base+'rest/workingwith/'+idHiearchi+'?application=INTERCEPTAS',
                headers: {
                    'Cookie': chain_cookies
                }
            };
            const responseData = await axios(config);
            //console.log(responseData);
            return responseData;
        } catch (error) {
            return { err };
        }
        

    }
}