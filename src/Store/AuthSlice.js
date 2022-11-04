import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"






export const GetAllMember = createAsyncThunk(
    'GetAllMember',
    async () => {
        let result = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/getAllMember`).then(res => res.data)
        return result.data
    }
)

export const DeletePermissions = createAsyncThunk(
    'Delete/permissions',
    async (data) => {
        let result = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/delete/permissions`, data).then(res => res.data)
        return result
    }
)



const initialState = {
    Auth: false,
    loading: true,
    allMember: null,

    dbMsg: {
        result: "",
        message: ""
    }
}
const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState,
    reducers: {
        authValidation: (state, action) => {
            state.Auth = action.payload
        },

    },
    extraReducers: {
      
        [GetAllMember.pending]: (state, { payload }) => {
            state.loaging = true
        },
        [GetAllMember.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.allMember = payload
        },
       
        [DeletePermissions.fulfilled]: (state, { payload }) => {
            state.dbMsg.result = payload.result
            state.dbMsg.message = payload.msg
        },
    }
   

})
export const { authValidation } = AuthSlice.actions
export default AuthSlice.reducer