import { ChangeEvent, FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import useDebounce from "../../hooks/useDebounce";
import { IClient } from "../../models/IClient";
import { fetchClients } from "../../store/reducers/clients/ActionCreators";

const DebouncedClientSearch: FC = () => {
    const [value, setValue] = useState<string>('');
    const [foundClients, setFoundClients] = useState<IClient[]>([]);
    const [selectedClients, setSelectedClients] = useState<IClient[]>([]);
    const dispatch = useAppDispatch();
    const {clients, isLoading, error} = useAppSelector(state => state.clientReducer)
    const debouncedValue = useDebounce<string>(value, 500);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleSelect = (id: number) => {
        const client = clients.filter(el => el.id === id);

        if (selectedClients.filter(el => el.id === id).length) {
            setSelectedClients([...selectedClients.filter(el => el.id !== id)]);
        } else {
            setSelectedClients([...selectedClients, ...client]);
        }
    }

    useEffect(() => {
        if (!clients.length) {
            dispatch(fetchClients());
        } else {
            setFoundClients(clients.filter(client => client.name.toLowerCase().includes(value.toLowerCase())))
        }
    }, [debouncedValue])

    return (
        <div>
            <div>
                <p>Found Clients:</p>
                {foundClients.map(el => 
                    <button 
                        key={el.id}
                        onClick={() => handleSelect(el.id)}
                    >
                        ID: {el.id} Name: {el.name}
                    </button>    
                )}
            </div>
            <input 
                type="text"
                placeholder="Search Client by Name"
                value={value} 
                onChange={(e) => handleChange(e)} 
                />
            <p>Selected Clients: {JSON.stringify(selectedClients.map(el => ({id: el.id, name: el.name})))}</p>
        </div>
    );
};

export default DebouncedClientSearch;