# automation-paw-purchases

# Proyecto de Automatización Playwright

Este proyecto contiene tests automatizados para distintas secciones de la web https://demowebshop.tricentis.com, usando Playwright y TypeScript.


## Cobertura de pruebas

- Login (positivo y negativo)
- Registro de usuario (positivo y negativo)


## Tecnologías utilizadas

- Playwright
- TypeScript
- Node.js
- GitHub Actions (CI)


## Requisitos

- Node.js ≥ 20
- npm ≥ 10
- Navegadores que instalará Playwright automáticamente (Chromium, Firefox, WebKit)


## Instalación del proyecto

1. Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
```

2. Instalar dependencias:

```bash
npm install
```

Esto instalará todas las dependencias necesarias (Playwright, ts-node, etc.).

3. Instalar navegadores de Playwright:

```bash
npx playwright install
```

Este comando descargará Chromium, Firefox y WebKit necesarios para los tests.


## Configuración

1. Crear un archivo `.env` en la raíz del proyecto con la variable `BASE_URL`:

```bash
BASE_URL=https://demowebshop.tricentis.com 
```

Si no defines `BASE_URL`, se usará la URL por defecto que está en `playwright.config.ts`.


## Estructura del proyecto

```
/src
  /pages       -> Clases Page Object
  /data        -> Datos de usuarios y productos
  /locators    -> Archivo de locators
/tests/e2e     -> Archivos de test por sección
playwright.config.ts
package.json
.gitignore
.env
README.md
```


## Comandos disponibles

- Ejecutar todos los tests:

```bash
npx playwright test
```

- Ejecutar un test específico:

```bash
npx playwright test tests/e2e/Test-Login.spec.ts
```

- Ejecutar un test específico y ver resultados en HTML:

```bash
npx playwright test tests/e2e/Test-Login.spec.ts --reporter=html
```

- Abrir HTML report:

```bash
npx playwright show-report
```

- Ejecutar tests en un navegador específico:

```bash
npx playwright test --project=chromium
```

- Ejecutar tests con trazas y videos (según configuración `playwright.config.ts`):

```bash
npx playwright test --trace on --video retain-on-failure
```

- Ejecutar modo interactivo:

```bash
npx playwright test --ui
```



# ¿Cómo funciona el CI?

El proyecto utiliza GitHub Actions para ejecutar los tests automáticamente, programada todos los días a las 03:00 AM (cron).
Instala dependencias, ejecuta tests y publica el reporte como artifact.



## Buenas prácticas implementadas

 + TypeScript para tipado estático y mayor robustez.

 + POM para separación de lógica de test y localizadores, reutilización de código y mantenimiento simplificado.

 + Datos externos para evitar hardcodeo.

 + CI automatizado para validación continúa.