
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'index', path: '', component: () => import('pages/IndexPage.vue') },
      { name: 'characters', path: '/characters', component: () => import('pages/CharactersSelectionPage.vue') },
      { name: 'select-creator', path: '/characters/select-creator', component: () => import('pages/CharacterCreationSelectMethodPage.vue') },
      // { name: 'select-creator-dnd5e', path: '/characters/select-creator/dnd5e' }, // creation mode for DnD5e eg. quick build, random build, or a standard build.
      { name: 'character', path: '/character/:id', component: () => import('pages/GamePage.vue'), props: true },
      { name: 'creator-dnd5e', path: '/character/:id/creator/dnd5e', component: () => import('layouts/DnD5eCharacterCreatorLayout.vue'),
        props: true,
        children: [
          // { path: '', redirect: '/character/:id/creator/dnd5e/settings' },
          { name: 'dnd5e-settings', path: 'settings', component: () => import('pages/DnD5ePages/CreatorPages/DnD5eSettingsPage.vue'), props: true  },
          { name: 'dnd5e-race', path: 'race', component: () => import('pages/DnD5ePages/CreatorPages/DnD5eRacePage.vue'), props: true  },
          { name: 'dnd5e-class', path: 'class', component: () => import('pages/DnD5ePages/CreatorPages/DnD5eClassPage.vue'), props: true },
          { name: 'dnd5e-abilities', path: 'abilities', component: () => import('pages/DnD5ePages/CreatorPages/DnD5eAbilitiesPage.vue'), props: true },
          { name: 'dnd5e-description', path: 'description', component: () => import('pages/DnD5ePages/CreatorPages/DnD5eDescriptionPage.vue'), props: true },
          { name: 'dnd5e-equipment', path: 'equipment', component: () => import('pages/DnD5ePages/CreatorPages/DnD5eEquipmentPage.vue'), props: true },
          { name: 'dnd5e-extras', path: 'extras', component: () => import('pages/DnD5ePages/CreatorPages/DnD5eExtrasPage.vue'), props: true  }
        ]},
      { name: 'site-settings', path: 'settings', component: () => import('pages/SettingsPage.vue') },
      { name: 'profile-settings', path: 'profile', component: () => import('pages/ProfileSettingsPage.vue') },
      { name: 'equipment-dnd5e', path: 'equipment-dnd5e', component: () => import('pages/DnD5ePages/DnD5eEquipmentRefPage.vue') },
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
