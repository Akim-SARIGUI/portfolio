<template>
    <section class="hero-section" id="home">
        <v-container class="fill-height">
            <v-row align="center" class="hero-content">
                <v-col cols="12" md="6" class="order-md-1 order-2">
                    <v-slide-x-transition>
                        <div class="hero-text">
                            <h1 class="text-h3 text-md-h1 font-weight-bold mb-4 title-decorated">
                                <span class="text-gradient">Salut</span>, je suis <span class="text-primary">Akim
                                    Sarigui</span>
                            </h1>

                            <h2 class="text-h5 text-md-h4 text-grey-darken-2 mb-6 animated-subtitle">
                                Développeur Web Fullstack & Consultant Technique
                            </h2>

                            <div class="text-content">
                                <p class="text-body-1 mb-4 animated-text">
                                    Architecte de solutions web performantes et innovantes, je transforme vos idées en
                                    expériences digitales exceptionnelles. Mon expertise couvre l'ensemble du cycle de
                                    développement, du concept à la mise en production.
                                </p>

                                <p class="text-body-1 mb-6 animated-text">
                                    Spécialiste des écosystèmes JavaScript (Vue.js, Nuxt.js, Node.js) avec une passion
                                    pour les interfaces utilisateur intuitives et les architectures back-end robustes.
                                </p>
                            </div>

                            <div class="d-flex gap-4 action-buttons">
                                <v-btn href="#contact" variant="flat" color="primary" size="large"
                                    class="text-capitalize btn-animate">
                                    <v-icon start icon="mdi-email-fast" />
                                    Contactez-moi
                                </v-btn>

                                <v-btn href="#projects" variant="outlined" color="primary" size="large"
                                    class="text-capitalize btn-animate">
                                    <v-icon start icon="mdi-folder-multiple-image" />
                                    Mes réalisations
                                </v-btn>
                            </div>
                        </div>
                    </v-slide-x-transition>
                </v-col>

                <v-col cols="12" md="6" class="order-md-2 order-1 d-flex justify-center">
                    <v-hover v-slot="{ isHovering, props }">
                        <div v-bind="props" class="hero-image-container" :class="{ 'hover-effect': isHovering }">
                            <v-img src="/images/im.jpeg" alt="Akim Sarigui - Développeur Fullstack" cover
                                class="hero-image" gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3)">
                                <div class="hero-overlay pa-6 d-flex flex-column justify-end">
                                    <v-chip variant="flat" color="primary" class="align-self-start mb-4">
                                        <v-icon start icon="mdi-rocket-launch" />
                                        Disponible pour nouveaux projets
                                    </v-chip>
                                    <div class="d-flex align-center">
                                        <v-icon icon="mdi-check-circle" color="white" class="mr-2" />
                                        <span class="text-subtitle-1 font-weight-bold text-white">+5 projets
                                            réalisés</span>
                                    </div>
                                </div>
                            </v-img>
                            <div class="floating-tech">
                                <v-chip v-for="(tech, i) in floatingTechs" :key="tech" class="tech-chip"
                                    :style="getTechPosition(i)">
                                    {{ tech }}
                                </v-chip>
                            </div>
                        </div>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script lang="ts" setup>
const floatingTechs = ['Vue.js', 'Nuxt.js', 'Node.js', 'TypeScript', 'Vuetify', 'Express', 'MongoDB', 'Firebase'];

const getTechPosition = (index: number) => {
    const positions = [
        { top: '10%', left: '-10%' },
        { top: '20%', right: '-15%' },
        { bottom: '25%', left: '-12%' },
        { bottom: '15%', right: '-10%' },
        { top: '50%', left: '-8%', transform: 'translateY(-50%)' },
        { top: '50%', right: '-8%', transform: 'translateY(-50%)' },
        { bottom: '40%', right: '-20%' },
        { top: '70%', left: '-15%' }
    ];

    return {
        ...positions[index % positions.length],
        animationDelay: `${index * 0.2}s`
    };
};
</script>

<style lang="scss" scoped>
.hero-section {
    min-height: 100vh;
    padding-top: 80px;
    background: linear-gradient(135deg, #f5f7fa 0%, #e6e9f2 100%);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(67, 97, 238, 0.05) 0%, rgba(255, 255, 255, 0) 70%);
        z-index: 0;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -30%;
        right: -30%;
        width: 60%;
        height: 60%;
        background: radial-gradient(circle, rgba(247, 37, 133, 0.05) 0%, rgba(255, 255, 255, 0) 70%);
        z-index: 0;
    }
}

.hero-content {
    position: relative;
    z-index: 2;
}

.title-decorated {
    position: relative;
    padding-bottom: 8px;

    .text-gradient {
        background: linear-gradient(90deg, #4361ee, #f72585);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 80px;
        height: 4px;
        background: linear-gradient(90deg, #4361ee, #3a0ca3);
        border-radius: 2px;
    }
}

.text-content {
    border-left: 4px solid #4361ee;
    padding-left: 20px;
    margin: 16px 0;
}

.hero-image-container {
    position: relative;
    width: 100%;
    max-width: 500px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 1;

    &.hover-effect {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);

        .floating-tech .tech-chip {
            transform: translateY(-5px) scale(1.05);
            opacity: 1;
        }
    }
}

.hero-image {
    position: relative;
    height: 550px;
    width: 100%;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.5) 100%);
        z-index: 1;
    }
}

.hero-overlay {
    position: relative;
    z-index: 2;
    height: 100%;
}

.floating-tech {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;

    .tech-chip {
        position: absolute;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(5px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        opacity: 0;
        transition: all 0.5s ease;
        animation: float 3s ease-in-out infinite;

        @for $i from 1 through 8 {
            &:nth-child(#{$i}) {
                animation-delay: $i * 0.2s;
            }
        }
    }
}

.action-buttons {
    .btn-animate {
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(67, 97, 238, 0.2);
        }
    }
}

/* Animations */
.animated-text {
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
    animation-delay: calc(var(--order) * 0.1s);

    &:nth-child(1) {
        --order: 1;
    }

    &:nth-child(2) {
        --order: 2;
    }
}

.animated-subtitle {
    opacity: 0;
    animation: fadeInLeft 0.8s ease forwards;
    animation-delay: 0.3s;
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

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

@media (max-width: 960px) {
    .hero-image {
        height: 450px;
        margin-bottom: 40px;
    }

    .hero-text {
        text-align: center;

        .title-decorated::after {
            left: 50%;
            transform: translateX(-50%);
        }

        .text-content {
            border-left: none;
            padding-left: 0;
            border-top: 4px solid #4361ee;
            padding-top: 16px;
            margin-top: 16px;
        }
    }

    .action-buttons {
        justify-content: center;
    }

    .floating-tech {
        display: none;
    }
}

@media (max-width: 600px) {
    .hero-image {
        height: 350px;
    }

    .title-decorated {
        font-size: 2rem;
    }

    .action-buttons {
        flex-direction: column;
        gap: 16px !important;
    }
}
</style>