let initialstate=5;
let Squarecube=(state=initialstate,action)=>{
    switch(action.type)
    {
        case 'SQUARE':
            return state=state**2;
        case 'CUBE':
            return state=state**3;
        case 'POW':
            return state=state**action.payload
        default:
            return state;
    }
}
export default Squarecube