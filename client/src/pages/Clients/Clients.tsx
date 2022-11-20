import './Clients.css'
import { FC, useEffect } from 'react';
import ClientItem from '../../components/ClientItem/ClientItem';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchClients } from '../../store/reducers/ActionCreators';
import { clientSlice } from '../../store/reducers/ClientSlice';
import Loader from '../../components/Loader/Loader';

const Clients: FC = () => {
    const dispatch = useAppDispatch();
    const {clients, isLoading, error} = useAppSelector(state => state.clientReducer)
    const {} = clientSlice.actions;

    useEffect(() => {
        dispatch(fetchClients())
    }, [])

    return (
        <>
            {isLoading ? <Loader /> : 
                <div className='client_container'>
                        {error ? <pre>{error}</pre> : null}
                        {clients.map(client =>
                            <ClientItem key={client.id} id={client.id} name={client.name} email={client.email}/>        
                        )}
                </div>
            }
        </>
            
            
    );
};

export default Clients;