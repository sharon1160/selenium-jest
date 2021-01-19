const { Builder } = require('selenium-webdriver')
const { getElementById, getElementByXPath } = require('./utilidades')
require('selenium-webdriver/chrome')
require('selenium-webdriver/firefox')
require('chromedriver')
require('geckodriver')

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5

let driver

beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').build()
})

afterAll(async () => driver.quit())

const rootURL = 'https://www.calculator.net/percent-calculator.html';
var a,b,boton,resultado
var a2,b2,boton2,resultado2
var a3,b3,boton3,resultado3
var a4,b4,boton4,resultado4
var a5,b5,boton5,resultado5

describe('Percentage Calculator 01', () => {
  test('Página principal', async () => {
    await driver.get(rootURL)
  });

  test('Porcentaje y numero válidos', async () => {
    // Enter  a value in the first number of the percent Calculator
    a = await getElementById('cpar1', driver);
    await a.sendKeys('10');
    
    // Enter a value in the second number of the percent Calculator
    b = await getElementById('cpar2', driver);
    await b.sendKeys('80');

    // Click Calculate Button
    boton = await getElementByXPath('/html/body/div[3]/div[1]/table[1]/tbody/tr[2]/td/input[2]', driver)
    await boton.click()

    // Compare expected result with current result
    resultado = await getElementByXPath('/html/body/div[3]/div[1]/p[2]/font/b', driver)
    const actual = await resultado.getText()
    const expected = '8'
    expect(actual).toEqual(expected)
  });

});

describe('Percentage Calculator 02', () => {
  test('Página principal', async () => {
    await driver.get(rootURL)
  });

  test('Porcentaje inválido y numero válido', async () => {
    // Enter  a value in the first number of the percent Calculator
    a2 = await getElementById('cpar1', driver);
    await a2.sendKeys('abc');
    
    // Enter a value in the second number of the percent Calculator
    b2 = await getElementById('cpar2', driver);
    await b2.sendKeys('80');

    // Click Calculate Button
    boton2 = await getElementByXPath('/html/body/div[3]/div[1]/table[1]/tbody/tr[2]/td/input[2]', driver)
    await boton2.click()

    // Compare expected result with current result
    resultado2 = await getElementByXPath('/html/body/div[3]/div[1]/p[2]/font', driver)
    const actual2 = await resultado2.getText()
    const expected2 = 'Please provide two numeric values in any fields below.'
    expect(actual2).toEqual(expected2)
  });

});

describe('Percentage Calculator 03', () => {
  test('Página principal', async () => {
    await driver.get(rootURL)
  });

  test('Porcentaje válido y numero inválido', async () => {
    // Enter  a value in the first number of the percent Calculator
    a3 = await getElementById('cpar1', driver);
    await a3.sendKeys('10');
    
    // Enter a value in the second number of the percent Calculator
    b3 = await getElementById('cpar2', driver);
    await b3.sendKeys('xyz');

    // Click Calculate Button
    boton3 = await getElementByXPath('/html/body/div[3]/div[1]/table[1]/tbody/tr[2]/td/input[2]', driver)
    await boton3.click()

    // Compare expected result with current result
    resultado3 = await getElementByXPath('/html/body/div[3]/div[1]/p[2]/font', driver)
    const actual3 = await resultado3.getText()
    const expected3 = 'Please provide two numeric values in any fields below.'
    expect(actual3).toEqual(expected3)
  });
});

describe('Percentage Calculator 04', () => {
  test('Página principal', async () => {
    await driver.get(rootURL)
  });

  test('Porcentaje vacio y numero válido', async () => {
    // Enter  a value in the first number of the percent Calculator
    a4 = await getElementById('cpar1', driver);
    await a4.sendKeys('');
    
    // Enter a value in the second number of the percent Calculator
    b4 = await getElementById('cpar2', driver);
    await b4.sendKeys('80');

    // Click Calculate Button
    boton4 = await getElementByXPath('/html/body/div[3]/div[1]/table[1]/tbody/tr[2]/td/input[2]', driver)
    await boton4.click()

    // Compare expected result with current result
    resultado4 = await getElementByXPath('/html/body/div[3]/div[1]/p[2]/font', driver)
    const actual4 = await resultado4.getText()
    const expected4 = 'Please provide two numeric values in any fields below.'
    expect(actual4).toEqual(expected4)
  });
});

describe('Percentage Calculator 05', () => {
  test('Página principal', async () => {
    await driver.get(rootURL)
  });

  test('Porcentaje válido y numero vacio', async () => {
    // Enter  a value in the first number of the percent Calculator
    a5 = await getElementById('cpar1', driver);
    await a5.sendKeys('10');
    
    // Enter a value in the second number of the percent Calculator
    b5 = await getElementById('cpar2', driver);
    await b5.sendKeys('');

    // Click Calculate Button
    boton5 = await getElementByXPath('/html/body/div[3]/div[1]/table[1]/tbody/tr[2]/td/input[2]', driver)
    await boton5.click()

    // Compare expected result with current result
    resultado5 = await getElementByXPath('/html/body/div[3]/div[1]/p[2]/font', driver)
    const actual5 = await resultado5.getText()
    const expected5 = 'Please provide two numeric values in any fields below.'
    expect(actual5).toEqual(expected5)
  });
});