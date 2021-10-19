const reducer = (state,action) =>{
    switch(action.type){
        case "CHANGE_HEADING":
            return {
                ...state,
                heading:action.payload
            }
           default:
               return state
    }
}

export default reducer