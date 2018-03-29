# EXTRACT BI-API NEOWAY - NODE.JS

## Objective

Extract data of BI-API Neoway.

## Requirements

You have to install node.js and npm to start the service.
Before install node.js you can check if it is already installed on your computer.
To do that you can run the following command on your terminal:

`node -v`

For install node, access web page `https://nodejs.org/en/`. 

To check if you have npm installed on your computer, run the following command on your terminal:

`npm -v`

If you do not have installed npm on this computer, access `https://www.npmjs.com/get-npm` to dowload npm.

> Important! - For this services run, you must have installed the version 7.6.0 or latest of node.js

## Dependencies

flat - ```https://www.npmjs.com/package/flat```

nodemon - ```https://nodemon.io/```

pg - ```https://www.npmjs.com/package/pg```

request - ```https://www.npmjs.com/package/request```

- Run the command `npm install` to install all of the project dependencies.
- Run the command `npm run dev` to start the EXTRACT BI-API development environment.
- Run the command `npm run prod` to start the EXTRACT BI-API in a production environment.

## Configurations

You have to change some configurations in the project to make it work.

1 - Facts you want to load

2 - API access information

3 - PostgreSql credentials


### ./config/config.js

**1 - Facts you want to load**

Open the file ./config/config.js

In this module, we first have information about the facts that must be informed. These facts must be imputed in the format of an array, for example: 

`['NameOfFact1','NameOfFact2','NameOfFact3']`.


**2 - API access information**

The next step is to inform the credentials to generate the access token. In the same module, at the session "post", there is a parameter called body, where you should inform the value of application and secret as follows:

`body: '{\n\t"application" : "yourApplication",\n\t"application_secret" : "yourSecret"\n}'`

**3 - PostgreSql credentials**

Now, you just have to enter the database access information at the session postgreSql:

```postgreSql : {
        user: 'yourUser',
        host: 'yourHost',
        database: 'databaseName',
        password: 'yourPassword',
        port: databasePort,
}```

## Run

### Command line

By command line, open the terminal in the path of the project and execute the command `npm run` prod or `node index.js`

### Schedule

For Windows, use windowsStarter.bat through task manager.
For Linux, use unixStarter.sh with Cron.