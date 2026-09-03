# 🤝 Guía de contribución

Este proyecto utiliza **GitHub Flow** como estrategia de trabajo colaborativo.

El objetivo es mantener la rama `main` estable, facilitar las revisiones de código y conservar un historial de cambios claro y ordenado.

---

## 🌿 Flujo de trabajo

La rama:

```text
main
```

representa la versión estable del proyecto.

No se debe trabajar directamente sobre `main`.

Para cada nueva tarea se debe crear una rama independiente a partir de la última versión de `main`.

### 1. Actualizar `main`

Antes de comenzar una nueva tarea:

```bash
git switch main
git pull origin main
```

### 2. Crear una nueva rama

```bash
git switch -c feature/nombre-funcionalidad
```

Por ejemplo:

```bash
git switch -c feature/catalogo
```

### 3. Realizar los cambios

Trabajar normalmente sobre la nueva rama y realizar commits pequeños y descriptivos.

### 4. Subir la rama

```bash
git push -u origin feature/catalogo
```

### 5. Crear Pull Request

Desde GitHub, abrir una Pull Request:

```text
feature/catalogo
        ↓
       main
```

La PR deberá ser revisada y aprobada antes de integrarse.

### 6. Merge

El proyecto utiliza:

```text
Squash and merge
```

De esta manera, todos los commits internos de la rama se agrupan en un único commit al incorporarse a `main`.

---

# 🌱 Convención de ramas

Los nombres de las ramas deben escribirse:

* En minúsculas.
* Sin espacios.
* Utilizando `-` para separar palabras.
* Indicando primero el tipo de cambio.

Formato general:

```text
tipo/descripcion-corta
```

## `feature/`

Para nuevas funcionalidades.

```text
feature/header
feature/catalogo-productos
feature/detalle-producto
feature/carrito
feature/formulario-contacto
feature/buscador-productos
```

## `fix/`

Para corregir errores.

```text
fix/navbar-mobile
fix/contador-carrito
fix/validacion-email
fix/product-images
```

## `style/`

Para cambios visuales que no modifican la funcionalidad.

```text
style/product-cards
style/footer-responsive
style/header-spacing
```

## `refactor/`

Para reorganizar o mejorar código existente sin cambiar su comportamiento.

```text
refactor/product-render
refactor/contact-validation
```

## `docs/`

Para documentación.

```text
docs/readme
docs/contributing
```

---

# 💬 Convención de commits

Los mensajes de commit siguen una versión simplificada de **Conventional Commits**.

Formato:

```text
tipo: descripción corta
```

La descripción debe escribirse de forma clara y explicar qué cambio se realizó.

---

## `feat`

Nueva funcionalidad.

```text
feat: add product catalog
feat: implement shopping cart counter
feat: add contact form validation
```

---

## `fix`

Corrección de errores.

```text
fix: correct mobile navigation
fix: resolve cart counter error
fix: correct product image path
```

---

## `style`

Cambios de CSS, diseño o formato que no modifican la lógica.

```text
style: improve product card layout
style: adjust mobile header spacing
```

---

## `refactor`

Cambios internos del código sin agregar funcionalidades nuevas.

```text
refactor: simplify product rendering
refactor: reorganize form validation
```

---

## `docs`

Cambios en documentación.

```text
docs: update README
docs: add contribution guide
```

---

## `chore`

Tareas de mantenimiento o configuración.

```text
chore: add pull request template
chore: update gitignore
```

---

# ✅ Ejemplo completo

Supongamos que un integrante debe desarrollar el catálogo.

Primero actualiza `main`:

```bash
git switch main
git pull origin main
```

Crea su rama:

```bash
git switch -c feature/catalogo-productos
```

Durante el desarrollo:

```bash
git add .
git commit -m "feat: add product catalog structure"
```

Más adelante:

```bash
git add .
git commit -m "feat: render products dynamically"
```

Y finalmente:

```bash
git add .
git commit -m "style: improve product card layout"
```

Sube su rama:

```bash
git push -u origin feature/catalogo-productos
```

Luego crea una Pull Request hacia:

```text
main
```

Una vez revisada y aprobada, se utiliza:

```text
Squash and merge
```

Por lo tanto, `main` recibirá un único commit correspondiente a esa Pull Request.

---

# 🔒 Reglas de `main`

La rama `main` está protegida mediante un Ruleset.

Para integrar cambios:

* No realizar `push` directo a `main`.
* Todo cambio debe ingresar mediante Pull Request.
* Se requiere al menos **1 aprobación**.
* Las conversaciones de revisión deben estar resueltas.
* Si se agregan nuevos cambios después de una aprobación, la PR debe volver a revisarse.
* No se permiten `force push`.
* No se permite eliminar `main`.
* Se requiere historial lineal.
* Las Pull Requests se integran utilizando **Squash and merge**.

---

# 🔄 Resumen del flujo

```text
main
 │
 ├── feature/catalogo
 │         │
 │       commits
 │         │
 │         ▼
 │    Pull Request
 │         │
 │       review
 │         │
 │     aprobación
 │         │
 │   Squash and merge
 │         │
 ▼         ▼
main actualizado
```

Cada nueva tarea debe comenzar nuevamente desde la versión más reciente de `main`.
