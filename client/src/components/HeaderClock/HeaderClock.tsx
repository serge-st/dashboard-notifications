import './HeaderClock.css';
import { FC, useEffect, useState } from 'react';
import { format } from 'fecha';

const HeaderClock: FC = () => {
    const [date, setDate] = useState<string>('');

    const updateDate = () => {
        setDate(format(new Date(), 'dddd, YYYY-MM-DD, HH:mm:ss'));
    }
    
    useEffect(() => {
        updateDate();

        const interval = setInterval(() => {
            updateDate();
        }, 1000);

        return () => clearInterval(interval);

    }, [])

    return (
        <div>
            <h2>{date}</h2>
        </div>
    );
}
export default HeaderClock;