<template>
    <section class="projects-section py-16" id="projects">
        <v-container>
            <v-row>
                <v-col cols="12" class="text-center mb-8">
                    <h2 class="text-h3 font-weight-bold section-title">
                        <span class="text-gradient">M</span>es Réalisations
                    </h2>
                    <v-divider class="w-25 mx-auto my-4 divider-animation" color="primary" />
                    <p class="text-body-1 text-grey-darken-1 max-w-600 mx-auto">
                        Découvrez une sélection de mes projets récents et des technologies que j'ai utilisées pour les
                        réaliser.
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col v-for="(project, i) in projects" :key="i" cols="12" sm="6" md="4">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card v-bind="props" elevation="4" class="rounded-lg h-100 project-card"
                            :class="{ 'hover-effect': isHovering }">
                            <v-img :src="project.image" height="220" cover class="align-end project-image"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)">
                                <v-card-title class="text-white font-weight-bold">{{ project.name }}</v-card-title>
                                <v-card-subtitle class="text-white">{{ project.category }}</v-card-subtitle>
                            </v-img>

                            <v-card-text class="project-content">
                                <p class="text-body-1 mb-4">{{ project.description }}</p>

                                <div class="tech-tags">
                                    <v-chip v-for="(tech, j) in project.technologies" :key="j" size="small"
                                        class="mr-2 mb-2 tech-chip" color="primary" variant="outlined">
                                        {{ tech }}
                                    </v-chip>
                                </div>
                            </v-card-text>

                            <v-card-actions class="px-4 pb-4">
                                <v-btn :href="project.link" target="_blank" variant="flat" color="primary"
                                    class="text-capitalize project-btn"
                                    :disabled="!project.link || project.link === '#'">
                                    <v-icon left>mdi-open-in-new</v-icon>
                                    Voir le projet
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts">
const projects = [
    {
        name: 'Kitungamama.com',
        description: 'Site WordPress vitrine pour la promotion de produits agroalimentaires locaux avec système de commande en ligne.',
        technologies: ['WordPress', 'WooCommerce', 'Elementor', 'PHP'],
        image: '/images/im4.png',
        link: 'https://kitungamama.com',
        category: 'Site E-commerce'
    },
    {
        name: 'AgriManage App',
        description: 'Application web complète pour la gestion des activités d\'une ferme agricole avec suivi des cultures et inventaire.',
        technologies: ['Vue.js', 'Nuxt.js', 'Node.js', 'PostgreSQL'],
        image: '/images/im3.png',
        link: '#',
        category: 'Application Web'
    },
    {
        name: 'Portfolio Design',
        description: 'Conception moderne et responsive d\'un portfolio professionnel avec animations fluides.',
        technologies: ['Vue.js', 'Vuetify', 'GSAP', 'SCSS'],
        image: '/images/project3.jpg',
        link: '#',
        category: 'Design UI/UX'
    }
]
</script>

<style lang="scss" scoped>
.projects-section {
    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
    position: relative;
    overflow: hidden;
}

.section-title {
    position: relative;
    display: inline-block;
    margin-bottom: 16px;

    .text-gradient {
        background: linear-gradient(90deg, #4361ee, #3a0ca3);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -12px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: linear-gradient(90deg, #4361ee, #f72585);
        border-radius: 2px;
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 120px;
    }
}

.divider-animation {
    transition: transform 0.3s ease;

    &:hover {
        transform: scaleX(1.5);
    }
}

.max-w-600 {
    max-width: 600px;
}

.project-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    overflow: hidden;

    &.hover-effect {
        transform: translateY(-8px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;

        .project-image {
            transform: scale(1.05);
        }
    }
}

.project-image {
    transition: transform 0.5s ease;
}

.project-content {
    padding: 16px;
}

.tech-chip {
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(67, 97, 238, 0.1) !important;
        transform: translateY(-2px);
    }
}

.project-btn {
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(67, 97, 238, 0.3) !important;
    }

    &:active {
        transform: translateY(0);
    }
}

@media (max-width: 960px) {
    .project-card {
        margin-bottom: 16px;
    }
}

@media (max-width: 600px) {
    .section-title {
        font-size: 2rem;
    }
}
</style>