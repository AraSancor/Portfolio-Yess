
        const textoCompleto = "Desarrolladora web con experiencia en soluciones frontend integrales, gestión de contenido, diseño gráfico, marketing digital, posicionamiento seo, con capacidad de colaborar estrechamente con equipos backend. Experiencia en plataformas no-code, WordPress, PrestaShop, habilidad en arquitecturas de información, APIs, integraciones, y seguridad de aplicaciones web.";

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