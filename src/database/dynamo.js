import AWS from "aws-sdk";

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // si conecto por ec2 no hace falta acces y secret
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.AWS_TABLE_NAME;

const getItems = async () => {
  const params = {
    TableName: TABLE_NAME,
  };
  const items = await dynamoClient.scan(params).promise();
  return items;
};

const getItemById = async (pk, sk) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      PK: pk,
      SK: sk,
    },
  };
  const response = await dynamoClient.get(params).promise();
  return response;
};

// const getItemByIndex = async () => {
//   const params = {
//     TableName: TABLE_NAME,
//     Key: {
//       PK: "product",
//       SK: "0001",
//     },
//     ProjectionExpression: " gender, price, colores[0], #c",
//     ExpressionAttributeNames: {
//       "#c": "name",
//     },
//   };
//   const response = await dynamoClient.get(params).promise();
//   return response;
// };


const getItemByIndex = async () => {
  const params = {
    TableName: TABLE_NAME,
    keyConditionExpression: "PK = :producto",
    ExpressionAttributeValues:  '{":producto":{"S":"product"}}'
  
  };
  const response = await dynamoClient.query(params).promise();
  return response;
};
const addItem = async (product) => {
  const params = {
    TableName: TABLE_NAME,
    Item: product,
  };
  const data = await dynamoClient.put(params).promise();
  return data;
};

const deleteItem = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      product_id: id,
    },
  };
  return await dynamoClient.delete(params).promise();
};

export { getItems, getItemById, addItem, deleteItem, getItemByIndex };

// var params = {
//   TableName: "realtimeusers",
//   ProjectionExpression: "brand, datetime, activeusers",
//   KeyConditionExpression: "brand = :brand",
//   FilterExpression: "datetime > :today",
//   ExpressionAttributeValues: {
//     ":brand": "BRAND A",
//     ":today": 1464705900
//   },
// };
