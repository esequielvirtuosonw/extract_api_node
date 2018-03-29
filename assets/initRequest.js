const insertValues = require('./insertValues')
getFields = require('./getFields')

module.exports = (query, entity, table, data, insert) => {
    query.createSchema(entity)
    .then(entity => getFields(data)
        .then(fields => {
            query.createTable(entity, table, fields)
            .then(table => query.delete(entity, table)
                .then(table => insertValues(query, entity, table, data, insert))
            )
        })
    )
}