
const AWS = require('aws-sdk')

const client = new AWS.DynamoDB.DocumentClient({})

async function getDDBItem(table, id) {
  if (!table) table = process.env.SECRET_TABLE ?? 'secrets'
  if (!id) id = process.env.SECRET_TABLE_ID ?? 'lambda-secrets'
  return client.get({ TableName: table, Key: { PK: id } }).promise()
}

async function loadSecrets() {
  const { Item: secrets } = await getDDBItem()
  Object.entries(secrets).forEach(([key, value]) => {
    if (key !== 'PK' && key !== 'SK') process.env[key] = value
  })
  console.log('[test env] AVAX_RPC:', process.env.AVAX_RPC)
  console.log('[test env] IS_COOLIFY_TASK:', process.env.IS_COOLIFY_TASK)
}

module.exports = {
  loadSecrets,
}
