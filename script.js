const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")



function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")  // Valor em Real
    const currencyValueToConvertd = document.querySelector(".currency-value")  // Outras Moaedas

    const dolarToday = 5.2
    const EuroToday = 6.2
    const libra = 6.5

    ////////////////////////////////////DOLAR///////////////////////////////////
    if (currencySelect.value == "dolar") {
        currencyValueToConvertd.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    ///////////////////////////////////EURO/////////////////////////////////////
    if (currencySelect.value == "euro") {
        currencyValueToConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / EuroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueToConvertd.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libra)
    }



    ///////////////////////////////////REAL/////////////////////////////////////
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2
    }).format(inputCurrencyValue)

}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src = './assets/dolar.png'
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = './assets/euro.png'
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = './assets/libra.png'
        currencyImage.style.height = "52px"
    }

    convertValues()

}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
