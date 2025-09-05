<template>
    <section id="contato" ref="sectionRef" class="q-py-xl relative overflow-hidden">
        <!-- Background Effects -->
        <div class="absolute-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div class="absolute top-1/4 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div class="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

        <div class="container q-px-md">
            <!-- Título -->
            <div class="text-center q-mb-xl transition-all duration-1000"
                :class="isVisible ? 'animate-fade-in-up' : 'opacity-0'">
                <h2 class="text-h3 text-weight-bold q-mb-md">
                    Vamos <span class="gradient-text">Conversar</span>
                </h2>
                <p class="text-subtitle1 text-grey-5 max-w-3xl q-mx-auto">
                    Pronto para transformar suas ideias em realidade? Entre em contato e vamos criar algo incrível
                    juntos!
                </p>
            </div>

            <div class="row q-col-gutter-xl items-start max-w-6xl q-mx-auto">
                <!-- Formulário -->
                <div class="col-12 col-lg-6" :class="isVisible ? 'animate-slide-in-left' : 'opacity-0'">
                    <q-card class="q-pa-xl glass">
                        <div class="q-mb-lg">
                            <h3 class="text-h5 text-weight-bold gradient-text q-mb-sm">
                                Envie uma mensagem
                            </h3>
                            <p class="text-grey-5">
                                Preencha o formulário abaixo e retornarei seu contato o mais breve possível.
                            </p>
                        </div>

                        <q-form @submit.prevent="handleSubmit" class="q-gutter-md">
                            <div class="row q-col-gutter-md">
                                <div class="col-12 col-md-6">
                                    <q-input v-model="form.name" label="Nome *" outlined dense class="glass-input"
                                        required />
                                </div>
                                <div class="col-12 col-md-6">
                                    <q-input v-model="form.email" label="Email *" type="email" outlined dense
                                        class="glass-input" required />
                                </div>
                            </div>

                            <q-input v-model="form.subject" label="Assunto *" outlined dense class="glass-input"
                                required />
                            <q-input v-model="form.message" type="textarea" label="Mensagem *" outlined dense autogrow
                                class="glass-input" required />

                            <q-btn type="submit" class="full-width bg-gradient text-white text-weight-bold glow-primary"
                                size="lg" :loading="isSubmitting">
                                <template v-slot:loading>
                                    <q-spinner-hourglass size="24px" class="q-mr-sm" />
                                    Enviando...
                                </template>
                                <q-icon name="send" class="q-mr-sm" />
                                Enviar Mensagem
                            </q-btn>
                        </q-form>
                    </q-card>
                </div>

                <!-- Informações de contato + redes sociais -->
                <div class="col-12 col-lg-6 q-gutter-lg" :class="isVisible ? 'animate-slide-in-right' : 'opacity-0'">
                    <!-- Informações -->
                    <q-card class="q-pa-lg glass">
                        <h3 class="text-h6 text-weight-bold gradient-text q-mb-md">Informações de Contato</h3>
                        <div v-for="info in contactInfo" :key="info.label" class="row items-center q-mb-md">
                            <div class="q-pa-sm bg-primary/10 rounded-borders q-mr-md">
                                <q-icon :name="info.icon" size="24px" color="primary" />
                            </div>
                            <div>
                                <div class="text-caption text-grey-5">{{ info.label }}</div>
                                <a v-if="info.link" :href="info.link" target="_blank"
                                    class="text-body1 text-white hover:text-primary">
                                    {{ info.value }}
                                </a>
                                <div v-else class="text-body1 text-white">{{ info.value }}</div>
                            </div>
                        </div>
                    </q-card>

                    <!-- Redes sociais -->
                    <q-card class="q-pa-lg glass">
                        <h3 class="text-h6 text-weight-bold gradient-text q-mb-md">Redes Sociais</h3>
                        <div class="row q-col-gutter-md">
                            <div v-for="social in socialLinks" :key="social.label" class="col-6">
                                <a :href="social.url" target="_blank"
                                    class="row items-center q-pa-sm glass hover:glow-primary transition-all">
                                    <q-icon :name="social.icon" size="24px" class="q-mr-sm text-grey-5" />
                                    <span class="text-body2">{{ social.label }}</span>
                                </a>
                            </div>
                        </div>
                    </q-card>

                    <!-- Contato rápido -->
                    <q-card class="q-pa-lg glass text-center">
                        <q-icon name="chat" size="48px" color="primary" class="q-mb-sm" />
                        <h3 class="text-subtitle1 text-weight-bold q-mb-sm">Precisa de uma resposta rápida?</h3>
                        <p class="text-caption text-grey-5 q-mb-md">
                            Entre em contato direto via WhatsApp para uma conversa mais ágil
                        </p>
                        <q-btn outline color="primary" icon="chat" size="lg" class="glow-primary"
                            href="https://wa.me/5511999999999" target="_blank">
                            WhatsApp
                        </q-btn>
                    </q-card>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const isVisible = ref(false);
const isSubmitting = ref(false);
const sectionRef = ref(null);

const form = ref({
    name: "",
    email: "",
    subject: "",
    message: "",
});

const contactInfo = [
    { icon: "mail", label: "Email", value: "contato@seusite.com", link: "mailto:contato@seusite.com" },
    { icon: "phone", label: "Telefone", value: "+55 (11) 99999-9999", link: "tel:+5511999999999" },
    { icon: "place", label: "Localização", value: "São Paulo, Brasil", link: null },
];

const socialLinks = [
    { icon: "mdi-github", label: "GitHub", url: "https://github.com" },
    { icon: "mdi-linkedin", label: "LinkedIn", url: "https://linkedin.com" },
    { icon: "mdi-instagram", label: "Instagram", url: "https://instagram.com" },
    { icon: "mdi-twitter", label: "Twitter", url: "https://twitter.com" },
];

const handleSubmit = () => {
    isSubmitting.value = true;
    setTimeout(() => {
        isSubmitting.value = false;
        $q.notify({
            type: "positive",
            message: "Mensagem enviada com sucesso!",
            caption: "Retornarei seu contato em breve.",
            position: "top",
        });
    }, 2000);
};

let observer;
onMounted(() => {
    observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) isVisible.value = true;
        },
        { threshold: 0.2 }
    );

    if (sectionRef.value) observer.observe(sectionRef.value);
});

onBeforeUnmount(() => {
    if (observer) observer.disconnect();
});
</script>

<style scoped>
.glass {
    backdrop-filter: blur(12px);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    transition: 0.3s;
}

/* olocoodo */
.glass:hover {
    background: rgba(255, 255, 255, 0.08);
}

.glass-input {
    background: rgba(255, 255, 255, 0.03);
}

.gradient-text {
    background: linear-gradient(90deg, #00c6ff, #0072ff);
    -webkit-background-clip: text;
    /* Safari, Chrome */
    background-clip: text;
    /* Padrão (Firefox e futuros) */
    -webkit-text-fill-color: transparent;
}

.animate-fade-in-up {
    animation: fadeInUp 1s ease forwards;
}

.animate-slide-in-left {
    animation: slideInLeft 1s ease forwards;
}

.animate-slide-in-right {
    animation: slideInRight 1s ease forwards;
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

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
