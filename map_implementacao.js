Array.prototype.map2 = function(callback){
    let resultado = []  

    for(let i = 0; i < this.length; i++){
        resultado.push(callback(this[i], i, this))
    }

    return resultado
}

const numeros = [1, 2, 3]
const dobro = numero => numero * 2

console.log(numeros.map2(dobro))