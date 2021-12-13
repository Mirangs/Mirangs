import { addItem, removeItem, setItemChecked, editItem } from '@/api/checkList'

export const state = () => ({
  items: [],
})

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
  ADD_ITEM(state, item) {
    state.items.push(item)
  },
  EDIT_ITEM(state, newItem) {
    state.items = state.items.map((item) => {
      if (item._id === newItem._id) {
        return newItem
      }

      return item
    })
  },
  SET_ITEM_CHECKED(state, itemId) {
    state.items = state.items.map((item) => {
      if (item._id === itemId) {
        item.isChecked = !item.isChecked
      }

      return item
    })
  },
  REMOVE_ITEM(state, itemId) {
    state.items = state.items.filter(({ _id }) => _id !== itemId)
  },
}

export const actions = {
  async addItem({ commit }, newItem) {
    try {
      const _id = await addItem(newItem)
      commit('ADD_ITEM', { _id, ...newItem })
    } catch (err) {
      console.error(err)
    }
  },
  async removeItem({ commit }, itemId) {
    try {
      await removeItem(itemId)
      commit('REMOVE_ITEM', itemId)
    } catch (err) {
      console.error(err)
    }
  },
  async setItemChecked({ commit }, itemId) {
    try {
      await setItemChecked(itemId)
      commit('SET_ITEM_CHECKED', itemId)
    } catch (err) {
      console.error(err)
    }
  },
  async editItem({ commit }, item) {
    try {
      await editItem(item)
      commit('EDIT_ITEM', item)
    } catch (err) {
      console.error(err)
    }
  },
}
