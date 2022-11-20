import axios from "axios";
import { IClient } from "../../models/IClient";
import { AppDispatch } from "../store";
import { clientSlice } from "./ClientSlice";

export const fetchClients = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(clientSlice.actions.clientsFetching());
        const {data} = await axios.get<IClient[]>(`https://jsonplaceholder.typicode.com/users`)
        setTimeout( () =>
            dispatch(clientSlice.actions.clientsFetchingSuccess(data)),
            1000
        )
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            dispatch(clientSlice.actions.clientsFetchingError(JSON.stringify(err, null, 2)));
        }
    }
}