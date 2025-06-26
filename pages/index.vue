<template>
  <div class="portfolio-container">
    <!-- Hero Section -->
    <HeroSection class="section hero-section" />
    
    <!-- About Section -->
    <AboutSection class="section about-section" />
    
    <!-- Experience Section -->
    <ExperienceTimeline class="section experience-section" />
    
    <!-- Skills Section -->
    <SkillsChart class="section skills-section" />
    
    <!-- Projects Section -->
    <ProjectsGallery class="section projects-section" />
    
    <!-- Contact Section -->
    <ContactForm class="section contact-section" />
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ExperienceTimeline from '@/components/ExperienceTimeline.vue'
import SkillsChart from '@/components/SkillsChart.vue'
import ProjectsGallery from '@/components/ProjectsGallery.vue'
import ContactForm from '@/components/ContactForm.vue'
</script>

<style lang="scss" scoped>
.portfolio-container {
  scroll-behavior: smooth;
  position: relative;
  background-color: #fafafa;
}

.section {
  position: relative;
  padding: 5rem 0;
  overflow: hidden;
  
  // Effet de transition douce entre sections
  & + .section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent);
  }
}

// Hero Section spécifique
.hero-section {
  min-height: 100vh;
  padding-bottom: 1em;
  background: rgba(95, 95, 95, 0.13);
  & + .about-section::before {
    display: none;
  }
}

// About Section
.about-section {
  background-color: #FFFFFF62;
}

// Experience Section
.experience-section {
  background-color: #27242431;
}

// Skills Section
.skills-section {
  background-color: #8F8F8FFF;
}

// Projects Section
.projects-section {
  background-color: #f5f5f5;
}

// Contact Section
.contact-section {
  background-color: #ffffff;
}

// Effets de décoration subtils
.portfolio-container::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 10% 20%, rgba(67, 97, 238, 0.03) 0%, transparent 25%),
    radial-gradient(circle at 90% 80%, rgba(247, 37, 133, 0.03) 0%, transparent 25%);
  z-index: -1;
  pointer-events: none;
}

// Responsive
@media (max-width: 992px) {
  .section {
    padding: 4rem 0;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 3rem 0;
  }
}
</style>