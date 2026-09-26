<template>
  <section class="hero-section" id="home">
    <!-- Background animé vibrant -->
    <div class="hero-background">
      <div class="gradient-bg"></div>
      <div class="blob-container">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
      </div>
      <div class="sparkles">
        <span v-for="i in 30" :key="i" class="sparkle" :style="getSparkleStyle(i)"></span>
      </div>
    </div>

    <v-container class="hero-container">
      <v-row align="center" class="hero-row">
        <!-- Contenu texte -->
        <v-col cols="12" lg="7" class="hero-text-col">
          <div class="hero-content" :class="{ 'is-visible': isVisible }">

            <!-- Salutation avec animation -->
            <div class="greeting-wrapper">
              <span class="greeting-text">Hey, moi c'est</span>
              <span class="wave-emoji">👋</span>
            </div>

            <!-- Nom avec effet spectaculaire -->
            <h1 class="hero-name">
              <span class="name-line">
                <span 
                  v-for="(char, i) in 'Akim'.split('')" 
                  :key="'first-' + i" 
                  class="char"
                  :style="{ animationDelay: `${0.5 + i * 0.08}s` }"
                >{{ char }}</span>
              </span>
              <span class="name-line">
                <span 
                  v-for="(char, i) in 'Sarigui'.split('')" 
                  :key="'last-' + i" 
                  class="char accent"
                  :style="{ animationDelay: `${0.9 + i * 0.08}s` }"
                >{{ char }}</span>
              </span>
            </h1>

            <!-- Titre animé -->
            <div class="title-carousel">
              <span class="title-prefix">Je suis</span>
              <div class="title-slider">
                <transition name="slide" mode="out-in">
                  <span :key="currentTitleIndex" class="title-value">
                    {{ titles[currentTitleIndex].text }}
                    <span class="title-emoji">{{ titles[currentTitleIndex].emoji }}</span>
                  </span>
                </transition>
              </div>
            </div>

            <!-- Description percutante -->
            <div class="hero-description">
              <p class="desc-main">
                <span class="highlight-word">Passionné</span> par le code et 
                <span class="highlight-word">obsédé</span> par les détails, 
                je transforme des idées en <span class="highlight-word">expériences digitales</span> 
                qui marquent les esprits.
              </p>
              <p class="desc-sub">
                Mon terrain de jeu ? <strong>Vue.js</strong>, <strong>Nuxt</strong>, et tout l'écosystème JavaScript moderne.
                Je crée des applications web qui sont non seulement belles, mais aussi 
                <span class="underline-effect">rapides</span>, 
                <span class="underline-effect">accessibles</span> et 
                <span class="underline-effect">scalables</span>.
              </p>
            </div>

            

            <!-- Boutons d'action -->
            <div class="hero-actions">
              <v-btn
                href="#contact"
                size="x-large"
                class="btn-primary"
                rounded="pill"
              >
                <span>Travaillons ensemble</span>
                <div class="btn-icon">
                  <v-icon>mdi-arrow-right</v-icon>
                </div>
              </v-btn>

              <v-btn
                href="#projects"
                size="x-large"
                class="btn-secondary"
                rounded="pill"
                variant="outlined"
              >
                <v-icon start>mdi-eye</v-icon>
                <span>Découvrir mes projets</span>
              </v-btn>

              <v-btn
                href="/cv.pdf"
                download
                size="large"
                class="btn-download"
                rounded="pill"
                variant="text"
              >
                <v-icon start>mdi-download</v-icon>
                <span>CV</span>
              </v-btn>
            </div>

            <!-- Tech stack -->
            <div class="tech-stack">
              <span class="stack-label">Stack favorite</span>
              <div class="stack-items">
                <div 
                  v-for="(tech, index) in techStack" 
                  :key="tech.name"
                  class="tech-item"
                  :style="{ animationDelay: `${1.8 + index * 0.1}s` }"
                >
                  <v-tooltip :text="tech.name" location="top">
                    <template v-slot:activator="{ props }">
                      <div v-bind="props" class="tech-icon-wrapper" :style="{ background: tech.bg }">
                        <v-icon :color="tech.color" size="22">{{ tech.icon }}</v-icon>
                      </div>
                    </template>
                  </v-tooltip>
                </div>
              </div>
            </div>
          </div>
        </v-col>

        <!-- Visual / Image -->
        <v-col cols="12" lg="5" class="hero-visual-col">
          <div class="hero-visual" :class="{ 'is-visible': isVisible }">
            <div class="visual-wrapper">
              <!-- Cercles décoratifs -->
              <div class="deco-circles">
                <div class="circle circle-1"></div>
                <div class="circle circle-2"></div>
                <div class="circle circle-3"></div>
              </div>

              <!-- Carte photo principale -->
              <div class="photo-card">
                <div class="card-glow"></div>
                <div class="card-border"></div>
                <div class="card-inner">
                  <v-img
                    :src="profileImage"
                    alt="Akim Sarigui - Développeur Fullstack"
                    cover
                    class="profile-photo"
                  >
                    <template v-slot:placeholder>
                      <div class="d-flex align-center justify-center fill-height bg-grey-lighten-3">
                        <v-progress-circular indeterminate color="primary" />
                      </div>
                    </template>
                  </v-img>
                </div>
              </div>

              <!-- Badges flottants -->
              <div class="floating-badge badge-exp">
                <div class="badge-icon">
                  <v-icon color="white" size="18">mdi-rocket-launch</v-icon>
                </div>
                <div class="badge-content">
                  <span class="badge-value">3+</span>
                  <span class="badge-label">ans d'XP</span>
                </div>
              </div>

              <div class="floating-badge badge-projects">
                <div class="badge-icon green">
                  <v-icon color="white" size="18">mdi-check-decagram</v-icon>
                </div>
                <div class="badge-content">
                  <span class="badge-value">100%</span>
                  <span class="badge-label">Satisfait</span>
                </div>
              </div>

              <div class="floating-badge badge-code">
                <div class="badge-icon orange">
                  <v-icon color="white" size="18">mdi-fire</v-icon>
                </div>
                <div class="badge-content">
                  <span class="badge-value">∞</span>
                  <span class="badge-label">Passion</span>
                </div>
              </div>

              <!-- Emojis flottants -->
              <div class="floating-emojis">
                <span class="emoji emoji-1">⚡</span>
                <span class="emoji emoji-2">🎨</span>
                <span class="emoji emoji-3">💻</span>
                <span class="emoji emoji-4">🔥</span>
                <span class="emoji emoji-5">✨</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const currentTitleIndex = ref(0)
const profileImage = '/images/im.jpeg'

const titles = [
  { text: 'Développeur Fullstack', emoji: '💻' },
  { text: 'Expert Vue.js & Nuxt', emoji: '💚' },
  { text: 'Créateur d\'expériences web', emoji: '✨' },
  { text: 'Passionné de tech', emoji: '🚀' },
  { text: 'Problem Solver', emoji: '🧩' }
]


const techStack = [
  { name: 'Vue.js', icon: 'mdi-vuejs', color: '#42b883', bg: 'rgba(66, 184, 131, 0.12)' },
  { name: 'Nuxt.js', icon: 'mdi-nuxt', color: '#00DC82', bg: 'rgba(0, 220, 130, 0.12)' },
  { name: 'TypeScript', icon: 'mdi-language-typescript', color: '#3178C6', bg: 'rgba(49, 120, 198, 0.12)' },
  { name: 'Node.js', icon: 'mdi-nodejs', color: '#68A063', bg: 'rgba(104, 160, 99, 0.12)' },
  { name: 'PostgreSQL', icon: 'mdi-database', color: '#336791', bg: 'rgba(51, 103, 145, 0.12)' },
  { name: 'Docker', icon: 'mdi-docker', color: '#2496ED', bg: 'rgba(36, 150, 237, 0.12)' },
  { name: 'Git', icon: 'mdi-git', color: '#F05032', bg: 'rgba(240, 80, 50, 0.12)' }
]

const getSparkleStyle = (i: number) => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  animationDelay: `${Math.random() * 3}s`,
  animationDuration: `${2 + Math.random() * 2}s`
})

let titleInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)

  titleInterval = setInterval(() => {
    currentTitleIndex.value = (currentTitleIndex.value + 1) % titles.length
  }, 3500)
})

onUnmounted(() => {
  if (titleInterval) clearInterval(titleInterval)
})
</script>

<style lang="scss" scoped>
// Variables de couleurs vibrantes
$primary: #667eea;
$secondary: #764ba2;
$accent-pink: #f5576c;
$accent-orange: #fe8c00;
$accent-cyan: #00f2fe;
$accent-green: #00d9a5;
$accent-yellow: #ffd93d;
$dark: #1a1a2e;
$light: #fafbff;

.hero-section {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: $light;
}

// ============ BACKGROUND ============
.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.gradient-bg {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse 100% 100% at 0% 0%, rgba($primary, 0.15), transparent 50%),
    radial-gradient(ellipse 80% 80% at 100% 0%, rgba($accent-pink, 0.12), transparent 50%),
    radial-gradient(ellipse 60% 60% at 100% 100%, rgba($accent-cyan, 0.1), transparent 50%),
    radial-gradient(ellipse 80% 80% at 0% 100%, rgba($accent-green, 0.08), transparent 50%);
}

.blob-container {
  position: absolute;
  inset: 0;
  
  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(70px);
    opacity: 0.6;
    animation: blobFloat 20s ease-in-out infinite;
    
    &-1 {
      width: 500px;
      height: 500px;
      background: linear-gradient(135deg, rgba($primary, 0.4), rgba($secondary, 0.3));
      top: -10%;
      left: -10%;
      animation-delay: 0s;
    }
    
    &-2 {
      width: 400px;
      height: 400px;
      background: linear-gradient(135deg, rgba($accent-pink, 0.35), rgba($accent-orange, 0.25));
      top: 50%;
      right: -5%;
      animation-delay: -7s;
    }
    
    &-3 {
      width: 350px;
      height: 350px;
      background: linear-gradient(135deg, rgba($accent-cyan, 0.3), rgba($accent-green, 0.25));
      bottom: -10%;
      left: 30%;
      animation-delay: -14s;
    }
  }
}

@keyframes blobFloat {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
  25% { transform: translate(50px, -50px) scale(1.1) rotate(90deg); }
  50% { transform: translate(-30px, 30px) scale(0.95) rotate(180deg); }
  75% { transform: translate(40px, 20px) scale(1.05) rotate(270deg); }
}

.sparkles {
  position: absolute;
  inset: 0;
  
  .sparkle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: linear-gradient(135deg, $accent-yellow, $accent-orange);
    border-radius: 50%;
    animation: sparkle 3s ease-in-out infinite;
    
    &::after {
      content: '';
      position: absolute;
      inset: -2px;
      background: inherit;
      border-radius: 50%;
      filter: blur(2px);
      opacity: 0.5;
    }
  }
}

@keyframes sparkle {
  0%, 100% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1); }
}

// ============ CONTAINER ============
.hero-container {
  position: relative;
  z-index: 2;
  padding-top: 100px;
  padding-bottom: 60px;
}

.hero-row {
  min-height: calc(100vh - 160px);
}

// ============ CONTENT ============
.hero-text-col {
  @media (max-width: 1279px) {
    order: 2;
  }
}

.hero-content {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  @media (max-width: 1279px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

// Status Badge
.status-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba($primary, 0.2);
  border-radius: 100px;
  margin-bottom: 24px;
  box-shadow: 0 4px 24px rgba($primary, 0.15);
  overflow: hidden;
  
  .badge-glow {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba($primary, 0.1), transparent);
    animation: shimmer 3s infinite;
  }
  
  .badge-dot {
    width: 10px;
    height: 10px;
    background: linear-gradient(135deg, $accent-green, #00f5a0);
    border-radius: 50%;
    position: relative;
    z-index: 1;
    
    &::after {
      content: '';
      position: absolute;
      inset: -4px;
      background: rgba($accent-green, 0.3);
      border-radius: 50%;
      animation: pulse 2s ease-out infinite;
    }
  }
  
  .badge-text {
    font-size: 0.9rem;
    font-weight: 600;
    color: $dark;
    position: relative;
    z-index: 1;
  }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2.5); opacity: 0; }
}

// Greeting
.greeting-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  
  @media (max-width: 1279px) {
    justify-content: center;
  }
  
  .greeting-text {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    font-weight: 500;
    color: #64748b;
  }
  
  .wave-emoji {
    font-size: clamp(1.5rem, 3vw, 2rem);
    display: inline-block;
    animation: wave 2.5s ease-in-out infinite;
    transform-origin: 70% 70%;
  }
}

@keyframes wave {
  0%, 60%, 100% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
}

// Hero Name
.hero-name {
  margin-bottom: 20px;
  line-height: 1.1;
  
  .name-line {
    display: block;
    overflow: hidden;
    
    .char {
      display: inline-block;
      font-size: clamp(3rem, 10vw, 6rem);
      font-weight: 800;
      color: $dark;
      opacity: 0;
      transform: translateY(100%) rotateX(-80deg);
      animation: charReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      
      &.accent {
        background: linear-gradient(135deg, $primary, $secondary, $accent-pink);
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: charReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards,
                   gradientMove 5s ease infinite 1.5s;
      }
    }
  }
}

@keyframes charReveal {
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
}

@keyframes gradientMove {
  0%, 100% { background-position: 0% center; }
  50% { background-position: 200% center; }
}

// Title Carousel
.title-carousel {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  
  @media (max-width: 1279px) {
    justify-content: center;
  }
  
  .title-prefix {
    color: #64748b;
    font-weight: 500;
  }
  
  .title-slider {
    position: relative;
    min-width: 280px;
    height: 1.6em;
    
    @media (max-width: 600px) {
      min-width: 100%;
      text-align: center;
    }
    
    .title-value {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 700;
      background: linear-gradient(135deg, $primary, $accent-pink);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      
      @media (max-width: 600px) {
        justify-content: center;
      }
      
      .title-emoji {
        font-size: 1.2em;
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

// Description
.hero-description {
  max-width: 580px;
  margin-bottom: 32px;
  
  .desc-main {
    font-size: clamp(1.05rem, 2vw, 1.2rem);
    line-height: 1.8;
    color: #475569;
    margin-bottom: 16px;
    
    .highlight-word {
      font-weight: 700;
      color: $dark;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 0;
        width: 100%;
        height: 8px;
        background: linear-gradient(135deg, rgba($accent-yellow, 0.4), rgba($accent-orange, 0.3));
        border-radius: 4px;
        z-index: -1;
      }
    }
  }
  
  .desc-sub {
    font-size: clamp(0.95rem, 1.8vw, 1.05rem);
    line-height: 1.8;
    color: #64748b;
    
    strong {
      color: $primary;
      font-weight: 600;
    }
    
    .underline-effect {
      position: relative;
      font-weight: 600;
      color: $dark;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, $primary, $accent-pink);
        border-radius: 2px;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      }
      
      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
}

// Stats
.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;
  
  @media (max-width: 1279px) {
    justify-content: center;
  }
  
  .stat-card {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 20px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
    }
    
    .stat-icon {
      width: 44px;
      height: 44px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    
    .stat-content {
      display: flex;
      flex-direction: column;
      
      .stat-value {
        font-size: 1.25rem;
        font-weight: 800;
        color: $dark;
      }
      
      .stat-label {
        font-size: 0.8rem;
        color: #64748b;
        white-space: nowrap;
      }
    }
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Action Buttons
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 40px;
  
  @media (max-width: 1279px) {
    justify-content: center;
  }
  
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, $primary, $secondary) !important;
    color: white !important;
    font-weight: 600;
    font-size: 1rem;
    text-transform: none;
    letter-spacing: 0;
    padding: 0 28px 0 32px !important;
    height: 56px !important;
    box-shadow: 0 8px 32px rgba($primary, 0.35);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
    
    @media (max-width: 600px) {
      width: 100%;
    }
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 48px rgba($primary, 0.45);
      
      .btn-icon {
        transform: translateX(4px);
      }
    }
    
    .btn-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      margin-left: 12px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      transition: transform 0.3s ease;
    }
  }
  
  .btn-secondary {
    border: 2px solid rgba($primary, 0.3) !important;
    color: $primary !important;
    font-weight: 600;
    font-size: 1rem;
    text-transform: none;
    letter-spacing: 0;
    padding: 0 28px !important;
    height: 56px !important;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    
    @media (max-width: 600px) {
      width: 100%;
    }
    
    &:hover {
      background: rgba($primary, 0.08) !important;
      border-color: $primary !important;
      transform: translateY(-3px);
    }
  }
  
  .btn-download {
    color: #64748b !important;
    font-weight: 600;
    text-transform: none;
    letter-spacing: 0;
    
    &:hover {
      color: $primary !important;
      background: rgba($primary, 0.05) !important;
    }
  }
}

// Tech Stack
.tech-stack {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  
  @media (max-width: 1279px) {
    justify-content: center;
  }
  
  .stack-label {
    font-size: 0.85rem;
    font-weight: 500;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .stack-items {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    
    @media (max-width: 1279px) {
      justify-content: center;
    }
    
    .tech-item {
      opacity: 0;
      transform: scale(0.5);
      animation: popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      
      .tech-icon-wrapper {
        width: 48px;
        height: 48px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        cursor: pointer;
        
        &:hover {
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
}

@keyframes popIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

// ============ VISUAL SECTION ============
.hero-visual-col {
  @media (max-width: 1279px) {
    order: 1;
    margin-bottom: 48px;
  }
}

.hero-visual {
  opacity: 0;
  transform: translateY(50px) scale(0.95);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 0.3s;
  
  &.is-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.visual-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
  
  @media (max-width: 600px) {
    padding: 40px 20px;
  }
}

// Decorative Circles
.deco-circles {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .circle {
    position: absolute;
    border-radius: 50%;
    border: 2px dashed;
    animation: rotate 30s linear infinite;
    
    &-1 {
      width: 100%;
      height: 100%;
      border-color: rgba($primary, 0.15);
      animation-direction: normal;
    }
    
    &-2 {
      width: 85%;
      height: 85%;
      border-color: rgba($accent-pink, 0.12);
      animation-direction: reverse;
      animation-duration: 25s;
    }
    
    &-3 {
      width: 70%;
      height: 70%;
      border-color: rgba($accent-cyan, 0.1);
      animation-duration: 20s;
    }
  }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

// Photo Card
.photo-card {
  position: relative;
  width: clamp(260px, 50vw, 340px);
  height: clamp(320px, 60vw, 420px);
  
  .card-glow {
    position: absolute;
    inset: -20px;
    background: linear-gradient(135deg, rgba($primary, 0.4), rgba($accent-pink, 0.3), rgba($accent-cyan, 0.3));
    border-radius: 40px;
    filter: blur(40px);
    opacity: 0.7;
    animation: glowPulse 4s ease-in-out infinite;
  }
  
  .card-border {
    position: absolute;
    inset: -4px;
    background: linear-gradient(135deg, $primary, $secondary, $accent-pink, $accent-cyan, $primary);
    background-size: 400% 400%;
    border-radius: 32px;
    animation: borderGradient 8s ease infinite;
    
    &::after {
      content: '';
      position: absolute;
      inset: 4px;
      background: white;
      border-radius: 28px;
    }
  }
  
  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 28px;
    overflow: hidden;
    z-index: 2;
    
    .profile-photo {
      width: 100%;
      height: 100%;
    }
  }
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.02); }
}

@keyframes borderGradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

// Floating Badges
.floating-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  z-index: 10;
  animation: floatBadge 5s ease-in-out infinite;
  
  .badge-icon {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    background: linear-gradient(135deg, $primary, $secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    
    &.green {
      background: linear-gradient(135deg, $accent-green, #00f5a0);
    }
    
    &.orange {
      background: linear-gradient(135deg, $accent-orange, $accent-yellow);
    }
  }
  
  .badge-content {
    display: flex;
    flex-direction: column;
    
    .badge-value {
      font-size: 1.1rem;
      font-weight: 800;
      color: $dark;
    }
    
    .badge-label {
      font-size: 0.75rem;
      color: #64748b;
    }
  }
  
  &.badge-exp {
    top: 5%;
    left: 0;
    animation-delay: 0s;
    
    @media (max-width: 600px) {
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  &.badge-projects {
    top: 40%;
    right: -5%;
    animation-delay: -1.5s;
    
    @media (max-width: 600px) {
      top: auto;
      bottom: -10px;
      right: 10px;
    }
  }
  
  &.badge-code {
    bottom: 10%;
    left: 5%;
    animation-delay: -3s;
    
    @media (max-width: 600px) {
      bottom: -10px;
      left: 10px;
    }
  }
}

@keyframes floatBadge {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

// Floating Emojis
.floating-emojis {
  position: absolute;
  inset: -20px;
  pointer-events: none;
  
  .emoji {
    position: absolute;
    font-size: 1.5rem;
    animation: floatEmoji 6s ease-in-out infinite;
    
    &-1 { top: 0; left: 20%; animation-delay: 0s; }
    &-2 { top: 20%; right: 5%; animation-delay: -1s; }
    &-3 { bottom: 30%; left: 0; animation-delay: -2s; }
    &-4 { bottom: 5%; right: 20%; animation-delay: -3s; }
    &-5 { top: 50%; left: 10%; animation-delay: -4s; }
  }
}

@keyframes floatEmoji {
  0%, 100% { 
    transform: translateY(0) rotate(0deg); 
    opacity: 0.7;
  }
  50% { 
    transform: translateY(-20px) rotate(15deg); 
    opacity: 1;
  }
}

// ============ SCROLL INDICATOR ============
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0;
  transition: opacity 1s ease 2s;
  
  &.is-visible {
    opacity: 1;
  }
  
  @media (max-width: 960px) {
    display: none;
  }
  
  .scroll-mouse {
    width: 26px;
    height: 42px;
    border: 2px solid rgba($primary, 0.4);
    border-radius: 20px;
    position: relative;
    
    .scroll-wheel {
      width: 4px;
      height: 8px;
      background: $primary;
      border-radius: 4px;
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      animation: scrollWheel 2s ease-in-out infinite;
    }
  }
  
  .scroll-text {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #94a3b8;
  }
  
  .scroll-arrow {
    animation: bounce 2s ease-in-out infinite;
    color: #94a3b8;
  }
}

@keyframes scrollWheel {
  0%, 100% { 
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  100% { 
    transform: translateX(-50%) translateY(20px);
    opacity: 0;
  }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}
</style>