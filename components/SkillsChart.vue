<template>
    <section class="skills-section py-16" id="skills">
        <v-container>
            <v-row>
                <v-col cols="12" class="text-center mb-8">
                    <h2 class="text-h3 font-weight-bold section-title">
                        <span class="text-gradient">M</span>es Compétences
                    </h2>
                    <v-divider class="w-25 mx-auto my-4 divider-animation" color="primary" />
                </v-col>
            </v-row>

            <v-row class="skills-content">
                <v-col cols="12" md="6" class="pr-md-6">
                    <h3 class="text-h4 mb-6 skill-category-title">
                        <v-icon large color="primary" class="mr-2">mdi-code-braces</v-icon>
                        Langages & Technologies
                    </h3>

                    <div class="skill-bar-container">
                        <div v-for="(skill, i) in languages" :key="i" class="skill-item"
                            :style="`--animation-delay: ${i * 0.1}s`">
                            <div class="skill-info">
                                <span class="skill-name">{{ skill.name }}</span>
                                <span class="skill-percent">{{ skill.value }}%</span>
                            </div>
                            <v-progress-linear :model-value="skill.value" :color="skill.color" height="12" rounded
                                class="skill-bar" />
                        </div>
                    </div>
                </v-col>

                <v-col cols="12" md="6" class="pl-md-6">
                    <div class="tools-container">
                        <h3 class="text-h4 mb-6 skill-category-title">
                            <v-icon large color="primary" class="mr-2">mdi-tools</v-icon>
                            Frameworks & Outils
                        </h3>

                        <div class="tools-grid">
                            <v-card v-for="(tool, i) in tools" :key="i" class="tool-card" :color="tool.color" dark hover
                                :style="`--animation-delay: ${i * 0.1}s`">
                                <v-card-text class="d-flex align-center">
                                    <v-icon :icon="tool.icon" size="28" class="mr-3" />
                                    <span class="text-h6">{{ tool.name }}</span>
                                </v-card-text>
                            </v-card>
                        </div>

                        <h3 class="text-h4 mt-10 mb-6 skill-category-title">
                            <v-icon large color="primary" class="mr-2">mdi-translate</v-icon>
                            Langues
                        </h3>

                        <div class="languages-container">
                            <v-card v-for="(lang, i) in languagesList" :key="'lang-' + i" class="language-card"
                                color="indigo-lighten-1" dark :style="`--animation-delay: ${i * 0.15}s`">
                                <v-card-text>
                                    <v-icon icon="mdi-check" class="mr-2" />
                                    {{ lang }}
                                </v-card-text>
                            </v-card>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts">
const languages = [
    { name: 'HTML5', value: 90, color: 'deep-orange' },
    { name: 'CSS3', value: 85, color: 'blue' },
    { name: 'JavaScript', value: 80, color: 'amber' },
    { name: 'TypeScript', value: 70, color: 'blue-darken-2' },
    { name: 'SQL', value: 75, color: 'red-darken-1' },
]

const tools = [
    { name: 'Vue.js', icon: 'mdi-vuejs', color: 'green-darken-2' },
    { name: 'Nuxt.js', icon: 'mdi-nuxt', color: 'green-lighten-1' },
    { name: 'Vuetify', icon: 'mdi-vuetify', color: 'blue-lighten-1' },
    { name: 'Node.js', icon: 'mdi-nodejs', color: 'green-darken-3' },
    { name: 'PostgreSQL', icon: 'mdi-database', color: 'indigo-darken-2' },
    { name: 'Git', icon: 'mdi-git', color: 'orange-darken-3' },
    { name: 'Docker', icon: 'mdi-docker', color: 'blue-darken-2' },
    { name: 'WordPress', icon: 'mdi-wordpress', color: 'blue-grey' },
]

const languagesList = ['Français', 'Anglais', 'Bariba', 'Dendi']
</script>

<style lang="scss" scoped>
.skills-section {
    background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(67, 97, 238, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
        z-index: 0;
    }
}

.section-title {
    position: relative;
    display: inline-block;

    .text-gradient {
        background: linear-gradient(90deg, #4361ee, #3a0ca3);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
}

.divider-animation {
    transition: transform 0.3s ease;

    &:hover {
        transform: scaleX(1.5);
    }
}

.skill-category-title {
    display: flex;
    align-items: center;
    color: #2b2d42;
    position: relative;
    padding-bottom: 8px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50px;
        height: 3px;
        background: linear-gradient(90deg, #4361ee, #f72585);
    }
}

.skill-item {
    margin-bottom: 24px;
    opacity: 0;
    animation: fadeInUp 0.5s ease-out forwards;
    animation-delay: var(--animation-delay);
}

.skill-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;

    .skill-name {
        font-weight: 600;
        color: #2b2d42;
    }

    .skill-percent {
        font-weight: 700;
        color: #4361ee;
    }
}

.skill-bar {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
}

.tool-card {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    transform: translateY(20px);
    opacity: 0;
    animation: fadeInUp 0.5s ease-out forwards;
    animation-delay: var(--animation-delay);

    &:hover {
        transform: translateY(-5px) !important;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15) !important;
    }
}

.languages-container {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.language-card {
    transition: all 0.3s ease;
    transform: translateY(20px);
    opacity: 0;
    animation: fadeInUp 0.5s ease-out forwards;
    animation-delay: var(--animation-delay);

    &:hover {
        transform: translateY(-3px) !important;
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

@media (max-width: 960px) {
    .skills-content {
        flex-direction: column;
    }

    .pr-md-6,
    .pl-md-6 {
        padding-right: 0 !important;
        padding-left: 0 !important;
    }

    .tools-grid {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    }
}
</style>