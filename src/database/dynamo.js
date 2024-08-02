import AWS from "aws-sdk";
import { nanoid } from "nanoid";

// const REGION = process.env.AWS_DEFAULT_REGION;

// AWS.config.update({
//   region: REGION,
// });

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "productsDB";

const getItems = async () => {
  const params = {
    TableName: TABLE_NAME,
  };
  const items = await dynamoClient.scan(params).promise();
  return items;
};

const getItemById = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      product_id: id,
    },
  };
  const response = await dynamoClient.get(params).promise();
  return response;
};

const addItem = async (product) => {
  product.product_id = nanoid();
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
}

export { getItems,getItemById, addItem, deleteItem };
