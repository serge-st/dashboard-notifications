import './Header.css';
import { FC } from "react";
import DateModule from '../DateModule/DateModule';
import Nav from '../Nav/Nav';

const Header: FC = () => {
    return (
        <header>
            <DateModule />
            <Nav />
        </header>
    );
};

export default Header;