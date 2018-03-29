module.exports = {
    entities : [],
    post : {
        method: 'POST',
        url: 'https://api.neoway.com.br/auth/token',
        body: '{\n\t"application" : "",\n\t"application_secret" : ""\n}'
    },
    get : {
        method: 'GET',
        urlRoot: 'https://api.neoway.com.br/services/bi/',
        headers: {
                skip: 0,
                limit: 10000
        }
    },
    postgreSql : {
        user: '',
        host: '',
        database: '',
        password: '',
        port: '',
    }
}