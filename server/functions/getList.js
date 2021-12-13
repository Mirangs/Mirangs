const { CheckList } = require('../models/List')
const { getDataBase } = require('../utils/db')

exports.handler = async function () {
  await getDataBase()
  const list = await CheckList.find()

  return {
    statusCode: 200,
    body: JSON.stringify({ list }),
  }
}
