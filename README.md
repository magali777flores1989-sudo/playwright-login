# 1- ¿Qué proyecto es?

Proyecto de prueba automatizadas E2E desarrollado con Playwright + TypeScript.


# 2️- ¿Qué web se automatiza?

Se automatiza el flujo completo de registro y login de la web https://demowebshop.tricentis.com, validando la correcta creación y autenticación del usuario.

# 3️- ¿Qué arquitectura usa?

Utiliza Page Object Model (POM):

 + Tests

 + Pages

 + Locators

 + Datos


# 4️- ¿Cómo instalar dependencias?

npm install
npx playwright install


# 5️- ¿Cómo correr los tests?

npm test
npm run test:headed


# 6️- ¿Cómo ver el reporte?

npm run test:report


# 7️- ¿Cómo funciona el CI?

El proyecto utiliza GitHub Actions para ejecutar los tests automáticamente, programada todos los días a las 03:00 AM (cron).
Instala dependencias, ejecuta tests y publica el reporte como artifact.


# 8️- ¿Cómo está organizada la estructura?

src/
 ├── data/
 ├── locators/
 ├── pages/
tests/
 └── e2e/



# 9️- ¿Qué decisiones técnicas que tomó y por qué?

 + Uso de TypeScript para tipado estático, autocompletado en IDE.

 + Uso de POM para separación de lógica de test y localizadores, reutilización de código y mantenimiento simplificado.

 + Datos externos para evitar hardcodeo.

 + CI automatizado para validación continua.
 

# 10- ¿Cómo escalar el framework?

