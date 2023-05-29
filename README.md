# Portafolio creado con React JS, Vite JS & SASS.

## Repositorios extraidos directamente desde GitHub.

> FETCH

```javascript
// fetch de datos a API GITHUB
export const getRepos = async () => {
  try {
    const res = await fetch(URI);
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
```

---

## React Router DOM V6
Enrutado creado con Router DOM, tres rutas principales y una ruta de error.

> ROUTES

```jsx
import { Routes, Route } from "react-router-dom";
<Routes>
  <Route path="/" element={/* COMPONENT */} />
  <Route path="/about" element={/* COMPONENT */} />
  <Route path="/projects" element={/* COMPONENT */} />
  <Route path="*" element={/* COMPONENT */} />
</Routes>
```

Si gustas mirar mas a fondo el proyecto podes revisar el repo que tengo en GitHub!

_Leonel Donati . -_
