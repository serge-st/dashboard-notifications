import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClient } from "../../models/IClient"

interface ClientState {
    clients: IClient[];
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState: ClientState = {
    clients: [],
    isLoading: false,
    error: '',
    count: 0,
}

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload;
        }
    }
})

export default clientSlice.reducer;