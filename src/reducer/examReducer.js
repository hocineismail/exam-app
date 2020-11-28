import types from "../constants/actionTypes"

 

const initialState = { 
    logined: false,
    errors: null
 }


 export default function examReducer(state = initialState, action) {
      
    switch (action.type) { 
        case types.LOGIN:
            return { 
                ...state,
               logined: true,
               errors: null }
       case types.LOGIN_ERROR:
           
            return { 
                ...state,
               logined: false,
               errors: action.payload
            }
       case types.CLEAN_ERROR:
            return { 
                ...state,
               logined: false,
               errors: null
            }
       //  case types.SIGN_UP:
       //      return { 
       //          ...state,
       //          account_Created: true,
       //          email: action.payload ,
       //         errors: [] }
       //  case types.SIGN_UP_ERROR:
       //      return { 
       //          ...state,
       //          account_Created: false,
       //         errors: action.payload 
       //      }                     
        default:
            return state;
    }
}