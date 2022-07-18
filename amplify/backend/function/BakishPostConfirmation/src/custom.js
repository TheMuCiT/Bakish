/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppsyncID = process.env.API_BAKISH_GRAPHQLAPIIDOUTPUT;
const TableName = `User-${AppsyncID}-${env}`;

const userExists = async id => {
  const params = {
    TableName,
    Key: id,
  };

  try {
    const response = await docClient.get(params).promise();
    return !!response?.Item;
  } catch (e) {
    return false;
  }
};

const saveUser = async user => {
  const data = new Date();
  const dataStr = data.toISOString();
  const timestamp = data.getTime();

  const Item = {
    ...user,
    _typename: 'User',
    _lastChangedAt: timestamp,
    createdAt: dataStr,
    _version: 1,
    updatedAt: dataStr,
  };

  const params = {
    TableName,
    Item,
  };

  try {
    await docClient.put(params).promise();
  } catch (e) {
    console.log(e);
  }
};

exports.handler = async (event, context) => {
  if (!event?.request?.userAttributes) {
    console.log('No user data available');
    return;
  }

  // if the user already exists

  const {sub, name, email} = event.request.userAttributes; //{sub, email,name}

  const newUser = {
    id: sub,
    owner: sub,
    name,
    email,
    nofPosts: 0,
    nofFollowers: 0,
    nofFollowings: 0,
  };

  if (!(await userExists(newUser.id))) {
    await saveUser(newUser);
  }

  // if not, save the user to database
  return event;
};
