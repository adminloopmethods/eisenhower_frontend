/**
* Function to convert string to date format DD-MM-YYYY
* @param    {String} date  
* @return   {String}    
*/
export const formatDate = (date) => {
    let _date = new Date(date);
    if (date) return `${_date.getDate()}/${_date.getMonth() > 8 ? '' : '0'}${_date.getMonth() + 1}/${_date.getFullYear()}`;
    return '';
};

/**
 * Function to title case string
 * @param {String} text
 * @return {String}
 */
export const toTitleCase = (text) => {
    if (text) return text.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

/**
 * Function to title case string
 * @param {Number} number
 * @return {String}
 */
export const ordinalSuffixOf = (i) => {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}


export const moneyFormat = (currency, amount) => {
    return `${currency} ${parseFloat(amount).toLocaleString('en-US')}`
};

export const internationalNumberFormat = (value) => {
    return `${value.toLocaleString('en-US')}`
}

export const getCount = (array, status, status1 = false) => {
    return array.filter((val) => {
        return val.platformStatus === status;
    });
}

// /**
//  * Function to change the format of money to indian format
//  * @param {String, Number} string, number
//  * @return {String}
//  */
export const amountFormat = (currency, amount) => {
    if (amount > 999 && amount < 1000000) {
        return `${currency} ${(amount / 1000).toFixed(1) + 'K'}`; // convert to K for number from > 1000 < 1 million 
    } else if (amount > 1000000) {
        return `${currency} ${(amount / 1000000).toFixed(1) + 'M'}`; // convert to M for number from > 1 million 
    } else if (amount < 900) {
        return `${currency} ${amount}`; // if value < 1000, nothing to do
    }
}

/**
 * Function to check if given keyword 
 * @param {Array, String} ['string'], 'string'
 * @return {Boolean}
 */
export const checkKeywordInArray = (array, keyword) => {
    if (keyword !== null || keyword !== undefined) {
        for (var i = 0; i < array.length; i++) {
            try {
                if (array[i] === null) {
                    continue
                }
                if (array[i]?.includes(keyword.trim()) ||
                    array[i]?.includes(keyword.toLowerCase().trim()) ||
                    array[i]?.includes(toTitleCase(keyword.trim())) ||
                    array[i]?.includes(keyword.toUpperCase().trim())) {
                    return true;
                }
            }
            catch {
                return false;
            }
        }
    }
    return false;
};