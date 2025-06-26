<template>
    <section class="experience-section py-16" id="experience">
        <v-container>
            <v-row>
                <v-col cols="12" class="text-center mb-8">
                    <h2 class="text-h3 font-weight-bold section-title">
                        <span class="text-gradient">E</span>xpérience Professionnelle
                    </h2>
                    <v-divider class="w-25 mx-auto my-4 divider-animation" color="primary" />
                    <p class="text-body-1 text-grey-darken-1 max-w-600 mx-auto">
                        Mon parcours professionnel à travers différentes entreprises et missions.
                    </p>
                </v-col>
            </v-row>

            <v-timeline side="end" align="start" class="experience-timeline">
                <v-timeline-item v-for="(item, i) in experiences" :key="i"
                    :dot-color="i % 2 === 0 ? 'primary' : 'secondary'" size="small" class="timeline-item">
                    <template v-slot:opposite>
                        <span class="text-body-1 font-weight-bold period-badge">{{ item.period }}</span>
                    </template>

                    <v-hover v-slot="{ isHovering, props }">
                        <v-card v-bind="props" elevation="4" class="rounded-lg experience-card"
                            :class="{ 'hover-effect': isHovering }">
                            <v-card-title class="text-h5">{{ item.position }}</v-card-title>
                            <v-card-subtitle class="text-h6">
                                <v-icon small class="mr-1">mdi-office-building</v-icon>
                                {{ item.company }}
                            </v-card-subtitle>
                            <v-card-text>
                                <p>{{ item.description }}</p>
                                <v-chip v-for="(skill, skillIndex) in item.skills" :key="skillIndex"
                                    class="mr-2 mb-2 skill-chip" small :color="i % 2 === 0 ? 'primary' : 'secondary'"
                                    variant="outlined">
                                    {{ skill }}
                                </v-chip>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-timeline-item>
            </v-timeline>
        </v-container>
    </section>
</template>

<script setup lang="ts">
const experiences = [
    {
        position: "Enseignant des mathématiques",
        company: "Collèges et lycées",
        period: "2020 - Présent",
        description: "Enseignement des mathématiques aux élèves du secondaire avec des méthodes pédagogiques innovantes. Préparation aux examens nationaux et accompagnement personnalisé des élèves.",
        skills: ["Pédagogie", "Planification", "Gestion de classe", "Résolution de problèmes"]
    },
    {
        position: "Stagiaire en développement web",
        company: "Tics Master",
        period: "2017 - 2020",
        description: "Stage en développement web et gestion de projets informatiques. Participation à la conception d'interfaces utilisateur et développement de fonctionnalités backend.",
        skills: ["HTML/CSS", "JavaScript", "Vue.js", "Gestion de projet"]
    }
]
</script>

<style lang="scss" scoped>
.experience-section {
    background: linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -100px;
        left: -100px;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(244, 63, 94, 0.08) 0%, rgba(255, 255, 255, 0) 70%);
        z-index: 0;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -100px;
        right: -100px;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(67, 97, 238, 0.08) 0%, rgba(255, 255, 255, 0) 70%);
        z-index: 0;
    }
}

.section-title {
    position: relative;
    display: inline-block;
    margin-bottom: 16px;

    .text-gradient {
        background: linear-gradient(90deg, #4361ee, #f72585);
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

.experience-timeline {
    position: relative;
    z-index: 1;

    &::before {
        background-color: rgba(67, 97, 238, 0.1) !important;
    }
}

.timeline-item {
    opacity: 0;
    animation: fadeInUp 0.5s ease forwards;
    animation-delay: calc(0.2s * var(--i));

    &:nth-child(1) {
        --i: 1;
    }

    &:nth-child(2) {
        --i: 2;
    }
}

.period-badge {
    background: rgba(67, 97, 238, 0.1);
    padding: 4px 12px;
    border-radius: 20px;
    display: inline-block;
    transition: all 0.3s ease;

    .timeline-item:hover & {
        background: rgba(67, 97, 238, 0.2);
        transform: scale(1.05);
    }
}

.experience-card {
    transition: all 0.3s ease;
    border-left: 4px solid transparent;
    background: rgba(255, 255, 255, 0.95) !important;
    backdrop-filter: blur(5px);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
        border-left-color: #4361ee;
    }

    &.hover-effect {
        .skill-chip {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
    }
}

.skill-chip {
    transition: all 0.3s ease;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 960px) {
    .experience-timeline {
        :deep(.v-timeline-divider__dot) {
            background-color: rgb(var(--v-theme-primary)) !important;
        }

        :deep(.v-timeline-item__opposite) {
            display: none;
        }
    }
}

@media (max-width: 600px) {
    .section-title {
        font-size: 2rem;
    }
}
</style>