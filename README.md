# Grupo Scout XXIII · El Porvenir

Web informativa estática, en español, preparada para GitHub Pages. Incluye presentación, historia, símbolos, metodología, cuatro ramas, actividades, galería ampliable, preguntas frecuentes, ubicación y contacto.

## Ver la web en tu ordenador

1. Descomprime el ZIP completo.
2. Abre `index.html` con Chrome, Firefox, Edge o Safari.
3. Conserva `assets`, `styles.css` y `script.js` junto a `index.html`.

No necesita instalar dependencias, ejecutar compilaciones ni crear cuentas adicionales para funcionar como página estática.

## Publicar en GitHub Pages

1. En tu cuenta de GitHub, crea un repositorio público, por ejemplo `grupo23-elporvenir`. Puedes inicializarlo con un README para que exista la rama principal.
2. Dentro del repositorio, selecciona **Add file → Upload files**.
3. Arrastra el contenido descomprimido: `index.html`, `informacion.html`, `styles.css`, `script.js`, `README.md`, la carpeta `assets` y `.nojekyll` si tu explorador lo muestra. Sube la carpeta `assets` completa para mantener su estructura. El archivo `.nojekyll` es opcional en esta web.
4. Confirma la subida con **Commit changes**. Si ya creaste un README, puedes sustituirlo por este.
5. Comprueba que `index.html` aparece en la raíz del repositorio, al mismo nivel que la carpeta `assets`. No debe quedar dentro de una carpeta adicional.
6. Ve a **Settings → Pages**.
7. En **Build and deployment → Source**, elige **Deploy from a branch**.
8. Selecciona la rama **main** (o el nombre real de tu rama principal), la carpeta **/(root)** y pulsa **Save**.
9. Cuando GitHub termine el despliegue, la sección Pages mostrará la dirección pública. Si aún no aparece, revisa el progreso en **Actions**.

No subas únicamente el ZIP: GitHub Pages necesita los archivos extraídos. Las rutas relativas permiten publicar tanto en un dominio propio como dentro de la ruta de un repositorio.

Documentación oficial de GitHub:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Cambiar el contenido

- Textos, correo, redes y ubicación: `index.html`.
- Textos de las ramas: objeto `branches` de `script.js`. Para Castores, actualiza también el contenido inicial en `index.html`; las otras ramas tienen un resumen alternativo dentro de `noscript`.
- Colores, tipografía y distribución: `styles.css`. Los colores principales están al inicio, en `:root`.
- Fotografías y símbolos: `assets/`. Si cambias los nombres, actualiza sus referencias en HTML o JavaScript.
- Información sobre funcionamiento del sitio: `informacion.html`.

Después de editar, vuelve a subir los archivos modificados al repositorio. GitHub Pages publicará los cambios de la rama configurada.

## Selección editorial

Se ha usado la documentación facilitada por el grupo. Se mantiene el año de origen, 1994; se omiten las cifras antiguas de responsables y participantes, la referencia al 25 aniversario y los textos circunstanciales de la pandemia. No se publican los documentos internos ni las instrucciones detalladas de actividades de campamento. Las edades de las cuatro ramas proceden de la guía metodológica.

Las fotografías son históricas y no se presentan como imágenes de la ronda actual. Se utilizan las insignias de las cuatro ramas descritas en la guía y del equipo de responsables. No se anuncia una rama Ruta, porque los documentos no confirman su actividad en el grupo.

Antes de publicar, confirma que la dirección, edades y datos de contacto siguen vigentes y que el grupo dispone de autorización para difundir las fotografías seleccionadas. La página de información técnica no sustituye los datos identificativos o textos adicionales que el grupo necesite incorporar en su caso.

## Detalles del sitio

HTML, CSS y JavaScript sin bibliotecas externas. Imágenes optimizadas en WebP, sin metadatos originales. Diseño adaptable, navegación por teclado, enlace para saltar al contenido, soporte de movimiento reducido, pestañas de ramas con flechas del teclado y galería con cierre mediante Escape. Sin formularios, analítica, cookies propias ni recursos de terceros incrustados. Los enlaces sociales, de correo y mapa abren el servicio correspondiente.

Las imágenes y los símbolos facilitados mantienen sus derechos de origen. No se otorga una licencia adicional sobre ellos.
