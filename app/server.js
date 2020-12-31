var MongoClient = require("mongodb")
var express = require("express")
const app = express()

app.get('/install', function (request, response) {
    createDatabaseOrCollection(databaseName,collectionName)
    response.send("Installed Success")
})

app.get('/', function (request, response) {
    all(response)
})
app.get('/add', function (request, response) {
    insert({name:"Hatem Mohamed",password:"12345678"});
    response.send("added successfully")
})
const applicationPort  = 3000
const databaseUrl      = "mongodb://mongo-db-container:27017";
const databaseName     = "node-application"
const collectionName   = "users"

function createDatabaseOrCollection(databaseName,collectionName){

    MongoClient.connect(databaseUrl, {useUnifiedTopology: true},function(err, system){
        if (err) throw err;
        let databaseHandler = system.db(databaseName);
        databaseHandler.createCollection(collectionName, function(err, res) {
            system.close();
        });
    });
}

function insert(data){

    MongoClient.connect(databaseUrl, {useUnifiedTopology: true},function(err, system) {
        if (err) throw err;
        let databaseHandler = system.db(databaseName);
        let data = { name: "Hatem Mohamed Elsheref", password: "12345678" };
        databaseHandler.collection(collectionName).insertOne(data, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            system.close();
        });
    });
}

function all(response){
    MongoClient.connect(databaseUrl,{useUnifiedTopology: true}, function(err, system) {
        if (err) throw err;
        let databaseHandler = system.db(databaseName);
        databaseHandler.collection(collectionName).find({}).toArray(function(err, result) {
            if (err) throw err;
            response.send(result);
            system.close();
        });
    });
}

app.listen(applicationPort, () => {
    console.log(`Example app listening at http://localhost:${applicationPort}`)
})
