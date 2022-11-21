import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IClient } from "../../models/IClient";

export const fetchClients = createAsyncThunk(
    'client/fetchAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await axios.get<IClient[]>(`https://jsonplaceholder.typicode.com/users`);
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue(JSON.stringify(err, null, 2));
        }
    }
)