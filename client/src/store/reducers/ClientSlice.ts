import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClient } from "../../models/IClient"

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
    reducers: {
        clientsFetching(state) {
            state.isLoading = true;
        },
        clientsFetchingSuccess(state, action: PayloadAction<IClient[]>) {
            state.isLoading = false;
            state.error = '';
            state.clients = action.payload;
        },
        clientsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default clientSlice.reducer;