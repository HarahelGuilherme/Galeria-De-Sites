// Ao carregar a página, assegura que os elementos DOM estão prontos.
document.addEventListener('DOMContentLoaded', function () {

    // Seleciona todos os containers de imagem
    const imageContainers = document.querySelectorAll('.image-container');

    // Itera sobre cada container de imagem
    imageContainers.forEach(function (container) {

        // Adiciona o evento de clique em cada container
        container.addEventListener('click', function () {

            // Obtém a URL armazenada no atributo data-url
            const url = container.getAttribute('data-url');

            // Verifica se a URL existe
            if (url) {
                // Redireciona para a página associada
                window.location.href = url;
            } else {
                console.error("URL não encontrada");
            }
        });
    });

    // Função para carregar arquivos JS e CSS de maneira assíncrona
    function loadExternalFile(filename, filetype) {
        let fileref;

        if (filetype === "js") { // Carrega um arquivo JavaScript
            fileref = document.createElement('script');
            fileref.setAttribute("type", "text/javascript");
            fileref.setAttribute("src", filename);
        } else if (filetype === "css") { // Carrega um arquivo CSS
            fileref = document.createElement('link');
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", filename);
        }

        // Adiciona o arquivo carregado ao head
        if (typeof fileref !== "undefined") {
            document.getElementsByTagName("head")[0].appendChild(fileref);
        }
    }

    // Após carregar a página, carrega arquivos CSS/JS adicionais
    window.addEventListener('load', function () {
        loadExternalFile('extra_styles.css', 'css');
        loadExternalFile('extra_script.js', 'js');
    });
});

document.querySelectorAll('.image-container').forEach(item => {
    item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        window.open(url, '_blank');  // Abre o link em uma nova aba
    });
});

