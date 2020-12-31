const got = require('got')

/**
 * Fuction For Getting Your External IPv4 Address.
 * @function -  Get IPv4
 * @param {string} format - Format Of The Return (Json Or Plain Tesxt)
 */
module.exports.ip4 = async ( format ) => {
    let url 

    if (format === null) url = "https://api.ipify.org"
    if (format !== "json") url = "https://api.ipify.org"
    if (format === "json") url = "https://api.ipify.org?format=json"
    
    const response = await got(url)
    let ip = response.body
    
    return ip
}