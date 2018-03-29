const requestData = require('./assets/requestData')
options = require('./config/config')
init = 0
max = options.entities.length
getEntities = async(entities) => {
        while(init < max) {
                options.get.headers.skip = 0
                await requestData(entities[init], options.get)
                        .then(entity => init = init + 1)
        }
}

getEntities(options.entities)