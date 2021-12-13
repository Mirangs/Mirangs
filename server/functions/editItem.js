const { CheckList } = require('../models/List')
const { getDataBase } = require('../utils/db')

exports.handler = async function (event) {
  await getDataBase()

  try {
    const body = JSON.parse(event.body)

    if (!body._id || !body.name) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing _id or name' }),
      }
    }

    const { _id } = body
    await CheckList.findOneAndReplace({ _id }, body)

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
