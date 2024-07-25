//const magnitude = require('./dataFile');

import { data }  from "./dataFile.js";

const magnitude = data


/**
 * * provides information about the value specified in the parameter according to the C measurement system
*  @param {string} magnitude - name of physical quantity
*/
function getInfoOfmagnitude(magnitudeName) {

    let result = null;
    let flag = false;

    for (let item = 0; item < magnitude.length; item++) {
        const element = magnitude[item];
        //console.log(item);
        if (magnitude[item].magnitude === magnitudeName) {
            
            result = `
                величина                                     ----- ${magnitude[item].magnitude}
                Единица измерения (русское название)         ----- ${magnitude[item]['unit(rus)']}
                Единица измерения (международное название)   ----- ${magnitude[item]['unit(intern)']}
                Обозначение(русское)                         ----- ${magnitude[item]['designation(rus)']}
                Обозначение(международное)                   ----- ${magnitude[item]['designation(intern)']}
                `;
            flag = true;
        }
    
        if (flag) { 
            return result;
        };
    
    };
    return `
    по физической величине ${magnitudeName} результат не найден...
    для получения справки по названиям всех физических величин воспользуйтесь функцией getAllNamesoFMagnitudes
    `;    
    };

/**
 * provides information about the names of all physical quantities
 */
function  getAllNamesoFMagnitudes() {
    const allNames = [];
    data.forEach(element => {
        allNames.push(element.magnitude)
    });


    console.log('Названия всех физических величин, о которых можно получить информацию: ');
    allNames.forEach(name => {
        console.log(name);
        
    });

}   


// getAllNamesoFMagnitudes();

// console.log(getInfoOfmagnitude("Сила"));

module.exports = { getAllNamesoFMagnitudes, getInfoOfmagnitude };

