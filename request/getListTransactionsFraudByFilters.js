"use strict"
var axios = require('axios');


module.exports = {

    getListTransactionsFR_ByFilters: async function (url_base, chain_cookies, idhiearchy, idvirtualtable, value) {
        try {
            var data = JSON.stringify({
                "hierarchyId": idhiearchy,
                "virtualTableId": idvirtualtable,
                "includeHistory": true,
                "orderBy": "score",
                "sortColumns": [
                    {
                        "score": true
                    }
                ],
                "searchConditions": {
                    "anyOrAll": "all",
                    "conditions": [
                        {
                            "columnId": "5237260000001013997", //filter === Transactions ID
                            "value": value,
                            "operator": "STARTS_WITH",
                            "expandSearch": false
                        }
                    ]
                },
                "timeCriteria": null
            });
            var config = {
                method: 'post',
                url: url_base + 'rest/findtransaction/bucket/1/page/1/size/500',
                headers: {
                    'Cookie': chain_cookies,
                    'Content-Type': 'application/json'
                },
                data: data
            };
            const responseData = await axios(config);
            const arrTransactions = [];
            for (let a = 0; a < responseData.data.transactions.length; a++) {
                const transaction = responseData.data.transactions[a].transactionId;
                const transactionId = responseData.data.transactions[a].headerId;
                const jsonData = {"transaction": transaction, "transactionsID": transactionId}
                arrTransactions.push(jsonData)
            }
            return arrTransactions;

        } catch (err) {
            return { err };
        }
    }
}