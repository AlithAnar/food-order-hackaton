const graphql = require('graphql');
const Restaurant = require('../model/Restaurant');
const Selection = require('../model/Selection');
const Checkout = require('../model/Checkout');
const Vote = require('../model/Vote');

const {
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLNonNull,
} = graphql;

const RestaurantType = new GraphQLObjectType({
    name: 'RestaurantType',
    fields: () => ({
        _id: { type: GraphQLID},
        name: {type: GraphQLString},
    }),
});

const SelectionType = new GraphQLObjectType({
    name: 'SelectionType',
    fields: () => ({
        _id: { type: GraphQLID},
        restaurantId: { type: GraphQLString},
        checkoutId: { type: GraphQLString }
    }),
});

const CheckoutType = new GraphQLObjectType({
    name: 'CheckoutType',
    fields: () => ({
        _id: { type: GraphQLID},
        restaurantId: {type: GraphQLString},
        date: {type: GraphQLString},
        status: {type: GraphQLString},
    }),
});

const VoteType = new GraphQLObjectType({
    name: 'VoteType',
    fields: () => ({
        username: { type: GraphQLID},
        date: {type: GraphQLString},
        restaurantId: {type: GraphQLString},
        checkoutId: {type: GraphQLString},
    }),
});

const RootQuery = new GraphQLObjectType({
    name: 'FoodOrderRootQueryType',
    fields: {
        restaurants: {
            type: new GraphQLList(RestaurantType),
            description: "List of all Restaurants",
            resolve: async function () {
                return await Restaurant.find({});
            }
        },
        selections: {
            type: new GraphQLList(SelectionType),
            description: "List of all selections",
            resolve: async function () {
                return await Selection.find({});
            }
        },
        checkouts: {
            type: new GraphQLList(CheckoutType),
            resolve: async function() {
                return await Checkout.find({});
             },
        },
        checkoutSelections: {
            type: new GraphQLList(SelectionType),
            args: {
                checkoutId: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: async function(parent, args) {
                return await Selection.find({checkoutId: args.checkoutId});
            }
        },
        votes: {
            type: new GraphQLList(VoteType),
            args: {
                restaurantId: {type: new GraphQLNonNull(GraphQLString)},
                checkoutId: {type: new GraphQLNonNull(GraphQLString)},
            },
            resolve: async function(parent, args) {
                return await Vote.find({restaurantId: args.restaurantId, checkoutId: args.checkoutId});
            }
        }
}});

const Mutation = new GraphQLObjectType({
    name: 'FoodOrderMutation',
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
        deleteRestaurant: {
            type: RestaurantType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve: async function (parent, args) {
                return await Restaurant.findOneAndRemove({_id: args._id});
            }
        },
        addCheckout: {
            type: CheckoutType,
            args: {
                restaurantId: { type: GraphQLString },
                date: { type: new GraphQLNonNull(GraphQLString) },
                status: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async function (parent, args) {
                const newCheckout = new Checkout({
                    restaurantId: args.restaurantId,
                    date: args.date,
                    status: args.status,
                });
                return await newCheckout.save();
            }
        },
        completeCheckout: {
            type: CheckoutType,
            args: {
                _id: {type: new GraphQLNonNull(GraphQLID)},
            },
            resolve: async function (parent, args) {
                return await Checkout.findOneAndUpdate({_id: args._id}, {$set:{status: "finished"}}, {new: true});
            }
        },
        addSelection: {
            type: SelectionType,
            args: {
                checkoutId: {type: new GraphQLNonNull(GraphQLString)},
                restaurantId: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: async function (parent, args) {
                const newSelection = new Selection({restaurantId: args.restaurantId, checkoutId: args.checkoutId});
                return await newSelection.save();
            }
        },
        addVote: {
            type: VoteType,
            args: {
                checkoutId: {type: new GraphQLNonNull(GraphQLString)},
                restaurantId: {type: new GraphQLNonNull(GraphQLString)},
                username: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: async function (parent, args) {
                const newVote = new Vote({username: args.username, date: Date.now(), restaurantId: args.restaurantId, checkoutId: args.checkoutId});
                return await newVote.save();
            }
        },
        deleteVote: {
            type: VoteType,
            args: {
                checkoutId: {type: new GraphQLNonNull(GraphQLString)},
                restaurantId: {type: new GraphQLNonNull(GraphQLString)},
                username: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: async function (parent, args) {
                return await Vote.findOneAndRemove({username: args.username, restaurantId: args.restaurantId, checkoutId: args.checkoutId});
            }
        }
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});