function start() {
    var buttonCalculateImc = document.querySelector('#button-calculate-imc')
    buttonCalculateImc.addEventListener('click', handleButtonClick)
    
    var inputWheight = document.querySelector('#input-weight')
    var inputHeight = document.querySelector('#input-height')
    inputWheight.addEventListener('input', handleButtonClick)
    inputHeight.addEventListener('input', handleButtonClick)


    handleButtonClick()
}

function calculateImc(weight, height) {
    return weight / (height*height);
}

function handleButtonClick() {
    var inputWheight = document.querySelector('#input-weight')
    var inputHeight = document.querySelector('#input-height')
    var weight = Number(inputWheight.value);
    var height = Number(inputHeight.value);
    var resultCalculatedImc = calculateImc(weight, height)
    var resultImc = document.querySelector('#result-imc')
    var formatedImc = resultCalculatedImc.toFixed(2).replace('.', ',')
    resultImc.textContent = formatedImc
}

start()