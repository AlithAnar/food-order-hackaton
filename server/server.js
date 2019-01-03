var express = require('express');
var graphqlHTTP = require('express-graphql');
var cors = require('cors')
var { buildSchema } = require('graphql');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').load();
const schema = require('./schema/schema');

var app = express();
app.use(cors());

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;

 // var cars = ["5c2df83a35b9b514815e8b94", "5c2df83935b9b514815e8b93"];
 // const Selection = require('./model/Selection');
 // var newSelection = new Selection({restaurantIds: cars, checkoutId: "5c2e043ba8ee66171afd37fd"});
 // db.collection('Selections').insert(newSelection);


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');