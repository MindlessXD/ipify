const axios = require('axios').default

async function getIP(url) {
    try {
        return response = await axios.get(url)
    } catch (error) {
        console.error(error)
        return new error("Not Available")
    }
}

/**
 * Fuction For Getting Your External IPv4 Address.
 * @function -  Get IPv4
 * @param {string} format - Format Of The Return (Json Or Plain Tesxt)
 */
module.exports.ip4 = ( format ) => {
    let url 

    if (format === null) url = "https://api.ipify.org"
    if (format !== "json") url = "https://api.ipify.org"
    if (format === "json") url = "https://api.ipify.org?format=json"
    
    return await getIP(url)
}

/**
 * Fuction For Getting Your External IPv6 Address.
 * @function -  Get IPv6 
 * @param {string} format - Format Of The Return (Json Or Plain Tesxt)
 */
module.exports.ip6 = (format) => {
    let url 

    if (format === null) url = "https://api64.ipify.org"
    if (format !== "json") url = "https://api64.ipify.org"
    if (format === "json") url = "https://api64.ipify.org?format=json"

    return await getIP(url)
}