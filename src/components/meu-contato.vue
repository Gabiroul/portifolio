<template>
    <section id="contact" ref="sectionRef" class="contact-section py-20 relative overflow-hidden">
        <!-- Background Effects -->
        <div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div class="absolute top-1/4 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div class="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

        <div class="container mx-auto px-6">
            <!-- Header -->
            <div :class="[
                'text-center mb-16 transition-all duration-1000',
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
            ]">
                <h2 class="text-4xl md:text-5xl font-bold mb-6">
                    Vamos <span class="gradient-text">Conversar</span>
                </h2>
                <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Pronto para transformar suas ideias em realidade? Entre em contato e vamos criar algo incrível
                    juntos!
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <!-- Contact Form -->
                <q-card :class="[
                    'glass p-8 transition-all duration-1000',
                    isVisible ? 'animate-slide-in-left' : 'opacity-0'
                ]" flat bordered>
                    <div class="mb-8">
                        <h3 class="text-2xl font-bold mb-4 gradient-text">Envie uma mensagem</h3>
                        <p class="text-muted-foreground">
                            Preencha o formulário abaixo e retornarei seu contato o mais breve possível.
                        </p>
                    </div>

                    <q-form @submit="handleSubmit" class="space-y-6">
                        <!-- Name and Email Row -->
                        <div class="grid md:grid-cols-2 gap-4">
                            <div>
                                <q-input v-model="form.name" label="Nome *" placeholder="Seu nome completo" outlined
                                    required class="glass-input" :rules="[val => !!val || 'Nome é obrigatório']" />
                            </div>
                            <div>
                                <q-input v-model="form.email" label="Email *" placeholder="seu@email.com" type="email"
                                    outlined required class="glass-input" :rules="[
                                        val => !!val || 'Email é obrigatório',
                                        val => /.+@.+\..+/.test(val) || 'Email deve ser válido'
                                    ]" />
                            </div>
                        </div>

                        <!-- Subject -->
                        <q-input v-model="form.subject" label="Assunto *" placeholder="Qual o motivo do contato?"
                            outlined required class="glass-input" :rules="[val => !!val || 'Assunto é obrigatório']" />

                        <!-- Message -->
                        <q-input v-model="form.message" label="Mensagem *"
                            placeholder="Descreva seu projeto ou dúvida..." type="textarea" outlined required :rows="5"
                            class="glass-input" :rules="[val => !!val || 'Mensagem é obrigatória']" />

                        <!-- Submit Button -->
                        <q-btn type="submit" :loading="isSubmitting" loading-color="white" size="lg"
                            class="w-full submit-btn" color="primary" text-color="white" no-caps>
                            <template v-slot:loading>
                                <q-spinner-hourglass class="on-left" />
                                Enviando...
                            </template>

                            <q-icon name="send" class="on-left" />
                            Enviar Mensagem
                        </q-btn>
                    </q-form>
                </q-card>

                <!-- Contact Info & Social -->
                <div :class="[
                    'space-y-8 transition-all duration-1000',
                    isVisible ? 'animate-slide-in-right' : 'opacity-0'
                ]">
                    <!-- Contact Information -->
                    <q-card class="glass p-8" flat bordered>
                        <h3 class="text-2xl font-bold mb-6 gradient-text">Informações de Contato</h3>

                        <div class="space-y-6">
                            <div v-for="info in contactInfo" :key="info.label"
                                class="flex items-center gap-4 group cursor-pointer" @click="handleContactClick(info)">
                                <div class="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    <q-icon :name="info.icon" class="text-primary" size="20px" />
                                </div>
                                <div>
                                    <p class="text-sm text-muted-foreground">{{ info.label }}</p>
                                    <p class="font-medium text-foreground group-hover:text-primary transition-colors">
                                        {{ info.value }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </q-card>

                    <!-- Social Links -->
                    <q-card class="glass p-8" flat bordered>
                        <h3 class="text-2xl font-bold mb-6 gradient-text">Redes Sociais</h3>

                        <div class="grid grid-cols-2 gap-4">
                            <a v-for="social in socialLinks" :key="social.label" :href="social.url" target="_blank"
                                rel="noopener noreferrer" :class="[
                                    'flex items-center gap-3 p-4 rounded-lg glass hover:glow-primary transition-all duration-300 hover:-translate-y-1 group no-underline',
                                    social.color
                                ]">
                                <q-icon :name="social.icon"
                                    class="text-muted-foreground group-hover:scale-110 transition-transform"
                                    size="24px" />
                                <span class="font-medium text-foreground">{{ social.label }}</span>
                            </a>
                        </div>
                    </q-card>

                    <!-- Quick Contact -->
                    <q-card class="glass p-8 text-center" flat bordered>
                        <q-icon name="chat" class="text-primary mx-auto mb-4" size="48px" />
                        <h3 class="text-xl font-bold mb-3">Precisa de uma resposta rápida?</h3>
                        <p class="text-muted-foreground mb-6 text-sm">
                            Entre em contato direto via WhatsApp para uma conversa mais ágil
                        </p>
                        <q-btn size="lg" outline color="primary" class="glow-primary" no-caps @click="openWhatsApp">
                            <q-icon name="chat" class="on-left" />
                            WhatsApp
                        </q-btn>
                    </q-card>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

// Reactive data
const isVisible = ref(false)
const isSubmitting = ref(false)
const sectionRef = ref(null)

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
})

// Contact information
const contactInfo = [
    {
        icon: 'mail',
        label: 'Email',
        value: 'contato@seusite.com',
        link: 'mailto:contato@seusite.com'
    },
    {
        icon: 'phone',
        label: 'Telefone',
        value: '+55 (11) 99999-9999',
        link: 'tel:+5511999999999'
    },
    {
        icon: 'location_on',
        label: 'Localização',
        value: 'São Paulo, Brasil',
        link: null
    }
]

// Social links
const socialLinks = [
    {
        icon: 'fab fa-github',
        label: 'GitHub',
        url: 'https://github.com',
        color: 'hover:text-white'
    },
    {
        icon: 'fab fa-linkedin',
        label: 'LinkedIn',
        url: 'https://linkedin.com',
        color: 'hover:text-blue-400'
    },
    {
        icon: 'fab fa-instagram',
        label: 'Instagram',
        url: 'https://instagram.com',
        color: 'hover:text-pink-400'
    },
    {
        icon: 'fab fa-twitter',
        label: 'Twitter',
        url: 'https://twitter.com',
        color: 'hover:text-blue-300'
    }
]

// Intersection Observer
let observer = null

const setupIntersectionObserver = () => {
    observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                isVisible.value = true
            }
        },
        { threshold: 0.2 }
    )

    if (sectionRef.value) {
        observer.observe(sectionRef.value)
    }
}

// Methods
const handleSubmit = async () => {
    isSubmitting.value = true

    // Simulate form submission
    setTimeout(() => {
        isSubmitting.value = false

        $q.notify({
            type: 'positive',
            message: 'Mensagem enviada com sucesso!',
            caption: 'Retornarei seu contato em breve.',
            position: 'top-right',
            timeout: 3000
        })

        // Reset form
        form.value = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }, 2000)
}

const handleContactClick = (info) => {
    if (info.link) {
        window.open(info.link, '_blank')
    }
}

const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999', '_blank')
}

// Lifecycle
onMounted(() => {
    setupIntersectionObserver()
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})
</script>

<style scoped>

/* Unificado com IndexPage.vue */
.contact-section {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%);
}

.gradient-text {
    background: linear-gradient(135deg, #1de9b6 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.glass {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    transition: all 0.3s ease;
}

.glass-input :deep(.q-field__control) {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 8px;
}

.glass-input :deep(.q-field__control):hover {
    background: rgba(255, 255, 255, 0.1);
}

.glass-input :deep(.q-field__outline) {
    border-color: rgba(29, 233, 182, 0.3);
}

.glass-input :deep(.q-field--focused .q-field__outline) {
    border-color: #1de9b6;
    box-shadow: 0 0 10px rgba(29, 233, 182, 0.3);
}

.glass-input :deep(.q-field__label) {
    color: #94a3b8;
}

.glass-input :deep(.q-field--focused .q-field__label) {
    color: #1de9b6;
}

.glass-input :deep(.q-field__native) {
    color: #f1f5f9;
}

.glass-input :deep(.q-field__native::placeholder) {
    color: #64748b;
}

.submit-btn {
    background: linear-gradient(135deg, #1de9b6 0%, #8b5cf6 100%);
    border-radius: 50px;
    font-weight: 600;
    color: #0f172a;
    padding: 12px 32px;
    box-shadow: 0 0 30px rgba(29, 233, 182, 0.3);
    transition: all 0.3s ease;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 40px rgba(29, 233, 182, 0.4);
}

.glow-primary {
    box-shadow: 0 0 20px rgba(29, 233, 182, 0.3);
}

.glow-primary:hover {
    box-shadow: 0 0 30px rgba(29, 233, 182, 0.5);
}

.text-muted-foreground {
    color: #94a3b8;
}

.text-foreground {
    color: #f1f5f9;
}

.text-primary {
    color: #1de9b6;
}

.bg-primary\/10 {
    background-color: rgba(29, 233, 182, 0.1);
}

.bg-accent\/10 {
    background-color: rgba(139, 92, 246, 0.1);
}

.bg-primary\/5 {
    background-color: rgba(29, 233, 182, 0.05);
}

.bg-accent\/5 {
    background-color: rgba(139, 92, 246, 0.05);
}

.rounded-full {
    border-radius: 9999px;
}

.blur-3xl {
    filter: blur(60px);
}

.w-72 {
    width: 18rem;
}

.h-72 {
    height: 18rem;
}

.w-48 {
    width: 12rem;
}

.h-48 {
    height: 12rem;
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.py-20 {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-fade-in-up {
    opacity: 1;
    animation: fadeInUp 1s ease forwards;
}

.animate-slide-in-left {
    opacity: 1;
    animation: slideInLeft 1s ease forwards;
}

.animate-slide-in-right {
    opacity: 1;
    animation: slideInRight 1s ease forwards;
}

/* Utility Classes */
.space-y-6>*+* {
    margin-top: 1.5rem;
}

.space-y-8>*+* {
    margin-top: 2rem;
}

.w-full {
    width: 100%;
}

.no-underline {
    text-decoration: none;
}

/* Responsividade */
@media (max-width: 1024px) {
    .container {
        padding: 0 1rem;
    }
    .py-20 {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }
    .py-20 {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    .space-y-8>*+* {
        margin-top: 1.5rem;
    }
}
</style>