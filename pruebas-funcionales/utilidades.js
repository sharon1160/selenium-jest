const { By, until } = require('selenium-webdriver')

const waitUntilTime = 20000

// funciones de utilidad
async function getElementById(id, driver) {  
    const el = await driver.wait(until.elementLocated(By.id(id)), waitUntilTime)  

    return await driver.wait(until.elementIsVisible(el), waitUntilTime
)}

async function getElementByXPath(xpath, driver) {  
    const el = await driver.wait(until.elementLocated(By.xpath(xpath)), waitUntilTime)  
    return await driver.wait(until.elementIsVisible(el), waitUntilTime
)}

async function querySelector(selector, driver) {
    const el = await driver.wait(
      until.elementLocated(By.css(selector)),
      waitUntilTime
    )
    return await driver.wait(until.elementIsVisible(el), waitUntilTime)
}

module.exports = {
    querySelector,
    getElementById,
    getElementByXPath
}