module.exports = (pool) => {
    
    const query = {}

    query.createSchema = (entity) => new Promise((resolve, reject) => {
        pool.query(`CREATE SCHEMA IF NOT EXISTS ${entity}`, (error, res) => {
            resolve(entity)
        })
    })

    query.createTable = (entity, table, fields) => new Promise((resolve, reject) => {
        pool.query(`CREATE TABLE IF NOT EXISTS ${entity}.${table} (${fields})`, (error, res) => {
            resolve(table)
        })
    })

    query.delete = (entity, table) => new Promise((resolve, reject) => {
        pool.query(`DELETE FROM ${entity}.${table}`, (error, res) => {
            resolve(table)
        })
    })

    query.insert = (entity, table, values, insert) => new Promise((resolve, reject) => {
        pool.query(`INSERT INTO ${entity}.${table} VALUES(${insert})`, values, (error, res) => {
            
        })
    })

    return query

}