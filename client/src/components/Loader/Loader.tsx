import './Loader.css';
import { FC } from 'react';

const Loader: FC = () => {
    return (
        <div className='loader_container'>
            <h2>Loading
                <span className="typing__dot">.</span>
                <span className="typing__dot">.</span>
                <span className="typing__dot">.</span>
            </h2>
        </div>
    );
};

export default Loader;