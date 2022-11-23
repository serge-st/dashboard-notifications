import './AddNotification.css';
import { FC } from "react";
import DateTimeInput from '../../components/DateTimeInput/DateTimeInput';
import DebouncedClientSearch from '../../components/DebouncedClientSearch/DebouncedClientSearch';

const AddNotification: FC = () => {

    return (
        <div>
            <DateTimeInput />
            <DebouncedClientSearch />
        </div>
    );
};

export default AddNotification;