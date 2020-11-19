const { Builder } = require('selenium-webdriver')
const { getElementByXPath } = require('./utilidades')
require('selenium-webdriver/chrome')
require('selenium-webdriver/firefox')
require('chromedriver')
require('geckodriver')

let driver

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5

beforeAll(async () => {
  driver = await new Builder().forBrowser('firefox').build()
})

const paginaweb = 'https://www.calculator.net/'
var el

describe('Sitio web', () => {
  // Carga contenido de la pagina principal
  test('Carga de pagina principal', async () => {
    await driver.get(paginaweb)
  });
});

describe('Enlaces', () => {
  test('Sitio: Math Calculators y Percentage Calculator', async () => {
    // Click en Math Calculators
    el = await getElementByXPath('/html/body/div[4]/div/table/tbody/tr/td[3]/div[2]/a', driver)
    await el.click()

    // Click en Percentage Calculator
    el = await getElementByXPath('/html/body/div[3]/div[1]/table[1]/tbody/tr[1]/td[4]/b/input', driver)
    await el.click()
  });
});


afterAll(async () => driver.quit())