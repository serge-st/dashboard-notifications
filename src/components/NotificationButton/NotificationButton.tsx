import './NotificationButton.css';
import { FC } from "react";
import { Link } from 'react-router-dom';

const NotificationButton: FC = () => {
    return (
        <div className='ntfy_btn'>
            <Link to='/notifications'>
                <button>Notifications</button>
            </Link>
            <span className='badge'>3</span>
        </div>
    );
}
export default NotificationButton;