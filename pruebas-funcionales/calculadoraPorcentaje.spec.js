const { Builder } = require('selenium-webdriver')
const { getElementById, getElementByXPath } = require('./utilidades')
require('selenium-webdriver/chrome')
require('selenium-webdriver/firefox')
require('chromedriver')
require('geckodriver')

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5

let driver

beforeAll(async () => {
  driver = await new Builder().forBrowser('firefox').build()
})

afterAll(async () => driver.quit())

const rootURL = 'https://www.calculator.net/percent-calculator.html';
var a,b,boton,resultado

describe('Calculando porcentaje', () => {
  test('Página principal', async () => {
    await driver.get(rootURL)
  });

  test('Percentage Calculator', async () => {
    // Asegura que el id haya terminado de cargar
    a = await getElementById('cpar1', driver);
    await a.sendKeys('10');
    
    // Asegura que el id haya terminado de cargar
    b = await getElementById('cpar2', driver);
    await b.sendKeys('50');

    // Asegura que el xpath haya terminado de cargar
    boton = await getElementByXPath('/html/body/div[3]/div[1]/table[1]/tbody/tr[2]/td/input[2]', driver)
    await boton.click()

    // Asegura que el xpath haya terminado de cargar
    resultado = await getElementByXPath('/html/body/div[3]/div[1]/p[2]/font/b', driver)
    const actual = await resultado.getText()
    const expected = '5'
    expect(actual).toEqual(expected)
  });
});