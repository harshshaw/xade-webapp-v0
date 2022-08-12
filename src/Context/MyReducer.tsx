import { ADD_TO_CART, DELETE_PERSON_FROM_DATA, INCREASE_QUANTITY, PUSH_PERSON } from "./ActionTypes";
import { Action, State } from "./Models";

const MyReducer = (state:State,action:Action) => {
    const {payload} = action;
        console.log(state)
        console.log(action)
    switch(action.type) {

        case ADD_TO_CART:{
            let newState:State = {...state};
            
            newState.MyCart.state.CartProducts?.push(payload)
                
            return newState;
            
        }    

        case INCREASE_QUANTITY:{
            let newState:State = {...state}
            const QuantityIncrease = newState.MyCart.state.CartProducts?.map((item)=>{
                    if(item.id === payload){
                        return {...item,quantity:item.quantity + 1}
                    } return {...item}
            })
            newState.MyCart.state.CartProducts = QuantityIncrease;
            return newState
        }

        default:
            return state;
        
        
    }
}

export default MyReducer