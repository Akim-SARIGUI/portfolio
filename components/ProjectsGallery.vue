<template>
  <section class="projects-section" id="projects">
    <div class="section-background">
      <div class="bg-base"></div>
      <div class="bg-grid"></div>
      <div class="floating-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
      <div class="bg-glow"></div>
    </div>

    <v-container class="section-container">
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
          Des produits pensés pour le terrain — du e-commerce à la fintech santé
        </p>

        <div class="filter-bar" :class="{ 'is-visible': isHeaderVisible }">
          <button
            v-for="cat in categories"
            :key="cat"
            type="button"
            class="filter-chip"
            :class="{ active: activeFilter === cat }"
            @click="activeFilter = cat"
          >
            <span class="filter-glow" />
            {{ cat }}
            <span v-if="cat !== 'Tous'" class="filter-count">{{ countByCategory(cat) }}</span>
          </button>
        </div>
      </div>

      <div class="projects-showcase" ref="projectsRef">
        <TransitionGroup name="project-list" tag="div" class="projects-list">
          <article
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            class="project-card"
            :class="[
              { 'is-visible': isProjectsVisible },
              index % 2 === 1 ? 'is-reversed' : '',
            ]"
            :style="{ '--index': index, '--accent': project.color, '--glow': project.gradient }"
          >
            <div class="card-shine" aria-hidden="true" />

            <div class="card-image">
              <div class="image-wrapper">
                <v-img
                  :src="project.image"
                  :alt="project.name"
                  cover
                  class="project-img"
                >
                  <template #placeholder>
                    <div class="image-placeholder">
                      <v-progress-circular indeterminate color="primary" size="40" />
                    </div>
                  </template>
                </v-img>

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

              <div class="card-badges">
                <div class="category-badge" :style="{ '--color': project.color }">
                  <v-icon :icon="project.icon" size="14" />
                  <span>{{ project.category }}</span>
                </div>
                <div class="status-badge" :class="project.status">
                  <span class="status-dot" />
                  {{ project.status === 'live' ? 'En ligne' : 'En développement' }}
                </div>
              </div>
            </div>

            <div class="card-content">
              <div class="content-header">
                <h3 class="project-title">
                  <span class="title-accent" />
                  {{ project.name }}
                </h3>
                <span class="project-year">{{ project.year }}</span>
              </div>

              <p class="project-description">{{ project.description }}</p>

              <div class="project-features">
                <div
                  v-for="(feature, fIndex) in project.features"
                  :key="feature"
                  class="feature-item"
                  :style="{ '--f': fIndex }"
                >
                  <v-icon icon="mdi-check-circle" size="16" :color="project.color" />
                  <span>{{ feature }}</span>
                </div>
              </div>

              <div class="tech-section">
                <span class="tech-label">Stack</span>
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

              <div class="card-actions">
                <v-btn
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  size="large"
                  rounded="pill"
                  class="action-btn-primary"
                  :style="{ background: project.gradient }"
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

            <div class="card-glow" />
            <div class="card-number">{{ String(index + 1).padStart(2, '0') }}</div>
          </article>
        </TransitionGroup>

        <div v-if="!filteredProjects.length" class="empty-state">
          <v-icon size="48" color="grey">mdi-folder-search-outline</v-icon>
          <p>Aucun projet dans cette catégorie.</p>
        </div>
      </div>

      <div class="github-cta" ref="ctaRef" :class="{ 'is-visible': isCtaVisible }">
        <v-card class="cta-card" variant="flat" rounded="xl">
          <div class="cta-bg">
            <div class="cta-orb cta-orb-1" />
            <div class="cta-orb cta-orb-2" />
          </div>
          <v-card-text class="cta-content">
            <div class="cta-icon">
              <v-icon icon="mdi-github" size="36" />
            </div>
            <div class="cta-text">
              <h3 class="cta-title">Envie d'en voir plus ?</h3>
              <p class="cta-subtitle">Explorez mes dépôts et contributions sur GitHub</p>
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
import type { Project } from '~/types/portfolio'

const headerRef = ref<HTMLElement | null>(null)
const projectsRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)

const isHeaderVisible = ref(false)
const isProjectsVisible = ref(false)
const isCtaVisible = ref(false)
const activeFilter = ref('Tous')

const api = useApi()
const { data: projectsData } = await useAsyncData('projects', () => api.getProjects())
const projects = computed(() => (projectsData.value as Project[] | null) ?? [])

const categories = computed(() => {
  const cats = [...new Set(projects.value.map((p) => p.category))]
  return ['Tous', ...cats]
})

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Tous') return projects.value
  return projects.value.filter((p) => p.category === activeFilter.value)
})

const countByCategory = (cat: string) =>
  projects.value.filter((p) => p.category === cat).length

onMounted(() => {
  const createObserver = (
    element: HTMLElement | null,
    callback: () => void,
    threshold = 0.1,
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
      { threshold, rootMargin: '0px 0px -30px 0px' },
    )
    observer.observe(element)
  }

  createObserver(headerRef.value, () => {
    isHeaderVisible.value = true
  })
  createObserver(projectsRef.value, () => {
    isProjectsVisible.value = true
  })
  createObserver(ctaRef.value, () => {
    isCtaVisible.value = true
  })
})
</script>

<style lang="scss" scoped>
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

.section-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.bg-base {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #fff 0%, $light 50%, #f1f5f9 100%);
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba($primary, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba($primary, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
  animation: gridDrift 40s linear infinite;
}

@keyframes gridDrift {
  from { background-position: 0 0; }
  to { background-position: 50px 50px; }
}

.floating-orbs {
  position: absolute;
  inset: 0;

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.4;
    animation: orbFloat 18s ease-in-out infinite;

    &.orb-1 {
      width: 450px;
      height: 450px;
      background: linear-gradient(135deg, rgba($accent-green, 0.45), rgba($accent-cyan, 0.3));
      top: 0;
      right: -15%;
    }

    &.orb-2 {
      width: 400px;
      height: 400px;
      background: linear-gradient(135deg, rgba($primary, 0.4), rgba($secondary, 0.3));
      bottom: 10%;
      left: -10%;
      animation-delay: -8s;
    }

    &.orb-3 {
      width: 280px;
      height: 280px;
      background: linear-gradient(135deg, rgba($accent-pink, 0.35), rgba($accent-orange, 0.25));
      top: 45%;
      left: 40%;
      animation-delay: -14s;
    }
  }
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(50px, -40px) scale(1.08); }
  66% { transform: translate(-40px, 30px) scale(0.92); }
}

.bg-glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 40% at 70% 10%, rgba($accent-green, 0.08), transparent 50%),
    radial-gradient(ellipse 50% 35% at 30% 90%, rgba($primary, 0.06), transparent 50%);
}

.section-container {
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}

.header-chip {
  margin-bottom: 20px;
  font-weight: 600;
  opacity: 0;
  transform: translateY(24px) scale(0.96);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);

  &.is-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.section-title {
  font-size: clamp(1.875rem, 4vw, 2.85rem);
  font-weight: 800;
  color: $dark;
  margin-bottom: 14px;
  opacity: 0;
  transform: translateY(28px);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 0.08s;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-subtitle {
  font-size: 1.1rem;
  color: $text-light;
  max-width: 520px;
  margin: 0 auto 28px;
  opacity: 0;
  transform: translateY(24px);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 0.16s;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 0.24s;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.filter-chip {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba($dark, 0.1);
  background: rgba(255, 255, 255, 0.85);
  color: $text;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 10px 18px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  .filter-glow {
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, transparent, rgba($primary, 0.2), transparent);
    transform: translateX(-120%);
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: rgba($primary, 0.35);
    box-shadow: 0 8px 24px rgba($primary, 0.15);

    .filter-glow {
      transform: translateX(120%);
    }
  }

  &.active {
    background: linear-gradient(135deg, $primary, $secondary);
    color: white;
    border-color: transparent;
    box-shadow: 0 10px 28px rgba($primary, 0.35);
  }

  .filter-count {
    margin-left: 6px;
    opacity: 0.75;
    font-size: 0.75rem;
  }
}

.projects-showcase {
  margin-bottom: 80px;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-list-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.97);
}

.project-list-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.97);
}

.project-card {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.85);
  box-shadow: 0 12px 50px rgba(0, 0, 0, 0.08);
  opacity: 0;
  transform: translateY(60px) rotateX(4deg);
  transform-origin: center top;
  transition:
    opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.85s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s ease;

  &.is-visible {
    opacity: 1;
    transform: translateY(0) rotateX(0);
    transition-delay: calc(var(--index) * 0.12s);
  }

  &.is-reversed {
    .card-image { order: 2; }
    .card-content { order: 1; }

    @media (max-width: 900px) {
      .card-image { order: 1; }
      .card-content { order: 2; }
    }
  }

  &:hover {
    transform: translateY(-10px) scale(1.01);
    box-shadow: 0 28px 80px rgba(0, 0, 0, 0.14);

    .card-glow { opacity: 0.14; }
    .project-img { transform: scale(1.08); }
    .image-overlay { opacity: 1; }
    .card-number { opacity: 0.1; transform: translateY(-6px); }
    .card-shine { animation: shineSweep 1.1s ease; }
    .feature-item { transform: translateX(4px); }
    .title-accent { width: 48px; }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
}

.card-shine {
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 3;
  background: linear-gradient(
    115deg,
    transparent 30%,
    rgba(255, 255, 255, 0.35) 45%,
    transparent 60%
  );
  transform: translateX(-130%);
}

@keyframes shineSweep {
  from { transform: translateX(-130%); }
  to { transform: translateX(130%); }
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
  bottom: 16px;
  right: 28px;
  font-size: 7.5rem;
  font-weight: 900;
  color: $dark;
  opacity: 0.04;
  line-height: 1;
  pointer-events: none;
  transition: all 0.4s ease;
}

.card-image {
  position: relative;
  min-height: 420px;
  overflow: hidden;

  @media (max-width: 900px) { min-height: 280px; }
  @media (max-width: 600px) { min-height: 220px; }
}

.image-wrapper {
  position: absolute;
  inset: 0;

  .project-img {
    width: 100%;
    height: 100%;
    transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
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
  background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 88%, #000), rgba($secondary, 0.9));
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
    transform: translateY(12px);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
}

.project-card:hover .overlay-content {
  transform: translateY(0);
}

.overlay-btn {
  background: white !important;
  color: $dark !important;
  font-weight: 700;
  text-transform: none;
  padding: 0 32px !important;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);

  &:hover { transform: scale(1.05); }
}

.overlay-btn-secondary {
  color: white !important;
  border-color: rgba(255, 255, 255, 0.55) !important;
  font-weight: 600;
  text-transform: none;
}

.card-badges {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  z-index: 2;
}

.category-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: white;
  border-radius: 100px;
  font-size: 0.78rem;
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
  backdrop-filter: blur(10px);

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: pulse 1.6s ease-in-out infinite;
  }

  &.live {
    background: rgba($accent-green, 0.18);
    color: darken($accent-green, 12%);
    .status-dot { background: $accent-green; }
  }

  &.dev {
    background: rgba($accent-orange, 0.18);
    color: darken($accent-orange, 12%);
    .status-dot { background: $accent-orange; }
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba($accent-green, 0.5); }
  50% { opacity: 0.7; transform: scale(1.25); box-shadow: 0 0 0 6px rgba($accent-green, 0); }
}

.card-content {
  padding: 40px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) { padding: 28px; }
}

.content-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
}

.project-title {
  position: relative;
  font-size: clamp(1.45rem, 3vw, 1.9rem);
  font-weight: 800;
  color: $dark;
  line-height: 1.2;
  padding-left: 14px;
}

.title-accent {
  position: absolute;
  left: 0;
  top: 0.35em;
  width: 4px;
  height: 1.1em;
  border-radius: 4px;
  background: var(--accent);
  transition: width 0.35s ease;
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
  font-size: 1.02rem;
  line-height: 1.75;
  color: $text;
  margin-bottom: 22px;
}

.project-features {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 26px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  color: $text;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: calc(var(--f) * 0.04s);

  .v-icon { flex-shrink: 0; }
}

.tech-section { margin-bottom: 26px; }

.tech-label {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  color: $text-muted;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
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
    transform: translateY(-3px) scale(1.03);
  }
}

.card-actions {
  display: flex;
  gap: 14px;
  margin-top: auto;
  padding-top: 8px;

  @media (max-width: 500px) { flex-direction: column; }
}

.action-btn-primary {
  color: white !important;
  font-weight: 700;
  text-transform: none;
  padding: 0 28px !important;
  box-shadow: 0 8px 24px color-mix(in srgb, var(--accent) 40%, transparent);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 34px color-mix(in srgb, var(--accent) 50%, transparent);
  }
}

.action-btn-secondary {
  font-weight: 600;
  text-transform: none;
  transition: all 0.3s ease;

  &:hover { transform: translateY(-2px); }
}

.empty-state {
  text-align: center;
  padding: 48px 16px;
  color: $text-muted;
}

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
      animation: ctaOrb 12s ease-in-out infinite;
    }

    &-2 {
      width: 180px;
      height: 180px;
      background: rgba(255, 255, 255, 0.1);
      bottom: -60px;
      left: -40px;
      animation: ctaOrb 16s ease-in-out infinite reverse;
    }
  }
}

@keyframes ctaOrb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(24px, -20px) scale(1.12); }
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
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: iconBob 3s ease-in-out infinite;
}

@keyframes iconBob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
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
  font-weight: 700;
  text-transform: none;
  padding: 0 28px !important;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }
}
</style>
