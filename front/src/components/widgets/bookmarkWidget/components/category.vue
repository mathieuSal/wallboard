<template>
  <div
    class="categoryContainer"
    :style="style"
  >
    <div class="categoryContent" @click="toggleCategory">
      <vue-material-icon
        :name="category.icon" :size="24" :color="category.active ? category.color : '#cecece'"
      ></vue-material-icon>
    </div>
  </div>
</template>

<script>
import VueMaterialIcon from 'vue-micon'
import {hex2rgb} from '../../../../utils/wallboardUtils'
export default {
  name: 'Category',
  props: ['category'],
  components: {
    VueMaterialIcon
  },
  computed: {
    style () {
      const {r, g, b} = hex2rgb(this.category.color)
      if (this.category.active) {
        return {
          'box-shadow': `0 2px 4px 0 rgba(${r}, ${g}, ${b}, .2), 0 25px 50px 0 rgba(${r}, ${g}, ${b}, .1)`
        }
      }
    }
  },
  methods: {
    toggleCategory () {
      this.$emit('toggleCategory', this.category.id)
    }
  }
}
</script>
