<template>
  <q-layout view="lHh LpR lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary">
          <q-btn
            v-if="$q.screen.md || $q.screen.lg || $q.screen.xl"
            color="white"
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
          <header
          style="color: #ffffff">
            JDIH SekWan
          </header>
        </q-toolbar>
    </q-header>
    <q-space/>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      elevated
      :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'"
      >
      <q-list dark>
        <q-item-label class="bg-primary" header >Navigation</q-item-label>

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          style="color: #132b4f"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      v-if="$q.screen.xs || $q.screen.sm">
      <q-tabs>
        <q-route-tab
        class="bg-white"
        v-for="nav in navs" v-bind:key="nav.label"
        :to="nav.to"
        :icon="nav.icon"
        :label="nav.label"
        style="color: #132b4f"/>
      </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      cari: null,
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Beranda',
          icon: 'home',
          to: '/',
          leftDrawerOpen: false
        },
        {
          label: 'Dokumen',
          icon: 'description',
          to: '/dokumen',
          leftDrawerOpen: false
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settingsuser',
          leftDrawerOpen: false
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.q-drawer {
  .q-router-link--exact-active {
    color: rgb(1, 189, 251) !important;
  }
}
// @media screen and (min-width: 800px) {
//     .q-footer {
//       display: none;
//     }
//   }
</style>
