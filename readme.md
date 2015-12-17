# Health Check Redis

## CI
[![Circle CI](https://circleci.com/gh/LucasRodrigues/health-check-mongodb.svg?style=svg)](https://circleci.com/gh/LucasRodrigues/health-check-mongodb)

## Install

```
$ npm install health-check-mongodb
```

## Usage

```
var healthCheckMongodb = require('health-check-mongodb');

healthCheckMongodb.do([{
   url: ''mongodb://validUrl:41140/dbValid'
 }, {
   url: 'mongodb://invalidUrl:41140/dbInvalid'
 }])
   .then(r => {
     console.log(r);
     /*
     { health: false,
       success: 1,
       error: 1,
       details: 
        [ { name: 'mongodb://validUrl:41140/dbValid',
            health: true,
            message: '' },
          { name: 'mongodb://invalidUrl:41140/dbInvalid',
            health: false,
            message: 'getaddrinfo ENOTFOUND invalidUrl:41140' } ] }     
     */
   })
   .catch(r => {
     console.log(r);
   });
```