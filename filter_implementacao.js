Array.prototype.filter2 = function(callback){
    let resultado = []

    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            resultado.push(this[i])
        }
    }

    return resultado
}

let notas = [8, 9, 4, 6, 3, 7, 7, 8, 3, 5]

aprovados = notas.filter2(nota => nota >= 5)
console.log(aprovados)