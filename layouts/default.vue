<template>
  <v-app>
    <!-- HEADER ABSOLUMENT STATIQUE -->
    <div class="static-header-wrapper">
      <v-app-bar 
        flat 
        class="px-6 px-md-12 professional-header" 
        height="72"
      >
        <!-- Logo/Signature -->
        <v-app-bar-title class="d-flex align-center">
          <div class="logo-container">
            <div class="logo-signature">
              <span class="logo-letter">A</span>
              <span class="logo-text">kim</span>
              <span class="logo-dot">.</span>
            </div>
            <div class="logo-line"></div>
          </div>
        </v-app-bar-title>

        <v-spacer />

        <!-- DESKTOP MENU STYLISÉ -->
        <div class="d-none d-md-flex align-center">
          <div class="nav-indicator" :style="indicatorStyle"></div>
          
          <v-btn
            v-for="item in navItems"
            :key="item.id"
            variant="text"
            class="nav-btn"
            :class="{ 'active-nav': activeSection === item.id }"
            @click="scrollTo(item.id)"
            :data-id="item.id"
            rounded="lg"
          >
            <v-icon size="small" class="mr-2" :icon="item.icon" />
            <span class="nav-text">{{ item.text }}</span>
            <div class="nav-hover-effect"></div>
          </v-btn>
          
          <!-- Bouton Contact spécial -->
          <v-btn
            class="contact-btn ml-4"
            variant="flat"
            color="primary"
            rounded="lg"
            @click="scrollTo('contact')"
          >
            <v-icon size="small" class="mr-2">mdi-email-outline</v-icon>
            Me contacter
          </v-btn>
        </div>

        <!-- MOBILE BURGER STYLISÉ -->
        <v-btn 
          icon 
          class="d-md-none mobile-menu-btn" 
          @click="drawer = true"
          variant="text"
          size="small"
        >
          <v-icon icon="mdi-menu" size="28" />
        </v-btn>
      </v-app-bar>
    </div>

    <!-- MOBILE DRAWER ÉLÉGANT -->
    <v-navigation-drawer 
      v-model="drawer" 
      temporary 
      location="right"
      width="300"
      class="mobile-drawer"
    >
      <v-list class="py-6 px-4">
        <!-- En-tête drawer -->
        <v-list-item class="mb-4">
          <div class="drawer-header">
            <div class="logo-signature">
              <span class="logo-letter">A</span>
              <span class="logo-text">kim</span>
              <span class="logo-dot">.</span>
            </div>
          </div>
        </v-list-item>
        
        <v-divider class="mb-4" />
        
        <!-- Items menu mobile -->
        <v-list-item
          v-for="item in navItems"
          :key="item.id"
          @click="scrollTo(item.id); drawer = false"
          :class="{ 'active-mobile': activeSection === item.id }"
          class="mobile-nav-item"
          rounded="lg"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon" size="20" class="mr-3" />
          </template>
          <v-list-item-title class="text-body-1">
            {{ item.text }}
          </v-list-item-title>
        </v-list-item>
        
        <!-- Bouton contact mobile -->
        <v-list-item
          @click="scrollTo('contact'); drawer = false"
          class="mobile-contact-item mt-4"
          rounded="lg"
        >
          <v-list-item-title class="text-center font-weight-bold">
            <v-icon size="small" class="mr-2">mdi-email</v-icon>
            Contact
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- CONTENU avec marge pour le header -->
    <v-main class="main-content">
      <div class="content-wrapper">
        <slot />
      </div>
    </v-main>

    <!-- FOOTER ÉLÉGANT -->
    <v-footer class="py-8 text-center elegant-footer">
      <v-container>
        <div class="footer-content">
          <div class="footer-signature mb-4">
            <span class="logo-letter">A</span>
            <span class="logo-text">kim</span>
            <span class="logo-dot">.</span>
          </div>
          <p class="text-caption mb-4">
            Développeur Fullstack Passionné • Créateur d'expériences digitales
          </p>
          <div class="social-links mb-4">
            <v-btn icon variant="text" class="mx-1" size="small">
              <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn icon variant="text" class="mx-1" size="small">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon variant="text" class="mx-1" size="small">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </div>
          <p class="text-caption copyright">
            © {{ new Date().getFullYear() }} Akim Sarigui • Tous droits réservés
          </p>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const drawer = ref(false)
const activeSection = ref('home')

const navItems = [
  { text: 'Accueil', id: 'home', icon: 'mdi-home-outline' },
  { text: 'Profil', id: 'about', icon: 'mdi-account-outline' },
  { text: 'Expérience', id: 'experience', icon: 'mdi-briefcase-outline' },
  { text: 'Compétences', id: 'skills', icon: 'mdi-code-tags' },
  { text: 'Projets', id: 'projects', icon: 'mdi-folder-multiple-outline' },
  { text: 'Contact', id: 'contact', icon: 'mdi-email-outline' },
]

// Style dynamique pour l'indicateur de navigation
const indicatorStyle = computed(() => {
  const index = navItems.findIndex(item => item.id === activeSection.value)
  if (index === -1) return {}
  return {
    transform: `translateX(${index * 120}px)`,
    width: '100px'
  }
})

/* SCROLL FLUIDE */
const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return

  const headerHeight = 72
  const y = el.getBoundingClientRect().top + window.scrollY - headerHeight

  window.scrollTo({ top: y, behavior: 'smooth' })
}

/* SCROLL SPY */
onMounted(() => {
  const sections = document.querySelectorAll('section[id]')

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { 
      threshold: 0.3,
      rootMargin: '-72px 0px 0px 0px' // Compense le header
    }
  )

  sections.forEach(section => observer.observe(section))
})
</script>

<style scoped lang="scss">
/* WRAPPER STATIQUE POUR LE HEADER */
.static-header-wrapper {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  width: 100% !important;
  height: 72px !important;
  z-index: 1000 !important;
  transform: none !important;
  will-change: auto !important;
  transition: none !important;
}

/* HEADER ABSOLUMENT STATIQUE */
.v-app-bar {
  position: static !important;
  transform: none !important;
  will-change: auto !important;
  transition: none !important;
  height: 72px !important;
  
  /* Supprime toutes les animations Vuetify */
  &.v-toolbar {
    transform: none !important;
  }
  
  &.v-toolbar--fixed {
    position: static !important;
    transform: none !important;
  }
}

/* HEADER PROFESSIONNEL - Style seulement */
.professional-header {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(248, 250, 252, 0.98) 100%
  ) !important;
  backdrop-filter: blur(12px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(12px) saturate(180%) !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.05),
    0 1px 3px rgba(0, 0, 0, 0.03) !important;
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 48px !important;
  
  @media (max-width: 960px) {
    padding: 0 24px !important;
  }
  
  @media (max-width: 600px) {
    padding: 0 16px !important;
  }
}

/* Supprime toutes les transitions problématiques */
.v-app-bar,
.v-toolbar,
.v-toolbar__content,
.v-toolbar__extension {
  transform: none !important;
  transition: none !important;
  animation: none !important;
}

/* Logo professionnel */
.logo-container {
  position: relative;
  padding-left: 8px;
}

.logo-signature {
  display: flex;
  align-items: center;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 800;
  font-size: 24px;
  letter-spacing: -0.5px;
  cursor: pointer;
  
  &:hover {
    .logo-letter {
      transform: scale(1.1);
    }
    .logo-dot {
      background: linear-gradient(135deg, #4361ee, #3a0ca3);
    }
  }
}

.logo-letter {
  background: linear-gradient(135deg, #4361ee, #3a0ca3);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  transition: transform 0.3s ease;
}

.logo-text {
  color: #1a1a1a;
  font-weight: 700;
  margin-left: 2px;
}

.logo-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: linear-gradient(135deg, #f72585, #ff006e);
  border-radius: 50%;
  margin-left: 4px;
  transition: background 0.3s ease;
}

.logo-line {
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #4361ee, transparent);
  border-radius: 1px;
}

/* Navigation desktop */
.nav-indicator {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, #4361ee, #3a0ca3);
  bottom: 0;
  left: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 1px;
  z-index: 1;
}

.nav-btn {
  position: relative;
  margin: 0 12px !important;
  padding: 8px 16px !important;
  min-width: auto !important;
  height: 40px !important;
  color: #4a5568 !important;
  font-weight: 500 !important;
  font-size: 0.875rem !important;
  letter-spacing: 0.3px !important;
  text-transform: none !important;
  transition: all 0.3s ease !important;
  z-index: 2;
  background: transparent !important;
  
  .nav-text {
    position: relative;
    z-index: 2;
  }
  
  &:hover {
    color: #1a1a1a !important;
    transform: translateY(-1px);
    
    .nav-hover-effect {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  &.active-nav {
    color: #4361ee !important;
    font-weight: 600 !important;
    
    .nav-hover-effect {
      opacity: 0.1;
      background: #4361ee;
    }
  }
}

.nav-hover-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(67, 97, 238, 0.1), rgba(58, 12, 163, 0.1));
  border-radius: 8px;
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.3s ease;
  z-index: 1;
}

/* Bouton contact */
.contact-btn {
  background: linear-gradient(135deg, #4361ee, #3a0ca3) !important;
  color: white !important;
  padding: 8px 20px !important;
  height: 40px !important;
  font-weight: 600 !important;
  text-transform: none !important;
  box-shadow: 
    0 4px 6px -1px rgba(67, 97, 238, 0.2),
    0 2px 4px -1px rgba(67, 97, 238, 0.1) !important;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 10px 15px -3px rgba(67, 97, 238, 0.3),
      0 4px 6px -2px rgba(67, 97, 238, 0.2) !important;
  }
}

/* Contenu principal */
.main-content {
  margin-top: 72px !important;
  padding-top: 0 !important;
  min-height: calc(100vh - 72px);
  width: 100%;
}

.content-wrapper {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
}

/* Mobile menu button */
.mobile-menu-btn {
  color: #4a5568 !important;
  
  &:hover {
    color: #4361ee !important;
  }
}

/* Mobile drawer */
.mobile-drawer {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(248, 250, 252, 0.98) 100%
  ) !important;
  backdrop-filter: blur(20px) !important;
}

.drawer-header {
  padding: 16px 0;
  text-align: center;
}

.mobile-nav-item {
  margin: 4px 0 !important;
  padding: 12px 16px !important;
  transition: all 0.3s ease !important;
  
  &:hover {
    background: linear-gradient(135deg, rgba(67, 97, 238, 0.05), rgba(58, 12, 163, 0.05)) !important;
    transform: translateX(4px);
  }
  
  &.active-mobile {
    background: linear-gradient(135deg, rgba(67, 97, 238, 0.1), rgba(58, 12, 163, 0.1)) !important;
    color: #4361ee !important;
    font-weight: 600 !important;
    border-left: 3px solid #4361ee;
  }
}

.mobile-contact-item {
  background: linear-gradient(135deg, #4361ee, #3a0ca3) !important;
  color: white !important;
  font-weight: 600 !important;
  margin-top: 16px !important;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(67, 97, 238, 0.3) !important;
  }
}

/* Footer élégant */
.elegant-footer {
  background: linear-gradient(
    135deg,
    rgba(248, 250, 252, 0.95) 0%,
    rgba(241, 245, 249, 0.95) 100%
  ) !important;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.footer-content {
  max-width: 600px;
  margin: 0 auto;
}

.footer-signature {
  font-size: 32px;
  font-weight: 800;
}

.social-links {
  .v-btn {
    color: #4a5568 !important;
    
    &:hover {
      color: #4361ee !important;
      transform: translateY(-2px);
    }
  }
}

.copyright {
  color: #718096 !important;
  font-weight: 500;
}

/* CSS RESET pour Vuetify */
:deep(.v-toolbar__content),
:deep(.v-toolbar__extension) {
  transform: none !important;
  transition: none !important;
}

/* Force le header à rester en place */
body {
  padding-top: 72px !important;
}

/* Important: Désactive tous les effets de scroll de Vuetify */
html {
  scroll-padding-top: 72px;
}

/* Responsive */
@media (max-width: 960px) {
  .professional-header {
    padding: 0 24px !important;
  }
  
  .logo-signature {
    font-size: 22px;
  }
}

@media (max-width: 600px) {
  .professional-header {
    padding: 0 16px !important;
  }
  
  .logo-signature {
    font-size: 20px;
  }
}
</style>