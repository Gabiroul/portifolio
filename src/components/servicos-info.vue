<template>
    <section ref="sectionRef" class="services-section">
        <!-- Background Effects -->
        <div class="services-background">
            <div class="bg-gradient"></div>
            <div class="floating-bg-accent"></div>
        </div>

        <div class="services-container">
            <!-- Header -->
            <div class="services-header" :class="{ 'animate-fade-in-up': isVisible }">
                <h2 class="services-title">
                    Meus <span class="gradient-text">Serviços</span>
                </h2>
                <p class="services-description">
                    Soluções completas e personalizadas para elevar sua presença digital ao próximo nível
                </p>
            </div>

            <!-- Services Grid -->
            <div class="services-grid">
                <q-card v-for="(service, index) in services" :key="service.title" class="service-card" :class="{
                    'animate-fade-in-up': isVisible,
                    'popular-card': service.popular
                }" :style="{ animationDelay: `${index * 0.1}s` }">
                    <!-- Popular Badge -->
                    <!-- <div v-if="service.popular" class="popular-badge">
                        <q-icon name="star" size="12px" />
                        Mais Popular
                    </div> -->

                    <q-card-section class="service-content">
                        <!-- Icon and Title -->
                        <div class="service-header">
                            <div class="icon-container">
                                <q-icon :name="service.icon" size="32px" class="service-icon" />
                            </div>
                            <h3 class="service-title">{{ service.title }}</h3>
                            <p class="service-desc">{{ service.description }}</p>
                        </div>

                        <!-- Features -->
                        <div class="service-features">
                            <div v-for="feature in service.features" :key="feature" class="feature-item">
                                <div class="feature-dot"></div>
                                <span class="feature-text">{{ feature }}</span>
                            </div>
                        </div>

                        <!-- CTA Button -->
                        <q-btn outline no-caps class="service-btn" @click="learnMore(service)">
                            Saiba Mais
                            <q-icon name="arrow_forward" class="btn-arrow" />
                        </q-btn>
                    </q-card-section>
                </q-card>
            </div>

            <!-- Bottom CTA -->
            <div class="bottom-cta" :class="{ 'animate-fade-in-up': isVisible }">
                <p class="cta-text">
                    Precisa de algo específico? Vamos conversar sobre seu projeto!
                </p>
                <q-btn size="lg" no-caps class="cta-button" @click="requestQuote">
                    Solicitar Orçamento Personalizado
                </q-btn>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive data
const isVisible = ref(false)
const sectionRef = ref(null)
let observer = null

// Services data
const services = [
    {
        icon: 'image',
        title: 'Edição de Imagens',
        description: 'Retoque profissional, tratamento de cores, remoção de objetos e criação de composições artísticas.',
        features: ['Retoque Avançado', 'Correção de Cores', 'Remoção de Fundo', 'Composição Artística'],
        popular: true
    },
    {
        icon: 'code',
        title: 'Desenvolvimento Web',
        description: 'Sites modernos, sistemas personalizados e aplicações web responsivas com as melhores tecnologias.',
        features: ['React/Next.js', 'TypeScript', 'API Development', 'Banco de Dados'],
        popular: false
    },
    {
        icon: 'palette',
        title: 'Design & Branding',
        description: 'Identidade visual completa, logotipos únicos e materiais gráficos que marcam presença.',
        features: ['Logo Design', 'Identidade Visual', 'Material Gráfico', 'UI/UX Design'],
        popular: false
    },
    {
        icon: 'smartphone',
        title: 'Apps Mobile',
        description: 'Aplicativos modernos e intuitivos para Android e iOS com foco na experiência do usuário.',
        features: ['React Native', 'Flutter', 'App Store', 'Push Notifications'],
        popular: false
    },
    {
        icon: 'language',
        title: 'SEO & Performance',
        description: 'Otimização completa para mecanismos de busca e performance excepcional em todos os dispositivos.',
        features: ['SEO Técnico', 'Core Web Vitals', 'Analytics', 'Velocidade'],
        popular: false
    },
    {
        icon: 'bolt',
        title: 'Automação',
        description: 'Soluções inteligentes para automatizar processos e aumentar a produtividade do seu negócio.',
        features: ['Scripts Personalizados', 'Integração APIs', 'Workflows', 'Chatbots'],
        popular: false
    }
]

// Methods
const learnMore = (service) => {
    console.log('Learn more about:', service.title)
    // Implementar ação específica do serviço
}

const requestQuote = () => {
    console.log('Request quote clicked')
    // Navegar para formulário ou abrir modal
}

// Lifecycle
onMounted(() => {
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
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})
</script>

<style scoped>
.services-section {
    padding: 5rem 0;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
}

/* Background Effects */
.services-background {
    position: absolute;
    inset: 0;
}

.bg-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg,
            rgba(29, 233, 182, 0.05) 0%,
            transparent 50%,
            rgba(139, 92, 246, 0.1) 100%);
}

.floating-bg-accent {
    position: absolute;
    top: 33.333%;
    right: 25%;
    width: 288px;
    height: 288px;
    background: rgba(139, 92, 246, 0.05);
    border-radius: 50%;
    filter: blur(60px);
}

/* Container */
.services-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    position: relative;
    z-index: 10;
}

/* Header */
.services-header {
    text-align: center;
    margin-bottom: 4rem;
    transition: all 1s ease;
    opacity: 0;
}

.services-header.animate-fade-in-up {
    opacity: 1;
    animation: fadeInUp 1s ease forwards;
}

.services-title {
    font-size: clamp(2.5rem, 5vw, 3rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: white;
}

.gradient-text {
    background: linear-gradient(135deg, #1de9b6 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.services-description {
    font-size: 1.25rem;
    color: #94a3b8;
    max-width: 48rem;
    margin: 0 auto;
    line-height: 1.6;
}

/* Grid */
.services-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
    margin-bottom: 4rem;
}

@media (min-width: 768px) {
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .services-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Service Cards */
.service-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    transition: all 0.5s ease;
    position: relative;
    overflow: hidden;
    opacity: 0;
}

.service-card.animate-fade-in-up {
    opacity: 1;
    animation: fadeInUp 1s ease forwards;
}

.service-card:hover {
    transform: translateY(-16px);
    box-shadow: 0 20px 40px rgba(29, 233, 182, 0.2);
    border-color: rgba(29, 233, 182, 0.3);
}

.service-card.popular-card {
    border-color: rgba(29, 233, 182, 0.5);
    box-shadow: 0 0 30px rgba(29, 233, 182, 0.1);
}

/* Popular Badge */
.popular-badge {
    position: absolute;
    top: -12px;
    left: 24px;
    background: linear-gradient(135deg, #1de9b6 0%, #8b5cf6 100%);
    color: #0f172a;
    padding: 4px 16px;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 4px;
    z-index: 10;
}

/* Service Content */
.service-content {
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.service-header {
    margin-bottom: 1.5rem;
}

.icon-container {
    display: inline-flex;
    padding: 1rem;
    border-radius: 16px;
    background: linear-gradient(135deg,
            rgba(29, 233, 182, 0.1) 0%,
            rgba(139, 92, 246, 0.1) 100%);
    margin-bottom: 1rem;
    transition: transform 0.3s ease;
}

.service-card:hover .icon-container {
    transform: scale(1.1);
}

.service-icon {
    color: #1de9b6;
}

.service-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.75rem;
}

.service-desc {
    color: #94a3b8;
    line-height: 1.6;
    margin: 0;
}

/* Features */
.service-features {
    margin-bottom: 2rem;
    flex-grow: 1;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
}

.feature-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #1de9b6;
    flex-shrink: 0;
}

.feature-text {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.8);
}

/* Service Button */
.service-btn {
    width: 100%;
    border: 1px solid rgba(29, 233, 182, 0.3);
    color: #1de9b6;
    border-radius: 12px;
    font-weight: 600;
    padding: 12px 24px;
    transition: all 0.3s ease;
}

.service-btn:hover {
    background: #1de9b6;
    color: #0f172a;
    border-color: #1de9b6;
}

.btn-arrow {
    margin-left: 8px;
    transition: transform 0.3s ease;
}

.service-btn:hover .btn-arrow {
    transform: translateX(4px);
}

/* Bottom CTA */
.bottom-cta {
    text-align: center;
    transition: all 1s ease;
    opacity: 0;
}

.bottom-cta.animate-fade-in-up {
    opacity: 1;
    animation: fadeInUp 1s ease forwards;
}

.cta-text {
    color: #94a3b8;
    margin-bottom: 1.5rem;
    font-size: 1rem;
}

.cta-button {
    background: linear-gradient(135deg, #1de9b6 0%, #8b5cf6 100%);
    color: #0f172a;
    font-weight: 600;
    padding: 12px 32px;
    border-radius: 50px;
    box-shadow: 0 0 30px rgba(29, 233, 182, 0.3);
    transition: all 0.3s ease;
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 40px rgba(29, 233, 182, 0.4);
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

/* Responsive */
@media (max-width: 768px) {
    .services-section {
        padding: 3rem 0;
    }

    .services-container {
        padding: 0 1rem;
    }

    .services-grid {
        gap: 1.5rem;
    }

    .service-content {
        padding: 1.5rem;
    }
}
</style>