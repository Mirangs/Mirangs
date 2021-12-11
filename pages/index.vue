<template>
  <main class="main-page">
    <h1 class="main-page__title">Georgia Checklist</h1>
    <a-button class="add-button" type="primary" @click="openItemModal"
      >Add item</a-button
    >
    <a-button type="danger" @click="clearItems">Delete all</a-button>

    <check-list />
  </main>
</template>

<script>
import { mapMutations } from 'vuex'
import ItemModal from '@/components/ItemModal'

export default {
  name: 'IndexPage',
  methods: {
    ...mapMutations({
      setItems: 'items/SET_ITEMS',
    }),
    openItemModal() {
      this.$modal.show(ItemModal, {}, { name: 'item-modal', height: 'auto' })
    },
    clearItems() {
      this.setItems([])
    },
  },
}
</script>

<style lang="scss">
.main-page {
  min-height: 100vh;

  &__title {
    text-align: center;
  }

  .add-button {
    margin: 0 0 15px 30px;
  }
}
</style>
