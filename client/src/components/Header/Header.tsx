import './Header.css';
import { FC } from "react";
import { Link } from 'react-router-dom';
import DateModule from '../DateModule/DateModule';
import NotificationButton from '../NotificationButton/NotificationButton';

const Header: FC = () => {
    return (
        <header>
            <DateModule />
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
        </header>
    );
};

export default Header;