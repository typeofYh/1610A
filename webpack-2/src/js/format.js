export function format(dateObject,str){
    return dateObject.toLocaleDateString().replace(/\//g,str)
}

