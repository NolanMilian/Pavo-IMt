
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'index', path: '', component: () => import('pages/IndexPage.vue') },
      { name: 'characters', path: '/characters', component: () => import('pages/CharactersSelectionPage.vue') },
      { name: 'select-creator', path: '/characters/select-creator', component: () => import('pages/CharacterCreationSelectMethodPage.vue') },
      { name: 'Character', path: '/character/:id', component: () => import('pages/GamePage.vue'), props: true, children: [
          { name: 'creator-dnd5e', path: '/creator/dnd5e', children: [
              { path: '', redirect: 'abilities' },
              { name: 'dnd5e-abilities', path: 'abilities' },
              { name: 'dnd5e-race', path: 'race'  },
              { name: 'dnd5e-class', path: 'class'  },
              { name: 'dnd5e-background', path: 'background' },
              { name: 'dnd5e-summary', path: 'summary'  }
            ]}
        ]},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
