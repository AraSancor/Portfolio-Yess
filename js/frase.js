        // Texto que se mostrará letra por letra
        const textoCompleto = "Soy una profesional Web Developer con habilidades en gestión de contenido, diseño gráfico y marketing digital, respaldado por conocimientos en desarrollo backend y frontend. Mi enfoque integral me permite crear soluciones creativas y efectivas que impulsan la presencia digital y el éxito de proyectos diversos.";

        // Elemento donde se mostrará el texto
        const contenedor = document.getElementById('texto');

        // Configuración del efecto
        const velocidad = 60; // milisegundos entre cada letra

        // Función para mostrar el texto letra por letra
        function tipeo(texto, paso = 0) {
          if (paso <= texto.length) {
            contenedor.textContent = texto.substring(0, paso);
            setTimeout(() => tipeo(texto, paso + 1), velocidad);
          }
        }

        // Iniciar el efecto cuando la página cargue
        window.addEventListener('DOMContentLoaded', () => {
          tipeo(textoCompleto);
        });