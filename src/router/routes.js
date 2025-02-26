
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'index', path: '', component: () => import('pages/IndexPage.vue') },
      { name: 'characters', path: '/characters', component: () => import('pages/CharactersSelectionPage.vue') },
      { name: 'select-creator', path: '/characters/select-creator', component: () => import('pages/CharacterCreationSelectMethodPage.vue') },
      // { name: 'select-creator-dnd5e', path: '/characters/select-creator/dnd5e' }, // creation mode for DnD5e eg. quick build, random build, or a standard build.
      { name: 'Character', path: '/character/:id', component: () => import('pages/GamePage.vue'), props: true },
      { name: 'creator-dnd5e', path: '/character/:id/creator/dnd5e', component: () => import('layouts/DnD5eCharacterCreatorLayout.vue'),
        // redirect: '/character/:id/creator/dnd5e/settings',
        props: true,
        children: [
          { path: '', redirect: '/character/:id/creator/dnd5e/settings' },
          { name: 'dnd5e-settings', path: 'settings', component: () => import('pages/DnD5ePages/DnD5eSettingsPage.vue'), props: true  },
          { name: 'dnd5e-race', path: 'race', component: () => import('pages/DnD5ePages/DnD5eRacePage.vue'), props: true  },
          { name: 'dnd5e-class', path: 'class', component: () => import('pages/DnD5ePages/DnD5eClassPage.vue'), props: true },
          { name: 'dnd5e-abilities', path: 'abilities', component: () => import('pages/DnD5ePages/DnD5eAbilitiesPage.vue'), props: true },
          { name: 'dnd5e-description', path: 'description', component: () => import('pages/DnD5ePages/DnD5eDescriptionPage.vue'), props: true },
          { name: 'dnd5e-equipment', path: 'equipment', component: () => import('pages/DnD5ePages/DnD5eEquipmentPage.vue'), props: true },
          { name: 'dnd5e-summary', path: 'summary', component: () => import('pages/DnD5ePages/DnD5eSummaryPage.vue'), props: true  }
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
