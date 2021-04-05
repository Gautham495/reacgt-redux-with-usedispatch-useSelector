 export const counter = (state = 1, action) => {
  switch(action.type){
      case "INCREMENT":
          return state + 1
      case "DECREMENT":
          return state - 1
      default: 
          return state
  }
}


export const product = (state = [], action) =>{

switch(action.type){
    case "GET_DATA":
        return action.payload
     default:
         return state   
}


}
