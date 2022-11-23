import { format } from 'fecha';
import { ChangeEvent, FC, useState } from 'react';
import './DateTimeInput.css';

const DateTimeInput: FC = () => {
    const [date, setDate] = useState<string>('');
    const [displayDate, setDisplayDate] = useState<string>('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    }
    const handleSubmit = () => {
        setDisplayDate(format(new Date(Date.parse(date)), 'YYYY-MM-DD, HH:mm'));
    }
    
    return (
        <div>
            <input
                className='datetime_input'
                type="datetime-local" 
                value={date}
                onChange={(e) => handleChange(e)} 
                onBlur={() => handleSubmit()}
            />
            {displayDate ?
                <div className='selected_date'>
                    <p>Selected Date:</p>
                    <p>{displayDate}</p>
                </div>
                : null
            }
        </div>
    );
}
export default DateTimeInput;