const { CheckList } = require('../models/List')
const { getDataBase } = require('../utils/db')

exports.handler = async function (event) {
  await getDataBase()
  const { itemId } = event.queryStringParameters
  if (!itemId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Please specify itemId query param' }),
    }
  }

  try {
    await CheckList.findOneAndDelete({ _id: itemId })

    return {
      statusCode: 200,
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Something went wrong' }),
    }
  }
}
