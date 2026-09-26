<template>
  <div class="portfolio-container">
    <!-- Hero Section avec espace pour le header -->
    <section id="home" class="first-section">
      <HeroSection class="section hero-section" />
    </section>
    
    <!-- About Section -->
    <section id="about">
      <AboutSection class="section about-section" />
    </section>
    
    <!-- Experience Section -->
    <section id="experience">
      <ExperienceTimeline class="section experience-section" />
    </section>
    
    <!-- Skills Section -->
    <section id="skills">
      <SkillsChart class="section skills-section" />
    </section>
    
    <!-- Projects Section -->
    <section id="projects">
      <ProjectsGallery class="section projects-section" />
    </section>
    
    <!-- Contact Section -->
    <section id="contact">
      <ContactForm class="section contact-section" />
    </section>
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
  padding-top: 0; /* Pas de padding supplémentaire */
}

/* Marges de scroll pour les sections */
section {
  scroll-margin-top: 80px; /* Compense la hauteur du header */
}

.first-section {
  scroll-margin-top: 0; /* Première section n'a pas besoin de compensation */
}

.section {
  position: relative;
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
  min-height: calc(100vh - 64px); /* Compense la hauteur du header */
  display: flex;
  align-items: center;
  padding: 4rem 0 2rem;
  background: rgba(95, 95, 95, 0.13);
  
  & + .about-section::before {
    display: none;
  }
}

// About Section
.about-section {
  padding: 6rem 0;
  background-color: #FFFFFF62;
}

// Experience Section
.experience-section {
  padding: 6rem 0;
  background-color: #27242431;
}

// Skills Section
.skills-section {
  padding: 6rem 0;
  background-color: #8F8F8FFF;
}

// Projects Section
.projects-section {
  padding: 6rem 0;
  background-color: #f5f5f5;
}

// Contact Section
.contact-section {
  padding: 6rem 0;
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
  section {
    scroll-margin-top: 70px;
  }
  
  .hero-section {
    min-height: calc(100vh - 70px);
    padding: 3rem 0 1rem;
  }
  
  .about-section,
  .experience-section,
  .skills-section,
  .projects-section,
  .contact-section {
    padding: 4rem 0;
  }
}

@media (max-width: 768px) {
  section {
    scroll-margin-top: 56px; /* Header plus petit sur mobile */
  }
  
  .hero-section {
    min-height: calc(100vh - 56px);
    padding: 2rem 0 0;
  }
  
  .about-section,
  .experience-section,
  .skills-section,
  .projects-section,
  .contact-section {
    padding: 3rem 0;
  }
}
</style>