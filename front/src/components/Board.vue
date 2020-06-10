<template>
    <div id="board">
      <HomeComponent/>
      <p class="projectTitle">Wallboard</p>
      <div class="widget-list-container">
        <div class="widget-list-content">
          <ul class="widget-list">
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
        },
        {
          link: './bookmarks',
          icon: 'bookmarks',
          name: 'Bookmarks',
          shortcut: 'b'
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
.projectTitle {
  color: #4d4d4d;
  font: 90px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin-bottom: 1rem;
  text-align: center;
}

.widget-list-container {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 1rem 0;
}

.widget-list-content {
  display: flex;
  width: 60%;
}

ul.widget-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  width: 100%;
}
</style>
