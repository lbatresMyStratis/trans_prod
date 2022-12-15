"use strict"
require("dotenv").config();

const {
    getPresentDay, getPastDay, getFutureDay, getAirlineRandom, getAirPortRandomgetMonthRandom, getYearRandom,
    getLevelClassRandom, getAdditionalEmailAddressesRandom, getBillingAddressRandom, getBillingCityRandom, getBillingFirstNameRandom,
    getBillingLastNameRandom, getBillingMiddleNameRandom, getBillingPhoneNumberRandom, getBillingPostalCodeRandom, getBillingStateRandom,
    getBillingCustomerEmailAddressRandom, getBillingPaymentTypeRandom, getBillingtotalNumberOfFailedAttemptsRandom, getBrowserCookie, getCurrencyCode,
    getGiftMessage, getIpAddress, getReferralCode, getSalesChannel, getSalesRep, getTransactionId, getTransactionTotalAmount, getTransactionType,
    getBillingCard, getCardholderName_D, getCardType_D, getCardAuthorizedAmount_D, getCardExpireDate_D, getCardExpireYear_D, getCardAuthorizationCode_D,
    getCardAvsResponse_D, getCardCvvResponse_D, getThreedsEciIndicator_D, getPresentDayFormat_start, getPresentDayFormat_end, getPastDayFormat_start,
    getFutureDayFormat_end, getFutureDayFormat_start, getPresentDayFormat2, getPastDay2, getPastDay3, getFutureDay2, getRandom_9
} = require('../tools');

const prefix_tester = process.env.UUI_PREFIJO_NAME_TESTER;

const num_statics = process.env.TOTAL_TRANSACTION_STATICS_PRESENT_FR;
const num_statics_past = process.env.TOTAL_TRANSACTION_STATICS_PAST_FR;
const num_statics_future = process.env.TOTAL_TRANSACTION_STATICS_FUTURE_FR;

const num_dinamic = process.env.TOTAL_TRANSACCION_DINAMIC_PRESENT_FR;
const num_dinamic_past = process.env.TOTAL_TRANSACCION_DINAMIC_PAST_FR;
const nume_dinamic_future = process.env.TOTAL_TRANSACCION_DINAMIC_FUTURE_FR;

const numChkAmex = process.env.TOTAL_CHARGBACKS;

module.exports = {
    getDataStatic_CHK_PROD: function (numChkAmex) {
        try {
            const json = [];
            for (let i = 0; i < num_statics; i++) {
                const data = {
                    "Chargeback_Reference_no":prefix_tester + getTransactionId() + "_"+ i,
                    "Brand": "American Express",
                    "Processor": "American Express",
                    "Reason_Code": "4",
                    "DisputeType": "Chargeback",
                    "Processing_Type": "CNP",
                    "Reporting_Group": "MERCHANDISE NOT RECEIVED",
                    "Queue_Group": "CUSTOMER SERVICE",
                    "Card_Number": "371738"+getRandom_9(),
                    "Disputed_Currency": "USD",
                    "Disputed_Amound": "8000",
                    "Disputed_Date": getPresentDayFormat2(),
                    "Transaction_Currency": "USD",
                    "Transaction_Amount": "8000",
                    "Transaction_Date": getPastDay2(),
                    "Merchant_Number": "198798",
                    "Processor_Chargeback_Type": "Retrieval",
                    "BIN": "371738",
                    "Transaction_ID": "",
                    "Order_Number":"",
                    "Hosted_Disputed_Amount": "8000",
                    "Autoresolve_Indicator":""
                };
                json.push(data);
            }
            return json;
        } catch (err) {
            return { err };
        }
    },
    getDataStatic_Pasat_CHK_PROD: function () {
        try {
            const json = [];
            for (let i = 0; i < num_statics_past; i++) {
                const data = {
                    "Chargeback_Reference_no":prefix_tester + getTransactionId() + "_"+ i,
                    "Brand": "American Express",
                    "Processor": "American Express",
                    "Reason_Code": "4",
                    "DisputeType": "Chargeback",
                    "Processing_Type": "CNP",
                    "Reporting_Group": "MERCHANDISE NOT RECEIVED",
                    "Queue_Group": "CUSTOMER SERVICE",
                    "Card_Number": "371738"+getRandom_9(),
                    "Disputed_Currency": "USD",
                    "Disputed_Amound": "8000",
                    "Disputed_Date": getPastDay2(),
                    "Transaction_Currency": "USD",
                    "Transaction_Amount": "8000",
                    "Transaction_Date": getPastDay3(),
                    "Merchant_Number": "198798",
                    "Processor_Chargeback_Type": "Retrieval",
                    "BIN": "371738",
                    "Transaction_ID": "",
                    "Order_Number":"",
                    "Hosted_Disputed_Amount": "8000",
                    "Autoresolve_Indicator":""                    
                };
                json.push(data);
            }
            return json;
        } catch (err) {
            return { err };
        }
    },
    getDataStatic_Future_CHK_PROD: function () {
        try {
            const json = [];
            for (let i = 0; i < num_statics_future; i++) {
                const data = {
                    "Chargeback_Reference_no":prefix_tester + getTransactionId() + "_"+ i,
                    "Brand": "American Express",
                    "Processor": "American Express",
                    "Reason_Code": "4",
                    "DisputeType": "Chargeback",
                    "Processing_Type": "CNP",
                    "Reporting_Group": "MERCHANDISE NOT RECEIVED",
                    "Queue_Group": "CUSTOMER SERVICE",
                    "Card_Number": "371738"+getRandom_9(),
                    "Disputed_Currency": "USD",
                    "Disputed_Amound": "8000",
                    "Disputed_Date": getFutureDay2(),
                    "Transaction_Currency": "USD",
                    "Transaction_Amount": "8000",
                    "Transaction_Date": getPastDay3(),
                    "Merchant_Number": "198798",
                    "Processor_Chargeback_Type": "Retrieval",
                    "BIN": "371738",
                    "Transaction_ID": "",
                    "Order_Number":"",
                    "Hosted_Disputed_Amount": "8000",
                    "Autoresolve_Indicator":""            
                };
                json.push(data);
            }
            return json;
        } catch (err) {
            return { err };
        }
    },
    getDataDinamicPresent_CHK_PROD: function () {
        const arrayJson = [];
        try {
            for (let i = 0; i < num_dinamic; i++) {
                const data = {
                    "Chargeback_Reference_no":prefix_tester + getTransactionId() + "_"+ i,
                    "Brand": "American Express",
                    "Processor": "American Express",
                    "Reason_Code": "4",
                    "DisputeType": "Chargeback",
                    "Processing_Type": "CNP",
                    "Reporting_Group": "MERCHANDISE NOT RECEIVED",
                    "Queue_Group": "CUSTOMER SERVICE",
                    "Card_Number": "371738"+getRandom_9(),
                    "Disputed_Currency": "USD",
                    "Disputed_Amound": getTransactionTotalAmount(),
                    "Disputed_Date": getPresentDayFormat2(),
                    "Transaction_Currency": "USD",
                    "Transaction_Amount": getTransactionTotalAmount(),
                    "Transaction_Date": getPastDay2(),
                    "Merchant_Number": "198798",
                    "Processor_Chargeback_Type": "Retrieval",
                    "BIN": "371738",
                    "Transaction_ID": "",
                    "Order_Number":"",
                    "Hosted_Disputed_Amount": getTransactionTotalAmount(),
                    "Autoresolve_Indicator":""  
                };
            };
            arrayJson.push(data);
            return arrayJson;
        } catch (err) {
            return { err };
        }
    },
    getDataDinamicPast_CHK_PROD: function () {
        const arrayJson = [];
        try {
            for (let i = 0; i < num_dinamic_past; i++) {
                const data = {
                    "Chargeback_Reference_no":prefix_tester + getTransactionId() + "_"+ i,
                    "Brand": "American Express",
                    "Processor": "American Express",
                    "Reason_Code": "4",
                    "DisputeType": "Chargeback",
                    "Processing_Type": "CNP",
                    "Reporting_Group": "MERCHANDISE NOT RECEIVED",
                    "Queue_Group": "CUSTOMER SERVICE",
                    "Card_Number": "371738"+getRandom_9(),
                    "Disputed_Currency": "USD",
                    "Disputed_Amound": getTransactionTotalAmount(),
                    "Disputed_Date": getPastDay2(),
                    "Transaction_Currency": "USD",
                    "Transaction_Amount": getTransactionTotalAmount(),
                    "Transaction_Date": getPastDay3(),
                    "Merchant_Number": "198798",
                    "Processor_Chargeback_Type": "Retrieval",
                    "BIN": "371738",
                    "Transaction_ID": "",
                    "Order_Number":"",
                    "Hosted_Disputed_Amount": getTransactionTotalAmount(),
                    "Autoresolve_Indicator":""  
                };
                arrayJson.push(data);
            }
            return arrayJson;
        } catch (err) {
            return { err };
        }
    },
    getDataDinamic_Future_CHK_PROD: function () {
        try {
            const json = [];
            for (let i = 0; i < nume_dinamic_future; i++) {
                const data = {
                    "Chargeback_Reference_no":prefix_tester + getTransactionId() + "_"+ i,
                    "Brand": "American Express",
                    "Processor": "American Express",
                    "Reason_Code": "4",
                    "DisputeType": "Chargeback",
                    "Processing_Type": "CNP",
                    "Reporting_Group": "MERCHANDISE NOT RECEIVED",
                    "Queue_Group": "CUSTOMER SERVICE",
                    "Card_Number": "371738"+getRandom_9(),
                    "Disputed_Currency": "USD",
                    "Disputed_Amound": getTransactionTotalAmount(),
                    "Disputed_Date": getFutureDay2(),
                    "Transaction_Currency": "USD",
                    "Transaction_Amount": getTransactionTotalAmount(),
                    "Transaction_Date": getFutureDay2(),
                    "Merchant_Number": "198798",
                    "Processor_Chargeback_Type": "Retrieval",
                    "BIN": "371738",
                    "Transaction_ID": "",
                    "Order_Number":"",
                    "Hosted_Disputed_Amount": getTransactionTotalAmount(),
                    "Autoresolve_Indicator":""  
                };
                json.push(data);
            }
            return json;
        } catch (err) {
            return { err };
        }
    },
    getDataStatic_CHK_TEST: function () {
        try {
            const json = [];
            for (let i = 0; i < num_statics; i++) {
                const data = {
                    "Chargeback_Reference_no":prefix_tester + getTransactionId() + "_"+ i,
                    "Brand": "American Express",
                    "Processor": "American Express",
                    "Reason_Code": "4",
                    "DisputeType": "Chargeback",
                    "Processing_Type": "CNP",
                    "Reporting_Group": "MERCHANDISE NOT RECEIVED",
                    "Queue_Group": "CUSTOMER SERVICE",
                    "Card_Number": "371738"+getRandom_9(),
                    "Disputed_Currency": "USD",
                    "Disputed_Amound": getTransactionTotalAmount(),
                    "Disputed_Date": getPresentDayFormat2(),
                    "Transaction_Currency": "USD",
                    "Transaction_Amount": getTransactionTotalAmount(),
                    "Transaction_Date": getPastDay2(),
                    "Merchant_Number": "198798",
                    "Processor_Chargeback_Type": "Retrieval",
                    "BIN": "371738",
                    "Transaction_ID": "",
                    "Order_Number":"",
                    "Hosted_Disputed_Amount": getTransactionTotalAmount(),
                    "Autoresolve_Indicator":""  
                };
                json.push(data);
            }
            return json;
        } catch (err) {
            return { err };
        }
    },
    getDataStatic_Pasat_CHK_TEST: function () {
        try {
            const json = [];
            for (let i = 0; i < num_statics_past; i++) {
                const data = {
                    "Chargeback_Reference_no":prefix_tester + getTransactionId() + "_"+ i,
                    "Brand": "American Express",
                    "Processor": "American Express",
                    "Reason_Code": "4",
                    "DisputeType": "Chargeback",
                    "Processing_Type": "CNP",
                    "Reporting_Group": "MERCHANDISE NOT RECEIVED",
                    "Queue_Group": "CUSTOMER SERVICE",
                    "Card_Number": "371738"+getRandom_9(),
                    "Disputed_Currency": "USD",
                    "Disputed_Amound": getTransactionTotalAmount(),
                    "Disputed_Date": getPastDay2(),
                    "Transaction_Currency": "USD",
                    "Transaction_Amount": getTransactionTotalAmount(),
                    "Transaction_Date": getPastDay3(),
                    "Merchant_Number": "198798",
                    "Processor_Chargeback_Type": "Retrieval",
                    "BIN": "371738",
                    "Transaction_ID": "",
                    "Order_Number":"",
                    "Hosted_Disputed_Amount": getTransactionTotalAmount(),
                    "Autoresolve_Indicator":""  
                };
                json.push(data);
            }
            return json;
        } catch (err) {
            return { err };
        }
    },
    getDataStatic_Future_CHK_TEST: function () {
        try {
            const json = [];
            for (let i = 0; i < num_statics_future; i++) {
                const data = {
                    "Chargeback_Reference_no":prefix_tester + getTransactionId() + "_"+ i,
                    "Brand": "American Express",
                    "Processor": "American Express",
                    "Reason_Code": "4",
                    "DisputeType": "Chargeback",
                    "Processing_Type": "CNP",
                    "Reporting_Group": "MERCHANDISE NOT RECEIVED",
                    "Queue_Group": "CUSTOMER SERVICE",
                    "Card_Number": "371738"+getRandom_9(),
                    "Disputed_Currency": "USD",
                    "Disputed_Amound": getTransactionTotalAmount(),
                    "Disputed_Date": getFutureDay2(),
                    "Transaction_Currency": "USD",
                    "Transaction_Amount": getTransactionTotalAmount(),
                    "Transaction_Date": getPastDay3(),
                    "Merchant_Number": "198798",
                    "Processor_Chargeback_Type": "Retrieval",
                    "BIN": "371738",
                    "Transaction_ID": "",
                    "Order_Number":"",
                    "Hosted_Disputed_Amount": getTransactionTotalAmount(),
                    "Autoresolve_Indicator":""  
                };
                json.push(data);
            }
            return json;
        } catch (err) {
            return { err };
        }
    },
    getDataDinamicPresent_CHK_TEST: function () {
        const arrayJson = [];
        try {
            for (let i = 0; i < num_dinamic; i++) {
                const data = {
                    "Chargeback_Reference_no":prefix_tester + getTransactionId() + "_"+ i,
                    "Brand": "American Express",
                    "Processor": "American Express",
                    "Reason_Code": "4",
                    "DisputeType": "Chargeback",
                    "Processing_Type": "CNP",
                    "Reporting_Group": "MERCHANDISE NOT RECEIVED",
                    "Queue_Group": "CUSTOMER SERVICE",
                    "Card_Number": "371738"+getRandom_9(),
                    "Disputed_Currency": "USD",
                    "Disputed_Amound": getTransactionTotalAmount(),
                    "Disputed_Date": getPresentDayFormat2(),
                    "Transaction_Currency": "USD",
                    "Transaction_Amount": getTransactionTotalAmount(),
                    "Transaction_Date": getPastDay2(),
                    "Merchant_Number": "198798",
                    "Processor_Chargeback_Type": "Retrieval",
                    "BIN": "371738",
                    "Transaction_ID": "",
                    "Order_Number":"",
                    "Hosted_Disputed_Amount": getTransactionTotalAmount(),
                    "Autoresolve_Indicator":"" 
                };
            };
            arrayJson.push(data);
            return arrayJson;
        } catch (err) {
            return { err };
        }
    },
    getDataDinamicPast_CHK_TEST: function () {
        const arrayJson = [];
        try {
            for (let i = 0; i < num_dinamic_past; i++) {
                const data = {
                    "Chargeback_Reference_no":prefix_tester + getTransactionId() + "_"+ i,
                    "Brand": "American Express",
                    "Processor": "American Express",
                    "Reason_Code": "4",
                    "DisputeType": "Chargeback",
                    "Processing_Type": "CNP",
                    "Reporting_Group": "MERCHANDISE NOT RECEIVED",
                    "Queue_Group": "CUSTOMER SERVICE",
                    "Card_Number": "371738"+getRandom_9(),
                    "Disputed_Currency": "USD",
                    "Disputed_Amound": getTransactionTotalAmount(),
                    "Disputed_Date": getPastDay2(),
                    "Transaction_Currency": "USD",
                    "Transaction_Amount": getTransactionTotalAmount(),
                    "Transaction_Date": getPastDay3(),
                    "Merchant_Number": "198798",
                    "Processor_Chargeback_Type": "Retrieval",
                    "BIN": "371738",
                    "Transaction_ID": "",
                    "Order_Number":"",
                    "Hosted_Disputed_Amount": getTransactionTotalAmount(),
                    "Autoresolve_Indicator":"" 
                };
                arrayJson.push(data);
            }
            return arrayJson;
        } catch (err) {
            return { err };
        }
    },
    getDataDinamic_Future_CHK_TEST: function () {
        try {
            const json = [];
            for (let i = 0; i < nume_dinamic_future; i++) {
                const data = {
                    "Chargeback_Reference_no":prefix_tester + getTransactionId() + "_"+ i,
                    "Brand": "American Express",
                    "Processor": "American Express",
                    "Reason_Code": "4",
                    "DisputeType": "Chargeback",
                    "Processing_Type": "CNP",
                    "Reporting_Group": "MERCHANDISE NOT RECEIVED",
                    "Queue_Group": "CUSTOMER SERVICE",
                    "Card_Number": "371738"+getRandom_9(),
                    "Disputed_Currency": "USD",
                    "Disputed_Amound": getTransactionTotalAmount(),
                    "Disputed_Date": getFutureDay2(),
                    "Transaction_Currency": "USD",
                    "Transaction_Amount": getTransactionTotalAmount(),
                    "Transaction_Date": getFutureDay2(),
                    "Merchant_Number": "198798",
                    "Processor_Chargeback_Type": "Retrieval",
                    "BIN": "371738",
                    "Transaction_ID": "",
                    "Order_Number":"",
                    "Hosted_Disputed_Amount": getTransactionTotalAmount(),
                    "Autoresolve_Indicator":"" 
                };
                json.push(data);
            }
            return json;
        } catch (err) {
            return { err };
        }
    },
     getDataDinamic_Future_CHK_TEST: function () {
        try {
            const json = [];
            for (let i = 0; i < nume_dinamic_future; i++) {
                const data = {
                    "Chargeback_Reference_no":prefix_tester + getTransactionId() + "_"+ i,
                    "Brand": "American Express",
                    "Processor": "American Express",
                    "Reason_Code": "4",
                    "DisputeType": "Chargeback",
                    "Processing_Type": "CNP",
                    "Reporting_Group": "MERCHANDISE NOT RECEIVED",
                    "Queue_Group": "CUSTOMER SERVICE",
                    "Card_Number": "371738"+getRandom_9(),
                    "Disputed_Currency": "USD",
                    "Disputed_Amound": getTransactionTotalAmount(),
                    "Disputed_Date": getFutureDay2(),
                    "Transaction_Currency": "USD",
                    "Transaction_Amount": getTransactionTotalAmount(),
                    "Transaction_Date": getFutureDay2(),
                    "Merchant_Number": "198798",
                    "Processor_Chargeback_Type": "Retrieval",
                    "BIN": "371738",
                    "Transaction_ID": "",
                    "Order_Number":"",
                    "Hosted_Disputed_Amount": getTransactionTotalAmount(),
                    "Autoresolve_Indicator":"" 
                };
                json.push(data);
            }
            return json;
        } catch (err) {
            return { err };
        }
    },
    getDataDinamic_Future_CHK_AMEX: function (arrayTrFR) {

        let tranID = "00";

        try {
            const json = [];
            for (let i = 0; i < numChkAmex; i++) {
                const data = {
                    "Chargeback_Reference_no":prefix_tester + getTransactionId() + "_"+ i,
                    "Brand": "American Express",
                    "Processor": "American Express",
                    "Reason_Code": "6", // 6 REsolve to FR / 4 is CHK
                    "DisputeType": "Chargeback",
                    "Processing_Type": "CNP",
                    "Reporting_Group": "MERCHANDISE NOT RECEIVED",
                    "Queue_Group": "CUSTOMER SERVICE",
                    "Card_Number": "371738"+getRandom_9(),
                    "Disputed_Currency": "USD",
                    "Disputed_Amound": getTransactionTotalAmount(),
                    "Disputed_Date": getFutureDay2(),
                    "Transaction_Currency": "USD",
                    "Transaction_Amount": getTransactionTotalAmount(),
                    "Transaction_Date": getFutureDay2(),
                    "Merchant_Number": "198798",
                    "Processor_Chargeback_Type": "Retrieval",
                    "BIN": "371738",
                    "Transaction_ID": tranID,
                    "Order_Number":tranID,
                    "Hosted_Disputed_Amount": getTransactionTotalAmount(),
                    "Autoresolve_Indicator":""  
                };
                json.push(data);
            }
            return json;
        } catch (err) {
            return { err };
        }
    },

}