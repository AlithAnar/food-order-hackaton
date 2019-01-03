const graphql = require('graphql');
const Restaurant = require('../model/Restaurant');


const {
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
} = graphql;

const RestaurantType = new GraphQLObjectType({
    name: 'RestaurantType',
    fields: () => ({
        _id: { type: GraphQLID},
        name: {type: GraphQLString},
    }),
});

const RootQuery = new GraphQLObjectType({
    name: 'RestaurantRootQueryType',
    fields: {
        restaurants: {
            type: new GraphQLList(RestaurantType),
            description: "List of all Restaurants",
            resolve: async function () {
                return await Restaurant.find({});
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});