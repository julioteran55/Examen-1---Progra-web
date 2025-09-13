function alerta(){

    const valor = document.getElementById('valor1').value;

    const resultado = (valor - 32) * 5/9;

    return 'La temperatura calculada es ' + resultado + '°C';

}