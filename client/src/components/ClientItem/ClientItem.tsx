import './ClientItem.css';
import { FC, Key } from 'react';
import { IClient } from '../../models/IClient';

interface ClientItemProps extends IClient {
    notifications?: string[];
    key?: Key;
};

const ClientItem: FC<ClientItemProps> = ({id, name, email, notifications}) => {
    return (
        <div className='client_container'>
            <h4>{id}: {name}</h4>
            <p><strong>Email: </strong>{email}</p>
            {/* <p><strong>Notifications: </strong></p>
            <div>
                {notifications
                    ? notifications.map(n => <p>{n}</p>)
                    : 'No notifications'
                }
            </div> */}
            <hr />
        </div>
    );
};

export default ClientItem;