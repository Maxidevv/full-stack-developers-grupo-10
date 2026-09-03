# 🪑 Hermanos Jota | E-commerce de Muebles

Proyecto desarrollado como entrega final de los **Sprints 1 y 2** del curso **Full Stack Developer de ITBA Educación Ejecutiva.**

El objetivo del proyecto es construir la fachada completa y la experiencia interactiva de un e-commerce para **Mueblería Hermanos Jota**, utilizando exclusivamente tecnologías del lado del cliente: **HTML, CSS y JavaScript**.

---

## 📖 Sobre Hermanos Jota

**Hermanos Jota** representa una mueblería vinculada al oficio de la madera, la tradición familiar y el trabajo artesanal.

Su identidad combina el conocimiento transmitido entre generaciones con una mirada contemporánea sobre el diseño, dando lugar a muebles que buscan equilibrar **funcionalidad, calidad y estética**.

A partir de esta identidad, nuestro equipo desarrolló una experiencia web que busca trasladar esos valores al entorno digital mediante una interfaz clara, moderna, responsive e interactiva.

---

## 🎯 Objetivo del proyecto

Desarrollar un sitio web de e-commerce que permita a los usuarios:

- Conocer la identidad de **Hermanos Jota**.
- Explorar un catálogo de muebles.
- Visualizar información detallada de cada producto.
- Buscar productos dentro del catálogo.
- Simular la incorporación de productos a un carrito.
- Contactarse con la mueblería mediante un formulario.
- Navegar correctamente desde dispositivos móviles, tablets y computadoras.

El proyecto simula una experiencia de compra **sin conexión a un backend**, por lo que toda la información y lógica se gestiona localmente mediante JavaScript.

---

## ✨ Funcionalidades

### 🏠 Página de inicio

La página principal incluye:

- Header con logo y navegación.
- Hero Banner principal.
- Productos destacados cargados dinámicamente.
- Navegación hacia el catálogo y las diferentes secciones del sitio.
- Footer con información básica.

Los productos destacados son generados mediante **JavaScript y manipulación del DOM**.

---

### 🛋️ Catálogo de productos

El catálogo permite visualizar los muebles disponibles mediante una grilla de tarjetas.

Cada producto contiene información como:

- Nombre.
- Imagen.
- Precio.
- Descripción.
- Información correspondiente al producto.

Los datos son administrados mediante un **Array de Objetos en JavaScript** y renderizados dinámicamente en el DOM.

Además, se incluye una funcionalidad de **búsqueda de productos** para facilitar la navegación dentro del catálogo.

---

### 🔎 Detalle de producto

Cada producto cuenta con su propia vista de detalle, donde el usuario puede consultar:

- Imagen del producto.
- Nombre.
- Descripción completa.
- Detalles de fabricación.
- Precio.

También dispone de un botón **“Añadir al carrito”**, que permite simular la selección de productos.

---

### 🛒 Carrito simulado

El proyecto implementa una simulación básica de carrito de compras.

Al agregar un producto:

- Se actualiza el contador del carrito.
- Se refleja la interacción en la interfaz.
- No se realiza ninguna compra ni petición a un servidor.

Esta funcionalidad tiene como objetivo practicar **eventos, lógica de programación y manipulación del DOM con JavaScript**.

---

### 📩 Formulario de contacto

La sección de contacto permite ingresar:

- Nombre.
- Email.
- Mensaje.

El formulario posee validaciones realizadas desde el lado del cliente utilizando JavaScript.

Cuando los datos son válidos, se muestra dinámicamente un mensaje de confirmación al usuario mediante manipulación del DOM.

---

## 🧠 Conceptos aplicados

Durante el desarrollo del proyecto se trabajaron conceptos fundamentales de desarrollo web Frontend.

### HTML

- HTML5 semántico.
- Estructuración correcta del contenido.
- Navegación entre páginas.
- Formularios.
- Código limpio e indentado.

### CSS

- Diseño **Mobile First**.
- Responsive Design.
- Flexbox.
- Modelo de cajas.
- Media Queries.
- Organización mediante archivos CSS externos.

### JavaScript

- Variables y funciones.
- Arrays.
- Objetos.
- Array de objetos para almacenar productos.
- Manipulación del DOM.
- Renderizado dinámico de contenido.
- Eventos mediante `addEventListener`.
- Validación de formularios.
- Simulación de carrito.
- Operaciones asíncronas.
- `setTimeout`.
- `async/await`.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura y semántica del sitio |
| **CSS3** | Estilos y diseño responsive |
| **JavaScript** | Lógica, interactividad y contenido dinámico |
| **Git** | Control de versiones |
| **GitHub** | Repositorio y trabajo colaborativo |

---

## 📱 Responsive Design

El proyecto fue desarrollado siguiendo una estrategia **Mobile First**.

La interfaz se adapta a diferentes tamaños de pantalla para brindar una experiencia adecuada en:

- 📱 Smartphones
- 📱 Tablets
- 💻 Notebooks
- 🖥️ Escritorio

Para ello se utilizaron principalmente **Flexbox y Media Queries**.

---

## 📂 Estructura del proyecto

```text
hermanos-jota/
│
├── index.html
├── productos.html
├── producto.html
├── contacto.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── productos.js
│   └── main.js
│
├── assets/
│   └── images/
│
└── README.md
```

> La estructura puede variar ligeramente según la organización final del equipo.

---

## 🚀 Ejecución del proyecto

Al tratarse de un proyecto desarrollado únicamente con tecnologías del lado del cliente, no requiere instalación de dependencias.

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Acceder al proyecto

```bash
cd NOMBRE_DEL_REPOSITORIO
```

### 3. Ejecutar

Abrir el archivo:

```text
index.html
```

en el navegador.

También puede ejecutarse utilizando una extensión como **Live Server**.

---

## 🌐 Demo

El proyecto se encuentra publicado mediante un servicio de hosting estático.

🔗 **Sitio web:** [Agregar URL del sitio desplegado]

---

## 👥 Equipo

Proyecto realizado por un equipo de **4 integrantes**:

- **Maxi Moncada**
- **Araceli Mendoza**
- **Leandro Frette**
- **Federico Vega**

Todos los integrantes participaron del desarrollo mediante un flujo de trabajo colaborativo utilizando **Git y GitHub**, manteniendo un historial de commits durante el desarrollo del proyecto.

---

## 🌿 Flujo de trabajo con Git

Para organizar el desarrollo colaborativo utilizamos Git y GitHub como herramientas de control de versiones.

El trabajo se divide en distintas ramas según las funcionalidades desarrolladas.

Ejemplo:

```text
main
│
├── feature/header
├── feature/home
├── feature/catalogo
├── feature/producto
└── feature/contacto
```

Cada funcionalidad se desarrolla de manera independiente y posteriormente se integra al proyecto principal mediante **Pull Requests**.

Esto permite mantener un historial claro de cambios y facilita la colaboración entre los integrantes del equipo.

---

## 📚 Objetivos de aprendizaje

Con este proyecto buscamos aplicar de manera práctica los principales conceptos estudiados durante los primeros dos Sprints:

1. Estructurar un sitio utilizando **HTML5 semántico**.
2. Crear interfaces responsive utilizando **CSS3**.
3. Comprender y aplicar el **Modelo de Cajas y Flexbox**.
4. Implementar lógica de programación utilizando **JavaScript**.
5. Manipular dinámicamente el **DOM**.
6. Administrar colecciones de información utilizando **Arrays de Objetos**.
7. Utilizar operaciones asíncronas para simular la carga de información.
8. Manejar eventos generados por el usuario.
9. Trabajar colaborativamente utilizando **Git y GitHub**.

## 🎓 Contexto académico

Proyecto realizado para:

**Full Stack Developer — ITBA Educación Ejecutiva**

**Sprints 1 y 2**

Desarrollado como ejercicio práctico de construcción de una aplicación web Frontend y trabajo colaborativo con Git/GitHub.
