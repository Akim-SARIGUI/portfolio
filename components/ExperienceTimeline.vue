<template>
  <section class="experience-section" id="experience">
    <!-- Background Animé -->
    <div class="section-background">
      <!-- Gradient de base -->
      <div class="bg-base"></div>
      
      <!-- Grille animée -->
      <div class="bg-grid"></div>
      
      <!-- Orbes flottants -->
      <div class="floating-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
        <div class="orb orb-4"></div>
      </div>
      
      <!-- Lignes de flux -->
      <div class="flow-lines">
        <svg class="flow-svg" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path class="flow-path path-1" d="M-100,400 Q300,100 600,400 T1300,400" />
          <path class="flow-path path-2" d="M-100,500 Q400,200 700,450 T1300,350" />
          <path class="flow-path path-3" d="M-100,300 Q200,600 500,350 T1300,500" />
        </svg>
      </div>
      
      <!-- Particules -->
      <div class="particles">
        <span 
          v-for="i in 20" 
          :key="i" 
          class="particle"
          :style="getParticleStyle(i)"
        ></span>
      </div>
      
      <!-- Gradient mesh animé -->
      <div class="gradient-mesh"></div>
    </div>

    <v-container class="section-container">
      <!-- Header -->
      <div class="section-header" ref="headerRef">
        <v-chip
          :class="{ 'is-visible': isHeaderVisible }"
          class="header-chip"
          color="primary"
          variant="tonal"
          size="small"
        >
          <v-icon start size="14">mdi-briefcase-outline</v-icon>
          Parcours
        </v-chip>

        <h2 class="section-title" :class="{ 'is-visible': isHeaderVisible }">
          Mon expérience professionnelle
        </h2>

        <p class="section-subtitle" :class="{ 'is-visible': isHeaderVisible }">
          Un aperçu de mon parcours et des missions accomplies
        </p>
      </div>

      <!-- Timeline -->
      <div class="timeline" ref="timelineRef">
        <div class="timeline-track">
          <div class="track-glow"></div>
        </div>

        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="timeline-item"
          :class="[
            { 'is-visible': isTimelineVisible },
            index % 2 === 0 ? 'left' : 'right'
          ]"
          :style="{ '--delay': `${index * 0.15}s` }"
        >
          <!-- Timeline Node -->
          <div class="timeline-node">
            <div class="node-ring"></div>
            <div class="node-dot">
              <v-icon :icon="exp.icon" size="18" color="white" />
            </div>
          </div>

          <!-- Content Card -->
          <v-card class="timeline-card" variant="flat" rounded="xl">
            <div class="card-glow"></div>
            
            <!-- Period Badge -->
            <div class="card-period">
              <v-icon size="14">mdi-calendar-range</v-icon>
              <span>{{ exp.period }}</span>
            </div>

            <v-card-text class="card-content">
              <!-- Header -->
              <div class="card-header">
                <div class="company-icon" :style="{ background: exp.gradient }">
                  <v-icon :icon="exp.companyIcon" size="22" color="white" />
                </div>
                <div class="card-titles">
                  <h3 class="position-title">{{ exp.position }}</h3>
                  <span class="company-name">{{ exp.company }}</span>
                </div>
              </div>

              <!-- Description -->
              <p class="card-description">{{ exp.description }}</p>

              <!-- Achievements -->
              <div class="card-achievements">
                <div
                  v-for="(achievement, i) in exp.achievements"
                  :key="i"
                  class="achievement-item"
                >
                  <div class="achievement-icon">
                    <v-icon icon="mdi-check" size="12" color="white" />
                  </div>
                  <span>{{ achievement }}</span>
                </div>
              </div>

              <!-- Skills -->
              <div class="card-skills">
                <v-chip
                  v-for="skill in exp.skills"
                  :key="skill"
                  size="small"
                  variant="flat"
                  class="skill-chip"
                >
                  {{ skill }}
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const headerRef = ref<HTMLElement | null>(null)
const timelineRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)

const isHeaderVisible = ref(false)
const isTimelineVisible = ref(false)
const isCtaVisible = ref(false)

import type { Experience } from '~/types/portfolio'

const api = useApi()
const { data: experiencesData } = await useAsyncData('experiences', () => api.getExperiences())
const experiences = computed(() => (experiencesData.value as Experience[] | null) ?? [])

const getParticleStyle = (index: number) => {
  const colors = ['#667eea', '#764ba2', '#22c55e', '#f59e0b', '#ec4899', '#06b6d4']
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    '--color': colors[index % colors.length],
    '--duration': `${15 + Math.random() * 20}s`,
    '--delay': `${Math.random() * 10}s`,
    '--size': `${4 + Math.random() * 6}px`
  }
}

onMounted(() => {
  const createObserver = (
    element: HTMLElement | null,
    callback: () => void,
    threshold = 0.15
  ) => {
    if (!element) return

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

    observer.observe(element)
  }

  createObserver(headerRef.value, () => { isHeaderVisible.value = true })
  createObserver(timelineRef.value, () => { isTimelineVisible.value = true })
  createObserver(ctaRef.value, () => { isCtaVisible.value = true })
})
</script>

<style lang="scss" scoped>
// Variables harmonisées
$primary: #667eea;
$secondary: #764ba2;
$accent-pink: #ec4899;
$accent-cyan: #06b6d4;
$accent-green: #22c55e;
$accent-orange: #f59e0b;
$dark: #1e293b;
$light: #f8fafc;
$text: #475569;
$text-light: #64748b;
$text-muted: #94a3b8;

.experience-section {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
  background: $light;

  @media (max-width: 960px) {
    padding: 80px 0;
  }
}

// ============ BACKGROUND ANIMÉ ============
.section-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

// Base gradient
.bg-base {
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(180deg, #ffffff 0%, $light 30%, #f1f5f9 70%, #ffffff 100%);
}

// Grille animée
.bg-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba($primary, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba($primary, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
  mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

// Orbes flottants
.floating-orbs {
  position: absolute;
  inset: 0;
  
  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.5;
    animation: orbFloat 20s ease-in-out infinite;
    
    &.orb-1 {
      width: 400px;
      height: 400px;
      background: linear-gradient(135deg, rgba($primary, 0.35), rgba($secondary, 0.25));
      top: 5%;
      left: -10%;
      animation-delay: 0s;
    }
    
    &.orb-2 {
      width: 350px;
      height: 350px;
      background: linear-gradient(135deg, rgba($accent-pink, 0.3), rgba($accent-orange, 0.2));
      top: 40%;
      right: -8%;
      animation-delay: -5s;
      animation-duration: 25s;
    }
    
    &.orb-3 {
      width: 300px;
      height: 300px;
      background: linear-gradient(135deg, rgba($accent-cyan, 0.25), rgba($accent-green, 0.2));
      bottom: 10%;
      left: 20%;
      animation-delay: -10s;
      animation-duration: 22s;
    }
    
    &.orb-4 {
      width: 250px;
      height: 250px;
      background: linear-gradient(135deg, rgba($accent-green, 0.3), rgba($primary, 0.2));
      bottom: 30%;
      right: 25%;
      animation-delay: -15s;
      animation-duration: 28s;
    }
  }
}

@keyframes orbFloat {
  0%, 100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  25% {
    transform: translate(40px, -30px) scale(1.05) rotate(5deg);
  }
  50% {
    transform: translate(-20px, 40px) scale(0.95) rotate(-5deg);
  }
  75% {
    transform: translate(30px, 20px) scale(1.02) rotate(3deg);
  }
}

// Lignes de flux
.flow-lines {
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: 0.4;
  
  .flow-svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .flow-path {
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    
    &.path-1 {
      stroke: url(#gradient1);
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: flowDash 8s ease-in-out infinite;
    }
    
    &.path-2 {
      stroke: url(#gradient2);
      stroke-dasharray: 800;
      stroke-dashoffset: 800;
      animation: flowDash 10s ease-in-out infinite;
      animation-delay: -3s;
    }
    
    &.path-3 {
      stroke: url(#gradient3);
      stroke-dasharray: 900;
      stroke-dashoffset: 900;
      animation: flowDash 12s ease-in-out infinite;
      animation-delay: -6s;
    }
  }
}

@keyframes flowDash {
  0%, 100% {
    stroke-dashoffset: 1000;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
}

// Particules
.particles {
  position: absolute;
  inset: 0;
  
  .particle {
    position: absolute;
    width: var(--size);
    height: var(--size);
    background: var(--color);
    border-radius: 50%;
    opacity: 0;
    animation: particleFloat var(--duration) ease-in-out infinite;
    animation-delay: var(--delay);
    
    &::after {
      content: '';
      position: absolute;
      inset: -2px;
      background: inherit;
      border-radius: 50%;
      filter: blur(4px);
      opacity: 0.5;
    }
  }
}

@keyframes particleFloat {
  0%, 100% {
    transform: translate(0, 0) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    transform: translate(calc(var(--size) * 10), calc(var(--size) * -15)) scale(1.2);
    opacity: 1;
  }
  90% {
    opacity: 0.8;
    transform: scale(1);
  }
}

// Gradient mesh animé
.gradient-mesh {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse 100% 50% at 20% 80%, rgba($primary, 0.08), transparent 50%),
    radial-gradient(ellipse 80% 60% at 80% 20%, rgba($accent-pink, 0.06), transparent 50%);
  animation: meshPulse 15s ease-in-out infinite;
}

@keyframes meshPulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.02);
  }
}

// ============ CONTAINER ============
.section-container {
  position: relative;
  z-index: 1;
}

// ============ HEADER ============
.section-header {
  text-align: center;
  margin-bottom: 72px;

  @media (max-width: 960px) {
    margin-bottom: 56px;
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
  font-size: clamp(1.875rem, 4vw, 2.75rem);
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
  font-size: 1.1rem;
  color: $text-light;
  max-width: 480px;
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

// ============ TIMELINE ============
.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 0;
}

.timeline-track {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, $primary, $secondary, $accent-pink, $accent-cyan);
  transform: translateX(-50%);
  border-radius: 4px;
  
  .track-glow {
    position: absolute;
    inset: -4px;
    background: inherit;
    filter: blur(8px);
    opacity: 0.4;
    border-radius: 8px;
  }

  @media (max-width: 900px) {
    left: 24px;
  }
}

// Timeline Item
.timeline-item {
  position: relative;
  display: flex;
  margin-bottom: 56px;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay);

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:last-child {
    margin-bottom: 0;
  }

  &.left {
    padding-right: calc(50% + 48px);
    justify-content: flex-end;

    .timeline-node {
      right: calc(50% - 24px);
      left: auto;
    }

    @media (max-width: 900px) {
      padding-right: 0;
      padding-left: 72px;
      justify-content: flex-start;

      .timeline-node {
        left: 0;
        right: auto;
      }
    }
  }

  &.right {
    padding-left: calc(50% + 48px);
    justify-content: flex-start;

    .timeline-node {
      left: calc(50% - 24px);
    }

    @media (max-width: 900px) {
      padding-left: 72px;

      .timeline-node {
        left: 0;
      }
    }
  }
}

// Timeline Node
.timeline-node {
  position: absolute;
  top: 28px;
  z-index: 2;

  .node-ring {
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    border: 2px solid rgba($primary, 0.3);
    animation: nodeRingPulse 3s ease-in-out infinite;
  }

  .node-dot {
    position: relative;
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, $primary, $secondary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 
      0 4px 20px rgba($primary, 0.4),
      0 0 0 4px white;

    @media (max-width: 600px) {
      width: 42px;
      height: 42px;
    }
  }
}

@keyframes nodeRingPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.3);
    opacity: 0;
  }
}

// Timeline Card
.timeline-card {
  position: relative;
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 
    0 4px 24px rgba(0, 0, 0, 0.06),
    0 0 0 1px rgba(0, 0, 0, 0.02);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  width: 100%;
  overflow: hidden;

  .card-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(180deg, rgba($primary, 0.05), transparent);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 
      0 20px 50px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba($primary, 0.1);
  }
}

.card-period {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  background: linear-gradient(135deg, $primary, $secondary);
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 0 0 14px 0;
}

.card-content {
  padding: 28px !important;

  @media (max-width: 600px) {
    padding: 22px !important;
  }
}

.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.company-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 48px;
    height: 48px;
  }
}

.card-titles {
  .position-title {
    font-size: 1.2rem;
    font-weight: 700;
    color: $dark;
    margin-bottom: 4px;
    line-height: 1.3;
  }

  .company-name {
    font-size: 0.9rem;
    color: $text-light;
    font-weight: 500;
  }
}

.card-description {
  font-size: 0.95rem;
  line-height: 1.75;
  color: $text;
  margin-bottom: 22px;
}

.card-achievements {
  margin-bottom: 22px;

  .achievement-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 12px;
    font-size: 0.9rem;
    color: $text;
    line-height: 1.5;

    .achievement-icon {
      width: 20px;
      height: 20px;
      background: linear-gradient(135deg, $accent-green, #16a34a);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 1px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.card-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .skill-chip {
    background: rgba($primary, 0.1) !important;
    color: $primary !important;
    font-weight: 600;
    font-size: 0.75rem;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba($primary, 0.2) !important;
      transform: translateY(-2px);
    }
  }
}

// ============ CTA SECTION ============
.cta-section {
  margin-top: 80px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 960px) {
    margin-top: 64px;
  }
}

.cta-card {
  position: relative;
  background: linear-gradient(135deg, $primary, $secondary, $accent-pink) !important;
  background-size: 200% 200% !important;
  animation: ctaGradient 8s ease infinite;
  overflow: hidden;
}

@keyframes ctaGradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.cta-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;

  .cta-orb {
    position: absolute;
    border-radius: 50%;
    
    &-1 {
      width: 200px;
      height: 200px;
      background: rgba(255, 255, 255, 0.15);
      top: -80px;
      right: -60px;
      filter: blur(40px);
      animation: ctaOrbFloat 10s ease-in-out infinite;
    }
    
    &-2 {
      width: 150px;
      height: 150px;
      background: rgba(255, 255, 255, 0.1);
      bottom: -50px;
      left: -40px;
      filter: blur(30px);
      animation: ctaOrbFloat 12s ease-in-out infinite reverse;
    }
    
    &-3 {
      width: 100px;
      height: 100px;
      background: rgba(255, 255, 255, 0.12);
      top: 50%;
      left: 30%;
      filter: blur(25px);
      animation: ctaOrbFloat 8s ease-in-out infinite;
      animation-delay: -4s;
    }
  }
  
  .cta-shimmer {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      110deg,
      transparent 20%,
      rgba(255, 255, 255, 0.1) 40%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.1) 60%,
      transparent 80%
    );
    animation: shimmer 6s ease-in-out infinite;
  }
}

@keyframes ctaOrbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -20px) scale(1.1); }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.cta-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 48px !important;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 32px !important;
  }
}

.cta-text {
  .cta-label {
    display: inline-block;
    padding: 6px 14px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 16px;
  }
  
  .cta-title {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 800;
    color: white;
    margin-bottom: 8px;
  }

  .cta-subtitle {
    font-size: 1.05rem;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
  }
}

.cta-actions {
  display: flex;
  gap: 14px;
  flex-shrink: 0;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }

  .cta-btn-primary {
    font-weight: 600;
    text-transform: none;
    letter-spacing: 0.2px;
    padding: 0 28px !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .cta-btn-secondary {
    font-weight: 600;
    text-transform: none;
    letter-spacing: 0.2px;
    padding: 0 24px !important;
    border-width: 2px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
      background: rgba(255, 255, 255, 0.15) !important;
      transform: translateY(-3px);
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }
}
</style>