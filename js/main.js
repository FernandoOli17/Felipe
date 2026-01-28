// ===================================
// CANTO ESTÚDIO — MAIN.JS
// Interações e funcionalidades
// ===================================

// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    initSmoothScroll();
    initRevealOnScroll();
    initPortfolio();
    initTabs();
    initContactForm();
});

// ===================================
// HEADER STICKY
// ===================================
function initHeader() {
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ===================================
// MOBILE MENU
// ===================================
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav__link');

    if (!menuToggle || !mainNav) return;

    menuToggle.addEventListener('click', () => {
        const isActive = mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isActive);
        document.body.classList.toggle('no-scroll', isActive);
    });

    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        });
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
            mainNav.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        }
    });
}

// ===================================
// SMOOTH SCROLL
// ===================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#' || href === '') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// REVEAL ON SCROLL (Intersection Observer)
// ===================================
function initRevealOnScroll() {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
}

// ===================================
// PORTFÓLIO (Grid + Modal)
// ===================================
function initPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');

    if (!portfolioGrid || !modal || !window.projects) return;

    // Renderiza o grid de projetos
    renderPortfolioGrid();

    // Funções do modal
    function openModal(project) {
        modal.classList.add('active');
        document.body.classList.add('no-scroll');
        renderModalContent(project);

        // Scroll para o topo do modal
        setTimeout(() => {
            modal.querySelector('.modal__container').scrollTop = 0;
        }, 100);
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    // Event listeners
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Fecha com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function renderPortfolioGrid() {
        portfolioGrid.innerHTML = '';

        window.projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card reveal-up';
            card.innerHTML = `
                <div class="project-card__image">
                    <img src="${project.cover}" alt="${project.title}" loading="lazy">
                </div>
                <div class="project-card__content">
                    <h3 class="project-card__title">${project.title}</h3>
                    <p class="project-card__tags">${project.tags.join(' • ')}</p>
                </div>
            `;

            card.addEventListener('click', () => openModal(project));
            portfolioGrid.appendChild(card);
        });

        // Re-observa os novos elementos
        initRevealOnScroll();
    }

    function renderModalContent(project) {
        modalContent.innerHTML = `
            <div class="modal__header">
                <h2 class="modal__title">${project.title}</h2>
                <p class="modal__tags">${project.tags.join(' • ')}</p>
                <p class="modal__description">${project.description}</p>
                <p class="modal__scope"><strong>Escopo:</strong> ${project.scope}</p>
            </div>
            <div class="modal__gallery">
                ${project.gallery.map(img => `
                    <img src="${img}" alt="${project.title}" loading="lazy">
                `).join('')}
            </div>
        `;
    }
}

// ===================================
// TABS (Entregas/Serviços)
// ===================================
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab__button');
    const tabPanels = document.querySelectorAll('.tab__panel');

    if (!tabButtons.length) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active de todos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Adiciona active no clicado
            button.classList.add('active');
            const targetPanel = document.getElementById(`tab-${targetTab}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

// ===================================
// FORMULÁRIO DE CONTATO (Validação)
// ===================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const feedback = document.getElementById('formFeedback');

    if (!form) return;

    // Validação em tempo real
    nameInput.addEventListener('blur', () => validateField(nameInput, 'nameError', 'Nome é obrigatório'));
    emailInput.addEventListener('blur', () => validateEmail(emailInput));
    messageInput.addEventListener('blur', () => validateField(messageInput, 'messageError', 'Mensagem é obrigatória'));

    // Submit
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Valida todos os campos
        const isNameValid = validateField(nameInput, 'nameError', 'Nome é obrigatório');
        const isEmailValid = validateEmail(emailInput);
        const isMessageValid = validateField(messageInput, 'messageError', 'Mensagem é obrigatória');

        if (!isNameValid || !isEmailValid || !isMessageValid) {
            showFeedback('Por favor, corrija os erros antes de enviar.', 'error');
            return;
        }

        // Simula envio (sem backend)
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        // Simula delay de envio
        setTimeout(() => {
            showFeedback('Mensagem enviada com sucesso! Retornaremos em breve.', 'success');
            form.reset();
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar mensagem';

            // Remove feedback após 5s
            setTimeout(() => {
                feedback.style.display = 'none';
            }, 5000);
        }, 1500);
    });

    function validateField(input, errorId, errorMessage) {
        const errorElement = document.getElementById(errorId);
        const value = input.value.trim();

        if (!value) {
            input.classList.add('error');
            errorElement.textContent = errorMessage;
            return false;
        } else {
            input.classList.remove('error');
            errorElement.textContent = '';
            return true;
        }
    }

    function validateEmail(input) {
        const errorElement = document.getElementById('emailError');
        const value = input.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!value) {
            input.classList.add('error');
            errorElement.textContent = 'E-mail é obrigatório';
            return false;
        } else if (!emailRegex.test(value)) {
            input.classList.add('error');
            errorElement.textContent = 'E-mail inválido';
            return false;
        } else {
            input.classList.remove('error');
            errorElement.textContent = '';
            return true;
        }
    }

    function showFeedback(message, type) {
        feedback.textContent = message;
        feedback.className = `form__feedback ${type}`;
        feedback.style.display = 'block';
    }
}

// ===================================
// LAZY LOAD DE IMAGENS (opcional, fallback)
// ===================================
if ('loading' in HTMLImageElement.prototype) {
    // Navegador suporta lazy loading nativo
    console.log('✓ Lazy loading nativo habilitado');
} else {
    // Fallback para navegadores antigos
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
}
