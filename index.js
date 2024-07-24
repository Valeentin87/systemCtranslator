//const magnitude = require('./dataFile');

import { data }  from "./dataFile.js";

const magnitude = data

function getInfoOfmagnitude(magnitudeName) {
    let result = null;
    let flag = false;

    for (let item = 0; item < magnitude.length; item++) {
        const element = magnitude[item];
        //console.log(item);
        if (magnitude[item].name === magnitudeName) {
            
            result = `
                наименование         ----- ${magnitude[item].name}
                наименование по ОКЕИ ----- ${magnitude[item].nameOKEI}
                сокращение по ОКЕИ   ----- ${magnitude[item].shortNameOKEI}
                код ОКЕИ             ----- ${magnitude[item].OKEI}
                код КСПОВО           ----- ${magnitude[item].KSPOVO}
                `;
            flag = true;
        }
    
        if (flag) { 
            return result;
        };
    
    };
    return `по физической величине ${magnitudeName} результат не найден...`;    
    };


    
        

console.log(getInfoOfmagnitude('KGM'));