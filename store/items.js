export const state = () => ({
  items: [],
})

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
  ADD_ITEM(state, item) {
    state.items.push({ ...item, id: state.items.length })
  },
  EDIT_ITEM(state, newItem) {
    state.items = state.items.map((item) => {
      if (item.id === newItem.id) {
        return newItem
      }

      return item
    })
  },
  SET_ITEM_CHECKED(state, { itemId, isChecked }) {
    state.items = state.items.map((item) => {
      if (item.id === itemId) {
        item.isChecked = isChecked
      }

      return item
    })
  },
  REMOVE_ITEM(state, itemId) {
    state.items = state.items.filter(({ id }) => id !== itemId)
  },
}
