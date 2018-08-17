const initalState = {
        name: "",
        address: "",
        st: "",
        zip: 0,
        image: "",
        mortage: "",
        rent: ""
}

const WIZ_1 = "WIZ_1"
const WIZ_2 = "WIZ_2"
const WIZ_3 = "WIZ_3"

export default function reducer( state = initalState, action) {
    switch(action.type){
        case WIZ_1:
            return Object.assign( {}, state, {
                
                    name: action.payload.name,
                    address: action.payload.address,
                    st: action.payload.state,
                    zip: action.payload.zip,
            })
        
        case WIZ_2:
        return Object.assign( {}, state, {
            
                image: action.payload.img,
    
        })
        case WIZ_3: 
        return Object.assign( {}, state, {
                mortage: action.payload.mortage,
                rent: action.payload.rent
            
        })
        default: return state;
    }
}



export function wizard1 ( house ) {
    return {
        type: WIZ_1,
        payload: house
    }
}

export function wizard2 ( house ) {
    return {
        type: WIZ_2,
        payload: house
    }
}

export function wizard3 ( house ) {
    return {
        type: WIZ_3,
        payload: house
    }
}