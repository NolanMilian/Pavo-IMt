
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', name: 'Index', component: () => import('pages/IndexPage.vue') },
      { path: '/characters', name: 'Characters', component: () => import('pages/CharactersPage.vue') },
      { path: '/character/:id', name: 'Character', component: () => import('pages/GamePage.vue'), props: true },
      { path: '/game', name: 'Game', component: () => import('pages/GamePage.vue') },
      // { path: '/settings', name: 'Settings', component: () => import('pages/GamePage.vue') },
      // { path: '/profile', name: 'Profile', component: () => import('pages/GamePage.vue') },
    ]
  },
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '/game', name: 'Game', component: () => import('pages/GamePage.vue'), props: true },
  //   ]
  // },
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '/characters', name: 'Characters', component: () => import('pages/CharactersPage.vue'), props: true },
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
