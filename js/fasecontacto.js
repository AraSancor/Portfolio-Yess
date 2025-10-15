
        const textoCompleto = "Desarrollo de interfaces eficientes y atractivas que transforman usuarios en clientes. Soy una desarrolladora web con enfoque en rendimiento, accesibilidad y experiencia, lista para convertir ideas en productos digitales intuitivos.";

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