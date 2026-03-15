# Calendario de Notas

Aplicación web desarrollada en HTML, CSS y JavaScript que permite gestionar notas asociadas a cada mes del año.
Las notas se guardan en el navegador utilizando localStorage, por lo que permanecen disponibles entre sesiones.

# Autor

## Daniel Madrid Mérida

# Objetivo del proyecto

El objetivo de la aplicación es permitir al usuario:

Visualizar un calendario de los 12 meses del año

Acceder a cada mes

Crear, editar y eliminar notas

Guardar las notas de forma persistente usando localStorage

# Funcionalidades
# Página principal

La página principal muestra:

Los 12 meses del año

Un contador de notas por mes

Meses con notas destacados visualmente

Además incluye dos acciones globales:

# Listar todas las notas

Muestra todas las notas existentes indicando:

Mes al que pertenecen

Título de la nota

# Limpiar calendario

Permite eliminar todas las notas almacenadas tras confirmar la acción.

# Página del mes

Al hacer clic en un mes se accede a la página de gestión de notas.

En esta página se puede:

# Crear una nota

# Introduciendo:

Título

Descripción

#  Editar una nota

Permite modificar el contenido de una nota existente.

# Eliminar una nota

Elimina una nota concreta tras confirmar la acción.

# Volver al calendario

Enlace para regresar a la página principal.

#  Persistencia de datos

Las notas se almacenan utilizando:

localStorage

Las notas se guardan en formato JSON bajo la clave:

calendarioNotas

Cada nota tiene la siguiente estructura:

```
{
  "id": 171234567890,
  "mes": 2,
  "titulo": "Ejemplo",
  "descripcion": "Descripción de la nota"
}
```

#  Tecnologías utilizadas

- HTML5

- CSS3

- JavaScript (ES6)

- localStorage
