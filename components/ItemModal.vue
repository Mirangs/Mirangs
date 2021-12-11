<template>
  <div class="item-modal">
    <h2>Add new item</h2>

    <a-form-model :model="form" @submit="onSubmit">
      <a-form-model-item label="Item name">
        <a-input ref="input" v-model="form.name" />
      </a-form-model-item>

      <a-form-model-item label="Item checked">
        <a-checkbox @change="onCheckedChanged" />
      </a-form-model-item>

      <a-form-model-item>
        <a-button html-type="submit" type="primary">Create</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import '@/assets/scss/modal.scss'

export default {
  name: 'ItemModal',
  data: () => ({
    form: {
      name: '',
      isChecked: false,
    },
  }),
  mounted() {
    this.$refs.input.focus()
  },
  methods: {
    ...mapMutations({
      addItem: 'items/ADD_ITEM',
    }),
    onSubmit(e) {
      e.preventDefault()
      this.addItem({ name: this.form.name, isChecked: false })
      this.$modal.hide('item-modal')
    },
    onCheckedChanged({ target }) {
      this.form.isChecked = target.checked
    },
  },
}
</script>
