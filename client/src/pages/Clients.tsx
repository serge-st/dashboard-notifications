import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { clientSlice } from '../store/reducers/ClientSlice';

const Clients: FC = () => {
    const {count} = useAppSelector(state => state.clientReducer)
    const {increment} = clientSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <div>
            Clients page
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment(1))}>INCREMENT</button>
        </div>
    );
};

export default Clients;