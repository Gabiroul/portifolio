<template>
  <q-page class="hero-page">
    <!-- Background gradiente -->
    <div class="hero-background">
      <!-- Container principal -->
      <div class="hero-container">
        <!-- Avatar/Foto -->
        <div class="avatar-container">
          <div class="avatar-wrapper">
            <!-- Substitua por sua foto -->
            <img src="https://cdn.pixabay.com/photo/2024/05/21/22/26/men-8779249_1280.jpg" alt="Seu Nome"
              class="avatar-img" />
            <!-- Efeito de borda animada -->
            <div class="avatar-border"></div>
          </div>
        </div>

        <!-- Título principal -->
        <div class="hero-title">
          <h1 class="title-text">
            <span class="title-greeting">Olá, eu sou</span>
            <span class="title-name">Gabriel</span>
          </h1>
        </div>

        <!-- Subtítulo -->
        <div class="hero-subtitle">
          <h2 class="subtitle-text">Criador de Soluções</h2>
        </div>

        <!-- Descrição -->
        <div class="hero-description">
          <p class="description-text">
            Especialista em <span class="highlight">edição e melhoramento de imagens</span> e desenvolvedor
            de <span class="highlight">sistemas, sites e portfólios personalizados</span>. Transformo ideias em
            experiências digitais impactantes.
          </p>
        </div>

        <!-- Botões de ação -->
        <div class="hero-actions">
          <q-btn class="action-btn primary-btn" size="lg" no-caps @click="openContact">
            <q-icon name="chat" class="q-mr-sm" />
            Vamos Conversar
          </q-btn>

          <q-btn class="action-btn secondary-btn" size="lg" no-caps outline @click="downloadCV">
            <q-icon name="download" class="q-mr-sm" />
            Download CV
          </q-btn>
        </div>

        <!-- Scroll indicator -->
        <div class="scroll-indicator">
          <div class="scroll-text">Role para descobrir mais</div>
          <q-icon name="keyboard_arrow_down" class="scroll-arrow" />
        </div>
      </div>

      <!-- Elementos decorativos -->
      <div class="decoration-elements">
        <div class="floating-element element-1"></div>
        <div class="floating-element element-2"></div>
        <div class="floating-element element-3"></div>
      </div>
    </div>
    <sobreMim />
    <servicos id="servicos" />
    <contato id="contato" />
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'
import servicos from 'src/components/servicos-info.vue'
import sobreMim from 'src/components/sobreMim.vue'
import contato from 'src/components/meu-contato.vue'

const router = useRouter()

function openContact() {
  // Navegar para seção de contato ou abrir modal
  router.push({ name: 'contato' })
  // ou usar scrollTo para seção na mesma página
  // document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
}

function downloadCV() {
  // Implementar download do CV
  // window.open('/path-to-your-cv.pdf', '_blank')
  console.log('Download CV clicked')
}
</script>

<style scoped>
.hero-page {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.hero-background {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-container {
  max-width: 800px;
  text-align: center;
  padding: 2rem;
  position: relative;
  z-index: 2;
}

/* Avatar */
.avatar-container {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.avatar-wrapper {
  position: relative;
  width: 180px;
  height: 180px;
}

.avatar-img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #1de9b6;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.avatar-img:hover {
  transform: scale(1.05);
}

.avatar-border {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: conic-gradient(#1de9b6, #06b6d4, #8b5cf6, #1de9b6);
  animation: rotate 3s linear infinite;
  z-index: 1;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Títulos */
.hero-title {
  margin-bottom: 1rem;
}

.title-text {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
}

.title-greeting {
  color: #1de9b6;
  display: block;
  font-size: 0.6em;
  margin-bottom: 0.5rem;
}

.title-name {
  color: white;
  display: block;
  background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  margin-bottom: 2rem;
}

.subtitle-text {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 600;
  color: #1de9b6;
  margin: 0;
  background: linear-gradient(135deg, #1de9b6 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Descrição */
.hero-description {
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.description-text {
  font-size: 1.125rem;
  color: #cbd5e1;
  line-height: 1.7;
  margin: 0;
}

.highlight {
  color: #1de9b6;
  font-weight: 600;
}

/* Botões */
.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.action-btn {
  border-radius: 50px;
  padding: 12px 32px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-width: 180px;
}

.primary-btn {
  background: linear-gradient(135deg, #1de9b6 0%, #06b6d4 100%);
  color: #0f172a;
  border: none;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(29, 233, 182, 0.3);
}

.secondary-btn {
  border: 2px solid #1de9b6;
  color: #1de9b6;
  background: transparent;
}

.secondary-btn:hover {
  background: rgba(29, 233, 182, 0.1);
  transform: translateY(-2px);
}

/* Scroll Indicator */
.scroll-indicator {
  color: #94a3b8;
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.scroll-arrow {
  font-size: 2rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

/* Elementos decorativos */
.decoration-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.floating-element {
  position: absolute;
  background: linear-gradient(135deg, #1de9b6, #06b6d4);
  border-radius: 50%;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.element-1 {
  width: 100px;
  height: 100px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  width: 60px;
  height: 60px;
  top: 20%;
  right: 15%;
  animation-delay: 2s;
}

.element-3 {
  width: 80px;
  height: 80px;
  bottom: 30%;
  left: 15%;
  animation-delay: 4s;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .hero-container {
    padding: 1rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .action-btn {
    width: 100%;
    max-width: 280px;
  }

  .description-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .avatar-wrapper {
    width: 140px;
    height: 140px;
  }

  .avatar-img {
    width: 120px;
    height: 120px;
  }
}
</style>