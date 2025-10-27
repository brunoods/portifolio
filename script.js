// Espera que todo o conteúdo da página (HTML) seja carregado
document.addEventListener("DOMContentLoaded", () => {

    /* =================================================== */
    /* === LÓGICA 1: AUTO-PLAY INTELIGENTE DOS VÍDEOS === */
    /* (Exatamente como antes)                          */
    /* =================================================== */
    
    const projetos = document.querySelectorAll('.projeto');
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const video = entry.target.querySelector('video');
            if (!video) return;
            if (entry.isIntersecting) {
                video.play().catch(error => { console.warn("Video play failed:", error); });
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    };
    const observerOptions = { root: null, threshold: 0.7 };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    projetos.forEach(projeto => {
        observer.observe(projeto);
    });

    
    /* ======================================= */
    /* === LÓGICA 2: CONTROLO DOS MODALS     === */
    /* (Exatamente como antes)                 */
    /* ======================================= */

    const btnsAbrirModal = document.querySelectorAll("[data-modal-target]");
    const btnsFecharModal = document.querySelectorAll(".btn-fechar-modal");
    const backdropsModal = document.querySelectorAll(".modal-backdrop");

    btnsAbrirModal.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.dataset.modalTarget; 
            const modal = document.querySelector(modalId);
            abrirModal(modal);
        });
    });

    btnsFecharModal.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal"); 
            fecharModal(modal);
        });
    });
    
    backdropsModal.forEach(backdrop => {
        backdrop.addEventListener("click", () => {
            const modal = backdrop.closest(".modal");
            fecharModal(modal);
        });
    });

    function abrirModal(modal) {
        if (modal == null) return;
        modal.classList.add("ativo");
        document.body.classList.add("modal-aberto"); // Trava o scroll (do perfil)
    }

    function fecharModal(modal) {
        if (modal == null) return;
        modal.classList.remove("ativo");
        document.body.classList.remove("modal-aberto"); // Liberta o scroll
    }
    
    
    /* ======================================= */
    /* === LÓGICA 3: GESTOR DE VISUALIZAÇÃO  === */
    /* (NOVO)                                */
    /* ======================================= */

    // Seleciona os elementos da navegação
    const btnVerGrelha = document.querySelector("#btn-ver-grelha");
    const btnVerFeed = document.querySelector("#btn-ver-feed");
    const btnsVoltarPerfil = document.querySelectorAll(".btn-voltar-perfil");
    const navLinks = document.querySelectorAll(".nav-link"); // Para o estado "ativo"
    const feedContainer = document.querySelector(".feed");

    // Ouve o clique para mostrar o FEED
    btnVerFeed.addEventListener("click", mostrarFeed);
    
    // Ouve o clique para mostrar a GRELHA (perfil)
    btnVerGrelha.addEventListener("click", mostrarGrelha);

    // Ouve o clique em TODOS os botões "Voltar" dentro do feed
    btnsVoltarPerfil.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault(); // Impede o link <a> de saltar para o topo
            mostrarGrelha();
        });
    });


    // Função para mostrar o FEED
    function mostrarFeed() {
        document.body.classList.add("feed-ativo");
        
        // Atualiza os botões de navegação
        navLinks.forEach(l => l.classList.remove('ativo'));
        btnVerFeed.classList.add('ativo');
        
        // Garante que o feed começa no topo
        feedContainer.scrollTop = 0; 
    }

    // Função para mostrar a GRELHA (Perfil)
    function mostrarGrelha() {
        document.body.classList.remove("feed-ativo");
        
        // Atualiza os botões de navegação
        navLinks.forEach(l => l.classList.remove('ativo'));
        btnVerGrelha.classList.add('ativo');
    }

}); // Fim do 'DOMContentLoaded'