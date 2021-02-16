let  comparaComThis = function(param) {
    console.log(this === paramm)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis(obj)
comparaComThis(global)