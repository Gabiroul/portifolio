const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }, // rota: /
      { path: 'servicos', component: () => import('components/servicos-info.vue') }, // rota: /servicos
      { path: 'contato', component: () => import('src/components/meu-contato.vue') }, // rota: /contato
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
