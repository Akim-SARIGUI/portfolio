<template>
  <section class="skills-section" id="skills">
    <!-- Background animé -->
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
      <!-- Header -->
      <div class="section-header" ref="headerRef">
        <v-chip
          :class="{ 'is-visible': isHeaderVisible }"
          class="header-chip"
          color="primary"
          variant="tonal"
          size="small"
        >
          <v-icon start size="14">mdi-code-tags</v-icon>
          Compétences
        </v-chip>

        <h2 class="section-title" :class="{ 'is-visible': isHeaderVisible }">
          Mon expertise technique
        </h2>

        <p class="section-subtitle" :class="{ 'is-visible': isHeaderVisible }">
          Technologies et outils que je maîtrise pour créer des solutions modernes
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="skills-grid" ref="skillsRef">
        <!-- Technical Skills Card -->
        <v-card
          class="skills-card tech-card"
          :class="{ 'is-visible': isSkillsVisible }"
          variant="flat"
          rounded="xl"
        >
          <div class="card-glow"></div>
          
          <v-card-text class="card-content">
            <div class="card-header">
              <div class="header-icon purple">
                <v-icon icon="mdi-code-braces-box" size="24" color="white" />
              </div>
              <div class="header-info">
                <h3 class="card-title">Langages & Technologies</h3>
                <p class="card-subtitle">Fondations de mon expertise</p>
              </div>
            </div>

            <div class="skills-list">
              <div
                v-for="(skill, index) in technicalSkills"
                :key="skill.name"
                class="skill-row"
                :style="{ '--index': index }"
              >
                <div class="skill-info">
                  <div class="skill-icon" :style="{ background: skill.bgColor }">
                    <v-icon :icon="skill.icon" :color="skill.color" size="20" />
                  </div>
                  <span class="skill-name">{{ skill.name }}</span>
                </div>
                <div class="skill-bar-wrapper">
                  <div class="skill-bar">
                    <div
                      class="skill-progress"
                      :style="{
                        '--width': `${skill.level}%`,
                        '--gradient': skill.gradient
                      }"
                    >
                      <div class="progress-glow"></div>
                    </div>
                  </div>
                  <span class="skill-percent">{{ skill.level }}%</span>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>

        <!-- Frameworks Card -->
        <v-card
          class="skills-card frameworks-card"
          :class="{ 'is-visible': isSkillsVisible }"
          variant="flat"
          rounded="xl"
        >
          <div class="card-glow green"></div>
          
          <v-card-text class="card-content">
            <div class="card-header">
              <div class="header-icon green">
                <v-icon icon="mdi-layers-triple" size="24" color="white" />
              </div>
              <div class="header-info">
                <h3 class="card-title">Frameworks & Librairies</h3>
                <p class="card-subtitle">Outils de développement moderne</p>
              </div>
            </div>

            <div class="frameworks-grid">
              <div
                v-for="(framework, index) in frameworks"
                :key="framework.name"
                class="framework-item"
                :style="{ '--index': index }"
              >
                <div class="framework-icon" :style="{ background: framework.bgColor }">
                  <v-icon :icon="framework.icon" :color="framework.color" size="26" />
                </div>
                <span class="framework-name">{{ framework.name }}</span>
              </div>
            </div>
          </v-card-text>
        </v-card>

        <!-- Tools Card -->
        <v-card
          class="skills-card tools-card"
          :class="{ 'is-visible': isSkillsVisible }"
          variant="flat"
          rounded="xl"
        >
          <div class="card-glow orange"></div>
          
          <v-card-text class="card-content">
            <div class="card-header">
              <div class="header-icon orange">
                <v-icon icon="mdi-toolbox" size="24" color="white" />
              </div>
              <div class="header-info">
                <h3 class="card-title">Outils & DevOps</h3>
                <p class="card-subtitle">Environnement de travail</p>
              </div>
            </div>

            <div class="tools-list">
              <div
                v-for="(tool, index) in tools"
                :key="tool.name"
                class="tool-chip"
                :style="{ '--index': index }"
              >
                <v-icon :icon="tool.icon" :color="tool.color" size="18" />
                <span>{{ tool.name }}</span>
              </div>
            </div>
          </v-card-text>
        </v-card>

        <!-- Databases Card -->
        <v-card
          class="skills-card databases-card"
          :class="{ 'is-visible': isSkillsVisible }"
          variant="flat"
          rounded="xl"
        >
          <div class="card-glow cyan"></div>
          
          <v-card-text class="card-content">
            <div class="card-header">
              <div class="header-icon cyan">
                <v-icon icon="mdi-database" size="24" color="white" />
              </div>
              <div class="header-info">
                <h3 class="card-title">Bases de données</h3>
                <p class="card-subtitle">Stockage & gestion des données</p>
              </div>
            </div>

            <div class="databases-grid">
              <div
                v-for="(db, index) in databases"
                :key="db.name"
                class="database-item"
                :style="{ '--index': index }"
              >
                <div class="db-icon" :style="{ background: db.gradient }">
                  <v-icon :icon="db.icon" color="white" size="28" />
                </div>
                <div class="db-info">
                  <span class="db-name">{{ db.name }}</span>
                  <span class="db-type">{{ db.type }}</span>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>

      <!-- Soft Skills -->
      <div class="soft-skills-section" ref="softRef">
        <div class="soft-header" :class="{ 'is-visible': isSoftVisible }">
          <v-chip color="secondary" variant="tonal" size="small" class="mb-4">
            <v-icon start size="14">mdi-head-heart</v-icon>
            Savoir-être
          </v-chip>
          <h3 class="soft-title">Compétences transversales</h3>
        </div>

        <div class="soft-grid">
          <div
            v-for="(skill, index) in softSkills"
            :key="skill.name"
            class="soft-card"
            :class="{ 'is-visible': isSoftVisible }"
            :style="{ '--index': index }"
          >
            <div class="soft-icon" :style="{ background: skill.gradient }">
              <v-icon :icon="skill.icon" color="white" size="24" />
            </div>
            <h4 class="soft-name">{{ skill.name }}</h4>
            <p class="soft-desc">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const headerRef = ref<HTMLElement | null>(null)
const skillsRef = ref<HTMLElement | null>(null)
const softRef = ref<HTMLElement | null>(null)

const isHeaderVisible = ref(false)
const isSkillsVisible = ref(false)
const isSoftVisible = ref(false)

const technicalSkills = [
  {
    name: 'JavaScript / TypeScript',
    level: 90,
    icon: 'mdi-language-typescript',
    color: '#3178C6',
    bgColor: 'rgba(49, 120, 198, 0.1)',
    gradient: 'linear-gradient(90deg, #3178C6, #60a5fa)'
  },
  {
    name: 'Java',
    level: 60,
    icon: 'mdi-language-java',
    color: '#ED8B00',
    bgColor: 'rgba(237, 139, 0, 0.1)',
    gradient: 'linear-gradient(90deg, #ED8B00, #f59e0b)'
  },
  {
    name: 'HTML5 / CSS3',
    level: 95,
    icon: 'mdi-language-html5',
    color: '#E34F26',
    bgColor: 'rgba(227, 79, 38, 0.1)',
    gradient: 'linear-gradient(90deg, #E34F26, #ef4444)'
  },
  {
    name: 'SQL',
    level: 80,
    icon: 'mdi-database-search',
    color: '#336791',
    bgColor: 'rgba(51, 103, 145, 0.1)',
    gradient: 'linear-gradient(90deg, #336791, #06b6d4)'
  }
]

const frameworks = [
  { name: 'Vue.js', icon: 'mdi-vuejs', color: '#42b883', bgColor: 'rgba(66, 184, 131, 0.1)' },
  { name: 'Nuxt.js', icon: 'mdi-nuxt', color: '#00DC82', bgColor: 'rgba(0, 220, 130, 0.1)' },
  { name: 'Spring Boot', icon: 'mdi-leaf', color: '#6DB33F', bgColor: 'rgba(109, 179, 63, 0.1)' },
  { name: 'Node.js', icon: 'mdi-nodejs', color: '#339933', bgColor: 'rgba(51, 153, 51, 0.1)' },
  { name: 'Express', icon: 'mdi-server-network', color: '#000000', bgColor: 'rgba(0, 0, 0, 0.05)' },
  { name: 'Vuetify', icon: 'mdi-vuetify', color: '#1867C0', bgColor: 'rgba(24, 103, 192, 0.1)' },
  { name: 'Tailwind', icon: 'mdi-tailwind', color: '#06B6D4', bgColor: 'rgba(6, 182, 212, 0.1)' },
  { name: 'Bootstrap', icon: 'mdi-bootstrap', color: '#7952B3', bgColor: 'rgba(121, 82, 179, 0.1)' }
]

const tools = [
  { name: 'Git', icon: 'mdi-git', color: '#F05032' },
  { name: 'Docker', icon: 'mdi-docker', color: '#2496ED' },
  { name: 'VS Code', icon: 'mdi-microsoft-visual-studio-code', color: '#007ACC' },
  { name: 'IntelliJ', icon: 'mdi-intellij-idea', color: '#000000' },
  { name: 'Postman', icon: 'mdi-api', color: '#FF6C37' },
  { name: 'Figma', icon: 'mdi-pencil-ruler', color: '#F24E1E' },
  { name: 'Linux', icon: 'mdi-linux', color: '#FCC624' },
  { name: 'npm', icon: 'mdi-npm', color: '#CB3837' }
]

const databases = [
  { name: 'PostgreSQL', type: 'Relationnel', icon: 'mdi-elephant', gradient: 'linear-gradient(135deg, #336791, #5A8BB8)' },
  { name: 'MySQL', type: 'Relationnel', icon: 'mdi-database', gradient: 'linear-gradient(135deg, #4479A1, #00758F)' },
  { name: 'MongoDB', type: 'NoSQL', icon: 'mdi-leaf', gradient: 'linear-gradient(135deg, #47A248, #4DB33D)' },
  { name: 'Firebase', type: 'Cloud', icon: 'mdi-firebase', gradient: 'linear-gradient(135deg, #FFA000, #F57C00)' }
]

const softSkills = [
  {
    name: 'Problem Solving',
    description: 'Analyse et résolution créative de problèmes complexes',
    icon: 'mdi-puzzle',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)'
  },
  {
    name: 'Travail d\'équipe',
    description: 'Collaboration efficace dans des environnements agiles',
    icon: 'mdi-account-group',
    gradient: 'linear-gradient(135deg, #22c55e, #16a34a)'
  },
  {
    name: 'Communication',
    description: 'Transmission claire des idées techniques',
    icon: 'mdi-message-text',
    gradient: 'linear-gradient(135deg, #f59e0b, #ea580c)'
  },
  {
    name: 'Adaptabilité',
    description: 'Apprentissage rapide des nouvelles technologies',
    icon: 'mdi-sync',
    gradient: 'linear-gradient(135deg, #ec4899, #be185d)'
  },
  {
    name: 'Autonomie',
    description: 'Gestion efficace des projets en indépendance',
    icon: 'mdi-account-check',
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)'
  },
  {
    name: 'Créativité',
    description: 'Solutions innovantes et approche UX centrée',
    icon: 'mdi-lightbulb-on',
    gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)'
  }
]

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
  createObserver(skillsRef.value, () => { isSkillsVisible.value = true })
  createObserver(softRef.value, () => { isSoftVisible.value = true })
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

.skills-section {
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
  background-size: 40px 40px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
  animation: gridPulse 10s ease-in-out infinite;
}

@keyframes gridPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.floating-orbs {
  position: absolute;
  inset: 0;

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(70px);
    opacity: 0.4;
    animation: orbFloat 25s ease-in-out infinite;

    &.orb-1 {
      width: 350px;
      height: 350px;
      background: linear-gradient(135deg, rgba($primary, 0.3), rgba($secondary, 0.2));
      top: 10%;
      left: -5%;
    }

    &.orb-2 {
      width: 300px;
      height: 300px;
      background: linear-gradient(135deg, rgba($accent-green, 0.25), rgba($accent-cyan, 0.2));
      top: 50%;
      right: -5%;
      animation-delay: -8s;
    }

    &.orb-3 {
      width: 250px;
      height: 250px;
      background: linear-gradient(135deg, rgba($accent-orange, 0.25), rgba($accent-pink, 0.2));
      bottom: 10%;
      left: 30%;
      animation-delay: -16s;
    }
  }
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}

.bg-glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 40% at 50% 0%, rgba($primary, 0.08), transparent 50%),
    radial-gradient(ellipse 50% 30% at 50% 100%, rgba($accent-pink, 0.06), transparent 50%);
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

// ============ SKILLS GRID ============
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 64px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.skills-card {
  position: relative;
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);

  &.is-visible {
    opacity: 1;
    transform: translateY(0);

    &:nth-child(2) { transition-delay: 0.1s; }
    &:nth-child(3) { transition-delay: 0.2s; }
    &:nth-child(4) { transition-delay: 0.3s; }
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  }
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, $primary, $secondary);

  &.green { background: linear-gradient(90deg, $accent-green, #16a34a); }
  &.orange { background: linear-gradient(90deg, $accent-orange, #ea580c); }
  &.cyan { background: linear-gradient(90deg, $accent-cyan, #0891b2); }
}

.card-content {
  padding: 28px !important;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
}

.header-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &.purple { background: linear-gradient(135deg, $primary, $secondary); }
  &.green { background: linear-gradient(135deg, $accent-green, #16a34a); }
  &.orange { background: linear-gradient(135deg, $accent-orange, #ea580c); }
  &.cyan { background: linear-gradient(135deg, $accent-cyan, #0891b2); }
}

.header-info {
  .card-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: $dark;
    margin-bottom: 4px;
  }

  .card-subtitle {
    font-size: 0.85rem;
    color: $text-light;
    margin: 0;
  }
}

// Technical Skills
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skill-row {
  opacity: 0;
  animation: skillRowIn 0.5s ease forwards;
  animation-delay: calc(0.4s + var(--index) * 0.1s);

  .skill-info {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;

    .skill-icon {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .skill-name {
      font-size: 0.95rem;
      font-weight: 600;
      color: $dark;
    }
  }

  .skill-bar-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .skill-bar {
    flex: 1;
    height: 8px;
    background: rgba($dark, 0.08);
    border-radius: 8px;
    overflow: hidden;

    .skill-progress {
      height: 100%;
      width: 0;
      border-radius: 8px;
      background: var(--gradient);
      position: relative;
      animation: progressFill 1s ease forwards;
      animation-delay: calc(0.6s + var(--index) * 0.1s);

      .progress-glow {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        background: inherit;
        border-radius: 50%;
        filter: blur(8px);
        opacity: 0.6;
      }
    }
  }

  .skill-percent {
    font-size: 0.85rem;
    font-weight: 700;
    color: $primary;
    min-width: 40px;
    text-align: right;
  }
}

@keyframes skillRowIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes progressFill {
  from { width: 0; }
  to { width: var(--width); }
}

// Frameworks Grid
.frameworks-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.framework-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 16px 12px;
  background: rgba($dark, 0.02);
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  animation: itemPop 0.4s ease forwards;
  animation-delay: calc(0.3s + var(--index) * 0.05s);

  &:hover {
    background: white;
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);

    .framework-icon {
      transform: scale(1.1);
    }
  }

  .framework-icon {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }

  .framework-name {
    font-size: 0.8rem;
    font-weight: 600;
    color: $dark;
    text-align: center;
  }
}

@keyframes itemPop {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

// Tools List
.tools-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tool-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: rgba($dark, 0.04);
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 500;
  color: $dark;
  transition: all 0.3s ease;
  opacity: 0;
  animation: chipSlide 0.4s ease forwards;
  animation-delay: calc(0.3s + var(--index) * 0.05s);

  &:hover {
    background: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
}

@keyframes chipSlide {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Databases Grid
.databases-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}

.database-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  background: rgba($dark, 0.02);
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  animation: itemPop 0.4s ease forwards;
  animation-delay: calc(0.3s + var(--index) * 0.1s);

  &:hover {
    background: white;
    transform: translateX(6px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  .db-icon {
    width: 50px;
    height: 50px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .db-info {
    display: flex;
    flex-direction: column;

    .db-name {
      font-size: 0.95rem;
      font-weight: 600;
      color: $dark;
    }

    .db-type {
      font-size: 0.75rem;
      color: $text-light;
    }
  }
}

// ============ SOFT SKILLS ============
.soft-skills-section {
  text-align: center;
}

.soft-header {
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .soft-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: $dark;
  }
}

.soft-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.soft-card {
  padding: 28px 24px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: calc(var(--index) * 0.08s);

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);

    .soft-icon {
      transform: scale(1.1) rotate(5deg);
    }
  }

  .soft-icon {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
    transition: transform 0.3s ease;
  }

  .soft-name {
    font-size: 1.05rem;
    font-weight: 700;
    color: $dark;
    margin-bottom: 8px;
  }

  .soft-desc {
    font-size: 0.85rem;
    color: $text-light;
    line-height: 1.6;
    margin: 0;
  }
}
</style>