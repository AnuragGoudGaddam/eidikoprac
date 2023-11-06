import { ReactSession } from 'react-client-session';
import jwtDecode from "jwt-decode";

/**
 * Returns a header object for a api request.
 * @param {string} taskId - The task id to be included in the header.
 * The object contains the values of the session variables
 * @returns {Object} The header object.
 */
const fetchRequestHeader = (taskId, token) => {
    const decodedToken = jwtDecode(token);
    return {
        // "jwtToken": ReactSession.get("jwttoken"),
        "username": decodedToken?.sub || decodedToken?.username || "naveencha",
        // "oauthToken": ReactSession.get("oauthtoken"),
        // "clientid": "",
        "Authorization": `Bearer ${token}`,
        // "taskid": taskId || "00000",
        "appName": "TMS"
    }
}

const requestHeaderWithAppId = (appId, token) => {
    const decodedToken = jwtDecode(token);
    return {
        "username": decodedToken?.sub || decodedToken?.username || "naveencha",
        "Authorization": `Bearer ${token}`,
        "appId": "TMS"
    }
}



/**
 * Takes in a number and returns a string with the number formatted in the given currency.           
 * @param {number} value - the number to format           
 * @param {string} setCurrency - the currency to format the number in           
 * @returns {string} - the formatted number           
 */
const formatCurrency = (value, setCurrency) => {
    let locationCurFor = 'en-AE';
    return new Intl.NumberFormat(locationCurFor, {
        style: 'currency',
        currency: setCurrency
    }).format(value);
}


/**
 * Aligns the text in the column header based on the column text.           
 * @param {string} colText - the text of the column header           
 * If the column text is found in the rightAlignItems array, the text is aligned to the right.
 * If the column text is found in the leftAlignItems array, the text is aligned to the left.
 * If the column text is not found in either of the arrays, the text is aligned to the center.
 * @returns {string} - the alignment of the text in the column header           
 */
const alignLabel = (colText) => {
    let rightAlignItems = []
    let leftAlignItems = []
    if (rightAlignItems.includes(colText)) {
        return "right"
    }
    if (leftAlignItems.includes(colText)) {
        return "left"
    }
    return "center"
}

const fetchIdFromUrl = () => {
    const id = window.location.href.split('/');
    const dataId = id.pop();
    const taskId = id.pop();
    return { taskId, dataId };
}

const truncateText = (text, maximumLength) => {
    // to remove extra spaces in the string
    const str = text?.replace(/\s+/g, '');
    return `${str?.trim()?.substring(0, maximumLength)} ...`
}

const fetchLoggedInUsername = (token) => {
    const decodedToken = jwtDecode(token);
    return decodedToken?.sub || decodedToken?.username || "naveencha"
}
const fetchLoggedInUserroles = () => ReactSession.get("userroles");
const fetchLoggedInCurrentUserrole = () => ReactSession.get("userrole");
const fetchUserToken = () => {
    return ReactSession.get("jwttoken") || 
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuYXZlZW5jaGEiLCJleHAiOjE2ODg3NTM1MjUsImlhdCI6MTY4ODczOTEyNSwidXNlcm5hbWUiOiJuYXZlZW5jaGEifQ.hq0v7WUBX7zVlwwxFB-oU09EEhdUkwDjVv7BwDXQWdY26aO4I4G-vS2vyYz4s9zvUxJ2xcZNudQYoE57NSxe8w";
}


export {
    fetchRequestHeader, formatCurrency,
    alignLabel, fetchIdFromUrl, truncateText,
    fetchLoggedInUsername, fetchLoggedInUserroles,
    fetchLoggedInCurrentUserrole, fetchUserToken, requestHeaderWithAppId
};