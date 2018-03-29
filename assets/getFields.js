const flat = require('flat')

module.exports = fields => {

    return new Promise((resolve, reject) => {

        let list = Object.keys(flat(fields[0]))

        let field = list.map((value, index) => {
            if(index === 0) {
                fields = `${value} CHARACTER VARYING (300)`
            } else {
                fields = [fields,`${value} CHARACTER VARYING (300)`].join(',\n')
            }
            return fields
        })

        fields = fields.replace(/\./g,'_')

        resolve(fields)

    })

}