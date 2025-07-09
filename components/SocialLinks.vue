<template>
    <div class="social-links-wrapper">
        <v-tooltip v-for="(social, i) in socialLinks" :key="i" :text="social.name" location="top">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" :icon="social.icon" :href="social.link" target="_blank" variant="text"
                    size="large" :color="social.color" class="social-icon" :style="`--i: ${i}`"
                    :aria-label="`Lien vers ${social.name}`" />
            </template>
        </v-tooltip>
    </div>
</template>

<script setup lang="ts">
const socialLinks = [
    {
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/akim-sarigui-216a2b247',
        color: '#0A66C2',
        name: 'LinkedIn'
    },
    {
        icon: 'mdi-github',
        link: 'https://github.com/Akim-SARIGUI',
        color: '#181717',
        name: 'GitHub'
    },
    {
        icon: 'mdi-whatsapp',
        link: 'https://wa.me/22990194751954',
        color: '#25D366',
        name: 'WhatsApp'
    },
    {
        icon: 'mdi-twitter',
        link: 'https://twitter.com/sariguiakim',
        color: '#1DA1F2',
        name: 'Twitter'
    },
    {
        icon: 'mdi-instagram',
        link: 'https://instagram.com/sariguiakim',
        color: '#E4405F',
        name: 'Instagram'
    }
]
</script>

<style lang="scss" scoped>
.social-links-wrapper {
    display: flex;
    gap: 8px;
    justify-content: center;
    flex-wrap: wrap;
}

.social-icon {
    opacity: 0;
    animation: fadeInUp 0.5s ease forwards;
    animation-delay: calc(0.1s * var(--i));
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: rgba(255, 255, 255, 0.9) !important;
    border-radius: 50% !important;
    width: 48px !important;
    height: 48px !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-3px) scale(1.1);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        background: white !important;
    }

    :deep(.v-icon) {
        font-size: 24px;
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 600px) {
    .social-icon {
        width: 42px !important;
        height: 42px !important;

        :deep(.v-icon) {
            font-size: 20px;
        }
    }
}
</style>