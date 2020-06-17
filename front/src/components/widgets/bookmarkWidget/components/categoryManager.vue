<template>
  <div>
    <table class="CategoryManager-Table">
      <thead>
        <th>name</th>
        <th>icon</th>
        <th>color</th>
        <th>edit</th>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{category.name}}</td>
          <td>
            <div class="center">
              <vue-material-icon
                :name="category.icon" :size="16" :color="'#4d4d4d'"
              ></vue-material-icon>
            </div>
          </td>
          <td>
            <div class="center">
              <span class="colorPresenter" :style="{background: category.color}"/>
            </div>
          </td>
          <td>
            <div class="center actionIcon" @click="editCategory(category)">
              <vue-material-icon
                name="edit" :size="12" :color="'#cecece'"
              ></vue-material-icon>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <label for="categoryName">Name:</label>
    <input
      type="text" name="categoryName"
      id="categoryName" class="controls"
      :value="categoryForm.name"
      @input="editCategoryFormInput"
      data-attribute="name"
    />
    <label for="categoryIcon">Icon:</label>
    <input
      type="text" name="categoryIcon"
      id="categoryIcon" class="controls"
      :value="categoryForm.icon"
      @input="editCategoryFormInput"
      data-attribute="icon"
    />
    <label for="categoryColor">Color:</label>
    <input
      type="color" name="categoryColor"
      id="categoryColor" class="controls"
      :value="categoryForm.color"
      @change="editCategoryFormInput"
      data-attribute="color"
    />
    <button @click="submitCategoryForm">Validate</button>
  </div>
</template>

<script>
import VueMaterialIcon from 'vue-micon'

export default {
  name: 'CategoryManager',
  data () {
    return {
      categoryForm: {
        name: '',
        color: '#ffc600',
        icon: ''
      }
    }
  },
  components: {
    VueMaterialIcon
  },
  props: ['categories'],
  methods: {
    editCategory (category) {
      this.categoryForm = category
    },
    editCategoryFormInput (e) {
      this.categoryForm = {
        ...this.categoryForm,
        [e.target.dataset.attribute]: e.target.value
      }
    },
    submitCategoryForm () {
      if (this.categoryForm.id) {
        this.$emit('submitEditCategory', this.categoryForm)
      } else {
        this.$emit('submitNewCategory', this.categoryForm)
      }
    }
  }
}
</script>
