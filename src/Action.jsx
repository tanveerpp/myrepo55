let square=()=>{
    return {
        type:'SQUARE'
    }
}
let cube=()=>{
    return {
        type:'CUBE'
    }
}
let pow=(n)=>{
    return {
        type:'POW',
        payload:n
    }
}
export {square,cube,pow}