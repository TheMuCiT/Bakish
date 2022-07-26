const stripe = require('stripe')(
  'sk_test_51LP4S0KNjCtI8zcdIWjT3Umuk6jqjkU44yxSFvsI01yzUvyCsA8bmGJjTcmmewbd1pz0UXCiElRmQqf8VTBndFNT00EL43NERz',
);
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async event => {
  const {typeName} = event;

  if (typeName !== 'Mutation') {
    throw new Error('Request is not a mutation');
  }

  if (!event.arguments?.amount) {
    throw new Error('Amount is required');
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: event.arguments.amount,
    currency: 'eur',
  });

  return {
    clientSecret: paymentIntent.client_secret,
  };
};
