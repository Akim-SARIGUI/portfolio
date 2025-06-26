<template>
    <section class="about-section py-16" id="about">
        <v-container>
            <v-row>
                <v-col cols="12" class="text-center mb-8">
                    <h2 class="text-h3 font-weight-bold section-title">
                        <span class="text-gradient">À</span> propos de moi
                    </h2>
                    <v-divider class="w-25 mx-auto my-4 divider-animation" color="primary" />
                </v-col>
            </v-row>

            <v-row align="center" class="about-content">
                <v-col cols="12" md="6" class="order-md-1 order-2">
                    <v-slide-x-transition>
                        <div class="about-text">
                            <h3 class="text-h4 font-weight-bold mb-6 title-decorated">
                                Développeur Fullstack - Créativité & Performance
                            </h3>

                            <div class="text-content">
                                <p class="text-body-1 mb-4 animated-text">
                                    Passionné par le développement web depuis plus de 3 ans, je crée des expériences
                                    digitales à la fois esthétiques et performantes. Mon expertise couvre l'ensemble du
                                    processus de création, de la conception à la mise en production.
                                </p>

                                <p class="text-body-1 mb-4 animated-text">
                                    Spécialiste des écosystèmes JavaScript (Vue.js, Nuxt.js, Node.js), j'accorde une
                                    importance particulière à la qualité du code, aux bonnes pratiques et aux
                                    architectures maintenables. Chaque projet est l'occasion d'innover tout en
                                    respectant les standards.
                                </p>

                                <p class="text-body-1 mb-6 animated-text">
                                    Mon approche allie rigueur technique et sens créatif pour concevoir des solutions
                                    web élégantes, optimisées et adaptées à chaque besoin client.
                                </p>
                            </div>

                            <v-expansion-panels variant="accordion" class="my-6">
                                <v-expansion-panel>
                                    <v-expansion-panel-title>
                                        <v-icon icon="mdi-information" class="mr-2" />
                                        <span class="font-weight-bold">Plus d'informations</span>
                                    </v-expansion-panel-title>
                                    <v-expansion-panel-text>
                                        <v-row>
                                            <v-col cols="12" sm="6">
                                                <v-list lines="two" density="compact" class="info-list">
                                                    <v-list-item v-for="item in leftInfoItems" :key="item.title"
                                                        :prepend-icon="item.icon" :title="item.title"
                                                        :subtitle="item.subtitle" class="list-item-animation" />
                                                </v-list>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-list lines="two" density="compact" class="info-list">
                                                    <v-list-item v-for="item in rightInfoItems" :key="item.title"
                                                        :prepend-icon="item.icon" :title="item.title"
                                                        :subtitle="item.subtitle" class="list-item-animation" />
                                                </v-list>
                                            </v-col>
                                        </v-row>
                                    </v-expansion-panel-text>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </div>
                    </v-slide-x-transition>
                </v-col>
       
                <v-col cols="12" md="6" class="order-md-2 order-1 d-flex justify-center">
                    <v-hover v-slot="{ isHovering, props }">
                        <div v-bind="props" class="profile-image-container" :class="{ 'hover-effect': isHovering }">
                            <v-img src="/images/im2.jpeg" alt="Akim Sarigui" cover class="profile-image"
                                gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5)">
                                <div class="profile-overlay pa-6 d-flex flex-column justify-end">
                                    <div class="d-flex align-center mb-2">
                                        <v-icon icon="mdi-star-circle" color="primary" class="mr-2" />
                                        <span class="text-subtitle-1 font-weight-bold text-white">Disponible pour des
                                            missions</span>
                                    </div>
                                    <div class="text-h4 font-weight-bold text-white mb-2">Akim Sarigui</div>
                                    <v-chip variant="flat" color="primary" class="align-self-start">
                                        <v-icon start icon="mdi-code-json" />
                                        Expert Vue/Nuxt
                                    </v-chip>
                                </div>
                            </v-img>
                        </div>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts">
const leftInfoItems = [
    { icon: 'mdi-calendar', title: 'Date de naissance', subtitle: '13/03/2001' },
    { icon: 'mdi-earth', title: 'Nationalité', subtitle: 'Béninoise' },
    { icon: 'mdi-email', title: 'Email', subtitle: 'sariguiakim@gmail.com' }
]

const rightInfoItems = [
    { icon: 'mdi-phone', title: 'Téléphone', subtitle: '+229 90 19 47 51' },
    { icon: 'mdi-map-marker', title: 'Adresse', subtitle: 'Bidossessi, Abomey-Calavi' },
    { icon: 'mdi-translate', title: 'Langues', subtitle: 'Français, Anglais, Bariba, Dendi' }
]
</script>

<style lang="scss" scoped>
.about-section {
    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -100px;
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

.profile-image-container {
    position: relative;
    width: 100%;
    max-width: 450px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 1;

    &.hover-effect {
        transform: translateY(-10px);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);

        &::after {
            opacity: 0.3;
        }
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(67, 97, 238, 0.3) 0%, rgba(247, 37, 133, 0.1) 100%);
        opacity: 0;
        transition: opacity 0.5s ease;
        z-index: 1;
    }
}

.profile-image {
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
        background: linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.7) 100%);
        z-index: 1;
    }
}

.profile-overlay {
    position: relative;
    z-index: 2;
    height: 100%;
}

.title-decorated {
    position: relative;
    padding-bottom: 16px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, #4361ee, #f72585);
        border-radius: 2px;
    }
}

.about-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.text-content {
    border-left: 4px solid #4361ee;
    padding-left: 20px;
}

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

    &:nth-child(3) {
        --order: 3;
    }
}

.info-list {
    .list-item-animation {
        opacity: 0;
        transform: translateX(-10px);
        animation: slideInRight 0.5s ease forwards;
        animation-delay: calc(0.1s * var(--i));

        &:nth-child(1) {
            --i: 1;
        }

        &:nth-child(2) {
            --i: 2;
        }

        &:nth-child(3) {
            --i: 3;
        }
    }
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

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(-10px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@media (max-width: 960px) {
    .about-content {
        flex-direction: column;
    }

    .profile-image-container {
        margin-bottom: 40px;
        max-width: 100%;
    }

    .profile-image {
        height: 400px;
    }
}

@media (max-width: 600px) {
    .profile-image {
        height: 350px;
    }

    .section-title {
        font-size: 2rem;
    }

    .title-decorated {
        font-size: 1.5rem;
    }
}
</style>