import './DateModule.css';
import { FC } from 'react';
import { format } from 'fecha';

const DateModule: FC = () => {
    const date = new Date();
    const myDate = format(date, 'dddd, YYYY-MM-DD')
    
    return (
        <div>
            <h2>{myDate}</h2>
        </div>
    );
}
export default DateModule;