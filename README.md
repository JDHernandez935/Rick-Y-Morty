# 🛸 Rick & Morty App

> Una aplicación construida con React + TypeScript y Vite que consume la [API pública de Rick and Morty](https://rickandmortyapi.com/).

---

## 🚀 Cómo ejecutar el proyecto

### Requisitos previos

- Node.js >= 18
- npm >= 9

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/JDHernandez935/Rick-Y-Morty.git

# 2. Entrar a la carpeta del proyecto
cd Rick-Y-Morty

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Otros comandos disponibles

```bash
# Compilar para producción
npm run build

# Previsualizar el build de producción
npm run preview

# Ejecutar el linter
npm run lint
```

---

## 📁 Estructura del proyecto

El proyecto sigue el patrón de **Diseño Atómico** para mantener los componentes organizados y escalables:

```
src/
├── components/
│   ├── atoms/          # Unidades mínimas: Badge, Spinner, FavoriteButton, etc.
│   ├── molecules/      # Combinaciones de átomos: CharacterCard, Pagination, SearchBar, etc.
│   ├── organisms/      # Secciones complejas: CharacterGrid, CharacterDetail, etc.
│   ├── templates/      # Layouts de página: MainLayout
│   └── pages/          # Páginas completas: CharactersPage, CharacterDetailPage, FavoritesPage
├── hooks/              # Custom hooks: useCharacters, useCharacter, useEpisodes, useDebounce
├── services/           # Capa de API: rickAndMorty.service.ts, api.config.ts
├── store/              # Estado global: favoritesStore (Zustand)
├── types/              # Interfaces TypeScript: api.types.ts
├── router/             # Configuración de React Router
└── utils/              # Utilidades y helpers
```

---

## 📄 Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Redirige a `/characters` |
| `/characters` | Página principal con grid de personajes, búsqueda, filtros y paginación |
| `/characters/:id` | Página de detalle del personaje con estadísticas y lista de episodios |
| `/favorites` | Lista de favoritos guardados con estado vacío |

---

## 🛠️ Decisiones técnicas

- **Vite** fue mi primera elección como herramienta de desarrollo porque agiliza mucho el proceso, el servidor arranca casi al instante y los cambios se reflejan en pantalla de forma inmediata. Viniendo de otras herramientas, la diferencia se nota.

- **Patrón de Diseño Atómico** lo usé para mantener un orden claro entre los componentes y las páginas. La idea es simple: los átomos son las piezas más pequeñas, las moléculas agrupan átomos, los organismos forman secciones completas, los templates definen el esqueleto de cada vista y las páginas conectan todo. Me pareció la forma más limpia de escalar el proyecto sin que se vuelva un caos.

- **React Router DOM** para el enrutamiento del lado del cliente. Permite moverse entre la lista de personajes, el detalle y los favoritos sin recargar la página, lo cual le da una sensación mucho más fluida a la aplicación.

- **Zustand** con el middleware `persist` para manejar los favoritos de forma global. Me gustó esta opción porque es muy poco código, fácil de entender y la persistencia en `localStorage` viene incluida sin necesidad de configurar nada extra.

- **Tailwind CSS** para los estilos. Funciona muy bien para la mayoría de los casos, aunque tuve que apoyarme en estilos en línea para valores dinámicos como `clamp()` donde Tailwind se queda corto.

- **Debounce** en la búsqueda para no disparar una petición a la API con cada letra que escribe el usuario. Pequeño detalle que marca bastante diferencia en el rendimiento.

- **Carga de episodios en lote** — en lugar de hacer una petición por cada episodio del personaje, extraigo todos los IDs y los pido en una sola llamada (`/episode/1,2,3`). La propia documentación de la API lo sugiere y es claramente la opción más eficiente.

- **Conventional Commits** para mantener el historial de git ordenado y con sentido. Cada commit describe exactamente qué cambió y por qué.

---

## 🔮 Qué haría diferente con más tiempo

- **Diseño y experimentación visual** — creo que con más tiempo hubiera explorado ideas más arriesgadas en el diseño y experimentado con animaciones más elaboradas. Hay mucho margen para hacer la experiencia más memorable.

- **Pruebas** — me hubiera gustado añadir tests para los custom hooks y la capa de servicios. Es algo que le da mucha solidez al proyecto y que en este caso quedó pendiente.

- **Error boundaries** — para manejar errores inesperados en tiempo de ejecución de forma más elegante, sin que toda la app se rompa por un fallo puntual.

- **Listas virtualizadas** — con muchos personajes en pantalla, renderizar todas las cards a la vez no es lo más eficiente. Librerias como `react-virtual` ayudarían bastante aquí.

- **Página 404 personalizada** — una ruta not-found con el estilo del proyecto para que las URLs inválidas no rompan la experiencia.

- **Accesibilidad** — añadiría atributos `aria`, mejor soporte para navegación con teclado y una gestión del foco más cuidada en toda la aplicación.

---

## 📦 Dependencias principales

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| React | 19 | Librería de UI |
| TypeScript | 5 | Tipado estático |
| Vite | 6 | Herramienta de desarrollo |
| React Router DOM | 7 | Enrutamiento del lado del cliente |
| Zustand | 5 | Gestión de estado global |
| Tailwind CSS | 4 | Estilos utilitarios |

---

## 🌐 Referencia de la API

Este proyecto consume la [API REST de Rick and Morty](https://rickandmortyapi.com/documentation).

URL base: `https://rickandmortyapi.com/api`

| Endpoint | Descripción |
|----------|-------------|
| `GET /character` | Lista paginada de personajes con filtros opcionales |
| `GET /character/:id` | Un personaje por ID |
| `GET /episode/:ids` | Uno o varios episodios por ID |

---
