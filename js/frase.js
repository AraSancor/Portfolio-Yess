
        const textoCompleto = "Desarrollo e-commerce rápidos, accesibles (WCAG) y que convierten. Integro Figma, APIs y SEO técnico para tiendas que venden.";

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