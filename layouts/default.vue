<template>
    <v-app>
      <v-app-bar flat color="transparent" class="px-8" :elevation="0">
        <v-app-bar-title class="text-h5 font-weight-bold">
          <span class="text-gradient">A</span>kim
        </v-app-bar-title>
  
        <v-spacer />
  
        <v-btn 
          v-for="(item, i) in navItems" 
          :key="i" 
          variant="text" 
          :to="item.to" 
          class="mx-1 text-capitalize nav-btn"
          :class="{ 'active-nav': activeSection === item.to.substring(1) }"
        >
          {{ item.text }}
        </v-btn>
  
        <v-btn 
          href="/cv.pdf" 
          download="Akim_Sarigui_CV.pdf" 
          variant="flat" 
          color="primary" 
          class="ml-4 download-btn"
        >
          <v-icon start icon="mdi-download" />
          Télécharger CV
        </v-btn>
      </v-app-bar>
  
      <v-main>
        <slot />
      </v-main>
  
      <v-footer class="py-8 bg-dark footer-section">
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="footer-col">
              <h3 class="text-h5 font-weight-bold text-light mb-4">
                <span class="text-gradient">S</span>arigui Akim
              </h3>
              <p class="text-light footer-text">
                Développeur Web - Alliant esthétique, performance et logique.
              </p>
              <div class="mt-4">
                <v-btn
                  v-for="(social, index) in socialLinks"
                  :key="index"
                  :href="social.link"
                  target="_blank"
                  icon
                  variant="text"
                  size="small"
                  class="mx-1 social-icon"
                  :color="social.color"
                >
                  <v-icon :icon="social.icon" size="24" />
                </v-btn>
              </div>
            </v-col>
  
            <v-col cols="12" md="6" class="footer-col">
              <h4 class="text-h6 font-weight-bold text-light mb-4">Contact Rapide</h4>
              <v-list lines="two" density="compact" bg-color="transparent" class="contact-list">
                <v-list-item
                  v-for="(contact, i) in contacts"
                  :key="i"
                  :prepend-icon="contact.icon"
                  :title="contact.title"
                  :subtitle="contact.value"
                  class="text-light contact-item"
                />
              </v-list>
            </v-col>
          </v-row>
  
          <v-divider class="my-4 divider-animation" color="grey-darken-3" />
  
          <div class="text-center text-light copyright">
            © {{ new Date().getFullYear() }} Akim Sarigui. Tous droits réservés.
            <v-icon icon="mdi-heart" color="error" size="14" class="mx-1" />
          </div>
        </v-container>
      </v-footer>
    </v-app>
  </template>
  
  <script setup lang="ts">
  
  
  const activeSection = ref('home')
  
  const navItems = [
    { text: 'Accueil', to: '#home' },
    { text: 'Profil', to: '#about' },
    { text: 'Expérience', to: '#experience' },
    { text: 'Compétences', to: '#skills' },
    { text: 'Projets', to: '#projects' },
    { text: 'Contact', to: '#contact' },
  ]
  
  const socialLinks = [
    { icon: 'mdi-github', link: 'https://github.com', color: 'grey-lighten-1' },
    { icon: 'mdi-linkedin', link: 'https://linkedin.com', color: 'blue-lighten-2' },
    { icon: 'mdi-twitter', link: 'https://twitter.com', color: 'light-blue' },
    { icon: 'mdi-instagram', link: 'https://instagram.com', color: 'pink-lighten-1' },
  ]
  
  const contacts = [
    { icon: 'mdi-email', title: 'Email', value: 'sariguiakim@gmail.com' },
    { icon: 'mdi-phone', title: 'Téléphone', value: '+229 01 94 75 19 54' },
    { icon: 'mdi-map-marker', title: 'Localisation', value: 'Abomey-Calavi, Bénin' },
  ]
  </script>
  
  <style lang="scss" scoped>
  .v-app-bar {
    transition: all 0.3s ease;
    backdrop-filter: blur(8px);
    background-color: rgba(255, 255, 255, 0.8) !important;
  
    &--is-scrolled {
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
      background-color: rgba(255, 255, 255, 0.95) !important;
    }
  }
  
  .text-gradient {
    background: linear-gradient(90deg, #4361ee, #3a0ca3);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  
  .nav-btn {
    position: relative;
    transition: all 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #4361ee, #f72585);
      transition: width 0.3s ease;
    }
  
    &:hover::after {
      width: 100%;
    }
  
    &.active-nav {
      color: #4361ee !important;
      font-weight: bold;
      
      &::after {
        width: 100%;
      }
    }
  }
  
  .download-btn {
    transition: all 0.3s ease;
    transform: translateY(0);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(67, 97, 238, 0.3);
    }
  }
  
  .footer-section {
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: -100px;
      right: -100px;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(67, 97, 238, 0.08) 0%, rgba(255, 255, 255, 0) 70%);
      z-index: 0;
    }
  }
  
  .footer-col {
    position: relative;
    z-index: 1;
  }
  
  .footer-text {
    opacity: 0.9;
    line-height: 1.8;
  }
  
  .contact-list {
    .contact-item {
      opacity: 0;
      animation: fadeInUp 0.5s ease forwards;
      animation-delay: calc(0.1s * var(--i));
      
      &:nth-child(1) { --i: 1; }
      &:nth-child(2) { --i: 2; }
      &:nth-child(3) { --i: 3; }
    }
  }
  
  .social-icon {
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-3px) scale(1.1);
    }
  }
  
  .divider-animation {
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scaleX(1.1);
    }
  }
  
  .copyright {
    opacity: 0.8;
    font-size: 0.9rem;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 960px) {
    .v-app-bar {
      padding: 0 16px;
    }
    
    .nav-btn {
      margin: 0 2px;
      font-size: 0.8rem;
    }
    
    .download-btn {
      margin-left: 8px;
    }
  }
  
  @media (max-width: 600px) {
    .v-app-bar-title {
      font-size: 1.2rem;
    }
    
    .footer-col {
      margin-bottom: 24px;
    }
  }
  </style>