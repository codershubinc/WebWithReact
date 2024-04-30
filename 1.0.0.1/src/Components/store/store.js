import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        auth : authSlice
     },    

})   
export default store