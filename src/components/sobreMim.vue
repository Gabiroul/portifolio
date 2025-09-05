<template>
    <section id="about" ref="sectionRef" class="about-section">
        <!-- Background Effects -->
        <div class="about-background">
            <div class="bg-gradient"></div>
        </div>

        <div class="about-container">
            <!-- Header -->
            <div class="about-header" :class="{ 'animate-fade-in-up': isVisible }">
                <h2 class="about-title">
                    <span class="gradient-text">Sobre Mim</span>
                </h2>
                <p class="about-description">
                    Combinando criatividade e tecnologia para entregar resultados excepcionais
                </p>
            </div>

            <!-- Main Content Grid -->
            <div class="about-content-grid">
                <!-- Text Content -->
                <div class="about-text-content" :class="{ 'animate-slide-in-left': isVisible }">
                    <div class="text-sections">
                        <h3 class="content-subtitle">
                            Transformando ideias em <span class="gradient-text">realidade digital</span>
                        </h3>

                        <p class="content-paragraph">
                            Sou um profissional apaixonado por criar experiências digitais únicas.
                            Especializado em <strong class="highlight-primary">edição e melhoramento de
                                imagens</strong>,
                            trabalho com técnicas avançadas de tratamento fotográfico, retoque digital e criação de
                            conteúdo visual impactante.
                        </p>

                        <p class="content-paragraph">
                            Além disso, desenvolvo <strong class="highlight-accent">sistemas, sites e portfólios
                                personalizados</strong>
                            utilizando as mais modernas tecnologias web. Cada projeto é cuidadosamente planejado para
                            atender às necessidades específicas do cliente e superar expectativas.
                        </p>
                    </div>

                    <!-- Skills Badges -->
                    <div class="skills-container">
                        <q-chip v-for="skill in skills" :key="skill" class="skill-chip" outline color="primary">
                            {{ skill }}
                        </q-chip>
                    </div>
                </div>

                <!-- Highlights Grid -->
                <div class="highlights-grid" :class="{ 'animate-slide-in-right': isVisible }">
                    <q-card v-for="(item, index) in highlights" :key="item.title" class="highlight-card"
                        :style="{ animationDelay: `${index * 0.1}s` }">
                        <q-card-section class="highlight-content">
                            <div class="highlight-header">
                                <div class="icon-wrapper">
                                    <q-icon :name="item.icon" size="24px" class="highlight-icon" />
                                </div>
                                <h4 class="highlight-title">{{ item.title }}</h4>
                            </div>
                            <p class="highlight-description">{{ item.description }}</p>
                        </q-card-section>
                    </q-card>
                </div>
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

// Skills data
const skills = [
    'Photoshop',
    'Lightroom',
    'React',
    'TypeScript',
    'Node.js',
    'Figma',
    'UI/UX'
]

// Highlights data
const highlights = [
    {
        icon: 'image',
        title: 'Edição Profissional',
        description: 'Transformo imagens com técnicas avançadas de edição e retoque'
    },
    {
        icon: 'code',
        title: 'Desenvolvimento Web',
        description: 'Crio sites modernos e sistemas personalizados'
    },
    {
        icon: 'palette',
        title: 'Design Criativo',
        description: 'Desenvolvo identidades visuais marcantes e impactantes'
    },
    {
        icon: 'bolt',
        title: 'Automação',
        description: 'Otimizo processos com soluções tecnológicas inteligentes'
    }
]

// Lifecycle
onMounted(() => {
    observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                isVisible.value = true
            }
        },
        { threshold: 0.3 }
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
.about-section {
    padding: 5rem 0;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
}

/* Background Effects */
.about-background {
    position: absolute;
    inset: 0;
}

.bg-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg,
            rgba(139, 92, 246, 0.05) 0%,
            transparent 50%,
            rgba(29, 233, 182, 0.05) 100%);
}

/* Container */
.about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    position: relative;
    z-index: 10;
}

/* Header */
.about-header {
    text-align: center;
    margin-bottom: 4rem;
    transition: all 1s ease;
    opacity: 0;
}

.about-header.animate-fade-in-up {
    opacity: 1;
    animation: fadeInUp 1s ease forwards;
}

.about-title {
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

.about-description {
    font-size: 1.25rem;
    color: #94a3b8;
    max-width: 48rem;
    margin: 0 auto;
    line-height: 1.6;
}

/* Content Grid */
.about-content-grid {
    display: grid;
    gap: 3rem;
    align-items: center;
}

@media (min-width: 1024px) {
    .about-content-grid {
        grid-template-columns: 1fr 1fr;
    }
}

/* Text Content */
.about-text-content {
    transition: all 1s ease;
    opacity: 0;
}

.about-text-content.animate-slide-in-left {
    opacity: 1;
    animation: slideInLeft 1s ease forwards;
}

.text-sections {
    margin-bottom: 1.5rem;
}

.content-subtitle {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    margin-bottom: 1rem;
    line-height: 1.3;
}

.content-paragraph {
    font-size: 1.125rem;
    color: #94a3b8;
    line-height: 1.7;
    margin-bottom: 1rem;
}

.content-paragraph:last-child {
    margin-bottom: 0;
}

.highlight-primary {
    color: #1de9b6;
    font-weight: 600;
}

.highlight-accent {
    color: #8b5cf6;
    font-weight: 600;
}

/* Skills */
.skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.skill-chip {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(29, 233, 182, 0.3);
    color: #1de9b6;
    font-weight: 500;
    transition: all 0.3s ease;
}

.skill-chip:hover {
    background: rgba(29, 233, 182, 0.1);
    transform: translateY(-2px);
}

/* Highlights Grid */
.highlights-grid {
    display: grid;
    gap: 1.5rem;
    transition: all 1s ease;
    opacity: 0;
}

.highlights-grid.animate-slide-in-right {
    opacity: 1;
    animation: slideInRight 1s ease forwards;
}

@media (min-width: 640px) {
    .highlights-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Highlight Cards */
.highlight-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    transition: all 0.3s ease;
}

.highlight-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(29, 233, 182, 0.15);
    border-color: rgba(29, 233, 182, 0.3);
}

.highlight-content {
    padding: 1.5rem;
}

.highlight-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.icon-wrapper {
    padding: 0.75rem;
    border-radius: 12px;
    background: rgba(29, 233, 182, 0.1);
    margin-right: 1rem;
    flex-shrink: 0;
}

.highlight-icon {
    color: #1de9b6;
}

.highlight-title {
    font-weight: 600;
    color: white;
    margin: 0;
    font-size: 1rem;
}

.highlight-description {
    color: #94a3b8;
    font-size: 0.875rem;
    line-height: 1.5;
    margin: 0;
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

/* Responsive */
@media (max-width: 1024px) {
    .about-content-grid {
        gap: 2rem;
    }
}

@media (max-width: 768px) {
    .about-section {
        padding: 3rem 0;
    }

    .about-container {
        padding: 0 1rem;
    }

    .about-content-grid {
        gap: 2rem;
    }

    .highlights-grid {
        grid-template-columns: 1fr;
    }

    .content-paragraph {
        font-size: 1rem;
    }
}

@media (max-width: 640px) {
    .highlights-grid {
        gap: 1rem;
    }

    .highlight-content {
        padding: 1.25rem;
    }

    .skills-container {
        justify-content: center;
    }
}
</style>