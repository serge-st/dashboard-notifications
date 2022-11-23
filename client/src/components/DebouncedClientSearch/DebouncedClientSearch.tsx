import { ChangeEvent, FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import useDebounce from "../../hooks/useDebounce";
import { IClient } from "../../models/IClient";
import { fetchClients } from "../../store/reducers/clients/ActionCreators";

const DebouncedClientSearch: FC = () => {
    const [value, setValue] = useState<string>('');
    const [foundClients, setFoundClients] = useState<IClient[]>([]);
    const dispatch = useAppDispatch();
    const {clients, isLoading, error} = useAppSelector(state => state.clientReducer)
    const debouncedValue = useDebounce<string>(value, 500);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
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
            <p>Value real-time: {value}</p>
            <p>Debounced value: {JSON.stringify(foundClients.map(el => ({name: el.name, id: el.id})))}</p>
            <input 
                type="text"
                placeholder="Search Client by Name"
                value={value} 
                onChange={(e) => handleChange(e)} 
            />
        </div>
    );
};

export default DebouncedClientSearch;