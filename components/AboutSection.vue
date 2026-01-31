<template>
  <section class="about-section" id="about">
    <!-- Background -->
    <div class="about-background">
      <div class="bg-gradient"></div>
      <div class="bg-pattern"></div>
      <div class="bg-orb orb-1"></div>
      <div class="bg-orb orb-2"></div>
    </div>

    <v-container class="about-container">
      <!-- Header -->
      <div class="section-header" ref="headerRef">
        <v-chip
          :class="{ 'is-visible': isHeaderVisible }"
          class="header-chip"
          color="primary"
          variant="tonal"
          size="small"
        >
          <v-icon start size="14">mdi-account-circle-outline</v-icon>
          À propos
        </v-chip>
        
        <h2 class="section-title" :class="{ 'is-visible': isHeaderVisible }">
          Découvrez qui je suis
        </h2>
        
        <p class="section-subtitle" :class="{ 'is-visible': isHeaderVisible }">
          Passionné par la création d'expériences web exceptionnelles
        </p>
      </div>

      <!-- Main Content -->
      <v-row align="center" justify="center" class="about-row">
        <!-- Photo Column -->
        <v-col cols="12" md="5" lg="4">
          <div 
            class="photo-wrapper" 
            ref="photoRef"
            :class="{ 'is-visible': isPhotoVisible }"
          >
            <!-- Decorative rings -->
            <div class="photo-rings">
              <div class="ring ring-1"></div>
              <div class="ring ring-2"></div>
              <div class="ring ring-3"></div>
            </div>

            <!-- Main photo container -->
            <div class="photo-container">
              <div class="photo-border">
                <div class="photo-inner">
                  <v-img
                    src="/images/im.jpeg"
                    alt="Akim Sarigui"
                    cover
                    class="profile-photo"
                  >
                    <template v-slot:placeholder>
                      <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular 
                          indeterminate 
                          color="primary"
                          size="48"
                        />
                      </div>
                    </template>
                  </v-img>
                </div>
              </div>

              <!-- Status indicator -->
              <div class="status-indicator">
                <span class="status-dot"></span>
                <span class="status-text">Disponible</span>
              </div>
            </div>

            <!-- Floating badges -->
            <div class="floating-badge badge-exp">
              <v-icon color="primary" size="20">mdi-briefcase-check</v-icon>
              <span class="badge-text">3+ ans XP</span>
            </div>

            <div class="floating-badge badge-stack">
              <v-icon color="success" size="20">mdi-code-tags</v-icon>
              <span class="badge-text">Fullstack</span>
            </div>
          </div>
        </v-col>

        <!-- Content Column -->
        <v-col cols="12" md="7" lg="6">
          <div 
            class="content-wrapper" 
            ref="contentRef"
            :class="{ 'is-visible': isContentVisible }"
          >
            <!-- Name & Title -->
            <div class="content-header">
              <h3 class="content-name">Akim Sarigui</h3>
              <v-chip
                color="primary"
                variant="flat"
                class="role-chip"
              >
                <v-icon start size="16">mdi-code-braces</v-icon>
                Développeur Fullstack
              </v-chip>
            </div>

            <!-- Description -->
            <div class="content-description">
              <p class="desc-paragraph">
                Passionné par le développement web depuis plus de <strong>3 ans</strong>, 
                je conçois des applications modernes qui allient performance et esthétique.
              </p>
              
              <p class="desc-paragraph">
                Expert de l'écosystème <strong>JavaScript</strong> — Vue.js, Nuxt.js, Node.js — 
                je m'engage à livrer un code propre, maintenable et des interfaces intuitives.
              </p>
              
              <p class="desc-paragraph">
                Mon objectif : transformer vos idées en <strong>solutions digitales</strong> 
                qui dépassent vos attentes.
              </p>
            </div>

            <!-- Tech Stack -->
            <div class="tech-section">
              <span class="tech-label">Technologies favorites</span>
              <div class="tech-grid">
                <v-tooltip 
                  v-for="tech in techStack" 
                  :key="tech.name"
                  :text="tech.name"
                  location="top"
                >
                  <template v-slot:activator="{ props }">
                    <div 
                      v-bind="props" 
                      class="tech-item"
                      :style="{ '--tech-color': tech.color }"
                    >
                      <v-icon :icon="tech.icon" size="24" />
                    </div>
                  </template>
                </v-tooltip>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="content-actions">
              <v-btn
                href="#contact"
                color="primary"
                size="large"
                rounded="pill"
                class="btn-primary"
                elevation="0"
              >
                Travaillons ensemble
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>

              <v-btn
                href="#projects"
                variant="tonal"
                color="primary"
                size="large"
                rounded="pill"
                class="btn-secondary"
              >
                <v-icon start>mdi-folder-outline</v-icon>
                Voir mes projets
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const headerRef = ref<HTMLElement | null>(null)
const photoRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const statsRef = ref<HTMLElement | null>(null)

const isHeaderVisible = ref(false)
const isPhotoVisible = ref(false)
const isContentVisible = ref(false)
const isStatsVisible = ref(false)

const techStack = [
  { name: 'Vue.js', icon: 'mdi-vuejs', color: '#42b883' },
  { name: 'Nuxt.js', icon: 'mdi-nuxt', color: '#00DC82' },
  { name: 'TypeScript', icon: 'mdi-language-typescript', color: '#3178C6' },
  { name: 'Node.js', icon: 'mdi-nodejs', color: '#339933' },
  { name: 'PostgreSQL', icon: 'mdi-database', color: '#336791' },
  { name: 'Docker', icon: 'mdi-docker', color: '#2496ED' }
]


onMounted(() => {
  const createObserver = (
    ref: HTMLElement | null, 
    callback: () => void, 
    threshold = 0.2
  ) => {
    if (!ref) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )
    
    observer.observe(ref)
  }

  createObserver(headerRef.value, () => { isHeaderVisible.value = true })
  createObserver(photoRef.value, () => { isPhotoVisible.value = true })
  createObserver(contentRef.value, () => { isContentVisible.value = true })
  createObserver(statsRef.value, () => { isStatsVisible.value = true })
})
</script>

<style lang="scss" scoped>
// Variables
$primary: #667eea;
$secondary: #764ba2;
$success: #22c55e;
$dark: #1e293b;
$light: #f8fafc;
$text: #475569;
$text-light: #64748b;
$text-muted: #94a3b8;

.about-section {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
  background: $light;
  
  @media (max-width: 960px) {
    padding: 80px 0;
  }
}

// ============ BACKGROUND ============
.about-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.bg-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #ffffff 0%, $light 50%, #f1f5f9 100%);
}

.bg-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba($primary, 0.05) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: linear-gradient(180deg, transparent, black 20%, black 80%, transparent);
}

.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  
  &.orb-1 {
    width: 400px;
    height: 400px;
    background: linear-gradient(135deg, rgba($primary, 0.2), rgba($secondary, 0.15));
    top: 10%;
    left: -10%;
    animation: floatOrb 20s ease-in-out infinite;
  }
  
  &.orb-2 {
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, rgba($success, 0.15), rgba($primary, 0.1));
    bottom: 10%;
    right: -5%;
    animation: floatOrb 25s ease-in-out infinite reverse;
  }
}

@keyframes floatOrb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}

// ============ CONTAINER ============
.about-container {
  position: relative;
  z-index: 1;
}

// ============ HEADER ============
.section-header {
  text-align: center;
  margin-bottom: 64px;
  
  @media (max-width: 960px) {
    margin-bottom: 48px;
  }
}

.header-chip {
  margin-bottom: 20px;
  font-weight: 600;
  letter-spacing: 0.3px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: $dark;
  margin-bottom: 16px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 0.1s;
  
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-subtitle {
  font-size: 1.125rem;
  color: $text-light;
  max-width: 500px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 0.2s;
  
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

// ============ PHOTO SECTION ============
.photo-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  
  &.is-visible {
    opacity: 1;
    transform: scale(1);
  }
  
  @media (max-width: 960px) {
    padding: 20px;
    margin-bottom: 32px;
  }
}

// Decorative Rings
.photo-rings {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  
  .ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid;
    animation: rotateRing 30s linear infinite;
    
    &.ring-1 {
      width: 280px;
      height: 280px;
      border-color: rgba($primary, 0.15);
      border-style: solid;
    }
    
    &.ring-2 {
      width: 320px;
      height: 320px;
      border-color: rgba($primary, 0.1);
      border-style: dashed;
      animation-direction: reverse;
      animation-duration: 40s;
    }
    
    &.ring-3 {
      width: 360px;
      height: 360px;
      border-color: rgba($secondary, 0.08);
      border-style: dotted;
      animation-duration: 50s;
    }
  }
}

@keyframes rotateRing {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

// Photo Container
.photo-container {
  position: relative;
  z-index: 2;
}

.photo-border {
  width: 220px;
  height: 220px;
  padding: 4px;
  background: linear-gradient(135deg, $primary, $secondary, #ec4899, $primary);
  background-size: 300% 300%;
  border-radius: 50%;
  animation: gradientRotate 6s ease infinite;
  box-shadow: 
    0 20px 60px rgba($primary, 0.3),
    0 0 0 8px rgba($primary, 0.05);
  
  @media (max-width: 600px) {
    width: 180px;
    height: 180px;
  }
}

@keyframes gradientRotate {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.photo-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: white;
  padding: 3px;
  
  .profile-photo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}

// Status Indicator
.status-indicator {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: white;
  border-radius: 100px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  .status-dot {
    width: 8px;
    height: 8px;
    background: $success;
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }
  
  .status-text {
    font-size: 0.75rem;
    font-weight: 600;
    color: $success;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba($success, 0.4); }
  50% { opacity: 0.8; box-shadow: 0 0 0 8px rgba($success, 0); }
}

// Floating Badges
.floating-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: white;
  border-radius: 100px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  z-index: 3;
  animation: floatBadge 4s ease-in-out infinite;
  
  .badge-text {
    font-size: 0.8rem;
    font-weight: 600;
    color: $dark;
    white-space: nowrap;
  }
  
  &.badge-exp {
    top: 20%;
    left: -10px;
    animation-delay: 0s;
    
    @media (max-width: 960px) {
      left: 0;
    }
  }
  
  &.badge-stack {
    bottom: 25%;
    right: -10px;
    animation-delay: -2s;
    
    @media (max-width: 960px) {
      right: 0;
    }
  }
}

@keyframes floatBadge {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

// ============ CONTENT SECTION ============
.content-wrapper {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 0.2s;
  
  &.is-visible {
    opacity: 1;
    transform: translateX(0);
  }
  
  @media (max-width: 960px) {
    text-align: center;
  }
}

.content-header {
  margin-bottom: 28px;
  
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.content-name {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  color: $dark;
  margin-bottom: 12px;
  background: linear-gradient(135deg, $dark 0%, $text 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

.role-chip {
  font-weight: 600;
  letter-spacing: 0.3px;
}

// Description
.content-description {
  margin-bottom: 32px;
}

.desc-paragraph {
  font-size: 1.05rem;
  line-height: 1.85;
  color: $text;
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  strong {
    color: $dark;
    font-weight: 600;
  }
}

// Tech Stack
.tech-section {
  margin-bottom: 36px;
  
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.tech-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: $text-muted;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  
  @media (max-width: 960px) {
    justify-content: center;
  }
}

.tech-item {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 14px;
  color: var(--tech-color);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
    border-color: var(--tech-color);
    background: rgba(0, 0, 0, 0.02);
  }
}

// Actions
.content-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  
  @media (max-width: 960px) {
    justify-content: center;
  }
  
  @media (max-width: 500px) {
    flex-direction: column;
    
    .v-btn {
      width: 100%;
    }
  }
}

.btn-primary {
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: none;
  letter-spacing: 0.2px;
  padding: 0 28px !important;
  box-shadow: 0 8px 24px rgba($primary, 0.35) !important;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba($primary, 0.45) !important;
  }
}

.btn-secondary {
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: none;
  letter-spacing: 0.2px;
  padding: 0 24px !important;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
}

// ============ STATS SECTION ============
.stats-section {
  margin-top: 80px;
  
  @media (max-width: 960px) {
    margin-top: 60px;
  }
}

.stats-card {
  background: white !important;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.06);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 28px 24px;
  border-right: 1px solid rgba(0, 0, 0, 0.06);
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
  
  &:last-child {
    border-right: none;
  }
  
  @media (max-width: 768px) {
    &:nth-child(2) {
      border-right: none;
    }
    
    &:nth-child(1),
    &:nth-child(2) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    }
  }
  
  @media (max-width: 400px) {
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    justify-content: center;
    
    &:last-child {
      border-bottom: none;
    }
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-icon {
  flex-shrink: 0;
}

.stat-content {
  display: flex;
  flex-direction: column;
  
  .stat-value {
    font-size: 1.5rem;
    font-weight: 800;
    color: $dark;
    line-height: 1.2;
  }
  
  .stat-label {
    font-size: 0.8rem;
    color: $text-muted;
    white-space: nowrap;
  }
}
</style>