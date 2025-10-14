
        const textoCompleto = "Soy una profesional Web Developer con habilidades en gestión de contenido, diseño gráfico y marketing digital, respaldado por conocimientos en desarrollo backend y frontend. Mi enfoque integral me permite crear soluciones creativas y efectivas que impulsan la presencia digital y el éxito de proyectos diversos.";

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