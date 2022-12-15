"use strict"

module.exports = {

    returnJsonCollectionImporter_Prod: async function () {
        var data = {
            "info": {
                "_postman_id": "b7577796-7f11-4001-8dce-cf7511a38f98",
                "name": "Collection_UAT_1_Fraude_base",
                "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
                "_exporter_id": "19426219"
            },
            "item": [
                {
                    "name": "import_UAT1_V3",
                    "event": [
                        {
                            "listen": "prerequest",
                            "script": {
                                "exec": [
                                    "\r",
                                    "/* fehca de hoy personalizada YYYY/MM/DD  */\r",
                                    "var today = new Date();\r",
                                    "var dd = String(today.getDate()).padStart(2, '0');\r",
                                    "var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!\r",
                                    "var yyyy = today.getFullYear();\r",
                                    "today = yyyy + '/' + mm + '/' + dd;\r",
                                    "function randomDate(start, end) {\r",
                                    "    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));\r",
                                    "}\r",
                                    "var randomDateSpe = randomDate(new Date(2012, 0, 1), new Date());\r",
                                    "//console.log(randomDateSpe);\r",
                                    "\r",
                                    "\r",
                                    "\r",
                                    "/*Variables dinamicas desde CSV File */\r",
                                    "var transactionId = pm.variables.get(\"transactionId\");\r",
                                    "console.log(\"valor transactionId CSV--> \"+transactionId);\r",
                                    "pm.globals.set('transactionId',transactionId);\r",
                                    "\r",
                                    "var transactionDateTime = pm.variables.get(\"transactionDateTime\");\r",
                                    "console.log(\"valor transactionDateTime CSV--> \"+transactionDateTime);\r",
                                    "pm.globals.set('transactionDateTime',transactionDateTime);\r",
                                    "\r",
                                    "var currencyCode = pm.variables.get(\"currencyCode\");\r",
                                    "console.log(\"valor currencyCode CSV--> \"+currencyCode);\r",
                                    "pm.globals.set('currencyCode',currencyCode);\r",
                                    "\r",
                                    "var giftMessage = pm.variables.get(\"giftMessage\");\r",
                                    "console.log(\"valor giftMessage CSV--> \"+giftMessage);\r",
                                    "pm.globals.set('giftMessage',giftMessage);\r",
                                    "\r",
                                    "var ipAddress = pm.variables.get(\"ipAddress\");\r",
                                    "console.log(\"valor ipAddress CSV--> \"+ipAddress);\r",
                                    "pm.globals.set('ipAddress',ipAddress);\r",
                                    "\r",
                                    "var referralCode = pm.variables.get(\"referralCode\");\r",
                                    "console.log(\"valor referralCode CSV--> \"+referralCode);\r",
                                    "pm.globals.set('referralCode',referralCode);\r",
                                    "\r",
                                    "var salesChannel = pm.variables.get(\"salesChannel\");\r",
                                    "console.log(\"valor salesChannel CSV--> \"+salesChannel);\r",
                                    "pm.globals.set('salesChannel',salesChannel);\r",
                                    "\r",
                                    "var salesRep = pm.variables.get(\"salesRep\");\r",
                                    "console.log(\"valor salesRep CSV--> \"+salesRep);\r",
                                    "pm.globals.set('salesRep',salesRep);\r",
                                    "\r",
                                    "var transactionTotalAmount = pm.variables.get(\"transactionTotalAmount\");\r",
                                    "console.log(\"valor transactionTotalAmount CSV--> \"+transactionTotalAmount);\r",
                                    "pm.globals.set('transactionTotalAmount',transactionTotalAmount);\r",
                                    "\r",
                                    "var transactionType = pm.variables.get(\"transactionType\");\r",
                                    "console.log(\"valor transactionType CSV--> \"+transactionType);\r",
                                    "pm.globals.set('transactionType',transactionType);\r",
                                    "\r",
                                    "\r",
                                    "var browserCookie = pm.variables.get(\"browserCookie\");\r",
                                    "console.log(\"valor browserCookie CSV--> \"+browserCookie);\r",
                                    "pm.globals.set('browserCookie',browserCookie);\r",
                                    "\r",
                                    "var additionalEmailAddresses = pm.variables.get(\"additionalEmailAddresses\");\r",
                                    "console.log(\"valor additionalEmailAddresses CSV--> \"+additionalEmailAddresses);\r",
                                    "pm.globals.set('additionalEmailAddresses',additionalEmailAddresses);\r",
                                    "\r",
                                    "var billingAddress = pm.variables.get(\"billingAddress\");\r",
                                    "console.log(\"valor billingAddress CSV--> \"+billingAddress);\r",
                                    "pm.globals.set('billingAddress',billingAddress);\r",
                                    "\r",
                                    "var billingAddress2 = pm.variables.get(\"billingAddress2\");\r",
                                    "console.log(\"valor billingAddress2 CSV--> \"+billingAddress2);\r",
                                    "pm.globals.set('billingAddress2',billingAddress2);\r",
                                    "\r",
                                    "var billingCity = pm.variables.get(\"billingCity\");\r",
                                    "console.log(\"valor billingCity CSV--> \"+billingCity);\r",
                                    "pm.globals.set('billingCity',billingCity);\r",
                                    "\r",
                                    "var billingCountry = pm.variables.get(\"billingCountry\");\r",
                                    "console.log(\"valor billingCountry CSV--> \"+billingCountry);\r",
                                    "pm.globals.set('billingCountry',billingCountry);\r",
                                    "\r",
                                    "var billingFirstName = pm.variables.get(\"billingFirstName\");\r",
                                    "console.log(\"valor billingFirstName CSV--> \"+billingFirstName);\r",
                                    "pm.globals.set('billingFirstName',billingFirstName);\r",
                                    "\r",
                                    "\r",
                                    "var billingLastName = pm.variables.get(\"billingLastName\");\r",
                                    "console.log(\"valor billingLastName CSV--> \"+billingLastName);\r",
                                    "pm.globals.set('billingLastName',billingLastName);\r",
                                    "\r",
                                    "var billingMiddleName = pm.variables.get(\"billingMiddleName\");\r",
                                    "console.log(\"valor billingMiddleName CSV--> \"+billingMiddleName);\r",
                                    "pm.globals.set('billingMiddleName',billingMiddleName);\r",
                                    "\r",
                                    "var billingPhoneNumber = pm.variables.get(\"billingPhoneNumber\");\r",
                                    "console.log(\"valor billingPhoneNumber CSV--> \"+billingPhoneNumber);\r",
                                    "pm.globals.set('billingPhoneNumber',billingPhoneNumber);\r",
                                    "\r",
                                    "\r",
                                    "\r",
                                    "var billingPostalCode = pm.variables.get(\"billingPostalCode\");\r",
                                    "console.log(\"valor billingPostalCode CSV--> \"+billingPostalCode);\r",
                                    "pm.globals.set('billingPostalCode',billingPostalCode);\r",
                                    "\r",
                                    "\r",
                                    "var billingState = pm.variables.get(\"billingState\");\r",
                                    "console.log(\"valor billingState CSV--> \"+billingState);\r",
                                    "pm.globals.set('billingState',billingState);\r",
                                    "\r",
                                    "\r",
                                    "var customerEmailAddress = pm.variables.get(\"customerEmailAddress\");\r",
                                    "console.log(\"valor customerEmailAddress CSV--> \"+customerEmailAddress);\r",
                                    "pm.globals.set('customerEmailAddress',customerEmailAddress);\r",
                                    "\r",
                                    "var paymentType = pm.variables.get(\"paymentType\");\r",
                                    "console.log(\"valor paymentType CSV--> \"+paymentType);\r",
                                    "pm.globals.set('paymentType',paymentType);\r",
                                    "\r",
                                    "var totalNumberOfFailedAttempts = pm.variables.get(\"totalNumberOfFailedAttempts\");\r",
                                    "console.log(\"valor totalNumberOfFailedAttempts CSV--> \"+totalNumberOfFailedAttempts);\r",
                                    "pm.globals.set('totalNumberOfFailedAttempts',totalNumberOfFailedAttempts);\r",
                                    "\r",
                                    "var cardAuthorizationCode_D = pm.variables.get(\"cardAuthorizationCode-D\");\r",
                                    "console.log(\"valor cardAuthorizationCode_D CSV--> \"+cardAuthorizationCode_D);\r",
                                    "pm.globals.set('cardAuthorizationCode-D',cardAuthorizationCode_D);\r",
                                    "\r",
                                    "var cardAuthorizedAmount_D = pm.variables.get(\"cardAuthorizedAmount-D\");\r",
                                    "console.log(\"valor cardAuthorizedAmount_D CSV--> \"+cardAuthorizedAmount_D);\r",
                                    "pm.globals.set('cardAuthorizedAmount-D',cardAuthorizedAmount_D);\r",
                                    "\r",
                                    "var cardAvsResponse_D = pm.variables.get(\"cardAvsResponse-D\");\r",
                                    "console.log(\"valor cardAvsResponse_D CSV--> \"+cardAvsResponse_D);\r",
                                    "pm.globals.set('cardAvsResponse-D',cardAvsResponse_D);\r",
                                    "\r",
                                    "\r",
                                    "\r",
                                    "var cardCvvResponse_D = pm.variables.get(\"cardCvvResponse-D\");\r",
                                    "console.log(\"valor cardCvvResponse_D CSV--> \"+cardCvvResponse_D);\r",
                                    "pm.globals.set('cardCvvResponse-D',cardCvvResponse_D);\r",
                                    "\r",
                                    "var cardExpireDate_D = pm.variables.get(\"cardExpireDate-D\");\r",
                                    "console.log(\"valor cardExpireDate_D CSV--> \"+cardExpireDate_D);\r",
                                    "pm.globals.set('cardExpireDate-D',cardExpireDate_D);\r",
                                    "\r",
                                    "var cardExpireMonth_D = pm.variables.get(\"cardExpireMonth-D\");\r",
                                    "console.log(\"valor cardExpireMonth_D CSV--> \"+cardExpireMonth_D);\r",
                                    "pm.globals.set('cardExpireMonth-D',cardExpireMonth_D);\r",
                                    "\r",
                                    "var cardExpireYear_D = pm.variables.get(\"cardExpireYear-D\");\r",
                                    "console.log(\"valor cardExpireYear_D CSV--> \"+cardExpireYear_D);\r",
                                    "pm.globals.set('cardExpireYear-D',cardExpireYear_D);\r",
                                    "\r",
                                    "var cardNumber_D = pm.variables.get(\"cardNumber-D\");\r",
                                    "console.log(\"valor cardNumber_D CSV--> \"+cardNumber_D);\r",
                                    "pm.globals.set('cardNumber-D',cardNumber_D);\r",
                                    "\r",
                                    "var cardType_D = pm.variables.get(\"cardType-D\");\r",
                                    "console.log(\"valor cardType_D CSV--> \"+cardType_D);\r",
                                    "pm.globals.set('cardType-D',cardType_D);\r",
                                    "\r",
                                    "var cardholderName_D = pm.variables.get(\"cardholderName-D\");\r",
                                    "console.log(\"valor cardholderName_D CSV--> \"+cardholderName_D);\r",
                                    "pm.globals.set('cardholderName-D',cardholderName_D);\r",
                                    "\r",
                                    "var threedsEciIndicator_D = pm.variables.get(\"threedsEciIndicator-D\");\r",
                                    "console.log(\"valor threedsEciIndicator_D CSV--> \"+threedsEciIndicator_D);\r",
                                    "pm.globals.set('threedsEciIndicator-D',threedsEciIndicator_D);\r",
                                    "\r",
                                    "/*Variables generales */\r",
                                    "pm.globals.set('todayYYYYmmdd', today);\r",
                                    "pm.globals.set('randomNumberCard16', Math.floor(Math.random() * 9000000000000000));\r",
                                    "pm.globals.set('randomNumberTicket13', Math.floor(Math.random() * 9000000000000));\r",
                                    "pm.globals.set('randomNumber', Math.floor(Math.random() * 1000));\r",
                                    "\r",
                                    "\r",
                                    ""
                                ],
                                "type": "text/javascript"
                            }
                        },
                        {
                            "listen": "test",
                            "script": {
                                "exec": [
                                    "/*\r",
                                    "pm.test(\"Status code is 200\", function () {\r",
                                    "    pm.response.to.have.status(200);\r",
                                    "    console.log(\"Status code is 200!! OK\")\r",
                                    "});\r",
                                    "\r",
                                    "console.log(\":::::: JSON REQUEST::::::\");\r",
                                    "tests[`[INFO] Request params: ${request.data}`] = true;\r",
                                    "\r",
                                    "console.log(\":::::: JSON RESPONSE::::::\");\r",
                                    "tests[`[INFO] Response params: ${JSON.stringify(responseBody)}`] = true;\r",
                                    "*/\r",
                                    "\r",
                                    ""
                                ],
                                "type": "text/javascript"
                            }
                        }
                    ],
                    "request": {
                        "auth": {
                            "type": "basic",
                            "basic": [
                                {
                                    "key": "password",
                                    "value": "12121212Qw.@",
                                    "type": "string"
                                },
                                {
                                    "key": "username",
                                    "value": "lbatresimporteruat2",
                                    "type": "string"
                                }
                            ]
                        },
                        "method": "POST",
                        "header": [],
                        "body": {
                            "mode": "raw",
                            "raw": "{\r\n        \"transactionId\": \"{{transactionId}}\",\r\n        \"transactionType\": \"{{transactionType}}\",\r\n        \"transactionDateTime\": \"{{transactionDateTime}}\",\r\n        \"transactionTotalAmount\": \"{{transactionTotalAmount}}\",\r\n        \"salesChannel\": \"{{salesChannel}}\",\r\n        \"chain\": \"lord voldemort\",\r\n        \"dsgversion\": \"2\",\r\n        \"ipAddress\": \"{{ipAddress}}\",\r\n        \"totalDiscountCount\": 1,\r\n        \"totalDiscountAmount\": \"0.00\",\r\n        \"currencyCode\": \"{{currencyCode}}\",\r\n        \"billing\": {\r\n            \"billingFirstName\": \"{{billingFirstName}}\",\r\n            \"billingLastName\": \"{{billingLastName}}\",\r\n            \"customerEmailAddress\": \"{{customerEmailAddress}}\",\r\n            \"billingAddress\": \"{{billingAddress}}\",\r\n            \"billingCity\": \"{{billingCity}}\",\r\n            \"billingState\": \"{{billingState}}\",\r\n            \"billingPostalCode\": \"{{billingPostalCode}}\",\r\n            \"billingCountry\": \"{{billingCountry}}\",\r\n            \"billingPhoneNumber\": \"{{billingPhoneNumber}}\",\r\n            \"paymentType\": \"{{paymentType}}\",\r\n            \"cards\": {\r\n                \"card\": [\r\n                    {\r\n                        \"cardholderName-D\": \"{{billingFirstName}}\",\r\n                        \"cardType-D\": \"{{randomNumber}}\",\r\n                        \"cardToken-D\": \"{{randomNumber}}\",\r\n                        \"cardBin-D\": \"{{randomNumber}}\",\r\n                        \"cardNumberLast4-D\": \"{{randomNumber}}\",\r\n                        \"cardAuthorizedAmount-D\": \"{{randomNumber}}\",\r\n                        \"cardExpireDate-D\": \"\",\r\n                        \"cardExpireMonth-D\": \"11\",\r\n                        \"cardExpireYear-D\": \"2026\",\r\n                        \"cardAuthorizationCode-D\": \"{{randomNumber}}\",\r\n                        \"cardAvsResponse-D\": \"Y\",\r\n                        \"avsDescription\": \"7 Both postal code and address match\",\r\n                        \"cardCvvResponse-D\": \"M\",\r\n                        \"tenderDescription\": \"visacommercialcredit\",\r\n                        \"entryMode\": \"Keyed\",\r\n                        \"liabilityShift\": \"false\"\r\n                    }\r\n                ]\r\n            }\r\n        }\r\n}",
                            "options": {
                                "raw": {
                                    "language": "json"
                                }
                            }
                        },
                        "url": {
                            "raw": "http://rtdgen.uat2.vip/icNowImport/bd20fb18-422f-4313-a1d1-f52c56762262",
                            "protocol": "http",
                            "host": [
                                "rtdgen",
                                "uat2",
                                "vip"
                            ],
                            "path": [
                                "icNowImport",
                                "bd20fb18-422f-4313-a1d1-f52c56762262"
                            ]
                        }
                    },
                    "response": [
                        {
                            "name": "import_UAT1_V3",
                            "originalRequest": {
                                "method": "POST",
                                "header": [],
                                "body": {
                                    "mode": "raw",
                                    "raw": "{\r\n        \"transactionId\": \"Lbatres003\",\r\n        \"transactionType\": \"none\",\r\n        \"transactionDateTime\": \"2022-06-30T12:00:00-0500\",\r\n        \"transactionTotalAmount\": \"1123.05\",\r\n        \"salesChannel\": \"WEB\",\r\n        \"chain\": \"DicksSportingGoods\",\r\n        \"dsgversion\": \"2\",\r\n        \"ipAddress\": \"51.81.153.6\",\r\n        \"totalDiscountCount\": 1,\r\n        \"totalDiscountAmount\": \"0.00\",\r\n        \"currencyCode\": \"USD\",\r\n        \"billing\": {\r\n            \"billingFirstName\": \"Mayur\",\r\n            \"billingLastName\": \"mistry\",\r\n            \"customerEmailAddress\": \"kkmistryholdingsllc@gmail.com\",\r\n            \"billingAddress\": \"305 N Briant St\",\r\n            \"billingCity\": \"Huntington\",\r\n            \"billingState\": \"IN\",\r\n            \"billingPostalCode\": \"46750-2958\",\r\n            \"billingCountry\": \"US\",\r\n            \"billingPhoneNumber\": \"7042476372\",\r\n            \"paymentType\": \"Visa\",\r\n            \"cards\": {\r\n                \"card\": [\r\n                    {\r\n                        \"cardholderName-D\": \"Mayur mistry\",\r\n                        \"cardType-D\": \"Visa\",\r\n                        \"cardToken-D\": \"C053541272031234\",\r\n                        \"cardBin-D\": \"424631\",\r\n                        \"cardNumberLast4-D\": \"1401\",\r\n                        \"cardAuthorizedAmount-D\": \"1123.05\",\r\n                        \"cardExpireDate-D\": \"\",\r\n                        \"cardExpireMonth-D\": \"11\",\r\n                        \"cardExpireYear-D\": \"2026\",\r\n                        \"cardAuthorizationCode-D\": \"07658G\",\r\n                        \"cardAvsResponse-D\": \"Y\",\r\n                        \"avsDescription\": \"7 Both postal code and address match\",\r\n                        \"cardCvvResponse-D\": \"M\",\r\n                        \"tenderDescription\": \"visacommercialcredit\",\r\n                        \"entryMode\": \"Keyed\",\r\n                        \"liabilityShift\": \"false\"\r\n                    }\r\n                ]\r\n            }\r\n        }\r\n}",
                                    "options": {
                                        "raw": {
                                            "language": "json"
                                        }
                                    }
                                },
                                "url": {
                                    "raw": "http://rtdgen.uat2.vip/icNowImport/bd20fb18-422f-4313-a1d1-f52c56762262",
                                    "protocol": "http",
                                    "host": [
                                        "rtdgen",
                                        "uat",
                                        "vip"
                                    ],
                                    "path": [
                                        "icNowImport",
                                        "bd20fb18-422f-4313-a1d1-f52c56762262"
                                    ]
                                }
                            },
                            "status": "OK",
                            "code": 200,
                            "_postman_previewlanguage": "json",
                            "header": [
                                {
                                    "key": "Cache-Control",
                                    "value": "no-store, no-cache, must-revalidate"
                                },
                                {
                                    "key": "Pragma",
                                    "value": "no-cache"
                                },
                                {
                                    "key": "vary",
                                    "value": "accept-encoding"
                                },
                                {
                                    "key": "Content-Encoding",
                                    "value": "gzip"
                                },
                                {
                                    "key": "Content-Type",
                                    "value": "application/json;charset=UTF-8"
                                },
                                {
                                    "key": "Transfer-Encoding",
                                    "value": "chunked"
                                },
                                {
                                    "key": "Date",
                                    "value": "Mon, 01 Aug 2022 18:39:12 GMT"
                                },
                                {
                                    "key": "Keep-Alive",
                                    "value": "timeout=15"
                                },
                                {
                                    "key": "Connection",
                                    "value": "keep-alive"
                                }
                            ],
                            "cookie": [],
                            "body": "{\n    \"transaction-results\": {\n        \"transaction-id\": \"Lbatres003\",\n        \"cross-reference\": \"6f268160-a5f5-4c2e-a788-003481f8c700\",\n        \"rules-tripped\": \"5237260000001803411:SPOS_Distance Between IP Postal Code and Billing Postal Code Greater Than 1000:500;5237260000001803398:SPOS_Transaction Total Amount Greater Than 500:500;\",\n        \"total-score\": 1000,\n        \"recommendation-code\": \"ACCEPT\",\n        \"remarks\": \"\"\n    }\n}"
                        }
                    ]
                }
            ]
        };

        return data;
    }
}