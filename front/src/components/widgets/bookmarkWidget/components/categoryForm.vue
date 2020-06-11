<template>
  <div>
    <label for="categoryName">Name:</label>
    <input
      type="text" name="categoryName"
      id="categoryName" class="controls"
      :value="form.name"
      @input="editCategoryFormInput"
      data-attribute="name"
    />
    <label for="categoryIcon">Icon:</label>
    <input
      type="text" name="categoryIcon"
      id="categoryIcon" class="controls"
      :value="form.icon"
      @input="editCategoryFormInput"
      data-attribute="icon"
    />
    <label for="categoryColor">Color:</label>
    <input
      type="color" name="categoryColor"
      id="categoryColor" class="controls"
      :value="form.color"
      @change="editCategoryFormInput"
      data-attribute="color"
    />
    <button @click="submitCategoryForm">Validate</button>
  </div>
</template>

<script>
export default {
  name: 'CategoryForm',
  props: ['form'],
  methods: {
    editCategoryFormInput (e) {
      const payload = {
        attribute: e.target.dataset.attribute,
        value: e.target.value
      }
      this.$emit('editCategoryForm', payload)
    },
    submitCategoryForm () {
      this.$emit('submitNewCategory')
    }
  }
}
</script>
