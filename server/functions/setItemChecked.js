const { CheckList } = require('../models/List')
const { getDataBase } = require('../utils/db')

exports.handler = async function (event) {
  await getDataBase()

  try {
    const body = JSON.parse(event.body)

    if (!body.itemId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing itemId' }),
      }
    }

    const item = await CheckList.findById(body.itemId)
    if (!item) {
      return {
        statusCode: 404,
      }
    }

    item.isChecked = !item.isChecked
    await item.save()

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
