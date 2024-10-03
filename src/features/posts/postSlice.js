import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const BASE_URL = "https://e19db358-75a4-473f-9aa4-bca3b185ded6-00-2st3kbjtv1e1v.pike.replit.dev";

export const fetchPostsByUser = createAsyncThunk(
    "posts/fetchByUser",
    async (userId) => {
        const response = await fetch(`${BASE_URL}/posts/user/${userId}`);
        return response.json();
    }
);

export const savePost = createAsyncThunk(
    "posts/savePost",
    async (postContent) => {
        const token = localStorage.getItem("authToken");

        //Decode the token to fetch user id
        const decode = jwtDecode(token);
        const userId = decode.id // May change depending on how the server encode the token

        //Prepare data to be sent
        const data = {
            title: "Post Title",  //Add functionality to set this properly
            content: postContent,
            user_id: userId,
        };

        const response = await axios.post(`${BASE_URL}/posts`, data);
        return response.data;
    }
);

//Slice

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        loading: true,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPostsByUser.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.loading = false;
        });
        builder.addCase(savePost.fulfilled, (state, action) => {
            state.posts = [action.payload, ...state.posts];
        });
    },
});

export default postsSlice.reducer;