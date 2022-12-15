"use strict"
var axios = require('axios');


module.exports = {

    getFiltersByHiearchi: async function (url_base, chain_cookies, hierarchie) {
        try {

            var config = {
                method: 'get',
                url: url_base +'rest/queuefilter/criteria/vt/'+hierarchie+'/bucket/1?pagetype=1',
                headers: {
                    'Cookie': chain_cookies
                }
            };

            const responseData = await axios(config);
            return responseData;

        } catch (err) {
            return { err };
        }
    }
}