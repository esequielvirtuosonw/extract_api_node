const flat = require('flat')

module.exports = data => {

    data = Object.keys(flat(data[0])).length

    const insertFields = []

    for(i = 1; i <= data; i++) {
        insertFields.push(`$${i}`)
    }

    return insertFields

}