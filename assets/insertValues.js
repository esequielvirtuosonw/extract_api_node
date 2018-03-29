const flat = require('flat')

module.exports = (query, entity, table, data, insert) => {
    for (i in data) {
        data[i] = Object.values(flat(data[i]))
        query.insert(entity, table, [...data[i]], [...insert])
    }
}