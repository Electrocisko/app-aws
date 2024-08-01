import AWS from "aws-sdk";

const REGION = process.env.AWS_DEFAULT_REGION;

console.log(REGION);

AWS.config.update({
    region: REGION
})

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'productsDB'

const getProducts = async () => {
    const params = {
        TableName: TABLE_NAME
        }
    const products = await dynamoClient.scan(params).promise();
    return products
}

export {
    getProducts
}