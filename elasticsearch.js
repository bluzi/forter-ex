const elasticsearch = require('elasticsearch');

module.exports = new elasticsearch.Client({
    host: [
        {
            host: '26bdb9fcc7b5b41b8cbf199207a5a000.us-east-1.aws.found.io',
            auth: 'elastic:g4dIVfykwtaoiIMPAm8YMfEK',
            protocol: 'https',
            port: 9243
        }
    ],
    log: 'info',
});