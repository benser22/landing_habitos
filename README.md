# Documentación del Proyecto

Este README proporciona una descripción general de la estructura del archivo JSON y cómo se relaciona con la representación visual del proyecto.

## Archivo JSON

El archivo JSON define la estructura de las secciones del proyecto y cómo se renderizan en la interfaz de usuario.

### Secciones:

- **Header**: Renderizado por Navbar.
- **Body**:
  - "one" y "two": Renderizados por Hero.
  - "three": Renderizado por OneSection.
  - "four": Renderizado por TwoSection.
  - "five": Renderizado por ThreeSection.
  - "six": Renderizado por FourSection.
  - "seven": Renderizado por FiveSection.
- **Footer**: Renderizado por Footer.

## Estilos y Renderizado

Cada sección del archivo JSON corresponde a una parte específica de la interfaz de usuario. Aquí hay un resumen de cómo se relacionan las secciones con el estilo y el renderizado:

- **Header**: La barra de navegación proporciona la cabecera del sitio.
- **Body**:
  - "one" y "two": Hero se encarga de renderizar las primeras secciones destacadas del cuerpo.
  - "three": OneSection se encarga de renderizar una sección específica del cuerpo.
  - "four": TwoSection se encarga de renderizar otra sección específica del cuerpo.
  - "five": ThreeSection se encarga de renderizar una tercera sección específica del cuerpo.
  - "six": FourSection se encarga de renderizar una cuarta sección específica del cuerpo.
  - "seven": FiveSection se encarga de renderizar una quinta sección específica del cuerpo.
- **Footer**: El pie de página finaliza la interfaz de usuario.
