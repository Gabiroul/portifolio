<template>
  <q-layout view="lHh Lpr lFf">
    <slot name="header" />

    <!-- Mobile Drawer -->
    <q-drawer v-model="leftDrawerOpen" bordered class="bg-dark">
      <q-list class="text-white">
        <q-item-label header class="text-cyan text-weight-bold text-h6 q-py-md">
          Menu
        </q-item-label>

        <q-item clickable v-ripple class="mobile-nav-item" :class="{ 'active': currentRoute === 'inicio' }"
          @click="navigateTo('inicio')">
          <q-item-section avatar>
            <q-icon name="home" color="cyan" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Início</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="mobile-nav-item" :class="{ 'active': currentRoute === 'sobre' }"
          @click="navigateTo('sobre')">
          <q-item-section avatar>
            <q-icon name="person" color="cyan" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Sobre</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="mobile-nav-item" :class="{ 'active': currentRoute === 'servicos' }"
          @click="navigateTo('servicos')">
          <q-item-section avatar>
            <q-icon name="build" color="cyan" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Serviços</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="mobile-nav-item" :class="{ 'active': currentRoute === 'projetos' }"
          @click="navigateTo('projetos')">
          <q-item-section avatar>
            <q-icon name="work" color="cyan" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Projetos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="mobile-nav-item" :class="{ 'active': currentRoute === 'contato' }"
          @click="navigateTo('contato')">
          <q-item-section avatar>
            <q-icon name="contact_mail" color="cyan" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Contato</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-my-md" color="grey-8" />

        <q-item class="q-mt-md">
          <q-item-section>
            <q-btn color="cyan" class="full-width" @click="openContact">
              Vamos Conversar
            </q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const leftDrawerOpen = ref(false)

const currentRoute = computed(() => {
  // Você pode ajustar isso baseado na sua estrutura de rotas
  return route.name || 'inicio'
})

// function toggleLeftDrawer() {
//   leftDrawerOpen.value = !leftDrawerOpen.value
// }

function navigateTo(routeName) {
  // Fechar o drawer mobile ao navegar
  leftDrawerOpen.value = false

  // Navegar para a rota (ajuste conforme suas rotas)
  router.push({ name: routeName })
}

function openContact() {
  // Fechar drawer se estiver aberto
  leftDrawerOpen.value = false

  // Navegar para contato ou abrir modal
  router.push({ name: 'contato' })
  // ou abrir um dialog/modal de contato
}
</script>

<style scoped>
.nav-btn {
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-btn:hover {
  color: #1de9b6;
}

.nav-btn.active {
  color: #1de9b6;
}

.nav-btn.active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background-color: #1de9b6;
  border-radius: 50%;
}

.cta-btn {
  border: 1px solid #1de9b6;
  color: #1de9b6;
  font-weight: 600;
  padding: 8px 20px;
  transition: all 0.3s ease;
}

.cta-btn:hover {
  background-color: #1de9b6;
  color: #1a1a1a;
}

.mobile-nav-item {
  border-radius: 8px;
  margin: 4px 16px;
  transition: all 0.3s ease;
}

.mobile-nav-item:hover {
  background-color: rgba(29, 233, 182, 0.1);
}

.mobile-nav-item.active {
  background-color: rgba(29, 233, 182, 0.2);
  color: #1de9b6;
}

/* Responsividade adicional */
@media (max-width: 599px) {
  .q-toolbar {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>