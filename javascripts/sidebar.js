const sidebar = document.getElementsByClassName('sidebar-comparison')
const hpInput = document.getElementById('horsepower-number-input')
const table = document.getElementsByTagName('table')

hpInput.addEventListener('input', updateAnimalPowerValue);