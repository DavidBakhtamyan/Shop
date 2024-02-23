import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function(){
        const response = await axios.get('https://fakestoreapi.com/users')
        
        const data = response.data.map(user =>({
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password,
            cart: [],
            wishList: []
        }) )
        return data
    }
)