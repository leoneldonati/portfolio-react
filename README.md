# Portafolio creado con React JS & Vite JS.

### Se utilizó UUID para mapeo de datos.


## Se utilizo * createContext * para creado de contexto global.
---
```jsx
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";


const data = {/* DATOS GLOBALES */};

export const GlobalContext = createContext();

export const Provider = ({ children }) => {
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};


```
>CONTEXTO GLOBAL APP

## Capturas de pantalla.
---

>Inicio de página

![Inicio de página](./src/assets/portfolio-1.png)

>Sección sobre mí

![Sección sobre mí](./src/assets/portfolio-2.png)

>Sección proyectos

![Sección proyectos](./src/assets/portfolio-3.png)

Si gustas mirar mas a fondo el proyecto podes revisar el repo que tengo en GitHub!

*Leonel Donati . -*

