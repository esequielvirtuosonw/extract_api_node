const opt = require('../config/config')
request = require('request')
getToken = require('./getToken')
pool = require('./getConnection')
query = require('./getQuery')(pool)
getInsertFields = require('./getInsertFields')
initRequest = require('./initRequest')
insertValues = require('./insertValues')
table = 'results'

const requestData = (entity, options) => {

    return new Promise(resolve => {

        options.url = [options.urlRoot,entity].join('')
        count = options.headers.limit

        const paginator = async(options) => {
            console.time(`${entity} run in`)

            const getRequest = async(options) => {

                await getToken(opt.post)
                .then(result => {
                    options.headers.authorization = `Bearer ${JSON.parse(result).token}`
                })

                return new Promise(resolve => {
                    request(options, (response, result) => {
                        const data = JSON.parse(result.body).results
                        insert = getInsertFields(data)
                
                        if(options.headers.skip === 0) {
                            initRequest(query, entity, table, data, insert)
                        } else {
                            insertValues(query, entity, table, data, insert)
                        }

                        count = JSON.parse(result.body).count
                        options.headers.skip = (options.headers.skip + count)
                        result = null

                        resolve(count)
                    })
                })
            }

            while(count === options.headers.limit) {
                await getRequest(options)
                    .then(count => count)
            }

            resolve(entity)

            console.timeEnd(`${entity} run in`)
        }

        paginator(options)

    })

}

module.exports = requestData