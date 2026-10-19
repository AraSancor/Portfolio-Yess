
        const textoCompleto = "Desarrolladora Frontend especializada en WordPress y PrestaShop. Integro diseño, APIs y SEO técnico para crear e-commerce rápidos, accesibles y que convierten. Acostumbrada a colaborar con equipos Backend.";

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