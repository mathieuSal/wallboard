import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
import ToDo from '@/components/widgets/toDoWidget/ToDo'
import Bookmark from '@/components/widgets/bookmarkWidget/Bookmark'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Wallboard',
      component: Board
    },
    {
      path: '/todo-list',
      name: 'Wallboard - todo list',
      component: ToDo
    },
    {
      path: '/bookmarks',
      name: 'Wallboard - bookmarks',
      component: Bookmark
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
