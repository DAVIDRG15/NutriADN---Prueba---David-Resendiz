# nutriADN Avanzada

Landing page informativa para presentar **nutriADN Avanzada**, una prueba genética enfocada en nutrición, metabolismo, ejercicio y estilo de vida. El sitio guía a la persona desde la explicación del proceso hasta la elección de un plan y la solicitud de una consulta.

## Vista general

El proyecto está construido con HTML, CSS y JavaScript puro. No requiere framework, gestor de paquetes ni proceso de compilación.

Incluye:

- navegación adaptable para escritorio y móvil;
- presentación del proceso en cuatro pasos;
- beneficios y categorías del reporte genético;
- panel de contenido con pestañas interactivas;
- testimonios, planes, preguntas frecuentes y clínicas;
- formulario de contacto demostrativo;
- animaciones de entrada respetando `prefers-reduced-motion`;
- elementos básicos de accesibilidad, como enlace para saltar al contenido, etiquetas ARIA y estados de foco.

## Tecnologías

- **HTML5** para la estructura semántica.
- **CSS3** para el sistema visual, layout responsivo y animaciones.
- **JavaScript** nativo para navegación, pestañas, formulario e interacciones al hacer scroll.
- **Google Fonts** para Poppins.
- **Unsplash** para las fotografías remotas.

## Cómo ejecutar el proyecto

Puedes abrir `index.html` directamente en el navegador. Para evitar restricciones del navegador y trabajar con recarga más cómoda, también puedes levantar un servidor local:

```bash
python3 -m http.server 8000
```

Después visita [http://localhost:8000](http://localhost:8000).

No hay dependencias que instalar. Se necesita conexión a internet para cargar Poppins y las imágenes alojadas en Unsplash; la tipografía editorial se incluye localmente.

## Identidad visual

La interfaz busca comunicar ciencia y bienestar con fondos claros, tonos clínicos suaves y contrastes azul marino. Los valores viven como propiedades personalizadas dentro de `:root` en `styles.css`, por lo que ese bloque es el punto central para ajustar la identidad.

### Paleta de color

| Muestra | Variable | Hex | Uso principal |
| --- | --- | --- | --- |
| <span style="display:inline-block;width:18px;height:18px;background:#112444;border-radius:4px"></span> | `--ink` / `--navy-dark` | `#112444` | Texto, fondos oscuros y contraste principal |
| <span style="display:inline-block;width:18px;height:18px;background:#2f4770;border-radius:4px"></span> | `--navy` | `#2F4770` | Secciones destacadas, iconos y controles |
| <span style="display:inline-block;width:18px;height:18px;background:#52617a;border-radius:4px"></span> | `--muted` | `#52617A` | Texto secundario |
| <span style="display:inline-block;width:18px;height:18px;background:#afd2d8;border-radius:4px"></span> | `--aqua` | `#AFD2D8` | Botones, acentos y estados de interacción |
| <span style="display:inline-block;width:18px;height:18px;background:#b7d4ce;border-radius:4px"></span> | `--mint` | `#B7D4CE` | Variantes suaves y hover |
| <span style="display:inline-block;width:18px;height:18px;background:#deebe8;border-radius:4px"></span> | `--mint-light` | `#DEEBE8` | Fondos de sección y degradados |
| <span style="display:inline-block;width:18px;height:18px;background:#7ca9db;border-radius:4px"></span> | `--blue` | `#7CA9DB` | Iconos y foco de campos |
| <span style="display:inline-block;width:18px;height:18px;background:#4010b0;border-radius:4px"></span> | `--violet` | `#4010B0` | Énfasis, etiquetas y detalles activos |
| <span style="display:inline-block;width:18px;height:18px;background:#e9eaf1;border-radius:4px"></span> | `--lavender` | `#E9EAF1` | Tarjetas, controles y superficies suaves |
| <span style="display:inline-block;width:18px;height:18px;background:#f8fafc;border:1px solid #d7e2e6;border-radius:4px"></span> | `--paper` | `#F8FAFC` | Fondo general |
| <span style="display:inline-block;width:18px;height:18px;background:#ffffff;border:1px solid #d7e2e6;border-radius:4px"></span> | `--surface` | `#FFFFFF` | Tarjetas y formularios |

### Tipografías

- **Relationship of Mélodrame**: títulos principales (`h1` y `h2`). Se carga desde `relationship_of_melodrame/` mediante `@font-face`.
- **Poppins**: navegación, párrafos, botones, etiquetas y elementos de interfaz. Se obtiene desde Google Fonts en pesos 400 a 800.
- **Times New Roman** y fuentes del sistema funcionan como respaldo si las fuentes principales no están disponibles.

Antes de redistribuir la tipografía local, revisa el archivo `relationship_of_melodrame/Agreement.txt` y sus condiciones de uso.

## Estructura

```text
.
├── assets/
│   └── img/
│       └── logo.jpeg
├── relationship_of_melodrame/
│   ├── Agreement.txt
│   ├── Relationship of mélodrame.ttf
│   └── tutoriales de uso
├── index.html
├── script.js
├── styles.css
└── README.md
```

### Archivos principales

- `index.html`: contenido, jerarquía de secciones, enlaces y formulario.
- `styles.css`: tokens visuales, componentes, estados y breakpoints.
- `script.js`: comportamiento de la cabecera, menú móvil, pestañas y animaciones.
- `assets/img/logo.jpeg`: logotipo utilizado en navegación y pie de página.

## Diseño responsivo

El sitio parte de una composición móvil y amplía sus rejillas progresivamente:

- **hasta 767 px:** menú desplegable, acciones y métricas apiladas;
- **desde 768 px:** navegación horizontal y composiciones de dos o tres columnas;
- **desde 1024 px:** proceso en cuatro columnas, beneficios en tres y testimonios en cuatro.

El ancho general está limitado por `--container` a `1120px`, conservando un margen lateral mínimo de `16px`.

## Interacciones

- La cabecera cambia de apariencia después de iniciar el scroll.
- El menú móvil actualiza `aria-expanded` y se cierra al elegir un enlace.
- Las pestañas del reporte toman su contenido del objeto `geneCopy` en `script.js`.
- `IntersectionObserver` revela las tarjetas una sola vez al entrar en pantalla.
- El formulario actualmente **no envía información a un servidor**: evita el envío, muestra una confirmación local y limpia los campos.