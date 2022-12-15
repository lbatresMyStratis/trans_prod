"use strict"
const faker = require('faker');
var usaCities = require('./USCities3.js');

module.exports = {

    getPresentDay: function (){
        try{
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            let presentDay = yyyy+"-"+mm+"-"+dd+'T12:00:00-0500'
            return presentDay;
        }catch(err){
            return {err};
        }
    },

    getPresentDayFormat_start: function (){
        try{
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            let presentDay = dd+"/"+mm+"/"+yyyy;
            return presentDay;
        }catch(err){
            return {err};
        }
    },
    getFutureDayFormat_start: function (){
        try{
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 2).padStart(2, '0');
            let yyyy = today.getFullYear();
            let presentDay = dd+"/"+mm+"/"+yyyy;
            return presentDay;
        }catch(err){
            return {err};
        }
    },

    getPastDayFormat_start: function (){
        try{
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() - 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            let presentDay = dd+"/"+mm+"/"+yyyy;
            return presentDay;
        }catch(err){
            return {err};
        }
    },
    
    getPresentDayFormat_end: function (){
        try{
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            mm = parseInt(mm)
            mm = mm + 1;
            mm = String(mm).padStart(2, '0');
            let presentDay = dd+"/"+mm+"/"+yyyy;
            return presentDay;
        }catch(err){
            return {err};
        }
    },

    getFutureDayFormat_end: function (){
        try{
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 2).padStart(2, '0');
            let yyyy = today.getFullYear();
            mm = parseInt(mm)
            mm = mm + 1;
            mm = String(mm).padStart(2, '0');
            let presentDay = dd+"/"+mm+"/"+yyyy;
            return presentDay;
        }catch(err){
            return {err};
        }
    },

    getPresentDayFormat: function (){
        try{
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            let presentDay = yyyy+"_"+mm+"_"+dd;
            return presentDay;
        }catch(err){
            return {err};
        }
    },

    getPresentDayFormat2: function (){
        try{
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            let presentDay = dd+"-"+mm+"-"+yyyy;
            return presentDay;
        }catch(err){
            return {err};
        }
    },

    getPastDay: function (){
        try{
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() - 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            let pastDay = yyyy+"-"+mm+"-"+dd+'T12:00:00-0500'
            return pastDay;
        }catch(err){
            return {err};
        }
    },

    getPastDay2: function (){
        try{
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() - 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            let pastDay = dd+"-"+mm+"-"+yyyy;
            return pastDay;
        }catch(err){
            return {err};
        }
    },

    getPastDay3: function (){
        try{
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() - 2).padStart(2, '0');
            let yyyy = today.getFullYear();
            let pastDay = dd+"-"+mm+"-"+yyyy;
            return pastDay;
        }catch(err){
            return {err};
        }
    },

    getFutureDay: function (){
        try{
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 2).padStart(2, '0');
            let yyyy = today.getFullYear();
            let futuretDay = yyyy+"-"+mm+"-"+dd+'T12:00:00-0500'
            return futuretDay;
        }catch(err){
            return {err};
        }
    },
    getFutureDay2: function (){
        try{
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 2).padStart(2, '0');
            let yyyy = today.getFullYear();
            let futuretDay = dd+"-"+mm+"-"+yyyy
            return futuretDay;
        }catch(err){
            return {err};
        }
    },

    getAirlineRandom: function (){
        try{
            let ArrayAirlines = ["VW", "AA", "AF", "IJ", "WS", "AE", "SS", "AS", "GH", "LB", "EW", "AJ"];
            let randomAirline = ArrayAirlines[faker.datatype.number({ 'min': 1, 'max': 9 })];
            return randomAirline;
        }catch(err){
            return {err};
        }  
    },

    getTicketClassRandom: function (){
        try{
            let ArrayTicketClass = ["IN", "FK", "KL", "UV", "OP", "UI", "FT", "MU"];
            let randomTicketClass = ArrayTicketClass[faker.datatype.number({ 'min': 1, 'max': 9 })];
            return randomTicketClass;
        }catch(err){
            return {err};
        }  
    },

    getAirPortRandom: function (){
        try{
            let ArrayAirPort = ["ORD", "MX", "TJ", "KK", "UK", "JU", "FD", "KL", "TR", "TY"];
            let randomAirPort = ArrayAirPort[faker.datatype.number({ 'min': 1, 'max': 9 })];
            return randomAirPort;
        }catch(err){
            return {err};
        }  
    },

    getAirPortRandom: function (){
        try{
            let ArrayAirPort = ["ORD", "MX", "TJ", "KK", "UK", "JU", "FD", "KL", "TR", "TY"];
            let randomAirPort = ArrayAirPort[faker.datatype.number({ 'min': 1, 'max': 9 })];
            return randomAirPort;
        }catch(err){
            return {err};
        }  
    },

    getMonthRandom: function (){
        try{
            let ArrayMonth = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
            let randomMonth = ArrayMonth[faker.datatype.number({ 'min': 1, 'max': 11 })];
            return randomMonth;
        }catch(err){
            return {err};
        }  
    },
    
    getYearRandom: function (){
        try{
            let ArrayYear = [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027];
            let randomYear = ArrayYear[faker.datatype.number({ 'min': 1, 'max': 28 })];
            return randomYear;
        }catch(err){
            return {err};
        }  
    },
    
    getLevelClassRandom: function (){
        try{
            let ArrayLevel = ["GOLD", "PLATINUM", "ZAFIR", "VIP", "BASIC", "JR", "Non Elite or Non Member (PPR)"];
            let randomLevel = ArrayLevel[faker.datatype.number({ 'min': 1, 'max': 5 })];
            return randomLevel;
        }catch(err){
            return {err};
        }  
    },
    
    getAdditionalEmailAddressesRandom: function (){
        try{
            return faker.internet.email();
        }catch(err){
            return {err};
        }  
    },

    getBillingAddressRandom: function (X){
        try{
            return faker.address.streetAddress(X);
        }catch(err){
            return {err};
        }  
    },

    getBillingCityRandom: function (X){
        try{
            let numberR = Math.floor(1000 + Math.random() * 900);
            var jsonCity = usaCities.RandomCity(numberR);
            let billingCity = jsonCity;
            return billingCity;
        }catch(err){
            return {err};
        }  
    },

    getBillingFirstNameRandom: function (X){
        try{
            return faker.name.firstName(X);
        }catch(err){
            return {err};
        }  
    },
    
    getBillingLastNameRandom: function (X){
        try{
            return faker.name.lastName(X);
        }catch(err){
            return {err};
        }  
    },

    getBillingMiddleNameRandom: function (X){
        try{
            return faker.name.lastName(X);
        }catch(err){
            return {err};
        }  
    },

    getBillingPhoneNumberRandom: function (X){
        try{
            return faker.phone.phoneNumberFormat(X);
        }catch(err){
            return {err};
        }  
    },
    
    getBillingPostalCodeRandom: function (){
        try{
            let numberR = Math.floor(1000 + Math.random() * 900);
            var jsonCity = usaCities.RandomCity(numberR);
            let billingZIP = jsonCity.zip_code;
            return billingZIP;
        }catch(err){
            return {err};
        }  
    },
    
    getBillingStateRandom: function (){
        try{
            let numberR = Math.floor(1000 + Math.random() * 900);
            var jsonCity = usaCities.RandomCity(numberR);
            let billingZIP = jsonCity.state;
            return billingZIP;
        }catch(err){
            return {err};
        }  
    },
    
    getBillingCustomerEmailAddressRandom: function (){
        try{
            let customerEmailAddress = faker.internet.email();
            return customerEmailAddress;
        }catch(err){
            return {err};
        }  
    },

    getBillingPaymentTypeRandom: function (){
        try{
            let ArrayPayment = ["WEB_ONLINE", "PAYPAL", "AMEX", "STRIPE", "BASIC", "BRAINTREE", "VISA"];
            let randomPayment = ArrayPayment[faker.datatype.number({ 'min': 1, 'max': 5 })];
            return randomPayment;
        }catch(err){
            return {err};
        }  
    },

    getAirPortRandomgetMonthRandom: function (){
        try{
            let ArrayPayment = ["WEB_ONLINE", "PAYPAL", "AMEX", "STRIPE", "BASIC", "BRAINTREE", "VISA"];
            let randomPayment = ArrayPayment[faker.datatype.number({ 'min': 1, 'max': 5 })];
            return randomPayment;
        }catch(err){
            return {err};
        }  
    },

    getBillingtotalNumberOfFailedAttemptsRandom: function (){
        try{
            return 19;
        }catch(err){
            return {err};
        }  
    },

    getBrowserCookie: function (){
        try{
            return "si=False";
        }catch(err){
            return {err};
        }  
    },

    getCurrencyCode: function (){
        try{
            return faker.finance.currencyCode();
        }catch(err){
            return {err};
        }  
    },
    
    getGiftMessage: function (){
        try{
            return "DONE!!";
        }catch(err){
            return {err};
        }  
    },
    
    getIpAddress: function (){
        try{
            return faker.internet.ip();
        }catch(err){
            return {err};
        }  
    },
    
    getReferralCode: function (){
        try{
            return faker.datatype.number({ 'min': 1, 'max': 9 });
        }catch(err){
            return {err};
        }  
    },

    getSalesChannel: function (){
        try{
            return "WEB";
        }catch(err){
            return {err};
        }  
    },

    getSalesRep: function (){
        try{
            return 10;
        }catch(err){
            return {err};
        }  
    },

    getUUIRandom: function (){
        try {
            let uui = faker.datatype.number();
            return uui;
        } catch (error) {
            return error;
        }
    },

    getTransactionId: function (){
        try{
            let today = new Date();
            let time = today.getHours() + '_' + today.getMinutes();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            let presentDay = yyyy+"_"+mm+"_"+dd+'_'+time+'_';
            let uui = faker.datatype.number();
            let tran = presentDay+uui;
            return tran;
        }catch(err){
            return {err};
        }  
    },

    getTransactionTotalAmount: function (){
        try{
            let totalAmount = faker.datatype.number();
            return totalAmount;
        }catch(err){
            return {err};
        }  
    },
    
    getTransactionType: function (){
        try{
            return "WEB";
        }catch(err){
            return {err};
        }  
    },

    getBillingCard: function (){
        try{
            return faker.finance.creditCardNumber();
        }catch(err){
            return {err};
        }  
    },
    
    getCardholderName_D: function (){
        try{
            return faker.name.lastName()+" "+faker.name.firstName();
        }catch(err){
            return {err};
        }  
    },

    getCardType_D: function (){
        try{
            return "VISA";
        }catch(err){
            return {err};
        }  
    },

    getCardAuthorizedAmount_D: function (){
        try{
            return faker.finance.creditCardCVV();
        }catch(err){
            return {err};
        }  
    },

    getCardExpireDate_D: function (){
        try{
            return faker.date.month({ abbr: true, context: true })+"-2027";
        }catch(err){
            return {err};
        }  
    },

    getCardExpireMonth_D: function (){
        try{
            return faker.date.month({ abbr: true, context: true });
        }catch(err){
            return {err};
        }  
    },

    getCardExpireYear_D: function (){
        try{
            return 2027;
        }catch(err){
            return {err};
        }  
    },

    getCardAuthorizationCode_D: function (){
        try{
            return faker.mersenne.rand(1000, 500);
        }catch(err){
            return {err};
        }  
    },

    getCardAvsResponse_D: function (){
        try{
            return faker.mersenne.rand(1000, 500);
        }catch(err){
            return {err};
        }  
    },

    getCardCvvResponse_D: function (){
        try{
            return faker.mersenne.rand(1000, 500);
        }catch(err){
            return {err};
        }  
    },

    getThreedsEciIndicator_D: function (){
        try{
            return faker.mersenne.rand(1000, 500);
        }catch(err){
            return {err};
        }  
    },

    getRandom_9() {
        return Math.floor(Math.pow(10, 9-1) + Math.random() * 9 * Math.pow(10, 9-1));
        }
    
};







