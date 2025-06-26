<template>
    <section class="contact-section py-16" id="contact">
        <v-container>
            <v-row>
                <v-col cols="12" class="text-center mb-8">
                    <h2 class="text-h3 font-weight-bold section-title">
                        <span class="text-gradient">C</span>ontactez-moi
                    </h2>
                    <v-divider class="w-25 mx-auto my-4 divider-animation" color="primary" />
                    <p class="text-body-1 text-grey-darken-1 max-w-600 mx-auto">
                        Une question, un projet ou simplement envie d'échanger ? Laissez-moi un message et je vous
                        répondrai dans les plus brefs délais.
                    </p>
                </v-col>
            </v-row>

            <v-row align="stretch">
                <v-col cols="12" md="6" class="order-md-1 order-2">
                    <v-slide-x-transition>
                        <v-card variant="flat" class="pa-6 rounded-lg contact-form-card h-100">
                            <v-form @submit.prevent="submitForm" class="h-100 d-flex flex-column">
                                <v-text-field v-model="name" label="Nom complet" variant="outlined" required
                                    class="mb-4 animated-field" prepend-inner-icon="mdi-account"
                                    :rules="[requiredRule]" />

                                <v-text-field v-model="email" label="Email" type="email" variant="outlined" required
                                    class="mb-4 animated-field" prepend-inner-icon="mdi-email"
                                    :rules="[requiredRule, emailRule]" />

                                <v-text-field v-model="subject" label="Sujet" variant="outlined" required
                                    class="mb-4 animated-field" prepend-inner-icon="mdi-text-subject"
                                    :rules="[requiredRule]" />

                                <v-textarea v-model="message" label="Votre message" variant="outlined" required rows="4"
                                    class="mb-4 animated-field" prepend-inner-icon="mdi-message-text"
                                    :rules="[requiredRule]" auto-grow />

                                <v-btn type="submit" color="primary" size="large"
                                    class="text-capitalize mt-auto btn-submit" :loading="loading" :disabled="loading">
                                    <v-icon left>mdi-send</v-icon>
                                    Envoyer le message
                                </v-btn>
                            </v-form>
                        </v-card>
                    </v-slide-x-transition>
                </v-col>

                <v-col cols="12" md="6" class="order-md-2 order-1">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card v-bind="props" variant="flat" class="pa-6 rounded-lg contact-info-card h-100"
                            :class="{ 'hover-effect': isHovering }">
                            <div class="d-flex flex-column h-100">
                                <h3 class="text-h4 mb-6 title-decorated">
                                    <v-icon icon="mdi-information" class="mr-2" />
                                    Mes coordonnées
                                </h3>

                                <v-list lines="two" density="comfortable" class="contact-list">
                                    <v-list-item v-for="(item, index) in contactItems" :key="item.title"
                                        :prepend-icon="item.icon" :title="item.title" :subtitle="item.subtitle"
                                        :href="item.href" class="list-item-animation" :style="`--i: ${index}`"
                                        target="_blank">
                                        <template v-slot:prepend>
                                            <v-icon :icon="item.icon" color="primary" />
                                        </template>
                                    </v-list-item>
                                </v-list>

                                <div class="mt-auto">
                                    <p class="text-body-1 mb-4">
                                        Disponible du lundi au vendredi, de 9h à 18h
                                    </p>
                                    <SocialLinks class="social-links" />
                                </div>
                            </div>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>

        <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="3000">
            {{ snackbarText }}
        </v-snackbar>
    </section>
</template>

<script setup lang="ts">
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const loading = ref(false)
const snackbar = ref(false)
const snackbarText = ref('')
const snackbarColor = ref('primary')

const contactItems = [
    {
        icon: 'mdi-email',
        title: 'Email professionnel',
        subtitle: 'contact@sariguiakim.com',
        href: 'mailto:contact@sariguiakim.com'
    },
    {
        icon: 'mdi-phone',
        title: 'Téléphone/WhatsApp',
        subtitle: '+229 90 19 47 51',
        href: 'https://wa.me/22990194751'
    },
    {
        icon: 'mdi-linkedin',
        title: 'LinkedIn',
        subtitle: 'linkedin.com/in/sariguiakim',
        href: 'https://www.linkedin.com/in/sariguiakim'
    },
    {
        icon: 'mdi-github',
        title: 'GitHub',
        subtitle: 'github.com/sariguiakim',
        href: 'https://github.com/sariguiakim'
    }
]

const requiredRule = (value: string) => !!value || 'Ce champ est requis'
const emailRule = (value: string) => /.+@.+\..+/.test(value) || 'Email invalide'

const submitForm = async () => {
    if (!name.value || !email.value || !subject.value || !message.value) {
        showSnackbar('Veuillez remplir tous les champs', 'error')
        return
    }

    loading.value = true

    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        // In a real app, you would send the form data to your backend here
        console.log('Form submitted:', {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        })

        showSnackbar('Message envoyé avec succès !', 'success')

        // Reset form
        name.value = ''
        email.value = ''
        subject.value = ''
        message.value = ''
    } catch (error) {
        showSnackbar("Une erreur s'est produite. Veuillez réessayer.", 'error')
        console.error(error)
    } finally {
        loading.value = false
    }
}

const showSnackbar = (text: string, color: string) => {
    snackbarText.value = text
    snackbarColor.value = color
    snackbar.value = true
}
</script>

<style lang="scss" scoped>
.contact-section {
    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
    position: relative;
    overflow: hidden;

    &::before {
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

.contact-form-card {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05) !important;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1) !important;
        transform: translateY(-5px);
    }
}

.contact-info-card {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: #333;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05) !important;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(67, 97, 238, 0.05) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.5s ease;
    }

    &.hover-effect {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;

        &::before {
            opacity: 1;
        }

        .contact-list .v-list-item {
            transform: translateX(5px);
        }
    }
}

.title-decorated {
    position: relative;
    padding-bottom: 12px;
    color: #4361ee;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 3px;
        background: currentColor;
        border-radius: 2px;
    }
}

.contact-list {
    background: transparent !important;
    color: inherit !important;

    .v-list-item {
        padding: 12px 0;
        opacity: 0;
        animation: slideInRight 0.5s ease forwards;
        animation-delay: calc(0.1s * var(--i));
        transition: transform 0.3s ease, background 0.3s ease;

        &:hover {
            background: rgba(67, 97, 238, 0.05) !important;
            border-radius: 8px;
        }
    }

    :deep(.v-list-item__prepend) {
        margin-right: 16px;
    }

    :deep(.v-list-item__title) {
        color: #333 !important;
        font-weight: 500;
    }

    :deep(.v-list-item__subtitle) {
        color: #666 !important;
    }
}

.btn-submit {
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(67, 97, 238, 0.4) !important;
    }

    &:active {
        transform: translateY(0);
    }
}

.animated-field {
    opacity: 0;
    animation: fadeInUp 0.5s ease forwards;
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

    &:nth-child(4) {
        --i: 4;
    }
}

.social-links {
    :deep(.social-icon) {
        color: #4361ee !important;
        background: rgba(67, 97, 238, 0.1) !important;
        transition: all 0.3s ease;

        &:hover {
            background: rgba(67, 97, 238, 0.2) !important;
            transform: translateY(-3px);
            box-shadow: 0 4px 8px rgba(67, 97, 238, 0.2) !important;
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
        transform: translateX(-20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@media (max-width: 960px) {

    .contact-form-card,
    .contact-info-card {
        margin-bottom: 24px;
    }
}

@media (max-width: 600px) {
    .section-title {
        font-size: 2rem;
    }

    .title-decorated {
        font-size: 1.5rem;
    }
}
</style>