function isMinnesotaZip(code) {
    //MN zips are between 55001 and 56763
    if (code>= 55001 && code <= 56763){
        return true
    } else {
        return false
    }

}

console.log(isMinnesotaZip('55403'))
console.log(isMinnesotaZip('55673'))
console.log(isMinnesotaZip('57773'))
console.log(isMinnesotaZip('55001'))

//will still work if entered as a string

