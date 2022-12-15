"use strict"
require("dotenv").config();

const {
    getPresentDay, getPastDay, getFutureDay, getAirlineRandom, getAirPortRandomgetMonthRandom, getYearRandom,
    getLevelClassRandom, getAdditionalEmailAddressesRandom, getBillingAddressRandom, getBillingCityRandom, getBillingFirstNameRandom,
    getBillingLastNameRandom, getBillingMiddleNameRandom, getBillingPhoneNumberRandom, getBillingPostalCodeRandom, getBillingStateRandom,
    getBillingCustomerEmailAddressRandom, getBillingPaymentTypeRandom, getBillingtotalNumberOfFailedAttemptsRandom, getBrowserCookie, getCurrencyCode,
    getGiftMessage, getIpAddress, getReferralCode, getSalesChannel, getSalesRep, getTransactionId, getTransactionTotalAmount, getTransactionType,
    getBillingCard, getCardholderName_D, getCardType_D, getCardAuthorizedAmount_D, getCardExpireDate_D, getCardExpireYear_D, getCardAuthorizationCode_D,
    getCardAvsResponse_D, getCardCvvResponse_D, getThreedsEciIndicator_D, getPresentDayFormat_start, getPresentDayFormat_end, getPastDayFormat_start, getFutureDayFormat_end, getFutureDayFormat_start
} = require('../tools');

const prefix_tester = process.env.UUI_PREFIJO_NAME_TESTER;

const num_statics = process.env.TOTAL_TRANSACTION_STATICS_PRESENT_FR;
const num_statics_past = process.env.TOTAL_TRANSACTION_STATICS_PAST_FR;
const num_statics_future = process.env.TOTAL_TRANSACTION_STATICS_FUTURE_FR;

const num_dinamic = process.env.TOTAL_TRANSACCION_DINAMIC_PRESENT_FR;
const num_dinamic_past = process.env.TOTAL_TRANSACCION_DINAMIC_PAST_FR;
const nume_dinamic_future = process.env.TOTAL_TRANSACCION_DINAMIC_FUTURE_FR;

module.exports = {
    getDataStatic_PROD: function () {
        try {
            var json = [];
            for (var i = 0; i < num_statics; i++) {
                var data = {
                    "index": i,
                    "hiearchy": "PROD",
                    "model_transactions": "STATIC_FRAUDE_PRESENT_DATE",
                    "transactionId": prefix_tester + getTransactionId() + "_"+ i,
                    "transactionDateTime": getPresentDay(),
                    "transactionDate_Start": getPresentDayFormat_start(),
                    "transactionDate_End": getPresentDayFormat_start(),
                    "currencyCode": "USD",
                    "giftMessage": "DONE MY LORD!!!",
                    "ipAddress": "192.168.1.255",
                    "referralCode": "45",
                    "salesChannel": "WEB",
                    "salesRep": "45",
                    "transactionTotalAmount": "130000",
                    "transactionType": "LINE",
                    "browserCookie": "BIGipServer",
                    "additionalEmailAddresses": "elmail2@mail.com",
                    "billingAddress": "Chandler, Texas(TX), 75758",
                    "billingAddress2": "Chappell Hill, Texas(TX), 77426",
                    "billingCity": "TX",
                    "billingCountry": "USA",
                    "billingFirstName": "CHLOE",
                    "billingLastName": "JOHNSON",
                    "billingMiddleName": "KING",
                    "billingPhoneNumber": "66-66-66-66-66",
                    "billingPostalCode": "02000",
                    "billingState": "TX",
                    "customerEmailAddress": "elcostumer2@mail.com",
                    "paymentType": "ONLINE",
                    "totalNumberOfFailedAttempts": "10",
                    "cardAuthorizationCode_D": "261",
                    "cardAuthorizedAmount_D": "10002",
                    "cardAvsResponse_D": "2233",
                    "cardCvvResponse_D": "2332",
                    "cardExpireDate_D": "02-2027",
                    "cardExpireMonth_D": "02",
                    "cardExpireYear_D": "2027",
                    "cardNumber_D": "4688516800223469",
                    "cardType_D": "VISA",
                    "cardholderName_D": "ADDISON CHLOE",
                    "threedsEciIndicator_D": "176"
                };
                json.push(data);
            }
            return json;
        } catch (err) {
            return { err };
        }
    },
    getDataStatic_Pasat_PROD: function () {
        try {
            let json = [];
            for (let i = 0; i < num_statics_past; i++) {
                let data = {
                    "index": i,
                    "hiearchy": "PROD",
                    "model_transactions": "STATIC_FRAUDE_PAST_DATE",
                    "transactionId": prefix_tester + getTransactionId() + "_"+ i,
                    "transactionDateTime": getPastDay(),
                    "transactionDate_Start": getPastDayFormat_start(),
                    "transactionDate_End": getPastDayFormat_start(),
                    "currencyCode": "USD",
                    "giftMessage": "DONE MY LORD!!!",
                    "ipAddress": "192.168.1.255",
                    "referralCode": "45",
                    "salesChannel": "WEB",
                    "salesRep": "45",
                    "transactionTotalAmount": "130000",
                    "transactionType": "LINE",
                    "browserCookie": "BIGipServer",
                    "additionalEmailAddresses": "elmail2@mail.com",
                    "billingAddress": "Chandler, Texas(TX), 75758",
                    "billingAddress2": "Chappell Hill, Texas(TX), 77426",
                    "billingCity": "TX",
                    "billingCountry": "USA",
                    "billingFirstName": "CHLOE",
                    "billingLastName": "JOHNSON",
                    "billingMiddleName": "KING",
                    "billingPhoneNumber": "66-66-66-66-66",
                    "billingPostalCode": "02000",
                    "billingState": "TX",
                    "customerEmailAddress": "elcostumer2@mail.com",
                    "paymentType": "ONLINE",
                    "totalNumberOfFailedAttempts": "10",
                    "cardAuthorizationCode_D": "261",
                    "cardAuthorizedAmount_D": "10002",
                    "cardAvsResponse_D": "2233",
                    "cardCvvResponse_D": "2332",
                    "cardExpireDate_D": "02-2027",
                    "cardExpireMonth_D": "02",
                    "cardExpireYear_D": "2027",
                    "cardNumber_D": "4688516800223469",
                    "cardType_D": "VISA",
                    "cardholderName_D": "ADDISON CHLOE",
                    "threedsEciIndicator_D": "176"
                };
                json.push(data);
            }
            return json;
        } catch (err) {
            return { err };
        }
    },
    getDataStatic_Future_PROD: function () {
        try {
            let json = [];
            for (var i = 0; i < num_statics_future; i++) {
                let data = {
                    "index": i,
                    "hiearchy": "PROD",
                    "model_transactions": "STATIC_FRAUDE_FUTURE_DATE",
                    "transactionId": prefix_tester + getTransactionId() + "_"+ i,
                    "transactionDateTime": getFutureDay(),
                    "transactionDate_Start": getFutureDayFormat_start(),
                    "transactionDate_End": getFutureDayFormat_start(),
                    "currencyCode": "USD",
                    "giftMessage": "DONE MY LORD!!!",
                    "ipAddress": "192.168.1.255",
                    "referralCode": "45",
                    "salesChannel": "WEB",
                    "salesRep": "45",
                    "transactionTotalAmount": "130000",
                    "transactionType": "LINE",
                    "browserCookie": "BIGipServer",
                    "additionalEmailAddresses": "elmail2@mail.com",
                    "billingAddress": "Chandler, Texas(TX), 75758",
                    "billingAddress2": "Chappell Hill, Texas(TX), 77426",
                    "billingCity": "TX",
                    "billingCountry": "USA",
                    "billingFirstName": "CHLOE",
                    "billingLastName": "JOHNSON",
                    "billingMiddleName": "KING",
                    "billingPhoneNumber": "66-66-66-66-66",
                    "billingPostalCode": "02000",
                    "billingState": "TX",
                    "customerEmailAddress": "elcostumer2@mail.com",
                    "paymentType": "ONLINE",
                    "totalNumberOfFailedAttempts": "10",
                    "cardAuthorizationCode_D": "261",
                    "cardAuthorizedAmount_D": "10002",
                    "cardAvsResponse_D": "2233",
                    "cardCvvResponse_D": "2332",
                    "cardExpireDate_D": "02-2027",
                    "cardExpireMonth_D": "02",
                    "cardExpireYear_D": "2027",
                    "cardNumber_D": "4688516800223469",
                    "cardType_D": "VISA",
                    "cardholderName_D": "ADDISON CHLOE",
                    "threedsEciIndicator_D": "176"
                };
                json.push(data);
            }
            return json;
        } catch (err) {
            return { err };
        }
    },
    getDataDinamicPresent_PROD: function () {
        let arrayJson = [];
        try {
            for (let i = 0; i < num_dinamic; i++) {
                let data = {
                    "index": i,
                    "hiearchy": "PROD",
                    "model_transactions": "DINAMIC_FRAUDE_PRESENT_DATE",
                    "transactionId": prefix_tester + getTransactionId() + "_"+ i,
                    "transactionDateTime": getPresentDay(),
                    "transactionDate_Start": getPresentDayFormat_start(),
                    "transactionDate_End": getPresentDayFormat_start(),
                    "currencyCode": getCurrencyCode(i),
                    "giftMessage": "DONE MY LORD!!!",
                    "ipAddress": getIpAddress(),
                    "referralCode": getReferralCode(),
                    "salesChannel": getSalesChannel(),
                    "salesRep": getSalesRep(),
                    "transactionTotalAmount": getTransactionTotalAmount(),
                    "transactionType": getTransactionType(),
                    "browserCookie": "BIGipServer",
                    "additionalEmailAddresses": getAdditionalEmailAddressesRandom(),
                    "billingAddress": getBillingAddressRandom(),
                    "billingAddress2": getBillingAddressRandom(2),
                    "billingCity": getBillingCityRandom().city,
                    "billingCountry": getBillingCityRandom().county,
                    "billingFirstName": getBillingFirstNameRandom(),
                    "billingLastName": getBillingLastNameRandom(),
                    "billingMiddleName": getBillingMiddleNameRandom(),
                    "billingPhoneNumber": getBillingPhoneNumberRandom(),
                    "billingPostalCode": getBillingCityRandom().zip_code,
                    "billingState": getBillingCityRandom().state,
                    "customerEmailAddress": getBillingCustomerEmailAddressRandom(),
                    "paymentType": getBillingPaymentTypeRandom(),
                    "totalNumberOfFailedAttempts": getBillingtotalNumberOfFailedAttemptsRandom(),
                    "cardAuthorizationCode_D": getCardAuthorizationCode_D(),
                    "cardAuthorizedAmount_D": getCardAuthorizedAmount_D(),
                    "cardAvsResponse_D": getCardAvsResponse_D(),
                    "cardCvvResponse_D": getCardCvvResponse_D(),
                    "cardExpireDate_D": getCardExpireDate_D(),
                    "cardExpireMonth_D": "02",
                    "cardExpireYear_D": getCardExpireYear_D(),
                    "cardNumber_D": getBillingCard(),
                    "cardType_D": getCardType_D(i),
                    "cardholderName_D": getCardholderName_D(),
                    "threedsEciIndicator_D": getThreedsEciIndicator_D()
                };
                arrayJson.push(data);
            }
            return arrayJson;
        } catch (err) {
            return { err };
        }
    },
    getDataDinamicPast_PROD: function () {
        let arrayJson = [];
        try {
            for (let i = 0; i < num_dinamic_past; i++) {
                let data = {
                    "index": i,
                    "hiearchy": "PROD",
                    "model_transactions": "DINAMIC_FRAUDE_PAST_DATE",
                    "transactionId": prefix_tester + getTransactionId() + "_"+ i,
                    "transactionDateTime": getPastDay(),
                    "transactionDate_Start": getPastDayFormat_start(),
                    "transactionDate_End": getPastDayFormat_start(),
                    "currencyCode": getCurrencyCode(i),
                    "giftMessage": "DONE MY LORD!!!",
                    "ipAddress": getIpAddress(),
                    "referralCode": getReferralCode(),
                    "salesChannel": getSalesChannel(),
                    "salesRep": getSalesRep(),
                    "transactionTotalAmount": getTransactionTotalAmount(),
                    "transactionType": getTransactionType(),
                    "browserCookie": "BIGipServer",
                    "additionalEmailAddresses": getAdditionalEmailAddressesRandom(),
                    "billingAddress": getBillingAddressRandom(),
                    "billingAddress2": getBillingAddressRandom(2),
                    "billingCity": getBillingCityRandom().city,
                    "billingCountry": getBillingCityRandom().county,
                    "billingFirstName": getBillingFirstNameRandom(),
                    "billingLastName": getBillingLastNameRandom(),
                    "billingMiddleName": getBillingMiddleNameRandom(),
                    "billingPhoneNumber": getBillingPhoneNumberRandom(),
                    "billingPostalCode": getBillingCityRandom().zip_code,
                    "billingState": getBillingCityRandom().state,
                    "customerEmailAddress": getBillingCustomerEmailAddressRandom(),
                    "paymentType": getBillingPaymentTypeRandom(),
                    "totalNumberOfFailedAttempts": getBillingtotalNumberOfFailedAttemptsRandom(),
                    "cardAuthorizationCode_D": getCardAuthorizationCode_D(),
                    "cardAuthorizedAmount_D": getCardAuthorizedAmount_D(),
                    "cardAvsResponse_D": getCardAvsResponse_D(),
                    "cardCvvResponse_D": getCardCvvResponse_D(),
                    "cardExpireDate_D": getCardExpireDate_D(),
                    "cardExpireMonth_D": "02",
                    "cardExpireYear_D": getCardExpireYear_D(),
                    "cardNumber_D": getBillingCard(),
                    "cardType_D": getCardType_D(i),
                    "cardholderName_D": getCardholderName_D(),
                    "threedsEciIndicator_D": getThreedsEciIndicator_D()
                };
                arrayJson.push(data);
            }
            return arrayJson;
        } catch (err) {
            return { err };
        }
    },
    getDataDinamic_Future_PROD: function () {
        try {
            let json = [];
            for (let i = 0; i < nume_dinamic_future; i++) {
                let data = {
                    "index": i,
                    "hiearchy": "PROD",    
                    "model_transactions": "DINAMIC_FRAUDE_FUTURE_DATE",
                    "transactionId": prefix_tester + getTransactionId() + "_"+ i,
                    "transactionDateTime": getFutureDay(),
                    "transactionDate_Start": getFutureDayFormat_start(),
                    "transactionDate_End": getFutureDayFormat_start(),
                    "currencyCode": getCurrencyCode(i),
                    "giftMessage": "DONE MY LORD!!!",
                    "ipAddress": getIpAddress(),
                    "referralCode": getReferralCode(),
                    "salesChannel": getSalesChannel(),
                    "salesRep": getSalesRep(),
                    "transactionTotalAmount": getTransactionTotalAmount(),
                    "transactionType": getTransactionType(),
                    "browserCookie": "BIGipServer",
                    "additionalEmailAddresses": getAdditionalEmailAddressesRandom(),
                    "billingAddress": getBillingAddressRandom(),
                    "billingAddress2": getBillingAddressRandom(2),
                    "billingCity": getBillingCityRandom().city,
                    "billingCountry": getBillingCityRandom().county,
                    "billingFirstName": getBillingFirstNameRandom(),
                    "billingLastName": getBillingLastNameRandom(),
                    "billingMiddleName": getBillingMiddleNameRandom(),
                    "billingPhoneNumber": getBillingPhoneNumberRandom(),
                    "billingPostalCode": getBillingCityRandom().zip_code,
                    "billingState": getBillingCityRandom().state,
                    "customerEmailAddress": getBillingCustomerEmailAddressRandom(),
                    "paymentType": getBillingPaymentTypeRandom(),
                    "totalNumberOfFailedAttempts": getBillingtotalNumberOfFailedAttemptsRandom(),
                    "cardAuthorizationCode_D": getCardAuthorizationCode_D(),
                    "cardAuthorizedAmount_D": getCardAuthorizedAmount_D(),
                    "cardAvsResponse_D": getCardAvsResponse_D(),
                    "cardCvvResponse_D": getCardCvvResponse_D(),
                    "cardExpireDate_D": getCardExpireDate_D(),
                    "cardExpireMonth_D": "02",
                    "cardExpireYear_D": getCardExpireYear_D(),
                    "cardNumber_D": getBillingCard(),
                    "cardType_D": getCardType_D(i),
                    "cardholderName_D": getCardholderName_D(),
                    "threedsEciIndicator_D": getThreedsEciIndicator_D()
                };
                json.push(data);
            }
            return json;
        } catch (err) {
            return { err };
        }
    },
    getDataStatic_TEST: function () {
        try {
            let json = [];
            for (let i = 0; i < num_statics; i++) {
                let data = {
                    "index": i,
                    "hiearchy": "TEST",
                    "model_transactions": "STATIC_FRAUDE_PRESENT_DATE",
                    "transactionId": prefix_tester + getTransactionId() + "_"+ i,
                    "transactionDateTime": getPresentDay(),
                    "transactionDate_Start": getPresentDayFormat_start(),
                    "transactionDate_End": getPresentDayFormat_start(),
                    "currencyCode": "USD",
                    "giftMessage": "DONE MY LORD!!!",
                    "ipAddress": "192.168.1.255",
                    "referralCode": "45",
                    "salesChannel": "WEB",
                    "salesRep": "45",
                    "transactionTotalAmount": "130000",
                    "transactionType": "LINE",
                    "browserCookie": "BIGipServer",
                    "additionalEmailAddresses": "elmail2@mail.com",
                    "billingAddress": "Chandler, Texas(TX), 75758",
                    "billingAddress2": "Chappell Hill, Texas(TX), 77426",
                    "billingCity": "TX",
                    "billingCountry": "USA",
                    "billingFirstName": "CHLOE",
                    "billingLastName": "JOHNSON",
                    "billingMiddleName": "KING",
                    "billingPhoneNumber": "66-66-66-66-66",
                    "billingPostalCode": "02000",
                    "billingState": "TX",
                    "customerEmailAddress": "elcostumer2@mail.com",
                    "paymentType": "ONLINE",
                    "totalNumberOfFailedAttempts": "10",
                    "cardAuthorizationCode_D": "261",
                    "cardAuthorizedAmount_D": "10002",
                    "cardAvsResponse_D": "2233",
                    "cardCvvResponse_D": "2332",
                    "cardExpireDate_D": "02-2027",
                    "cardExpireMonth_D": "02",
                    "cardExpireYear_D": "2027",
                    "cardNumber_D": "4688516800223469",
                    "cardType_D": "VISA",
                    "cardholderName_D": "ADDISON CHLOE",
                    "threedsEciIndicator_D": "176"
                };
                json.push(data);
            }
            return json;
        } catch (err) {
            return { err };
        }
    },
    getDataStatic_Pasat_TEST: function () {
        try {
            let json = [];
            for (let i = 0; i < num_statics_past; i++) {
                let data = {
                    "index": i,
                    "hiearchy": "TEST",
                    "model_transactions": "STATIC_FRAUDE_PAST_DATE",
                    "transactionId": prefix_tester + getTransactionId() + "_"+ i,
                    "transactionDateTime": getPastDay(),
                    "transactionDate_Start": getPastDayFormat_start(),
                    "transactionDate_End": getPastDayFormat_start(),
                    "currencyCode": "USD",
                    "giftMessage": "DONE MY LORD!!!",
                    "ipAddress": "192.168.1.255",
                    "referralCode": "45",
                    "salesChannel": "WEB",
                    "salesRep": "45",
                    "transactionTotalAmount": "130000",
                    "transactionType": "LINE",
                    "browserCookie": "BIGipServer",
                    "additionalEmailAddresses": "elmail2@mail.com",
                    "billingAddress": "Chandler, Texas(TX), 75758",
                    "billingAddress2": "Chappell Hill, Texas(TX), 77426",
                    "billingCity": "TX",
                    "billingCountry": "USA",
                    "billingFirstName": "CHLOE",
                    "billingLastName": "JOHNSON",
                    "billingMiddleName": "KING",
                    "billingPhoneNumber": "66-66-66-66-66",
                    "billingPostalCode": "02000",
                    "billingState": "TX",
                    "customerEmailAddress": "elcostumer2@mail.com",
                    "paymentType": "ONLINE",
                    "totalNumberOfFailedAttempts": "10",
                    "cardAuthorizationCode_D": "261",
                    "cardAuthorizedAmount_D": "10002",
                    "cardAvsResponse_D": "2233",
                    "cardCvvResponse_D": "2332",
                    "cardExpireDate_D": "02-2027",
                    "cardExpireMonth_D": "02",
                    "cardExpireYear_D": "2027",
                    "cardNumber_D": "4688516800223469",
                    "cardType_D": "VISA",
                    "cardholderName_D": "ADDISON CHLOE",
                    "threedsEciIndicator_D": "176"
                };
                json.push(data);
            }
            return json;
        } catch (err) {
            return { err };
        }
    },
    getDataStatic_Future_TEST: function () {
        try {
            let json = [];
            for (let i = 0; i < num_statics_future; i++) {
                let data = {
                    "index": i,
                    "hiearchy": "TEST",
                    "model_transactions": "STATIC_FRAUDE_FUTURE_DATE",
                    "transactionId": prefix_tester + getTransactionId() + "_"+ i,
                    "transactionDateTime": getFutureDay(),
                    "transactionDate_Start": getFutureDayFormat_start(),
                    "transactionDate_End": getFutureDayFormat_start(),
                    "currencyCode": "USD",
                    "giftMessage": "DONE MY LORD!!!",
                    "ipAddress": "192.168.1.255",
                    "referralCode": "45",
                    "salesChannel": "WEB",
                    "salesRep": "45",
                    "transactionTotalAmount": "130000",
                    "transactionType": "LINE",
                    "browserCookie": "BIGipServer",
                    "additionalEmailAddresses": "elmail2@mail.com",
                    "billingAddress": "Chandler, Texas(TX), 75758",
                    "billingAddress2": "Chappell Hill, Texas(TX), 77426",
                    "billingCity": "TX",
                    "billingCountry": "USA",
                    "billingFirstName": "CHLOE",
                    "billingLastName": "JOHNSON",
                    "billingMiddleName": "KING",
                    "billingPhoneNumber": "66-66-66-66-66",
                    "billingPostalCode": "02000",
                    "billingState": "TX",
                    "customerEmailAddress": "elcostumer2@mail.com",
                    "paymentType": "ONLINE",
                    "totalNumberOfFailedAttempts": "10",
                    "cardAuthorizationCode_D": "261",
                    "cardAuthorizedAmount_D": "10002",
                    "cardAvsResponse_D": "2233",
                    "cardCvvResponse_D": "2332",
                    "cardExpireDate_D": "02-2027",
                    "cardExpireMonth_D": "02",
                    "cardExpireYear_D": "2027",
                    "cardNumber_D": "4688516800223469",
                    "cardType_D": "VISA",
                    "cardholderName_D": "ADDISON CHLOE",
                    "threedsEciIndicator_D": "176"
                };
                json.push(data);
            }
            return json;
        } catch (err) {
            return { err };
        }
    },
    getDataDinamicPresent_TEST: function () {
        let arrayJson = [];
        try {
            for (let i = 0; i < num_dinamic; i++) {
                let data = {
                    "index": i,
                    "hiearchy": "TEST",
                    "model_transactions": "DINAMIC_FRAUDE_PRESENT_DATE",
                    "transactionId": prefix_tester + getTransactionId() + "_"+ i,
                    "transactionDateTime": getPresentDay(),
                    "transactionDate_Start": getPresentDayFormat_start(),
                    "transactionDate_End": getPresentDayFormat_start(),
                    "currencyCode": getCurrencyCode(i),
                    "giftMessage": "DONE MY LORD!!!",
                    "ipAddress": getIpAddress(),
                    "referralCode": getReferralCode(),
                    "salesChannel": getSalesChannel(),
                    "salesRep": getSalesRep(),
                    "transactionTotalAmount": getTransactionTotalAmount(),
                    "transactionType": getTransactionType(),
                    "browserCookie": "BIGipServer",
                    "additionalEmailAddresses": getAdditionalEmailAddressesRandom(),
                    "billingAddress": getBillingAddressRandom(),
                    "billingAddress2": getBillingAddressRandom(2),
                    "billingCity": getBillingCityRandom().city,
                    "billingCountry": getBillingCityRandom().county,
                    "billingFirstName": getBillingFirstNameRandom(),
                    "billingLastName": getBillingLastNameRandom(),
                    "billingMiddleName": getBillingMiddleNameRandom(),
                    "billingPhoneNumber": getBillingPhoneNumberRandom(),
                    "billingPostalCode": getBillingCityRandom().zip_code,
                    "billingState": getBillingCityRandom().state,
                    "customerEmailAddress": getBillingCustomerEmailAddressRandom(),
                    "paymentType": getBillingPaymentTypeRandom(),
                    "totalNumberOfFailedAttempts": getBillingtotalNumberOfFailedAttemptsRandom(),
                    "cardAuthorizationCode_D": getCardAuthorizationCode_D(),
                    "cardAuthorizedAmount_D": getCardAuthorizedAmount_D(),
                    "cardAvsResponse_D": getCardAvsResponse_D(),
                    "cardCvvResponse_D": getCardCvvResponse_D(),
                    "cardExpireDate_D": getCardExpireDate_D(),
                    "cardExpireMonth_D": "02",
                    "cardExpireYear_D": getCardExpireYear_D(),
                    "cardNumber_D": getBillingCard(),
                    "cardType_D": getCardType_D(i),
                    "cardholderName_D": getCardholderName_D(),
                    "threedsEciIndicator_D": getThreedsEciIndicator_D()
                };
                arrayJson.push(data);
            }
            return arrayJson;
        } catch (err) {
            return { err };
        }
    },
    getDataDinamicPast_TEST: function () {
        let arrayJson = [];
        try {
            for (let i = 0; i < num_dinamic_past; i++) {
                let data = {
                    "index": i,
                    "hiearchy": "TEST",
                    "model_transactions": "DINAMIC_FRAUDE_PAST_DATE",
                    "transactionId": prefix_tester + getTransactionId() + "_"+ i,
                    "transactionDateTime": getPastDay(),
                    "transactionDate_Start": getPastDayFormat_start(),
                    "transactionDate_End": getPastDayFormat_start(),
                    "currencyCode": getCurrencyCode(i),
                    "giftMessage": "DONE MY LORD!!!",
                    "ipAddress": getIpAddress(),
                    "referralCode": getReferralCode(),
                    "salesChannel": getSalesChannel(),
                    "salesRep": getSalesRep(),
                    "transactionTotalAmount": getTransactionTotalAmount(),
                    "transactionType": getTransactionType(),
                    "browserCookie": "BIGipServer",
                    "additionalEmailAddresses": getAdditionalEmailAddressesRandom(),
                    "billingAddress": getBillingAddressRandom(),
                    "billingAddress2": getBillingAddressRandom(2),
                    "billingCity": getBillingCityRandom().city,
                    "billingCountry": getBillingCityRandom().county,
                    "billingFirstName": getBillingFirstNameRandom(),
                    "billingLastName": getBillingLastNameRandom(),
                    "billingMiddleName": getBillingMiddleNameRandom(),
                    "billingPhoneNumber": getBillingPhoneNumberRandom(),
                    "billingPostalCode": getBillingCityRandom().zip_code,
                    "billingState": getBillingCityRandom().state,
                    "customerEmailAddress": getBillingCustomerEmailAddressRandom(),
                    "paymentType": getBillingPaymentTypeRandom(),
                    "totalNumberOfFailedAttempts": getBillingtotalNumberOfFailedAttemptsRandom(),
                    "cardAuthorizationCode_D": getCardAuthorizationCode_D(),
                    "cardAuthorizedAmount_D": getCardAuthorizedAmount_D(),
                    "cardAvsResponse_D": getCardAvsResponse_D(),
                    "cardCvvResponse_D": getCardCvvResponse_D(),
                    "cardExpireDate_D": getCardExpireDate_D(),
                    "cardExpireMonth_D": "02",
                    "cardExpireYear_D": getCardExpireYear_D(),
                    "cardNumber_D": getBillingCard(),
                    "cardType_D": getCardType_D(i),
                    "cardholderName_D": getCardholderName_D(),
                    "threedsEciIndicator_D": getThreedsEciIndicator_D()
                };
                arrayJson.push(data);
            }
            return arrayJson;
        } catch (err) {
            return { err };
        }
    },
    getDataDinamic_Future_TEST: function () {
        try {
            let json = [];
            for (let i = 0; i < nume_dinamic_future; i++) {
                let data = {
                    "index": i,
                    "hiearchy": "TEST",
                    "model_transactions": "DINAMIC_FRAUDE_FUTURE_DATE",
                    "transactionId": prefix_tester + getTransactionId() + "_"+ i,
                    "transactionDateTime": getFutureDay(),
                    "transactionDate_Start": getFutureDayFormat_start(),
                    "transactionDate_End": getFutureDayFormat_start(),
                    "currencyCode": getCurrencyCode(i),
                    "giftMessage": "DONE MY LORD!!!",
                    "ipAddress": getIpAddress(),
                    "referralCode": getReferralCode(),
                    "salesChannel": getSalesChannel(),
                    "salesRep": getSalesRep(),
                    "transactionTotalAmount": getTransactionTotalAmount(),
                    "transactionType": getTransactionType(),
                    "browserCookie": "BIGipServer",
                    "additionalEmailAddresses": getAdditionalEmailAddressesRandom(),
                    "billingAddress": getBillingAddressRandom(),
                    "billingAddress2": getBillingAddressRandom(2),
                    "billingCity": getBillingCityRandom().city,
                    "billingCountry": getBillingCityRandom().county,
                    "billingFirstName": getBillingFirstNameRandom(),
                    "billingLastName": getBillingLastNameRandom(),
                    "billingMiddleName": getBillingMiddleNameRandom(),
                    "billingPhoneNumber": getBillingPhoneNumberRandom(),
                    "billingPostalCode": getBillingCityRandom().zip_code,
                    "billingState": getBillingCityRandom().state,
                    "customerEmailAddress": getBillingCustomerEmailAddressRandom(),
                    "paymentType": getBillingPaymentTypeRandom(),
                    "totalNumberOfFailedAttempts": getBillingtotalNumberOfFailedAttemptsRandom(),
                    "cardAuthorizationCode_D": getCardAuthorizationCode_D(),
                    "cardAuthorizedAmount_D": getCardAuthorizedAmount_D(),
                    "cardAvsResponse_D": getCardAvsResponse_D(),
                    "cardCvvResponse_D": getCardCvvResponse_D(),
                    "cardExpireDate_D": getCardExpireDate_D(),
                    "cardExpireMonth_D": "02",
                    "cardExpireYear_D": getCardExpireYear_D(),
                    "cardNumber_D": getBillingCard(),
                    "cardType_D": getCardType_D(i),
                    "cardholderName_D": getCardholderName_D(),
                    "threedsEciIndicator_D": getThreedsEciIndicator_D()
                };
                json.push(data);
            }
            return json;
        } catch (err) {
            return { err };
        }
    },

}