import './Header.css';
import { FC } from "react";
import HeaderClock from '../HeaderClock/HeaderClock';
import Nav from '../Nav/Nav';

const Header: FC = () => {
    return (
        <header>
            <HeaderClock />
            <Nav />
        </header>
    );
};

export default Header;