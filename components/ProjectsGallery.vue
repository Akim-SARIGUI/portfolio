<template>
  <section class="projects-section" id="projects">
    <!-- Background animé -->
    <div class="section-background">
      <div class="bg-base"></div>
      <div class="bg-grid"></div>
      <div class="floating-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
      </div>
      <div class="bg-glow"></div>
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
          <v-icon start size="14">mdi-folder-star</v-icon>
          Portfolio
        </v-chip>

        <h2 class="section-title" :class="{ 'is-visible': isHeaderVisible }">
          Mes réalisations
        </h2>

        <p class="section-subtitle" :class="{ 'is-visible': isHeaderVisible }">
          Découvrez les projets sur lesquels j'ai travaillé
        </p>
      </div>

      <!-- Projects -->
      <div class="projects-showcase" ref="projectsRef">
        <article
          v-for="(project, index) in projects"
          :key="project.id"
          class="project-card"
          :class="[{ 'is-visible': isProjectsVisible }, `card-${index + 1}`]"
          :style="{ '--index': index }"
        >
          <!-- Image Section -->
          <div class="card-image">
            <div class="image-wrapper">
              <v-img
                :src="project.image"
                :alt="project.name"
                cover
                class="project-img"
              >
                <template v-slot:placeholder>
                  <div class="image-placeholder">
                    <v-progress-circular indeterminate color="primary" size="40" />
                  </div>
                </template>
              </v-img>

              <!-- Overlay -->
              <div class="image-overlay">
                <div class="overlay-content">
                  <v-btn
                    v-if="project.liveUrl"
                    :href="project.liveUrl"
                    target="_blank"
                    size="x-large"
                    rounded="pill"
                    class="overlay-btn"
                  >
                    <v-icon start>mdi-open-in-new</v-icon>
                    Visiter le site
                  </v-btn>
                  <v-btn
                    v-if="project.githubUrl"
                    :href="project.githubUrl"
                    target="_blank"
                    size="large"
                    variant="outlined"
                    rounded="pill"
                    class="overlay-btn-secondary"
                  >
                    <v-icon start>mdi-github</v-icon>
                    Code source
                  </v-btn>
                </div>
              </div>
            </div>

            <!-- Badges -->
            <div class="card-badges">
              <div class="category-badge" :style="{ '--color': project.color }">
                <v-icon :icon="project.icon" size="14" />
                <span>{{ project.category }}</span>
              </div>
              <div class="status-badge" :class="project.status">
                <span class="status-dot"></span>
                {{ project.status === 'live' ? 'En ligne' : 'En développement' }}
              </div>
            </div>
          </div>

          <!-- Content Section -->
          <div class="card-content">
            <div class="content-header">
              <h3 class="project-title">{{ project.name }}</h3>
              <span class="project-year">{{ project.year }}</span>
            </div>

            <p class="project-description">{{ project.description }}</p>

            <!-- Features -->
            <div class="project-features">
              <div
                v-for="feature in project.features"
                :key="feature"
                class="feature-item"
              >
                <v-icon icon="mdi-check-circle" size="16" color="success" />
                <span>{{ feature }}</span>
              </div>
            </div>

            <!-- Tech Stack -->
            <div class="tech-section">
              <span class="tech-label">Technologies utilisées</span>
              <div class="tech-stack">
                <div
                  v-for="tech in project.technologies"
                  :key="tech.name"
                  class="tech-item"
                  :style="{ '--tech-color': tech.color }"
                >
                  <v-icon :icon="tech.icon" size="18" />
                  <span>{{ tech.name }}</span>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="card-actions">
              <v-btn
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                color="primary"
                size="large"
                rounded="pill"
                class="action-btn-primary"
              >
                <span>Voir le projet</span>
                <v-icon end size="18">mdi-arrow-right</v-icon>
              </v-btn>
              <v-btn
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                variant="tonal"
                color="primary"
                size="large"
                rounded="pill"
                class="action-btn-secondary"
              >
                <v-icon start size="18">mdi-github</v-icon>
                <span>GitHub</span>
              </v-btn>
            </div>
          </div>

          <!-- Decorative -->
          <div class="card-glow" :style="{ '--glow': project.gradient }"></div>
          <div class="card-number">0{{ index + 1 }}</div>
        </article>
      </div>

      <!-- GitHub CTA -->
      <div class="github-cta" ref="ctaRef" :class="{ 'is-visible': isCtaVisible }">
        <v-card class="cta-card" variant="flat" rounded="xl">
          <div class="cta-bg">
            <div class="cta-orb cta-orb-1"></div>
            <div class="cta-orb cta-orb-2"></div>
          </div>

          <v-card-text class="cta-content">
            <div class="cta-icon">
              <v-icon icon="mdi-github" size="36" />
            </div>
            <div class="cta-text">
              <h3 class="cta-title">Envie d'en voir plus ?</h3>
              <p class="cta-subtitle">Explorez tous mes projets et contributions sur GitHub</p>
            </div>
            <v-btn
              href="https://github.com/Akim-SARIGUI"
              target="_blank"
              size="large"
              rounded="pill"
              class="cta-btn"
            >
              <v-icon start>mdi-github</v-icon>
              Voir mon GitHub
              <v-icon end size="18">mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Project } from '~/types/portfolio'

const headerRef = ref<HTMLElement | null>(null)
const projectsRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)

const isHeaderVisible = ref(false)
const isProjectsVisible = ref(false)
const isCtaVisible = ref(false)

const api = useApi()
const { data: projectsData } = await useAsyncData('projects', () => api.getProjects())
const projects = computed(() => (projectsData.value as Project[] | null) ?? [])

onMounted(() => {
  const createObserver = (
    element: HTMLElement | null,
    callback: () => void,
    threshold = 0.1
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
      { threshold, rootMargin: '0px 0px -30px 0px' }
    )

    observer.observe(element)
  }

  createObserver(headerRef.value, () => { isHeaderVisible.value = true })
  createObserver(projectsRef.value, () => { isProjectsVisible.value = true })
  createObserver(ctaRef.value, () => { isCtaVisible.value = true })
})
</script>

<style lang="scss" scoped>
// Variables
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

.projects-section {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
  background: $light;

  @media (max-width: 960px) {
    padding: 80px 0;
  }
}

// ============ BACKGROUND ============
.section-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.bg-base {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #ffffff 0%, $light 50%, #f1f5f9 100%);
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba($primary, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba($primary, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
}

.floating-orbs {
  position: absolute;
  inset: 0;

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.35;
    animation: orbFloat 25s ease-in-out infinite;

    &.orb-1 {
      width: 450px;
      height: 450px;
      background: linear-gradient(135deg, rgba($accent-green, 0.4), rgba($accent-cyan, 0.3));
      top: 0;
      right: -15%;
    }

    &.orb-2 {
      width: 400px;
      height: 400px;
      background: linear-gradient(135deg, rgba($primary, 0.35), rgba($secondary, 0.25));
      bottom: 10%;
      left: -10%;
      animation-delay: -12s;
    }
  }
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40px, -30px) scale(1.05); }
  66% { transform: translate(-30px, 25px) scale(0.95); }
}

.bg-glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 40% at 70% 10%, rgba($accent-green, 0.08), transparent 50%),
    radial-gradient(ellipse 50% 35% at 30% 90%, rgba($primary, 0.06), transparent 50%);
}

// ============ CONTAINER ============
.section-container {
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
  max-width: 450px;
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

// ============ PROJECTS SHOWCASE ============
.projects-showcase {
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-bottom: 80px;

  @media (max-width: 960px) {
    gap: 32px;
    margin-bottom: 60px;
  }
}

// Project Card
.project-card {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.08);
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
    transition-delay: calc(var(--index) * 0.15s);
  }

  // Alternate layout
  &.card-2 {
    .card-image {
      order: 2;
    }
    .card-content {
      order: 1;
    }

    @media (max-width: 900px) {
      .card-image {
        order: 1;
      }
      .card-content {
        order: 2;
      }
    }
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.12);

    .card-glow {
      opacity: 0.12;
    }

    .project-img {
      transform: scale(1.05);
    }

    .image-overlay {
      opacity: 1;
    }

    .card-number {
      opacity: 0.08;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
}

.card-glow {
  position: absolute;
  inset: 0;
  background: var(--glow);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.card-number {
  position: absolute;
  bottom: 20px;
  right: 30px;
  font-size: 8rem;
  font-weight: 900;
  color: $dark;
  opacity: 0.04;
  line-height: 1;
  pointer-events: none;
  transition: opacity 0.3s ease;

  @media (max-width: 600px) {
    font-size: 5rem;
    bottom: 10px;
    right: 20px;
  }
}

// Card Image
.card-image {
  position: relative;
  min-height: 400px;
  overflow: hidden;

  @media (max-width: 900px) {
    min-height: 280px;
  }

  @media (max-width: 600px) {
    min-height: 220px;
  }
}

.image-wrapper {
  position: absolute;
  inset: 0;

  .project-img {
    width: 100%;
    height: 100%;
    transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }
}

.image-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(135deg, rgba($primary, 0.1), rgba($secondary, 0.1));
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba($primary, 0.92), rgba($secondary, 0.92));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;

  .overlay-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .overlay-btn {
    background: white !important;
    color: $primary !important;
    font-weight: 600;
    text-transform: none;
    letter-spacing: 0.2px;
    padding: 0 32px !important;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: scale(1.05);
    }
  }

  .overlay-btn-secondary {
    color: white !important;
    border-color: rgba(255, 255, 255, 0.5) !important;
    font-weight: 600;
    text-transform: none;
    padding: 0 24px !important;

    &:hover {
      background: rgba(255, 255, 255, 0.1) !important;
    }
  }
}

.card-badges {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 2;
}

.category-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: white;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }

  &.live {
    background: rgba($accent-green, 0.15);
    color: darken($accent-green, 10%);
    backdrop-filter: blur(10px);

    .status-dot {
      background: $accent-green;
    }
  }

  &.dev {
    background: rgba($accent-orange, 0.15);
    color: darken($accent-orange, 10%);
    backdrop-filter: blur(10px);

    .status-dot {
      background: $accent-orange;
    }
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.2); }
}

// Card Content
.card-content {
  padding: 40px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 28px;
  }
}

.content-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
}

.project-title {
  font-size: clamp(1.5rem, 3vw, 1.85rem);
  font-weight: 800;
  color: $dark;
  line-height: 1.2;
}

.project-year {
  padding: 6px 14px;
  background: rgba($dark, 0.06);
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 700;
  color: $text-light;
  white-space: nowrap;
}

.project-description {
  font-size: 1rem;
  line-height: 1.8;
  color: $text;
  margin-bottom: 24px;
}

// Features
.project-features {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  color: $text;

  .v-icon {
    flex-shrink: 0;
  }
}

// Tech Stack
.tech-section {
  margin-bottom: 28px;
}

.tech-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: $text-muted;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 14px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: rgba($dark, 0.04);
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--tech-color);
  transition: all 0.3s ease;

  &:hover {
    background: rgba($dark, 0.08);
    transform: translateY(-2px);
  }
}

// Actions
.card-actions {
  display: flex;
  gap: 14px;
  margin-top: auto;
  padding-top: 8px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
}

.action-btn-primary {
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.2px;
  padding: 0 28px !important;
  box-shadow: 0 6px 24px rgba($primary, 0.3);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 32px rgba($primary, 0.4);
  }
}

.action-btn-secondary {
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.2px;
  padding: 0 24px !important;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

// ============ GITHUB CTA ============
.github-cta {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.cta-card {
  position: relative;
  background: linear-gradient(135deg, $primary, $secondary) !important;
  overflow: hidden;
}

.cta-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;

  .cta-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);

    &-1 {
      width: 250px;
      height: 250px;
      background: rgba(255, 255, 255, 0.15);
      top: -80px;
      right: -50px;
      animation: ctaOrb 15s ease-in-out infinite;
    }

    &-2 {
      width: 180px;
      height: 180px;
      background: rgba(255, 255, 255, 0.1);
      bottom: -60px;
      left: -40px;
      animation: ctaOrb 20s ease-in-out infinite reverse;
    }
  }
}

@keyframes ctaOrb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -20px) scale(1.1); }
}

.cta-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 28px;
  padding: 40px !important;

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
    padding: 36px 28px !important;
  }
}

.cta-icon {
  width: 72px;
  height: 72px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cta-text {
  flex: 1;

  .cta-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: white;
    margin-bottom: 6px;
  }

  .cta-subtitle {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
  }
}

.cta-btn {
  background: white !important;
  color: $primary !important;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.2px;
  padding: 0 28px !important;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
}
</style>