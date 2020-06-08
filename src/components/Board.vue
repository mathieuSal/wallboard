<template>
    <div id="board">
      <HomeComponent/>
      <div class="widget-list-container">
        <div class="widget-list-content">
          <ul>
            <li v-for="(widget, index) in widgets" :key="`widget-${index}`">
              <widget-presenter :link="widget.link" :keyShortcut="widget.shortcut">
                <template v-slot:icon>
                  <vue-material-icon :name="widget.icon" :size="32" :color="'#4d4d4d'"></vue-material-icon>
                </template>
                <template v-slot:widgetName>
                  <p>{{widget.name}}</p>
                </template>
              </widget-presenter>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import HomeComponent from './generic/homeComponent/HomeComponent'
import VueMaterialIcon from 'vue-micon'
import WidgetPresenter from './generic/widgetPresenter/widgetPresenter'

export default {
  name: 'Board',
  data () {
    return {
      widgets: [
        {
          link: './todo-list',
          icon: 'list_alt',
          name: 'Todo list',
          shortcut: 't'
        }
      ]
    }
  },
  components: {
    HomeComponent,
    VueMaterialIcon,
    WidgetPresenter
  }
}
</script>

<style scoped>
.widget-list-container {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 10rem 0;
}

.widget-list-content {
  display: flex;
  width: 60%;
}

ul {
  list-style: none;
}
</style>
