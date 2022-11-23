import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClient } from "../../models/IClient"
import { fetchClients } from "./clients/ActionCreators";

interface ClientState {
    clients: IClient[];
    isLoading: boolean;
    error: string;
}

const initialState: ClientState = {
    clients: [],
    isLoading: false,
    error: '',
}

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchClients.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchClients.fulfilled.type]: (state, action: PayloadAction<IClient[]>) => {
            state.isLoading = false;
            state.error = '';
            state.clients = action.payload;
        },
        [fetchClients.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default clientSlice.reducer;