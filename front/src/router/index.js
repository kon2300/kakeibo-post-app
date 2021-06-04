import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'SignUp',
    component: () => import ('@/views/SignUp.vue')
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: () => import ('@/views/SignIn.vue')
  },
  {
    path: '/ProfileCreation',
    name: 'ProfileCreation',
    component: () => import ('@/views/ProfileCreation.vue')
  },
  {
    path: '/MyHome',
    name: 'MyHome',
    component: () => import ('@/views/MyHome.vue'),
    meta: { requiredAuth: true }
  },
  {
    path: '/PostEntry',
    name: 'PostEntry',
    component: () => import ('@/views/PostEntry.vue')
  },
  {
    path: '/EverybodyPosts',
    name: 'EverybodyPosts',
    component: () => import ('@/views/EverybodyPosts.vue')
  },
  {
    path: '/MyPosts',
    name: 'MyPosts',
    component: () => import ('@/views/MyPosts.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiredAuth)) {
//     Auth.currentAuthenticatedUser() // 認証済みのユーザが存在するかどうかをチェックする関数
//       .then(() => {
//         next()
//       })
//       .catch(error => {
//         console.error(error)
//         next({
//           path: 'SignIn',
//           query: {redirect: to.fullPath}
//         })
//       })
//   }
//   next()
// })


export default router
