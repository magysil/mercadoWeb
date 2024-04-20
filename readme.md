# README - Desafío Mercado Web

Este repositorio contiene el código fuente de la aplicación web desarrollada para el Desafío Mercado Web, realizado como parte de un ejercicio de validación de conocimientos  de Handlebars, motores de plantillas, parciales, helpers, jQuery y Bootstrap.

## Descripción

El Mini Market "Come Sano, Come Fresco Spa" buscaba contratar un freelancer para desarrollar una aplicación web que les permitiera ofrecer y vender alimentos online. La aplicación resultante se compone de un servidor con Express que utiliza Handlebars como motor de plantillas para renderizar componentes y variables en el sitio web. Se han implementado parciales para abordar los cambios de manera ágil y cómoda, cumpliendo con los requisitos funcionales y la temática planteada.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- **/public**: Contiene archivos estáticos como imágenes, estilos CSS y scripts JavaScript.
- **/views**: Contiene los archivos de las vistas de Handlebars, incluyendo parciales y layouts.
- **/routes**: Contiene los archivos de las rutas de Express utilizadas en la aplicación.
- **/models**: Contiene los archivos relacionados con la lógica del modelo de la aplicación.
  - **server.js**: Archivo principal que configura y ejecuta el servidor Express. Este archivo es responsable de manejar las configuraciones del servidor, definir las rutas y los middleware, y lanzar el servidor para escuchar las solicitudes entrantes.
- **index.js**: Archivo principal que configura y ejecuta el servidor Express.

## Requisitos y Configuración

Para ejecutar el proyecto localmente, asegúrate de tener instalado Node.js y npm. Luego, sigue estos pasos:

1. Clona este repositorio: `git clone <URL_del_repositorio>`
2. Accede al directorio del proyecto: `cd <nombre_del_directorio>`
3. Instala las dependencias del proyecto: `npm install`
4. Inicia el servidor local: `npm run dev`
5. Abre tu navegador web y accede a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Dependencias

El proyecto utiliza las siguientes dependencias principales:

- **Express**: Para la creación del servidor web.
- **Handlebars**: Como motor de plantillas para renderizar las vistas.
- **Bootstrap**: Para el diseño y estilos del sitio web.
- **jQuery**: Para la manipulación del DOM y la interactividad del sitio web.


