<template>
  <router-link :to="link" class="link">
    <div class="presenterContainer">
      <div class="presenterContent">
        <slot name="icon"></slot>
        <div class="widgetName">
          <slot name="widgetName"></slot>
        </div>
        <slot name="shortcut"></slot>
        <span class="shortcutLegend">Ctrl + {{ keyShortcut }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['link', 'keyShortcut'],
  mounted () {
    document.addEventListener('keydown', this.shortcut)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.shortcut)
  },
  methods: {
    shortcut (event) {
      if (event.ctrlKey && event.key === this.keyShortcut) {
        this.$router.push(this.link).catch(() => {})
      }
    }
  }
}
</script>

<style scoped>
  .link {
    text-decoration: none;
  }

  .presenterContainer {
    align-items: center;
    border: 1px solid #dedede;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    height: 120px;
    justify-content: center;
    padding: 10px;
    width: 150px;
  }

  .presenterContent {
    align-items: center;
    color: #4d4d4d;
    display: flex;
    flex-wrap: wrap;
    font: 17px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    justify-content: center;
    font-weight: 300;
    line-height: 1.4em;
    position: absolute;
  }

  .widgetName {
    text-align: center;
    width: 100%;
  }

  .shortcutLegend {
    color: black;
    background-color: #cecece;
    border-radius: 5px;
    bottom: -10px;
    font-size: 11px;
    padding: 0 5px;
    position: relative;
    right: -60px;
  }
</style>
