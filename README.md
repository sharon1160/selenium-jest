# Jest + Selenium WebDriver

<p align="center"><img width="40%" src="imagenes/logo.jpeg" /></p>

--------------------------------------------------------------------------------

## Prerrequisitos

Antes de comenzar, debemos tener instalado Node.js y su gestor de paquetes, npm.
- [Node.js](https://nodejs.org/es/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Automatización de pruebas funcionales

Creamos un directorio con el nombre selenium-jest y entramos al directorio

```bash
$ mkdir selenium-jest
$ cd selenium-jest
```
Creamos el archivo package.json correiendo el siguiente comando

```bash
$ npm init -y
```

//imagen 

Luego, instalamos localmente en nuestro proyecto lo siguiente

- chromedriver
- geckodriver
- selenium-webdriver
- Jest


```bash
$ npm install --save-dev chromedriver
$ npm install --save-dev geckodriver
$ npm install --save-dev selenium-webdriver
$ npm install --save-dev jest
```
//imagen

Configuramos de la siguiente manera nuestro archivo package.json

```json
{
  "name": "selenium-jest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "chromedriver": "^87.0.0",
    "geckodriver": "^1.20.0",
    "jest": "^26.6.3",
    "selenium-webdriver": "^4.0.0-alpha.7"
  }
}
```

Creamos nuestro archivo de configuración jest.config.js y colocamos el siguiente contenido

```javascript
module.exports = {
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    testRegex: '(/test/.*|(\\.|/)(test|spec))\\.jsx?$',
    bail: false,
    verbose: true
};
```

Luego creamos el directorio pruebas-funcionales/ ; dentro de él creamos dos archivos de prueba, 

