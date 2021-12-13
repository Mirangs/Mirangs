<template>
  <div class="item-modal">
    <h2 class="item-modal__title">Edit item {{ item.name }}</h2>

    <a-form-model :model="form" @submit="onSubmit">
      <a-form-model-item label="Id">
        <a-input v-model="form._id" disabled />
      </a-form-model-item>

      <a-form-model-item label="Item name">
        <a-input ref="input" v-model="form.name" />
      </a-form-model-item>

      <a-form-model-item label="Item checked">
        <a-checkbox
          :default-checked="item.isChecked"
          @change="onCheckedChanged"
        />
      </a-form-model-item>

      <a-form-model-item>
        <a-button html-type="submit" type="primary">Edit</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import '@/assets/scss/modal.scss'

export default {
  name: 'EditItemModal',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    form: {
      id: null,
      name: '',
      isChecked: false,
    },
  }),
  created() {
    this.form = { ...this.item }
  },
  mounted() {
    this.$refs.input.focus()
  },
  methods: {
    ...mapActions({
      editItem: 'items/editItem',
    }),
    onSubmit(e) {
      e.preventDefault()
      this.editItem(this.form)
      this.$modal.hide('edit-item-modal')
    },
    onCheckedChanged({ target }) {
      this.form.isChecked = target.checked
    },
  },
}
</script>
