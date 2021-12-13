<template>
  <main class="main-page">
    <h1 class="main-page__title">Georgia Checklist</h1>
    <a-button class="add-button" type="primary" @click="openItemModal">
      Add item
    </a-button>

    <check-list />
  </main>
</template>

<script>
import { mapMutations } from 'vuex'
import ItemModal from '@/components/ItemModal'
import { getList } from '@/api/checkList'

export default {
  name: 'IndexPage',
  async created() {
    const list = await getList()
    this.setItems(list)
  },
  methods: {
    ...mapMutations({
      setItems: 'items/SET_ITEMS',
    }),
    openItemModal() {
      this.$modal.show(ItemModal, {}, { name: 'item-modal', height: 'auto' })
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
