const initialState=[];

const CartReducer = (state = initialState,action) => {
    const product = action.payload;

    switch (action.type) {
        case "ADD_ITEM":
            const ifAlreadyExist = state.find((item)=> item.id === product.id)    
            if(ifAlreadyExist)
            {
                return state.map((item)=>
                item.id === product.id ? {...item , qty:item.qty + 1 } : item
                )
            }else{
                const product=action.payload;
                return [
                    ...state,
                    {
                        ...product,qty:1
                    }
                ]
            }
            break;
        case "REMOVE_ITEM":
        const exist = state.find((item)=> item.id === product.id) 
        if(exist.qty===1)
        {
            return state.filter((item)=> item.id !== exist.id)
        }else{
            return state.map((item)=>
            item.id===product.id ? {...item , qty:item.qty-1} : item
            )
        }
            break;
    
        default:
            return state
            break;
    }


}

export default CartReducer;
