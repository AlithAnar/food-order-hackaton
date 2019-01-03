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

const Mutation = new GraphQLObjectType({
    name: 'RestaurantMutation',
    fields: {
        addRestaurant: {
            type: RestaurantType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async function (parent, args) {
                const newRestaurant = new Restaurant({
                    name: args.name,
                });
                return await newRestaurant.save();
            }
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});