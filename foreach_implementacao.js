Array.prototype.forEach2 = function(callback){
        for(let i = 0; i < this.length; i++){
            callback(this[i], i, this)
        }
    }

let notas = [7.5, 7.8, 6.7]
notas.forEach2(nome => console.log(nome))



