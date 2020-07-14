
const routes = [
  {
    // layout_admin
    path: '/home',
    component: () => import('layouts/Layoutadmin.vue'),
    children: [
      { path: '', name: 'data', component: () => import('pages/admin/Data_Berita.vue') }
    ]
  },

  {
    // layout_back
    path: '/login',
    component: () => import('layouts/backuser.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/admin/Login.vue') },
      { path: '/settingsuser', component: () => import('pages/user/Settings.vue') },
      { path: '/about', component: () => import('pages/user/About.vue') },
      { path: '/cariuser', name: 'cariuser', component: () => import('pages/user/cari.vue') }
    ]
  },

  {
    // layout_back
    path: '/settings',
    component: () => import('layouts/backadmin.vue'),
    children: [
      { path: '', component: () => import('pages/admin/Settings.vue') },
      { path: '/edit', name: 'formedit', component: () => import('pages/admin/Edit.vue') },
      { path: '/input', component: () => import('pages/admin/Input_Berita.vue') }
    ]
  },

  {
    // layout_user
    path: '/',
    component: () => import('layouts/Layoutuser.vue'),
    children: [
      { path: '', component: () => import('pages/user/berita.vue') },
      { path: '/dokumen', component: () => import('pages/user/dokument.vue') }
    ]
  }

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
