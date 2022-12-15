"use strict"

module.exports = {

    returnJsonCollectionImporter_multi_Prod: async function () {
        const data = {
            "info": {
                "_postman_id": "a849dc97-a6a2-4a4e-8a2b-0e968223a204",
                "name": "Collection_UAT_1_Fraude_multi",
                "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
                "_exporter_id": "19426219"
            },
            "item": [
                {
                    "name": "import_UAT1_V3_multi_1_statics",
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
                                    "var today2 = yyyy + '-' + mm + '-' + dd +'T12:00:00-0500';\r",
                                    "var today3 = yyyy + '_' + mm + '_' + dd;\r",
                                    "pm.globals.set('dateFormated',today2);\r",
                                    "pm.globals.set('dateFormated3',today3);\r",
                                    "\r",
                                    "function randomDate(start, end) {\r",
                                    "    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));\r",
                                    "}\r",
                                    "var randomDateSpe = randomDate(new Date(2012, 0, 1), new Date());\r",
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
                                    "\r",
                                    "tests[`[TC] 10.2.UC01.AC05.TC002`] = true;\r",
                                    "tests[`[INFO] Response params: ${JSON.stringify(responseBody)}`] = true;"
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
                                    "key": "username",
                                    "value": "lbatresimporteruat1",
                                    "type": "string"
                                },
                                {
                                    "key": "password",
                                    "value": "12121212Qw.@",
                                    "type": "string"
                                }
                            ]
                        },
                        "method": "POST",
                        "header": [],
                        "body": {
                            "mode": "raw",
                            "raw": "{\r\n        \"transactionId\": \"lba3_102UC01AC05TC002_{{dateFormated3}}_{{randomNumber}}\",\r\n        \"transactionType\": \"none\",\r\n        \"transactionDateTime\": \"{{dateFormated}}\",\r\n        \"transactionTotalAmount\": \"{{$randomPrice}}\",\r\n        \"salesChannel\": \"WEB\",\r\n        \"chain\": \"DicksSportingGoods\",\r\n        \"dsgversion\": \"2\",\r\n        \"ipAddress\": \"{{$randomIP}}\",\r\n        \"totalDiscountCount\": 1,\r\n        \"totalDiscountAmount\": \"0.00\",\r\n        \"currencyCode\": \"USD\",\r\n        \"billing\": {\r\n            \"billingFirstName\": \"{{$randomFirstName}}\",\r\n            \"billingLastName\": \"{{$randomLastName}}\",\r\n            \"customerEmailAddress\": \"{{$randomEmail}}\",\r\n            \"billingAddress\": \"{{$randomStreetAddress}}\",\r\n            \"billingCity\": \"Huntington\",\r\n            \"billingState\": \"IN\",\r\n            \"billingPostalCode\": \"46750-2958\",\r\n            \"billingCountry\": \"US\",\r\n            \"billingPhoneNumber\": \"7042476372\",\r\n            \"paymentType\": \"Visa\",\r\n            \"cards\": {\r\n                \"card\": [\r\n                    {\r\n                        \"cardholderName-D\": \"{{$randomFullName}}\",\r\n                        \"cardType-D\": \"Visa\",\r\n                        \"cardToken-D\": \"C053541272031234\",\r\n                        \"cardBin-D\": \"424631\",\r\n                        \"cardNumberLast4-D\": \"1401\",\r\n                        \"cardAuthorizedAmount-D\": \"{{$randomPrice}}\",\r\n                        \"cardExpireDate-D\": \"\",\r\n                        \"cardExpireMonth-D\": \"11\",\r\n                        \"cardExpireYear-D\": \"2026\",\r\n                        \"cardAuthorizationCode-D\": \"07658G\",\r\n                        \"cardAvsResponse-D\": \"Y\",\r\n                        \"avsDescription\": \"7 Both postal code and address match\",\r\n                        \"cardCvvResponse-D\": \"M\",\r\n                        \"tenderDescription\": \"visacommercialcredit\",\r\n                        \"entryMode\": \"Keyed\",\r\n                        \"liabilityShift\": \"false\"\r\n                    }\r\n                ]\r\n            }\r\n        }\r\n}",
                            "options": {
                                "raw": {
                                    "language": "json"
                                }
                            }
                        },
                        "url": {
                            "raw": "http://rtdgen.uat.vip/icNowImport/ece1014e-aef5-493d-b525-68c38eb6e0d4",
                            "protocol": "http",
                            "host": [
                                "rtdgen",
                                "uat",
                                "vip"
                            ],
                            "path": [
                                "icNowImport",
                                "ece1014e-aef5-493d-b525-68c38eb6e0d4"
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
                                    "raw": "http://rtdgen.uat.vip/icNowImport/ece1014e-aef5-493d-b525-68c38eb6e0d4",
                                    "protocol": "http",
                                    "host": [
                                        "rtdgen",
                                        "uat",
                                        "vip"
                                    ],
                                    "path": [
                                        "icNowImport",
                                        "ece1014e-aef5-493d-b525-68c38eb6e0d4"
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
                },
                {
                    "name": "import_UAT1_V3_multi_1_statics_SP2",
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
                                    "var today2 = yyyy + '-' + mm + '-' + dd +'T12:00:00-0500';\r",
                                    "var today3 = yyyy + '_' + mm + '_' + dd;\r",
                                    "pm.globals.set('dateFormated',today2);\r",
                                    "pm.globals.set('dateFormated3',today3);\r",
                                    "\r",
                                    "function randomDate(start, end) {\r",
                                    "    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));\r",
                                    "}\r",
                                    "var randomDateSpe = randomDate(new Date(2012, 0, 1), new Date());\r",
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
                                    "\r",
                                    "tests[`[TC] 10.2.UC01.AC05.TC003`] = true;\r",
                                    "tests[`[INFO] Response params: ${JSON.stringify(responseBody)}`] = true;"
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
                                    "key": "username",
                                    "value": "lbatresimporteruat1",
                                    "type": "string"
                                },
                                {
                                    "key": "password",
                                    "value": "12121212Qw.@",
                                    "type": "string"
                                }
                            ]
                        },
                        "method": "POST",
                        "header": [],
                        "body": {
                            "mode": "raw",
                            "raw": "{\r\n        \"transactionId\": \"lba3_102UC01AC05TC003_{{dateFormated3}}_{{randomNumber}}\",\r\n        \"transactionType\": \"none\",\r\n        \"transactionDateTime\": \"{{dateFormated}}\",\r\n        \"transactionTotalAmount\": \"{{$randomPrice}}\",\r\n        \"salesChannel\": \"WEB\",\r\n        \"chain\": \"DicksSportingGoods\",\r\n        \"dsgversion\": \"2\",\r\n        \"ipAddress\": \"{{$randomIP}}\",\r\n        \"totalDiscountCount\": 1,\r\n        \"totalDiscountAmount\": \"0.00\",\r\n        \"currencyCode\": \"USD\",\r\n        \"billing\": {\r\n            \"billingFirstName\": \"{{$randomFirstName}}\",\r\n            \"billingLastName\": \"{{$randomLastName}}\",\r\n            \"customerEmailAddress\": \"{{$randomEmail}}\",\r\n            \"billingAddress\": \"{{$randomStreetAddress}}\",\r\n            \"billingCity\": \"Huntington\",\r\n            \"billingState\": \"IN\",\r\n            \"billingPostalCode\": \"46750-2958\",\r\n            \"billingCountry\": \"US\",\r\n            \"billingPhoneNumber\": \"7042476372\",\r\n            \"paymentType\": \"Visa\",\r\n            \"cards\": {\r\n                \"card\": [\r\n                    {\r\n                        \"cardholderName-D\": \"{{$randomFullName}}\",\r\n                        \"cardType-D\": \"Visa\",\r\n                        \"cardToken-D\": \"C053541272031234\",\r\n                        \"cardBin-D\": \"424631\",\r\n                        \"cardNumberLast4-D\": \"1401\",\r\n                        \"cardAuthorizedAmount-D\":0,\r\n                        \"cardExpireDate-D\": \"\",\r\n                        \"cardExpireMonth-D\": \"11\",\r\n                        \"cardExpireYear-D\": \"2026\",\r\n                        \"cardAuthorizationCode-D\": \"07658G\",\r\n                        \"cardAvsResponse-D\": \"Y\",\r\n                        \"avsDescription\": \"7 Both postal code and address match\",\r\n                        \"cardCvvResponse-D\": \"M\",\r\n                        \"tenderDescription\": \"visacommercialcredit\",\r\n                        \"entryMode\": \"Keyed\",\r\n                        \"liabilityShift\": \"false\"\r\n                    }\r\n                ]\r\n            }\r\n        }\r\n}",
                            "options": {
                                "raw": {
                                    "language": "json"
                                }
                            }
                        },
                        "url": {
                            "raw": "http://rtdgen.uat.vip/icNowImport/ece1014e-aef5-493d-b525-68c38eb6e0d4",
                            "protocol": "http",
                            "host": [
                                "rtdgen",
                                "uat",
                                "vip"
                            ],
                            "path": [
                                "icNowImport",
                                "ece1014e-aef5-493d-b525-68c38eb6e0d4"
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
                                    "raw": "http://rtdgen.uat.vip/icNowImport/ece1014e-aef5-493d-b525-68c38eb6e0d4",
                                    "protocol": "http",
                                    "host": [
                                        "rtdgen",
                                        "uat",
                                        "vip"
                                    ],
                                    "path": [
                                        "icNowImport",
                                        "ece1014e-aef5-493d-b525-68c38eb6e0d4"
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
                },
                {
                    "name": "import_UAT1_V3_multi_1_statics_SP3",
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
                                    "var today2 = yyyy + '-' + mm + '-' + dd +'T12:00:00-0500';\r",
                                    "var today3 = yyyy + '_' + mm + '_' + dd;\r",
                                    "pm.globals.set('dateFormated',today2);\r",
                                    "pm.globals.set('dateFormated3',today3);\r",
                                    "\r",
                                    "function randomDate(start, end) {\r",
                                    "    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));\r",
                                    "}\r",
                                    "var randomDateSpe = randomDate(new Date(2012, 0, 1), new Date());\r",
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
                                    "\r",
                                    "tests[`[TC] 10.2.UC01.AC05.TC004`] = true;\r",
                                    "tests[`[INFO] Response params: ${JSON.stringify(responseBody)}`] = true;"
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
                                    "key": "username",
                                    "value": "lbatresimporteruat1",
                                    "type": "string"
                                },
                                {
                                    "key": "password",
                                    "value": "12121212Qw.@",
                                    "type": "string"
                                }
                            ]
                        },
                        "method": "POST",
                        "header": [],
                        "body": {
                            "mode": "raw",
                            "raw": "{\r\n        \"transactionId\": \"lba3_102UC01AC05TC004_{{dateFormated3}}_{{randomNumber}}\",\r\n        \"transactionType\": \"none\",\r\n        \"transactionDateTime\": \"{{dateFormated}}\",\r\n        \"transactionTotalAmount\": \"{{$randomPrice}}\",\r\n        \"salesChannel\": \"WEB\",\r\n        \"chain\": \"DicksSportingGoods\",\r\n        \"dsgversion\": \"2\",\r\n        \"ipAddress\": \"{{$randomIP}}\",\r\n        \"totalDiscountCount\": 1,\r\n        \"totalDiscountAmount\": \"0.00\",\r\n        \"currencyCode\": \"USD\",\r\n        \"billing\": {\r\n            \"billingFirstName\": \"{{$randomFirstName}}\",\r\n            \"billingLastName\": \"{{$randomLastName}}\",\r\n            \"customerEmailAddress\": \"{{$randomEmail}}\",\r\n            \"billingAddress\": \"{{$randomStreetAddress}}\",\r\n            \"billingCity\": \"Huntington\",\r\n            \"billingState\": \"IN\",\r\n            \"billingPostalCode\": \"46750-2958\",\r\n            \"billingCountry\": \"US\",\r\n            \"billingPhoneNumber\": \"7042476372\",\r\n            \"paymentType\": \"Visa\",\r\n            \"cards\": {\r\n                \"card\": [\r\n                    {\r\n                        \"cardholderName-D\": \"{{$randomFullName}}\",\r\n                        \"cardType-D\": \"Visa\",\r\n                        \"cardToken-D\": \"C053541272031234\",\r\n                        \"cardBin-D\": \"424631\",\r\n                        \"cardNumberLast4-D\": \"1401\",\r\n                        \"cardAuthorizedAmount-D\":\"\",\r\n                        \"cardExpireDate-D\": \"\",\r\n                        \"cardExpireMonth-D\": \"11\",\r\n                        \"cardExpireYear-D\": \"2026\",\r\n                        \"cardAuthorizationCode-D\": \"07658G\",\r\n                        \"cardAvsResponse-D\": \"Y\",\r\n                        \"avsDescription\": \"7 Both postal code and address match\",\r\n                        \"cardCvvResponse-D\": \"M\",\r\n                        \"tenderDescription\": \"visacommercialcredit\",\r\n                        \"entryMode\": \"Keyed\",\r\n                        \"liabilityShift\": \"false\"\r\n                    }\r\n                ]\r\n            }\r\n        }\r\n}",
                            "options": {
                                "raw": {
                                    "language": "json"
                                }
                            }
                        },
                        "url": {
                            "raw": "http://rtdgen.uat.vip/icNowImport/ece1014e-aef5-493d-b525-68c38eb6e0d4",
                            "protocol": "http",
                            "host": [
                                "rtdgen",
                                "uat",
                                "vip"
                            ],
                            "path": [
                                "icNowImport",
                                "ece1014e-aef5-493d-b525-68c38eb6e0d4"
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
                                    "raw": "http://rtdgen.uat.vip/icNowImport/ece1014e-aef5-493d-b525-68c38eb6e0d4",
                                    "protocol": "http",
                                    "host": [
                                        "rtdgen",
                                        "uat",
                                        "vip"
                                    ],
                                    "path": [
                                        "icNowImport",
                                        "ece1014e-aef5-493d-b525-68c38eb6e0d4"
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
                },
                {
                    "name": "import_UAT1_V3_multi_1_statics_SP4",
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
                                    "var today2 = yyyy + '-' + mm + '-' + dd +'T12:00:00-0500';\r",
                                    "var today3 = yyyy + '_' + mm + '_' + dd;\r",
                                    "pm.globals.set('dateFormated',today2);\r",
                                    "pm.globals.set('dateFormated3',today3);\r",
                                    "\r",
                                    "function randomDate(start, end) {\r",
                                    "    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));\r",
                                    "}\r",
                                    "var randomDateSpe = randomDate(new Date(2012, 0, 1), new Date());\r",
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
                                    "\r",
                                    "tests[`[TC] 10.2.UC01.AC05.TC005`] = true;\r",
                                    "tests[`[INFO] Response params: ${JSON.stringify(responseBody)}`] = true;"
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
                                    "key": "username",
                                    "value": "lbatresimporteruat1",
                                    "type": "string"
                                },
                                {
                                    "key": "password",
                                    "value": "12121212Qw.@",
                                    "type": "string"
                                }
                            ]
                        },
                        "method": "POST",
                        "header": [],
                        "body": {
                            "mode": "raw",
                            "raw": "{\r\n        \"transactionId\": \"lba3_102UC01AC05TC005_{{dateFormated3}}_{{randomNumber}}\",\r\n        \"transactionType\": \"none\",\r\n        \"transactionDateTime\": \"{{dateFormated}}\",\r\n        \"transactionTotalAmount\": \"{{$randomPrice}}\",\r\n        \"salesChannel\": \"WEB\",\r\n        \"chain\": \"DicksSportingGoods\",\r\n        \"dsgversion\": \"2\",\r\n        \"ipAddress\": \"{{$randomIP}}\",\r\n        \"totalDiscountCount\": 1,\r\n        \"totalDiscountAmount\": \"0.00\",\r\n        \"currencyCode\": \"USD\",\r\n        \"billing\": {\r\n            \"billingFirstName\": \"{{$randomFirstName}}\",\r\n            \"billingLastName\": \"{{$randomLastName}}\",\r\n            \"customerEmailAddress\": \"{{$randomEmail}}\",\r\n            \"billingAddress\": \"{{$randomStreetAddress}}\",\r\n            \"billingCity\": \"Huntington\",\r\n            \"billingState\": \"IN\",\r\n            \"billingPostalCode\": \"46750-2958\",\r\n            \"billingCountry\": \"US\",\r\n            \"billingPhoneNumber\": \"7042476372\",\r\n            \"paymentType\": \"Visa\",\r\n            \"cards\": {\r\n                \"card\": [\r\n                    {\r\n                        \"cardholderName-D\": \"{{$randomFullName}}\",\r\n                        \"cardType-D\": \"Visa\",\r\n                        \"cardToken-D\": \"C053541272031234\",\r\n                        \"cardBin-D\": \"424631\",\r\n                        \"cardNumberLast4-D\": \"1401\",\r\n                        \"cardAuthorizedAmount-D\":\"{{$randomPrice}}\",\r\n                        \"cardExpireDate-D\": \"\",\r\n                        \"cardExpireMonth-D\": \"11\",\r\n                        \"cardExpireYear-D\": \"2026\",\r\n                        \"cardAuthorizationCode-D\": \"07658G\",\r\n                        \"cardAvsResponse-D\": \"Y\",\r\n                        \"avsDescription\": \"7 Both postal code and address match\",\r\n                        \"cardCvvResponse-D\": \"M\",\r\n                        \"tenderDescription\": \"visacommercialcredit\",\r\n                        \"entryMode\": \"Keyed\",\r\n                        \"liabilityShift\": \"false\"\r\n                    },\r\n                    {\r\n                        \"cardholderName-D\": \"{{$randomFullName}}\",\r\n                        \"cardType-D\": \"Visa\",\r\n                        \"cardToken-D\": \"C053541272031234\",\r\n                        \"cardBin-D\": \"424631\",\r\n                        \"cardNumberLast4-D\": \"1401\",\r\n                        \"cardAuthorizedAmount-D\":\"{{$randomPrice}}\",\r\n                        \"cardExpireDate-D\": \"\",\r\n                        \"cardExpireMonth-D\": \"11\",\r\n                        \"cardExpireYear-D\": \"2026\",\r\n                        \"cardAuthorizationCode-D\": \"07658G\",\r\n                        \"cardAvsResponse-D\": \"Y\",\r\n                        \"avsDescription\": \"7 Both postal code and address match\",\r\n                        \"cardCvvResponse-D\": \"M\",\r\n                        \"tenderDescription\": \"visacommercialcredit\",\r\n                        \"entryMode\": \"Keyed\",\r\n                        \"liabilityShift\": \"false\"\r\n                    },\r\n                    {\r\n                        \"cardholderName-D\": \"{{$randomFullName}}\",\r\n                        \"cardType-D\": \"Visa\",\r\n                        \"cardToken-D\": \"C053541272031234\",\r\n                        \"cardBin-D\": \"424631\",\r\n                        \"cardNumberLast4-D\": \"1401\",\r\n                        \"cardAuthorizedAmount-D\":\"{{$randomPrice}}\",\r\n                        \"cardExpireDate-D\": \"\",\r\n                        \"cardExpireMonth-D\": \"11\",\r\n                        \"cardExpireYear-D\": \"2026\",\r\n                        \"cardAuthorizationCode-D\": \"07658G\",\r\n                        \"cardAvsResponse-D\": \"Y\",\r\n                        \"avsDescription\": \"7 Both postal code and address match\",\r\n                        \"cardCvvResponse-D\": \"M\",\r\n                        \"tenderDescription\": \"visacommercialcredit\",\r\n                        \"entryMode\": \"Keyed\",\r\n                        \"liabilityShift\": \"false\"\r\n                    },{\r\n                        \"cardholderName-D\": \"{{$randomFullName}}\",\r\n                        \"cardType-D\": \"Visa\",\r\n                        \"cardToken-D\": \"C053541272031234\",\r\n                        \"cardBin-D\": \"424631\",\r\n                        \"cardNumberLast4-D\": \"1401\",\r\n                        \"cardAuthorizedAmount-D\":\"{{$randomPrice}}\",\r\n                        \"cardExpireDate-D\": \"\",\r\n                        \"cardExpireMonth-D\": \"11\",\r\n                        \"cardExpireYear-D\": \"2026\",\r\n                        \"cardAuthorizationCode-D\": \"07658G\",\r\n                        \"cardAvsResponse-D\": \"Y\",\r\n                        \"avsDescription\": \"7 Both postal code and address match\",\r\n                        \"cardCvvResponse-D\": \"M\",\r\n                        \"tenderDescription\": \"visacommercialcredit\",\r\n                        \"entryMode\": \"Keyed\",\r\n                        \"liabilityShift\": \"false\"\r\n                    }\r\n                ]\r\n            }\r\n        }\r\n}",
                            "options": {
                                "raw": {
                                    "language": "json"
                                }
                            }
                        },
                        "url": {
                            "raw": "http://rtdgen.uat.vip/icNowImport/ece1014e-aef5-493d-b525-68c38eb6e0d4",
                            "protocol": "http",
                            "host": [
                                "rtdgen",
                                "uat",
                                "vip"
                            ],
                            "path": [
                                "icNowImport",
                                "ece1014e-aef5-493d-b525-68c38eb6e0d4"
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
                                    "raw": "http://rtdgen.uat.vip/icNowImport/ece1014e-aef5-493d-b525-68c38eb6e0d4",
                                    "protocol": "http",
                                    "host": [
                                        "rtdgen",
                                        "uat",
                                        "vip"
                                    ],
                                    "path": [
                                        "icNowImport",
                                        "ece1014e-aef5-493d-b525-68c38eb6e0d4"
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
                },
                {
                    "name": "import_UAT1_V3_multi_1_statics_SP5",
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
                                    "var today2 = yyyy + '-' + mm + '-' + dd +'T12:00:00-0500';\r",
                                    "var today3 = yyyy + '_' + mm + '_' + dd;\r",
                                    "pm.globals.set('dateFormated',today2);\r",
                                    "pm.globals.set('dateFormated3',today3);\r",
                                    "\r",
                                    "function randomDate(start, end) {\r",
                                    "    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));\r",
                                    "}\r",
                                    "var randomDateSpe = randomDate(new Date(2012, 0, 1), new Date());\r",
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
                                    "\r",
                                    "tests[`[TC] 10.2.UC01.AC05.TC006`] = true;\r",
                                    "tests[`[INFO] Response params: ${JSON.stringify(responseBody)}`] = true;"
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
                                    "key": "username",
                                    "value": "lbatresimporteruat1",
                                    "type": "string"
                                },
                                {
                                    "key": "password",
                                    "value": "12121212Qw.@",
                                    "type": "string"
                                }
                            ]
                        },
                        "method": "POST",
                        "header": [],
                        "body": {
                            "mode": "raw",
                            "raw": "{\r\n        \"transactionId\": \"lba3_102UC01AC05TC006_{{dateFormated3}}_{{randomNumber}}\",\r\n        \"transactionType\": \"none\",\r\n        \"transactionDateTime\": \"{{dateFormated}}\",\r\n        \"transactionTotalAmount\": \"{{$randomPrice}}\",\r\n        \"salesChannel\": \"WEB\",\r\n        \"chain\": \"DicksSportingGoods\",\r\n        \"dsgversion\": \"2\",\r\n        \"ipAddress\": \"{{$randomIP}}\",\r\n        \"totalDiscountCount\": 1,\r\n        \"totalDiscountAmount\": \"0.00\",\r\n        \"currencyCode\": \"USD\",\r\n        \"billing\": {\r\n            \"billingFirstName\": \"{{$randomFirstName}}\",\r\n            \"billingLastName\": \"{{$randomLastName}}\",\r\n            \"customerEmailAddress\": \"{{$randomEmail}}\",\r\n            \"billingAddress\": \"{{$randomStreetAddress}}\",\r\n            \"billingCity\": \"Huntington\",\r\n            \"billingState\": \"IN\",\r\n            \"billingPostalCode\": \"46750-2958\",\r\n            \"billingCountry\": \"US\",\r\n            \"billingPhoneNumber\": \"7042476372\",\r\n            \"paymentType\": \"Visa\",\r\n            \"cards\": {\r\n                \"card\": [\r\n                    {\r\n                        \"cardholderName-D\": \"{{$randomFullName}}\",\r\n                        \"cardType-D\": \"Visa\",\r\n                        \"cardToken-D\": \"C053541272031234\",\r\n                        \"cardBin-D\": \"424631\",\r\n                        \"cardNumberLast4-D\": \"1401\",\r\n                        \"cardAuthorizedAmount-D\":0,\r\n                        \"cardExpireDate-D\": \"\",\r\n                        \"cardExpireMonth-D\": \"11\",\r\n                        \"cardExpireYear-D\": \"2026\",\r\n                        \"cardAuthorizationCode-D\": \"07658G\",\r\n                        \"cardAvsResponse-D\": \"Y\",\r\n                        \"avsDescription\": \"7 Both postal code and address match\",\r\n                        \"cardCvvResponse-D\": \"M\",\r\n                        \"tenderDescription\": \"visacommercialcredit\",\r\n                        \"entryMode\": \"Keyed\",\r\n                        \"liabilityShift\": \"false\"\r\n                    },\r\n                    {\r\n                        \"cardholderName-D\": \"{{$randomFullName}}\",\r\n                        \"cardType-D\": \"Visa\",\r\n                        \"cardToken-D\": \"C053541272031234\",\r\n                        \"cardBin-D\": \"424631\",\r\n                        \"cardNumberLast4-D\": \"1401\",\r\n                        \"cardAuthorizedAmount-D\":0,\r\n                        \"cardExpireDate-D\": \"\",\r\n                        \"cardExpireMonth-D\": \"11\",\r\n                        \"cardExpireYear-D\": \"2026\",\r\n                        \"cardAuthorizationCode-D\": \"07658G\",\r\n                        \"cardAvsResponse-D\": \"Y\",\r\n                        \"avsDescription\": \"7 Both postal code and address match\",\r\n                        \"cardCvvResponse-D\": \"M\",\r\n                        \"tenderDescription\": \"visacommercialcredit\",\r\n                        \"entryMode\": \"Keyed\",\r\n                        \"liabilityShift\": \"false\"\r\n                    },\r\n                    {\r\n                        \"cardholderName-D\": \"{{$randomFullName}}\",\r\n                        \"cardType-D\": \"Visa\",\r\n                        \"cardToken-D\": \"C053541272031234\",\r\n                        \"cardBin-D\": \"424631\",\r\n                        \"cardNumberLast4-D\": \"1401\",\r\n                        \"cardAuthorizedAmount-D\":0,\r\n                        \"cardExpireDate-D\": \"\",\r\n                        \"cardExpireMonth-D\": \"11\",\r\n                        \"cardExpireYear-D\": \"2026\",\r\n                        \"cardAuthorizationCode-D\": \"07658G\",\r\n                        \"cardAvsResponse-D\": \"Y\",\r\n                        \"avsDescription\": \"7 Both postal code and address match\",\r\n                        \"cardCvvResponse-D\": \"M\",\r\n                        \"tenderDescription\": \"visacommercialcredit\",\r\n                        \"entryMode\": \"Keyed\",\r\n                        \"liabilityShift\": \"false\"\r\n                    },{\r\n                        \"cardholderName-D\": \"{{$randomFullName}}\",\r\n                        \"cardType-D\": \"Visa\",\r\n                        \"cardToken-D\": \"C053541272031234\",\r\n                        \"cardBin-D\": \"424631\",\r\n                        \"cardNumberLast4-D\": \"1401\",\r\n                        \"cardAuthorizedAmount-D\":0,\r\n                        \"cardExpireDate-D\": \"\",\r\n                        \"cardExpireMonth-D\": \"11\",\r\n                        \"cardExpireYear-D\": \"2026\",\r\n                        \"cardAuthorizationCode-D\": \"07658G\",\r\n                        \"cardAvsResponse-D\": \"Y\",\r\n                        \"avsDescription\": \"7 Both postal code and address match\",\r\n                        \"cardCvvResponse-D\": \"M\",\r\n                        \"tenderDescription\": \"visacommercialcredit\",\r\n                        \"entryMode\": \"Keyed\",\r\n                        \"liabilityShift\": \"false\"\r\n                    }\r\n                ]\r\n            }\r\n        }\r\n}",
                            "options": {
                                "raw": {
                                    "language": "json"
                                }
                            }
                        },
                        "url": {
                            "raw": "http://rtdgen.uat.vip/icNowImport/ece1014e-aef5-493d-b525-68c38eb6e0d4",
                            "protocol": "http",
                            "host": [
                                "rtdgen",
                                "uat",
                                "vip"
                            ],
                            "path": [
                                "icNowImport",
                                "ece1014e-aef5-493d-b525-68c38eb6e0d4"
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
                                    "raw": "http://rtdgen.uat.vip/icNowImport/ece1014e-aef5-493d-b525-68c38eb6e0d4",
                                    "protocol": "http",
                                    "host": [
                                        "rtdgen",
                                        "uat",
                                        "vip"
                                    ],
                                    "path": [
                                        "icNowImport",
                                        "ece1014e-aef5-493d-b525-68c38eb6e0d4"
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
                },
                {
                    "name": "import_UAT1_V3_multi_1_statics_SP6",
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
                                    "var today2 = yyyy + '-' + mm + '-' + dd +'T12:00:00-0500';\r",
                                    "var today3 = yyyy + '_' + mm + '_' + dd;\r",
                                    "pm.globals.set('dateFormated',today2);\r",
                                    "pm.globals.set('dateFormated3',today3);\r",
                                    "\r",
                                    "function randomDate(start, end) {\r",
                                    "    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));\r",
                                    "}\r",
                                    "var randomDateSpe = randomDate(new Date(2012, 0, 1), new Date());\r",
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
                                    "\r",
                                    "tests[`[TC] 10.2.UC01.AC05.TC007`] = true;\r",
                                    "tests[`[INFO] Response params: ${JSON.stringify(responseBody)}`] = true;"
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
                                    "key": "username",
                                    "value": "lbatresimporteruat1",
                                    "type": "string"
                                },
                                {
                                    "key": "password",
                                    "value": "12121212Qw.@",
                                    "type": "string"
                                }
                            ]
                        },
                        "method": "POST",
                        "header": [],
                        "body": {
                            "mode": "raw",
                            "raw": "{\r\n        \"transactionId\": \"lba3_102UC01AC05TC007_{{dateFormated3}}_{{randomNumber}}\",\r\n        \"transactionType\": \"none\",\r\n        \"transactionDateTime\": \"{{dateFormated}}\",\r\n        \"transactionTotalAmount\": \"{{$randomPrice}}\",\r\n        \"salesChannel\": \"WEB\",\r\n        \"chain\": \"DicksSportingGoods\",\r\n        \"dsgversion\": \"2\",\r\n        \"ipAddress\": \"{{$randomIP}}\",\r\n        \"totalDiscountCount\": 1,\r\n        \"totalDiscountAmount\": \"0.00\",\r\n        \"currencyCode\": \"USD\",\r\n        \"billing\": {\r\n            \"billingFirstName\": \"{{$randomFirstName}}\",\r\n            \"billingLastName\": \"{{$randomLastName}}\",\r\n            \"customerEmailAddress\": \"{{$randomEmail}}\",\r\n            \"billingAddress\": \"{{$randomStreetAddress}}\",\r\n            \"billingCity\": \"Huntington\",\r\n            \"billingState\": \"IN\",\r\n            \"billingPostalCode\": \"46750-2958\",\r\n            \"billingCountry\": \"US\",\r\n            \"billingPhoneNumber\": \"7042476372\",\r\n            \"paymentType\": \"Visa\",\r\n            \"cards\": {\r\n                \"card\": []\r\n            }\r\n        }\r\n}",
                            "options": {
                                "raw": {
                                    "language": "json"
                                }
                            }
                        },
                        "url": {
                            "raw": "http://rtdgen.uat.vip/icNowImport/ece1014e-aef5-493d-b525-68c38eb6e0d4",
                            "protocol": "http",
                            "host": [
                                "rtdgen",
                                "uat",
                                "vip"
                            ],
                            "path": [
                                "icNowImport",
                                "ece1014e-aef5-493d-b525-68c38eb6e0d4"
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
                                    "raw": "http://rtdgen.uat.vip/icNowImport/ece1014e-aef5-493d-b525-68c38eb6e0d4",
                                    "protocol": "http",
                                    "host": [
                                        "rtdgen",
                                        "uat",
                                        "vip"
                                    ],
                                    "path": [
                                        "icNowImport",
                                        "ece1014e-aef5-493d-b525-68c38eb6e0d4"
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
                },
                {
                    "name": "import_UAT1_V3_multi_1_statics_SP7",
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
                                    "var today2 = yyyy + '-' + mm + '-' + dd +'T12:00:00-0500';\r",
                                    "var today3 = yyyy + '_' + mm + '_' + dd;\r",
                                    "pm.globals.set('dateFormated',today2);\r",
                                    "pm.globals.set('dateFormated3',today3);\r",
                                    "\r",
                                    "function randomDate(start, end) {\r",
                                    "    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));\r",
                                    "}\r",
                                    "var randomDateSpe = randomDate(new Date(2012, 0, 1), new Date());\r",
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
                                    "\r",
                                    "tests[`[TC] 10.2.UC01.AC05.TC008`] = true;\r",
                                    "tests[`[INFO] Response params: ${JSON.stringify(responseBody)}`] = true;"
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
                                    "key": "username",
                                    "value": "lbatresimporteruat1",
                                    "type": "string"
                                },
                                {
                                    "key": "password",
                                    "value": "12121212Qw.@",
                                    "type": "string"
                                }
                            ]
                        },
                        "method": "POST",
                        "header": [],
                        "body": {
                            "mode": "raw",
                            "raw": "{\r\n        \"transactionId\": \"lba3_102UC01AC05TC008_{{dateFormated3}}_{{randomNumber}}\",\r\n        \"transactionType\": \"none\",\r\n        \"transactionDateTime\": \"{{dateFormated}}\",\r\n        \"transactionTotalAmount\": \"{{$randomPrice}}\",\r\n        \"salesChannel\": \"WEB\",\r\n        \"chain\": \"DicksSportingGoods\",\r\n        \"dsgversion\": \"2\",\r\n        \"ipAddress\": \"{{$randomIP}}\",\r\n        \"totalDiscountCount\": 1,\r\n        \"totalDiscountAmount\": \"0.00\",\r\n        \"currencyCode\": \"USD\",\r\n        \"billing\": {\r\n            \"billingFirstName\": \"{{$randomFirstName}}\",\r\n            \"billingLastName\": \"{{$randomLastName}}\",\r\n            \"customerEmailAddress\": \"{{$randomEmail}}\",\r\n            \"billingAddress\": \"{{$randomStreetAddress}}\",\r\n            \"billingCity\": \"Huntington\",\r\n            \"billingState\": \"IN\",\r\n            \"billingPostalCode\": \"46750-2958\",\r\n            \"billingCountry\": \"US\",\r\n            \"billingPhoneNumber\": \"7042476372\",\r\n            \"paymentType\": \"Visa\",\r\n            \"cards\": {\r\n                \"card\": [\r\n                    {\r\n                        \"cardholderName-D\": \"{{$randomFullName}}\",\r\n                        \"cardType-D\": \"Visa\",\r\n                        \"cardToken-D\": \"C053541272031234\",\r\n                        \"cardBin-D\": \"424631\",\r\n                        \"cardNumberLast4-D\": \"1401\",\r\n                        \"cardAuthorizedAmount-D\":\"\",\r\n                        \"cardExpireDate-D\": \"\",\r\n                        \"cardExpireMonth-D\": \"11\",\r\n                        \"cardExpireYear-D\": \"2026\",\r\n                        \"cardAuthorizationCode-D\": \"07658G\",\r\n                        \"cardAvsResponse-D\": \"Y\",\r\n                        \"avsDescription\": \"7 Both postal code and address match\",\r\n                        \"cardCvvResponse-D\": \"M\",\r\n                        \"tenderDescription\": \"visacommercialcredit\",\r\n                        \"entryMode\": \"Keyed\",\r\n                        \"liabilityShift\": \"false\"\r\n                    },\r\n                    {\r\n                        \"cardholderName-D\": \"{{$randomFullName}}\",\r\n                        \"cardType-D\": \"Visa\",\r\n                        \"cardToken-D\": \"C053541272031234\",\r\n                        \"cardBin-D\": \"424631\",\r\n                        \"cardNumberLast4-D\": \"1401\",\r\n                        \"cardAuthorizedAmount-D\":0,\r\n                        \"cardExpireDate-D\": \"{{$randomPrice}}\",\r\n                        \"cardExpireMonth-D\": \"11\",\r\n                        \"cardExpireYear-D\": \"2026\",\r\n                        \"cardAuthorizationCode-D\": \"07658G\",\r\n                        \"cardAvsResponse-D\": \"Y\",\r\n                        \"avsDescription\": \"7 Both postal code and address match\",\r\n                        \"cardCvvResponse-D\": \"M\",\r\n                        \"tenderDescription\": \"visacommercialcredit\",\r\n                        \"entryMode\": \"Keyed\",\r\n                        \"liabilityShift\": \"false\"\r\n                    },\r\n                    {\r\n                        \"cardholderName-D\": \"{{$randomFullName}}\",\r\n                        \"cardType-D\": \"Visa\",\r\n                        \"cardToken-D\": \"C053541272031234\",\r\n                        \"cardBin-D\": \"424631\",\r\n                        \"cardNumberLast4-D\": \"1401\",\r\n                        \"cardAuthorizedAmount-D\":0,\r\n                        \"cardExpireDate-D\": \"\",\r\n                        \"cardExpireMonth-D\": \"11\",\r\n                        \"cardExpireYear-D\": \"2026\",\r\n                        \"cardAuthorizationCode-D\": \"07658G\",\r\n                        \"cardAvsResponse-D\": \"Y\",\r\n                        \"avsDescription\": \"7 Both postal code and address match\",\r\n                        \"cardCvvResponse-D\": \"M\",\r\n                        \"tenderDescription\": \"visacommercialcredit\",\r\n                        \"entryMode\": \"Keyed\",\r\n                        \"liabilityShift\": \"false\"\r\n                    }\r\n                ]\r\n            }\r\n        }\r\n}",
                            "options": {
                                "raw": {
                                    "language": "json"
                                }
                            }
                        },
                        "url": {
                            "raw": "http://rtdgen.uat.vip/icNowImport/ece1014e-aef5-493d-b525-68c38eb6e0d4",
                            "protocol": "http",
                            "host": [
                                "rtdgen",
                                "uat",
                                "vip"
                            ],
                            "path": [
                                "icNowImport",
                                "ece1014e-aef5-493d-b525-68c38eb6e0d4"
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
                                    "raw": "http://rtdgen.uat.vip/icNowImport/ece1014e-aef5-493d-b525-68c38eb6e0d4",
                                    "protocol": "http",
                                    "host": [
                                        "rtdgen",
                                        "uat",
                                        "vip"
                                    ],
                                    "path": [
                                        "icNowImport",
                                        "ece1014e-aef5-493d-b525-68c38eb6e0d4"
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
                },
                {
                    "name": "import_UAT1_V3_multi_1_statics_SP8",
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
                                    "var today2 = yyyy + '-' + mm + '-' + dd +'T12:00:00-0500';\r",
                                    "var today3 = yyyy + '_' + mm + '_' + dd +'_';\r",
                                    "pm.globals.set('dateFormated',today2);\r",
                                    "pm.globals.set('dateFormated',today3);\r",
                                    "\r",
                                    "function randomDate(start, end) {\r",
                                    "    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));\r",
                                    "}\r",
                                    "var randomDateSpe = randomDate(new Date(2012, 0, 1), new Date());\r",
                                    "\r",
                                    "/*Variables generales */\r",
                                    "pm.globals.set('todayYYYYmmdd', today);\r",
                                    "pm.globals.set('randomNumberCard16', Math.floor(Math.random() * 9000000000000000));\r",
                                    "pm.globals.set('randomNumberTicket13', Math.floor(Math.random() * 9000000000000));\r",
                                    "pm.globals.set('randomNumber', Math.floor(Math.random() * 1000));\r",
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
                                    "\r",
                                    "tests[`[TC] 10.2.UC01.AC05.TC009`] = true;\r",
                                    "tests[`[INFO] Response params: ${JSON.stringify(responseBody)}`] = true;"
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
                                    "key": "username",
                                    "value": "lbatresimporteruat1",
                                    "type": "string"
                                },
                                {
                                    "key": "password",
                                    "value": "12121212Qw.@",
                                    "type": "string"
                                }
                            ]
                        },
                        "method": "POST",
                        "header": [],
                        "body": {
                            "mode": "raw",
                            "raw": "{\r\n        \"transactionId\": \"lba3_102UC01AC05TC009_{{dateFormated3}}_{{randomNumber}}\",\r\n        \"transactionType\": \"none\",\r\n        \"transactionDateTime\": \"{{dateFormated}}\",\r\n        \"transactionTotalAmount\": \"{{$randomPrice}}\",\r\n        \"salesChannel\": \"WEB\",\r\n        \"chain\": \"DicksSportingGoods\",\r\n        \"dsgversion\": \"2\",\r\n        \"ipAddress\": \"{{$randomIP}}\",\r\n        \"totalDiscountCount\": 1,\r\n        \"totalDiscountAmount\": \"0.00\",\r\n        \"currencyCode\": \"USD\",\r\n        \"billing\": {\r\n            \"billingFirstName\": \"{{$randomFirstName}}\",\r\n            \"billingLastName\": \"{{$randomLastName}}\",\r\n            \"customerEmailAddress\": \"{{$randomEmail}}\",\r\n            \"billingAddress\": \"{{$randomStreetAddress}}\",\r\n            \"billingCity\": \"Huntington\",\r\n            \"billingState\": \"IN\",\r\n            \"billingPostalCode\": \"46750-2958\",\r\n            \"billingCountry\": \"US\",\r\n            \"billingPhoneNumber\": \"7042476372\",\r\n            \"paymentType\": \"Visa\",\r\n            \"cards\": {\r\n                \"card\": [\r\n                    {\r\n                        \"cardholderName-D\": \"{{$randomFullName}}\",\r\n                        \"cardType-D\": \"Visa\",\r\n                        \"cardToken-D\": \"C053541272031234\",\r\n                        \"cardBin-D\": \"424631\",\r\n                        \"cardNumberLast4-D\": \"1401\",\r\n                        \"cardAuthorizedAmount-D\":\"-1236\",\r\n                        \"cardExpireDate-D\": \"\",\r\n                        \"cardExpireMonth-D\": \"11\",\r\n                        \"cardExpireYear-D\": \"2026\",\r\n                        \"cardAuthorizationCode-D\": \"07658G\",\r\n                        \"cardAvsResponse-D\": \"Y\",\r\n                        \"avsDescription\": \"7 Both postal code and address match\",\r\n                        \"cardCvvResponse-D\": \"M\",\r\n                        \"tenderDescription\": \"visacommercialcredit\",\r\n                        \"entryMode\": \"Keyed\",\r\n                        \"liabilityShift\": \"false\"\r\n                    }\r\n                ]\r\n            }\r\n        }\r\n}",
                            "options": {
                                "raw": {
                                    "language": "json"
                                }
                            }
                        },
                        "url": {
                            "raw": "http://rtdgen.uat.vip/icNowImport/ece1014e-aef5-493d-b525-68c38eb6e0d4",
                            "protocol": "http",
                            "host": [
                                "rtdgen",
                                "uat",
                                "vip"
                            ],
                            "path": [
                                "icNowImport",
                                "ece1014e-aef5-493d-b525-68c38eb6e0d4"
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
                                    "raw": "http://rtdgen.uat.vip/icNowImport/ece1014e-aef5-493d-b525-68c38eb6e0d4",
                                    "protocol": "http",
                                    "host": [
                                        "rtdgen",
                                        "uat",
                                        "vip"
                                    ],
                                    "path": [
                                        "icNowImport",
                                        "ece1014e-aef5-493d-b525-68c38eb6e0d4"
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