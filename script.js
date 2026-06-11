document.addEventListener('DOMContentLoaded', function () {

    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(function (container) {
        container.addEventListener('click', function () {
            const url = container.getAttribute('data-url');

            if (url) {
                // Abre o link na mesma aba. 
                // Se preferir abrir em uma nova aba, use: window.open(url, '_blank');
                window.location.href = url; 
            } else {
                console.error("URL não encontrada");
            }
        });
    });

    // Função para carregar arquivos JS e CSS adicionais
    function loadExternalFile(filename, filetype) {
        let fileref;

        if (filetype === "js") {
            fileref = document.createElement('script');
            fileref.setAttribute("type", "text/javascript");
            fileref.setAttribute("src", filename);
        } else if (filetype === "css") {
            fileref = document.createElement('link');
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", filename);
        }

        if (typeof fileref !== "undefined") {
            document.getElementsByTagName("head")[0].appendChild(fileref);
        }
    }

    window.addEventListener('load', function () {
        loadExternalFile('extra_styles.css', 'css');
        loadExternalFile('extra_script.js', 'js');
    });
});