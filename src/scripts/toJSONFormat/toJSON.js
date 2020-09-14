const comma = [',']; 
const openBrackets = ['[', '{'];
const closetBrackets = [']', '}'];
const allArr = [...openBrackets, ...closetBrackets, ...comma];
let addTabs = [];
let stringArr = [];
let formattedString = '';
// tab variable replaces '\t' in program.
// change was made for visual reasons.
const spaceTab = ' ';

// implements prettier to the string passed to it.
const formatString = string => {
    prettyPrint(string)
    const finalString = formattedString;
    formattedString = '';
    return finalString
}

// checks if valid javascript object.
const validateString = string => {
    try {
        JSON.parse(string);
        return true;
    } catch(err) {
        return false;
    }
}

// returns a formatted string
const prettyPrint = string => {
    stringArr = string.split('');

    stringArr.forEach(el => {
        ifOpenBracket(el);
        addMainContent(el);
        ifComma(el);
        ifClosedBracket(el);
    });

    console.log(formattedString);
}

// checks for open brackets or curly brace's and formats it as a line break and tabs the next line
// (same general rules for all if functions)
const ifOpenBracket = item => { 
    let isTrue = null;
    if (item === '{' || item === '[') {
        isTrue = true;
        test(openBrackets, item, isTrue);
    }
}

// checks for comma and formats. 
const ifComma = item => {
    test(comma, item, false);
}

// checks for closed brackets or curly brace and formats.
const ifClosedBracket = item => {
    test(closetBrackets, item, false);
}

// toQuery param is the array to loop through, item param is the what is being searched for
// inside of toQuery.
// tab param is a boolean value. If true, a tab will be inserted after a line break.
const test = (toQuery, item, tab) => {
    if (tab) {  

        addTabs.push(spaceTab);
    }

    const index = toQuery.indexOf(item);
    // to add JSON data section maybe add a check in this if statement 
    // that adds everything that is not in one of the 3 arrays being called
    // or blacklist the sent item
    if (index === -1) {
        return null;
    }else {
        let format = '';

        if (item === '}' || item === ']') {
            const newTabSize = addTabs;
            newTabSize.pop();
            format = `\n${newTabSize.join('')}${item}`
        }else {
            const newItem = toQuery[index];
            tab ? format = `${newItem}\n${addTabs.join('')}` : format = `${newItem}\n${addTabs.join('')}`;
        }
        formattedString += format;
    }
}

const addMainContent = item => {
    const index = allArr.indexOf(item);
    if (index === -1) {
        formattedString += `${item}`;
    }
}

export { formatString, validateString };