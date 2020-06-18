<template>
  <div>
    <div class="categoryManagerContainer">
      <caption>
        Categories
        <span @click="addNewCategory">
          <vue-material-icon
            name="add" :size="16" :color="'#4d4d4d'"
          ></vue-material-icon>
        </span>
      </caption>
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
    </div>
    <div class="categoryManager-Form" v-if="categoryForm">
      <label for="categoryName">Name:</label>
      <input
        type="text" name="categoryName"
        id="categoryName" class="controls"
        :value="categoryForm.name"
        @input="editCategoryFormInput"
        data-attribute="name"
      />
      <label for="categoryIcon">
        <span>Icon:</span>
        <a href="https://material.io/resources/icons/?icon=article&style=baseline" target="_blank" rel="noopener noreferrer">
          <vue-material-icon
            name="link" :size="16" :color="'#4d4d4d'"
          ></vue-material-icon>
        </a>
      </label>
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
      <div class="categoryManager-Form-footer">
        <button @click="submitCategoryForm">Validate</button>
        <button @click="removeCategory" v-if="categoryForm.id" class="deleteButton">
          <vue-material-icon
            name="delete" :size="12" :color="'#cc0000'"
          ></vue-material-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VueMaterialIcon from 'vue-micon'

export default {
  name: 'CategoryManager',
  data () {
    return {
      categoryForm: null
    }
  },
  components: {
    VueMaterialIcon
  },
  props: ['categories'],
  methods: {
    addNewCategory () {
      this.categoryForm = {
        name: '',
        color: '#ffc600',
        icon: ''
      }
    },
    editCategory (category) {
      this.categoryForm = category
    },
    removeCategory () {
      this.$emit('removeCategory', this.categoryForm.id)
      this.categoryForm = null
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
