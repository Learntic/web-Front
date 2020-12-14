// const fs = require('fs');

// module.exports = {
//     devServer: {     
        // https: true,
        // key: fs.readFileSync('./certs/server.key'),
        // cert: fs.readFileSync('./certs/server.crt'),  
        // host: 'test-dns.ml'
//     } 
//  } 

module.exports = {
        devServer: {
          disableHostCheck: true
        }
      }