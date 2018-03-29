const request = require('request')

const getToken = options => new Promise((resolve, reject) => {
    request(options, (error, response, result) => {
        if(error || response.statusCode !== 200)
            reject(error)
        resolve(result)
    })
})

module.exports = getToken