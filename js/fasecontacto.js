
        const textoCompleto = "Desarrollo interfaces rápidas, accesibles y optimizadas para SEO que transforman usuarios en clientes. Convierto ideas en productos digitales intuitivos con WordPress, PrestaShop y React. Hablemos de tu proyecto..";

        const contenedor = document.getElementById('texto');

      
        const velocidad = 60; 

    
        function tipeo(texto, paso = 0) {
          if (paso <= texto.length) {
            contenedor.textContent = texto.substring(0, paso);
            setTimeout(() => tipeo(texto, paso + 1), velocidad);
          }
        }

        
        window.addEventListener('DOMContentLoaded', () => {
          tipeo(textoCompleto);
        });