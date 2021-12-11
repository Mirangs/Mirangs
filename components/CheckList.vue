<template>
  <div class="list-container">
    <a-list bordered :data-source="items">
      <a-list-item slot="renderItem" slot-scope="item">
        <div class="list-item">
          <a-checkbox
            :default-checked="item.isChecked"
            @change="(e) => onChange(e.target.checked, item.id)"
          />
          <span class="list-item__name">{{ item.name }}</span>

          <div class="list-item__buttons">
            <a-button
              class="list-item__button"
              type="secondary"
              shape="circle"
              icon="edit"
              @click="openEditModal(item)"
            />
            <a-button
              class="list-item__button"
              type="danger"
              shape="circle"
              icon="delete"
              @click="removeItem(item.id)"
            />
          </div>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import EditItemModal from '@/components/EditItemModal'

export default {
  computed: {
    ...mapState('items', ['items']),
  },
  methods: {
    ...mapMutations({
      removeItem: 'items/REMOVE_ITEM',
      setItemChecked: 'items/SET_ITEM_CHECKED',
    }),
    onChange(isChecked, itemId) {
      this.setItemChecked({ itemId, isChecked })
    },
    openEditModal(item) {
      this.$modal.show(
        EditItemModal,
        { item },
        { height: 'auto', name: 'edit-item-modal' }
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.list-container {
  max-width: 50%;
  margin-left: 30px;
  max-height: 80vh;
  overflow-y: scroll;

  .list-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    &__name {
      margin-left: 15px;
    }

    &__buttons {
      margin-left: auto;
    }

    &__button {
      margin-left: 10px;
    }
  }
}
</style>
