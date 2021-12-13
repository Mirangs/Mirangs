const { Schema, model } = require('mongoose')

const checkListSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  { collection: 'check-list' }
)

module.exports.CheckList = model('CheckList', checkListSchema)
