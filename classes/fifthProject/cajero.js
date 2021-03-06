class Billete {
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;
    }
}

var caja = [];
var entregado = [];

caja.push(new Billete(50, 20));
caja.push(new Billete(20, 30));
caja.push(new Billete(10, 10));

var dinero;
var div = 0;
var papeles = 0;
var resultado = document.getElementById('resultado');

var b = document.getElementById('extraer');
b.addEventListener('click', entregarDinero);

function entregarDinero() {
    var t = document.getElementById('dinero');
    dinero = parseInt(t.value);
    for (const bi of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if (dinero > 0) {
        resultado.innerHTML = 'Soy un cajero malo y no puedo darte esa cantidad :(';
    } else {
        for (const e of entregado) {
            if (e.cantidad > 0) {
                resultado.innerHTML = resultado.innerHTML + (e.cantidad + ' billetes de $' + e.valor + '<br/>')
            }
        }
    }
}