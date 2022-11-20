import './Nav.css';
import { FC } from 'react';
import NotificationButton from '../NotificationButton/NotificationButton';
import { Link } from 'react-router-dom';

const Nav: FC = () => {
    return (
        <nav>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='/clients'>
                <button>Clients</button>
            </Link>
            <button>Orders</button>
            <button>Statistics</button>
            <NotificationButton />
        </nav>
    );
}
export default Nav;