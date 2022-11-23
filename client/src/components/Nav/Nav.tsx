import './Nav.css';
import { FC } from 'react';
import NotificationButton from '../NotificationButton/NotificationButton';
import { Link } from 'react-router-dom';
import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import AddNotification from '../../pages/AddNotification/AddNotification';

const Nav: FC = () => {
    const { isOpen, toggle } = useModal();

    return (
        <nav>
            {/* <Modal isOpen={true} toggle={toggle}> */}
            <Modal isOpen={isOpen} toggle={toggle}>
                <AddNotification />
            </Modal>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='/clients'>
                <button>Clients</button>
            </Link>
            <Link to='/orders'>
                <button>Orders</button>
            </Link>
            <Link to='/statistics'>
                <button>Statistics</button>
            </Link>
            <button onClick={toggle}>Add Notification</button>
            <NotificationButton />
        </nav>
    );
}
export default Nav;