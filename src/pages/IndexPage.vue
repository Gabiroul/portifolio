<template>
  <q-page class="portfolio">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-content">
        <div class="logo">
          <span class="logo-text">GM</span>
        </div>
        <div class="nav-links">
          <a href="#home" class="nav-link active">Início</a>
          <a href="#about" class="nav-link">Sobre</a>
          <a href="#work" class="nav-link">Trabalhos</a>
          <a href="#contact" class="nav-link">Contato</a>
        </div>
        <div class="nav-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-grid">
        <div class="hero-content">
          <div class="hero-badge">
            <div class="badge-dot"></div>
            Disponível para novos projetos
          </div>

          <h1 class="hero-title">
            Desenvolvedor
            <span class="title-gradient">& Editor Visual</span>
          </h1>

          <p class="hero-description">
            Transformo ideias em experiências digitais excepcionais.
            Especialista em desenvolvimento web e edição de imagens profissional.
          </p>

          <div class="hero-actions">
            <button class="btn-primary" @click="scrollTo('work')">
              Ver Portfolio
              <q-icon name="arrow_forward" />
            </button>
            <button class="btn-secondary" @click="scrollTo('contact')">
              Fale Comigo
            </button>
          </div>

          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">50+</span>
              <span class="stat-label">Projetos</span>
            </div>
            <div class="stat">
              <span class="stat-number">3+</span>
              <span class="stat-label">Anos Exp.</span>
            </div>
            <div class="stat">
              <span class="stat-number">100%</span>
              <span class="stat-label">Satisfação</span>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="profile-card">
            <div class="profile-bg"></div>
            <img
              src="https://lh3.googleusercontent.com/gg-dl/AJfQ9KSEcS93zsSnsK2X3sYmKUVMbYLewv7X5ebP01wWA0OO3gdssC9Qk1mEuLYDYdHBJvvTp6rhGu2c9Y6yxtn-lKqMDCRvjWUIdAJ-uiroA4C4OEaMgVZv-N9SlWnF9MmWWLlTal_omc0CIzfV8Fd0BxO4xUS3WkCdWchgMRtvieiSfD3H=s1024"
              alt="Martins - Desenvolvedor" class="profile-image" />
            <div class="profile-info">
              <h3>Martins Silva</h3>
              <p>Full Stack Developer</p>
            </div>
          </div>

          <div class="floating-elements">
            <div class="element element-1">
              <q-icon name="code" />
            </div>
            <div class="element element-2">
              <q-icon name="image" />
            </div>
            <div class="element element-3">
              <q-icon name="design_services" />
            </div>
          </div>
        </div>
      </div>

      <div class="scroll-indicator" @click="scrollTo('about')">
        <div class="scroll-line"></div>
        <span>Role para baixo</span>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <div class="section-tag">Sobre Mim</div>
            <h2 class="section-title">
              Criando o futuro através
              <span class="text-gradient">da tecnologia</span>
            </h2>
            <p class="about-description">
              Sou desenvolvedor full-stack apaixonado por criar soluções inovadoras
              e especialista em edição visual. Combino código limpo com design
              impecável para entregar experiências únicas.
            </p>

            <div class="skills-preview">
              <div class="skill-item">
                <q-icon name="code" />
                <span>Desenvolvimento</span>
              </div>
              <div class="skill-item">
                <q-icon name="brush" />
                <span>Design UI/UX</span>
              </div>
              <div class="skill-item">
                <q-icon name="image" />
                <span>Edição Visual</span>
              </div>
              <div class="skill-item">
                <q-icon name="smartphone" />
                <span>Mobile</span>
              </div>
            </div>
          </div>

          <div class="about-visual">
            <div class="tech-stack">
              <div class="tech-category">
                <h4>Frontend</h4>
                <div class="tech-list">
                  <span>Vue.js</span>
                  <span>React</span>
                  <span>TypeScript</span>
                </div>
              </div>
              <div class="tech-category">
                <h4>Backend</h4>
                <div class="tech-list">
                  <span>Node.js</span>
                  <span>Python</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
              <div class="tech-category">
                <h4>Design</h4>
                <div class="tech-list">
                  <span>Photoshop</span>
                  <span>Figma</span>
                  <span>Lightroom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Section -->
    <section id="work" class="work">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">Portfolio</div>
          <h2 class="section-title">
            Projetos em
            <span class="text-gradient">Destaque</span>
          </h2>
        </div>

        <div class="work-filters">
          <button v-for="filter in filters" :key="filter" :class="['filter-btn', { active: activeFilter === filter }]"
            @click="setFilter(filter)">
            {{ filter }}
          </button>
        </div>

        <div class="projects-grid">
          <div v-for="project in filteredProjects" :key="project.id" class="project-card" @click="openProject(project)">
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay">
                <button class="project-btn">
                  <q-icon name="launch" />
                </button>
              </div>
            </div>
            <div class="project-content">
              <div class="project-meta">
                <span class="project-category">{{ project.category }}</span>
                <span class="project-year">{{ project.year }}</span>
              </div>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <div class="section-tag">Contato</div>
            <h2 class="section-title">
              Vamos criar algo
              <span class="text-gradient">incrível juntos</span>
            </h2>
            <p class="contact-description">
              Tenho uma ideia? Precisa de ajuda com um projeto?
              Vamos conversar sobre como posso transformar sua visão em realidade.
            </p>

            <div class="contact-methods">
              <a href="mailto:martins@exemplo.com" class="contact-method">
                <div class="method-icon">
                  <q-icon name="email" />
                </div>
                <div class="method-info">
                  <span class="method-label">Email</span>
                  <span class="method-value">martins@exemplo.com</span>
                </div>
              </a>

              <a href="tel:+5511999999999" class="contact-method">
                <div class="method-icon">
                  <q-icon name="phone" />
                </div>
                <div class="method-info">
                  <span class="method-label">WhatsApp</span>
                  <span class="method-value">+55 (11) 99999-9999</span>
                </div>
              </a>

              <div class="contact-method">
                <div class="method-icon">
                  <q-icon name="location_on" />
                </div>
                <div class="method-info">
                  <span class="method-label">Localização</span>
                  <span class="method-value">São Paulo, Brasil</span>
                </div>
              </div>
            </div>

            <div class="social-links">
              <a href="#" class="social-link">
                <q-icon name="fab fa-github" />
              </a>
              <a href="#" class="social-link">
                <q-icon name="fab fa-linkedin" />
              </a>
              <a href="#" class="social-link">
                <q-icon name="fab fa-instagram" />
              </a>
              <a href="#" class="social-link">
                <q-icon name="fab fa-behance" />
              </a>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label>Nome</label>
                <input v-model="form.name" type="text" placeholder="Seu nome completo" required />
              </div>

              <div class="form-group">
                <label>Email</label>
                <input v-model="form.email" type="email" placeholder="seu@email.com" required />
              </div>

              <div class="form-group">
                <label>Serviço</label>
                <select v-model="form.service" required>
                  <option value="">Selecione um serviço</option>
                  <option value="web">Desenvolvimento Web</option>
                  <option value="mobile">App Mobile</option>
                  <option value="design">Design UI/UX</option>
                  <option value="photo">Edição de Fotos</option>
                </select>
              </div>

              <div class="form-group">
                <label>Mensagem</label>
                <textarea v-model="form.message" placeholder="Conte-me sobre seu projeto..." rows="4"
                  required></textarea>
              </div>

              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Enviar Mensagem</span>
                <span v-else>Enviando...</span>
                <q-icon name="send" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="logo">
              <span class="logo-text">M</span>
            </div>
            <p>Desenvolvendo o futuro, um projeto por vez.</p>
          </div>

          <div class="footer-links">
            <div class="link-group">
              <h4>Navegação</h4>
              <a href="#home">Início</a>
              <a href="#about">Sobre</a>
              <a href="#work">Trabalhos</a>
              <a href="#contact">Contato</a>
            </div>

            <div class="link-group">
              <h4>Serviços</h4>
              <a href="#">Desenvolvimento Web</a>
              <a href="#">Apps Mobile</a>
              <a href="#">Design UI/UX</a>
              <a href="#">Edição de Fotos</a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} Martins. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'

// State
const activeFilter = ref('Todos')
const isSubmitting = ref(false)

const filters = ['Todos', 'Web', 'Mobile', 'Design', 'Foto']

const projects = ref([
  {
    id: 1,
    title: 'E-commerce Moderno',
    description: 'Plataforma completa de vendas online com design responsivo e sistema de pagamento.',
    category: 'Web',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: ['Vue.js', 'Node.js', 'Stripe']
  },
  {
    id: 2,
    title: 'App de Fitness',
    description: 'Aplicativo mobile para acompanhamento de treinos e nutrição.',
    category: 'Mobile',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    tags: ['React Native', 'Firebase']
  },
  {
    id: 3,
    title: 'Campanha Fashion',
    description: 'Edição profissional de fotos para campanha de moda com retoque avançado.',
    category: 'Foto',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop',
    tags: ['Photoshop', 'Lightroom']
  },
  {
    id: 4,
    title: 'Dashboard Analytics',
    description: 'Interface moderna para visualização de dados e métricas empresariais.',
    category: 'Design',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['Figma', 'React', 'D3.js']
  }
])

const form = ref({
  name: '',
  email: '',
  service: '',
  message: ''
})

// Computed
const filteredProjects = computed(() => {
  if (activeFilter.value === 'Todos') return projects.value
  return projects.value.filter(project => project.category === activeFilter.value)
})

// Methods
function setFilter(filter) {
  activeFilter.value = filter
}

function scrollTo(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

function openProject(project) {
  // Implementar modal ou navegação
  console.log('Abrir projeto:', project.title)
}

async function submitForm() {
  isSubmitting.value = true

  // Simular envio
  setTimeout(() => {
    alert('Mensagem enviada com sucesso! Retornarei em breve.')
    form.value = { name: '', email: '', service: '', message: '' }
    isSubmitting.value = false
  }, 2000)
}

function toggleMobileMenu() {
  // Implementar menu mobile
}
</script>

<style scoped>
/* Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.portfolio {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #0a0a0a;
  color: #ffffff;
  line-height: 1.6;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  padding: 1rem 0;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: rotate(5deg) scale(1.05);
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #888;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover,
.nav-link.active {
  color: #667eea;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #667eea;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: #fff;
  border-radius: 2px;
  transition: 0.3s;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  padding: 120px 0 60px;
  position: relative;
  background: radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 70%);
}

.hero-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 80vh;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  color: #667eea;
  font-size: 0.875rem;
  margin-bottom: 2rem;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.title-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-size: 1.25rem;
  color: #888;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: transparent;
  border: 2px solid #333;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  border-color: #667eea;
  color: #667eea;
}

.hero-stats {
  display: flex;
  gap: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.25rem;
}

.stat-label {
  color: #888;
  font-size: 0.875rem;
}

/* Hero Visual */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2rem;
  text-align: center;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-10px);
}

.profile-bg {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, #667eea, #764ba2, #667eea);
  border-radius: 50%;
  opacity: 0.1;
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 20px;
  object-fit: cover;
  border: 3px solid rgba(102, 126, 234, 0.3);
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.profile-info h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.profile-info p {
  color: #888;
  font-size: 0.875rem;
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.element {
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(102, 126, 234, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  animation: float 6s ease-in-out infinite;
}

.element-1 {
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.element-2 {
  bottom: 20%;
  left: 0%;
  animation-delay: 2s;
}

.element-3 {
  top: 60%;
  right: -10%;
  animation-delay: 4s;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #888;
  cursor: pointer;
  transition: color 0.3s ease;
}

.scroll-indicator:hover {
  color: #667eea;
}

.scroll-line {
  width: 2px;
  height: 40px;
  background: linear-gradient(to bottom, #667eea, transparent);
  animation: scroll 2s ease-in-out infinite;
}

@keyframes scroll {

  0%,
  100% {
    opacity: 0.3;
  }

  50% {
    opacity: 1;
  }
}

/* About Section */
.about {
  padding: 120px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.section-tag {
  display: inline-block;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.text-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.about-description {
  color: #888;
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.skills-preview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #888;
}

.skill-item .q-icon {
  color: #667eea;
  font-size: 1.25rem;
}

.tech-stack {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
}

.tech-category {
  margin-bottom: 2rem;
}

.tech-category:last-child {
  margin-bottom: 0;
}

.tech-category h4 {
  color: #667eea;
  margin-bottom: 1rem;
  font-size: 1.125rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-list span {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
}

/* Work Section */
.work {
  padding: 120px 0;
  background: #0a0a0a;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.work-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  background: transparent;
  border: 2px solid #333;
  color: #888;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

filter-btn:hover,
filter-btn.active {
  border-color: #667eea;
  color: #667eea;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  box-shadow: 0 2px 12px rgba(102, 126, 234, 0.07);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
}

.project-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(10, 10, 10, 0.7));
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-btn {
  background: #667eea;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
  transition: background 0.2s;
}

.project-btn:hover {
  background: #764ba2;
}

.project-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 0.5rem;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.project-description {
  font-size: 1rem;
  color: #aaa;
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Contact Section */
.contact {
  padding: 120px 0;
  background: linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: flex-start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-description {
  color: #888;
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: #fff;
  background: rgba(102, 126, 234, 0.07);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  transition: background 0.2s;
}

.contact-method:hover {
  background: rgba(102, 126, 234, 0.15);
}

.method-icon {
  background: rgba(102, 126, 234, 0.15);
  border-radius: 50%;
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.method-label {
  font-size: 0.95rem;
  color: #888;
}

.method-value {
  font-size: 1.05rem;
  font-weight: 600;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  color: #888;
  font-size: 1.5rem;
  transition: color 0.2s;
}

.social-link:hover {
  color: #667eea;
}

.contact-form-wrapper {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(102, 126, 234, 0.07);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: #888;
  font-size: 1rem;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid #333;
  font-size: 1rem;
  background: #18181b;
  color: #fff;
  resize: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
}

.submit-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

/* Footer */
.footer {
  background: #18181b;
  color: #888;
  padding: 3rem 0 1rem 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.footer-brand .logo {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-brand .logo-text {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
}

.footer-links {
  display: flex;
  gap: 3rem;
}

.link-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.link-group h4 {
  color: #667eea;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.link-group a {
  color: #888;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.link-group a:hover {
  color: #667eea;
}

.footer-bottom {
  text-align: center;
  color: #888;
  font-size: 0.95rem;
}

/* Mobile Styles */
@media (max-width: 900px) {

  .hero-grid,
  .about-grid,
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    flex-direction: column;
    gap: 2rem;
  }
}

@media (max-width: 700px) {
  .container {
    padding: 0 1rem;
  }

  .navbar {
    padding: 0.5rem 0;
  }

  .nav-content {
    padding: 0 1rem;
  }

  .hero {
    padding: 80px 0 40px;
  }

  .about,
  .work,
  .contact {
    padding: 60px 0;
  }

  .profile-card {
    padding: 1rem;
  }
}

@media (max-width: 500px) {

  .hero-title,
  .section-title {
    font-size: 2rem !important;
  }

  .profile-image {
    width: 100px;
    height: 100px;
  }

  .footer-content {
    gap: 1rem;
  }
}

/* Mobile Menu Toggle (future implementation) */
.nav-toggle {
  display: flex;
}

.nav-links {
  display: none;
}

@media (min-width: 700px) {
  .nav-links {
    display: flex;
  }

  .nav-toggle {
    display: none;
  }
}
</style>
