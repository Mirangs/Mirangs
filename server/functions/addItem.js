const { CheckList } = require('../models/List')
const { getDataBase } = require('../utils/db')

exports.handler = async function (event) {
  await getDataBase()

  try {
    const body = JSON.parse(event.body)

    if (!body.name) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing name' }),
      }
    }

    const { _id } = await CheckList.create({
      name: body.name,
      isChecked: !!body.isChecked || false,
    })

    return {
      statusCode: 201,
      body: JSON.stringify({ _id }),
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Something went wrong' }),
    }
  }
}
